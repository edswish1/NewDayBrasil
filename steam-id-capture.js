/**
 * Sistema de Captura e Validação de Steam ID
 * Integração com a loja para entrega automática no DayZ
 */

class SteamIDCapture {
    constructor() {
        this.steamIdInput = document.getElementById('steam-id');
        this.nicknameInput = document.getElementById('nickname-jogo');
        this.discordInput = document.getElementById('discord-username');
        this.finalizarBtn = document.getElementById('finalizar-compra');
        
        this.init();
    }
    
    init() {
        if (this.steamIdInput) {
            this.steamIdInput.addEventListener('input', (e) => this.validarSteamID(e.target.value));
            this.steamIdInput.addEventListener('blur', (e) => this.formatarSteamID(e.target.value));
        }
        
        if (this.finalizarBtn) {
            this.finalizarBtn.addEventListener('click', () => this.validarAntesCompra());
        }
        
        // Adicionar validação em tempo real
        this.adicionarValidacaoTempoReal();
    }
    
    /**
     * Validar formato do Steam ID
     */
    validarSteamID(steamId) {
        const steamIdLimpo = steamId.replace(/\D/g, '');
        
        // Steam ID deve ter 17 dígitos e começar com 7656119
        const steamIdRegex = /^7656119\d{10}$/;
        const isValid = steamIdRegex.test(steamIdLimpo);
        
        this.mostrarStatusSteamID(isValid, steamIdLimpo);
        
        return isValid;
    }
    
    /**
     * Formatar Steam ID para exibição
     */
    formatarSteamID(steamId) {
        const steamIdLimpo = steamId.replace(/\D/g, '');
        
        if (steamIdLimpo.length === 17) {
            // Formato: 76561198123456789
            const formatted = steamIdLimpo.replace(/(\d{7})(\d{10})/, '$1 $2');
            this.steamIdInput.value = formatted;
        }
    }
    
    /**
     * Mostrar status visual da validação
     */
    mostrarStatusSteamID(isValid, steamId) {
        const container = this.steamIdInput.parentElement;
        let statusElement = container.querySelector('.steam-id-status');
        
        if (!statusElement) {
            statusElement = document.createElement('div');
            statusElement.className = 'steam-id-status';
            statusElement.style.cssText = `
                font-size: 0.8rem;
                margin-top: 0.3rem;
                padding: 0.2rem 0.5rem;
                border-radius: 4px;
                display: flex;
                align-items: center;
                gap: 0.3rem;
            `;
            container.appendChild(statusElement);
        }
        
        if (steamId.length === 0) {
            statusElement.style.display = 'none';
            return;
        }
        
        statusElement.style.display = 'flex';
        
        if (isValid) {
            statusElement.innerHTML = `
                <i class="fas fa-check-circle" style="color: #4CAF50;"></i>
                <span style="color: #4CAF50;">Steam ID válido</span>
            `;
            statusElement.style.backgroundColor = 'rgba(76, 175, 80, 0.1)';
            statusElement.style.border = '1px solid #4CAF50';
        } else {
            statusElement.innerHTML = `
                <i class="fas fa-exclamation-triangle" style="color: #FF9800;"></i>
                <span style="color: #FF9800;">Steam ID inválido</span>
            `;
            statusElement.style.backgroundColor = 'rgba(255, 152, 0, 0.1)';
            statusElement.style.border = '1px solid #FF9800';
        }
    }
    
    /**
     * Validar todos os campos antes da compra
     */
    validarAntesCompra() {
        const steamId = this.steamIdInput.value.replace(/\D/g, '');
        const nickname = this.nicknameInput.value.trim();
        const discord = this.discordInput.value.trim();
        
        const erros = [];
        
        // Validar Steam ID
        if (!this.validarSteamID(steamId)) {
            erros.push('Steam ID inválido');
        }
        
        // Validar nickname
        if (nickname.length < 3) {
            erros.push('Nickname deve ter pelo menos 3 caracteres');
        }
        
        // Validar Discord
        if (discord.length < 3) {
            erros.push('Nome do Discord deve ter pelo menos 3 caracteres');
        }
        
        if (erros.length > 0) {
            this.mostrarErros(erros);
            return false;
        }
        
        // Salvar dados para uso na compra
        this.salvarDadosCliente(steamId, nickname, discord);
        return true;
    }
    
    /**
     * Salvar dados do cliente para uso posterior
     */
    salvarDadosCliente(steamId, nickname, discord) {
        const dadosCliente = {
            steamId: steamId,
            nickname: nickname,
            discord: discord,
            timestamp: Date.now()
        };
        
        // Salvar no localStorage
        localStorage.setItem('dayz_cliente_dados', JSON.stringify(dadosCliente));
        
        // Salvar no servidor (opcional)
        this.salvarNoServidor(dadosCliente);
    }
    
    /**
     * Salvar dados no servidor para mapeamento
     */
    async salvarNoServidor(dadosCliente) {
        try {
            const response = await fetch('salvar-cliente.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dadosCliente)
            });
            
            if (response.ok) {
                console.log('Dados do cliente salvos no servidor');
            }
        } catch (error) {
            console.warn('Erro ao salvar dados no servidor:', error);
        }
    }
    
    /**
     * Mostrar erros de validação
     */
    mostrarErros(erros) {
        // Remover erros anteriores
        const errosAnteriores = document.querySelectorAll('.erro-validacao');
        errosAnteriores.forEach(el => el.remove());
        
        // Criar container de erros
        const container = document.createElement('div');
        container.className = 'erro-validacao';
        container.style.cssText = `
            background: rgba(244, 67, 54, 0.1);
            border: 1px solid #F44336;
            border-radius: 8px;
            padding: 1rem;
            margin: 1rem 0;
            color: #F44336;
        `;
        
        container.innerHTML = `
            <h4 style="margin: 0 0 0.5rem 0; color: #F44336;">
                <i class="fas fa-exclamation-triangle"></i> Erros de Validação
            </h4>
            <ul style="margin: 0; padding-left: 1.5rem;">
                ${erros.map(erro => `<li>${erro}</li>`).join('')}
            </ul>
        `;
        
        // Inserir antes do botão de finalizar
        const finalizarContainer = this.finalizarBtn.parentElement;
        finalizarContainer.parentElement.insertBefore(container, finalizarContainer);
        
        // Scroll para os erros
        container.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    /**
     * Adicionar validação em tempo real
     */
    adicionarValidacaoTempoReal() {
        const campos = [this.steamIdInput, this.nicknameInput, this.discordInput];
        
        campos.forEach(campo => {
            if (campo) {
                campo.addEventListener('input', () => {
                    // Remover erros quando o usuário começar a corrigir
                    const erros = document.querySelectorAll('.erro-validacao');
                    if (erros.length > 0 && this.validarAntesCompra()) {
                        erros.forEach(el => el.remove());
                    }
                });
            }
        });
    }
    
    /**
     * Obter dados do cliente salvos
     */
    static obterDadosCliente() {
        const dados = localStorage.getItem('dayz_cliente_dados');
        return dados ? JSON.parse(dados) : null;
    }
    
    /**
     * Limpar dados do cliente
     */
    static limparDadosCliente() {
        localStorage.removeItem('dayz_cliente_dados');
    }
}

/**
 * Função para integrar com o sistema de compra existente
 */
function integrarComSistemaCompra() {
    // Modificar a função de finalizar compra existente
    const finalizarOriginal = window.finalizarCompra;
    
    window.finalizarCompra = function() {
        // Validar dados do cliente primeiro
        const steamCapture = new SteamIDCapture();
        
        if (!steamCapture.validarAntesCompra()) {
            return false; // Impedir compra se houver erros
        }
        
        // Obter dados do cliente
        const dadosCliente = SteamIDCapture.obterDadosCliente();
        
        // Modificar external_reference para incluir Steam ID
        const externalRefOriginal = gerarExternalReference();
        const externalRefComSteam = `${externalRefOriginal}_steam_${dadosCliente.steamId}`;
        
        // Chamar função original com dados modificados
        return finalizarOriginal.call(this, dadosCliente, externalRefComSteam);
    };
}

/**
 * Função para gerar external_reference com Steam ID
 */
function gerarExternalReferenceComSteam(steamId) {
    const timestamp = Date.now();
    const nickname = document.getElementById('nickname-jogo').value.trim();
    return `site-dayz-${nickname}-${timestamp}_steam_${steamId}`;
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar captura de Steam ID
    new SteamIDCapture();
    
    // Integrar com sistema existente
    integrarComSistemaCompra();
    
    console.log('Sistema de captura de Steam ID inicializado');
});

// Exportar para uso global
window.SteamIDCapture = SteamIDCapture;
