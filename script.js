// Configurações do Mercado Pago
const MERCADO_PAGO_PUBLIC_KEY = 'APP_USR-d48cee54-55fe-4224-9c71-fa59af9c77f6';
const MERCADO_PAGO_ACCESS_TOKEN = 'APP_USR-2803705882545320-071017-b8550733051ba7e6a4478777bd3e4ed5-348490132';

// Dados dos produtos (simulando uma API)
const produtos = [
    {
        id: 2,
        nome: "Roupa VIP Militar",
        categoria: "roupas-vip",
        categoriaNome: "Roupas VIP",
        preco: 15.00,
        descricao: "Voce irá nascer com a roupa,nela tambem vem incluso 1 cantil de agua,2 latas de bacon,1 bandagem,e uma faca de combate.(o pagamento da roupa é mensal,ou seja,valido por 1 mes apenas)",
        imagem: "imagens/roupavip.png",
        galeria: [
            "imagens/roupavip.png"
        ],
        videos: []
    },

    {
        id: 4,
        nome: "Kit Construção Avançado",
        categoria: "construcao",
        categoriaNome: "Construção",
        preco: 35.00,
        descricao: "Kit completo de construção avançada. Inclui ferramentas,2 pilhas de madeira,10 caixas de pregos,10 pedras de amolar,livro bbp.",
        imagem: "imagens/construcao.jpg",
        galeria: [
            "imagens/construcao.jpg"
        ],
        videos: []
    },
    {
        id: 7,
        nome: "Pregos",
        categoria: "construcao",
        categoriaNome: "Construção",
        preco: 10.00,
        descricao: "Vip Pregos consta 10 caixas de pregos no pacote.",
        imagem: "imagens/pregos.jpg",
        galeria: [
            "imagens/pregos.jpg"
        ],
        videos: []
    },
    {
        id: 8,
        nome: "Bica D'água",
        categoria: "construcao",
        categoriaNome: "Construção",
        preco: 20.00,
        descricao: "Bica d'água pode ser colocada em qualquer base que voce fizer,basta informar a Staff o local e iremos adicionar para voce a bica d'agua na sua base.",
        imagem: "imagens/bicadagua.jpg",
        galeria: [
            "imagens/bicadagua.jpg"
        ],
        videos: []
    },
    {
        id: 9,
        nome: "Kit NBQ",
        categoria: "roupas-vip",
        categoriaNome: "Roupas VIP",
        preco: 15.00,
        descricao: "Kit completo NBQ com mascara e 5 filtros+3 comprimidos de carvao!.",
        imagem: "imagens/kitnbq.jpg",
        galeria: [
            "imagens/kitnbq.jpg"
        ],
        videos: []
    },
    {
        id: 10,
        nome: "Tábuas",
        categoria: "construcao",
        categoriaNome: "Construção",
        preco: 10.00,
        descricao: "Pacote com 3 pilhas de planks.",
        imagem: "imagens/planks.png",
        galeria: [
            "imagens/planks.png"
        ],
        videos: []
    },
    {
        id: 11,
        nome: "Troncos",
        categoria: "construcao",
        categoriaNome: "Construção",
        preco: 10.00,
        descricao: "Kit com 15 troncos de madeira.",
        imagem: "imagens/troncos.jpg",
        galeria: [
            "imagens/troncos.jpg"
        ],
        videos: []
    },
    {
        id: 12,
        nome: "Pedra de Amolar",
        categoria: "construcao",
        categoriaNome: "Construção",
        preco: 10.00,
        descricao: "Kit com 15 pedras de amolar.",
        imagem: "imagens/pedradeamolar.jpg",
        galeria: [
            "imagens/pedradeamolar.jpg"
        ],
        videos: []
    },
    {
        id: 3,
        nome: "Veículo Hummer H1",
        categoria: "veiculos",
        categoriaNome: "Veículos",
        preco: 10.00,
        descricao: "Veículo Hummer H1 totalmente equipado...veiculo nao possui seguro,entao se perder seu veiculo nao iremos dropar outro.",
        imagem: "imagens/hamer.jpg",
        galeria: [
            "imagens/hamer.jpg"
        ],
        videos: []
    },
    {
        id: 15,
        nome: "Veículo Hummer H1 com seguro",
        categoria: "veiculos",
        categoriaNome: "Veículos",
        preco: 45.00,
        descricao: "Veiculo vanila com seguro. Voce recebera: 1 veiculo vanila da sua escolha+carlock+seguro mensal. O seguro do veiculo voce tem direito: Pedir 3 seguros por semana. o Seguro é valido por apenas 1 mes",
        imagem: "imagens/hamer.jpg",
        galeria: [
            "imagens/hamer.jpg"
        ],
        videos: []
    },
    {
        id: 24,
        nome: "Helicoptero com Seguro",
        categoria: "veiculos",
        categoriaNome: "Veículos",
        preco: 60.00,
        descricao: "Helicoptero Vip,otimo para se locomover pelo jogo com total conforto e rapidez. o Helicoptero vip voce tera varios modelos para escolher e alem de tudo ele vem com SEGURO. voce podera pedir o Heli denovo sempre que perder. Obs:o seguro devera ser acionado pelo player que comprou o veiculo e apenas via ticket!",
        imagem: "imagens/Heli1.jpg",
        galeria: [
            "imagens/Heli1.jpg",
            "imagens/heli2.jpg",
            "imagens/heli3.jpg",
            "imagens/heli4.jpg",
            "imagens/heli6.jpg",
            "imagens/heli7.jpg"
        ],
        videos: []
    },
    {
        id: 25,
        nome: "Helicoptero LittleBird SEM SEGURO",
        categoria: "veiculos",
        categoriaNome: "Veículos",
        preco: 15.00,
        descricao: "Helicoptero LittleBird sem seguro.\nO helicoptero LittleBird é bom para quem joga solo e nao quer ter muitos gastos com veiculos,ele nao possui seguro,se perder ele nao sera devolvido outro e nao adianta insistir!.",
        imagem: "imagens/little.jpg",
        galeria: [
            "imagens/little.jpg"
        ],
        videos: []
    },
    {
        id: 22,
        nome: "Trage ghillie completo",
        categoria: "roupas-vip",
        categoriaNome: "Roupas VIP",
        preco: 20.00,
        descricao: "Voce recebera 3 kits completos de ghillie na cor desejada.",
        imagem: "imagens/gg1.jpg",
        galeria: [
            "imagens/gg1.jpg",
            "imagens/gg2.jpg"
        ],
        videos: []
    },
    {
        id: 18,
        nome: "Chapas de Metal",
        categoria: "construcao",
        categoriaNome: "Construção",
        preco: 10.00,
        descricao: "Pacote com 20 chapas de metal para construção. Ideal para reforçar estruturas e criar bases mais resistentes.",
        imagem: "imagens/metal.jpg",
        galeria: [
            "imagens/metal.jpg"
        ],
        videos: []
    },
    {
        id: 20,
        nome: "Storages",
        categoria: "construcao",
        categoriaNome: "Construção",
        preco: 15.00,
        descricao: "Pacote com 15 baus de mil slots contendo baus, armários e gunhacks.",
        imagem: "imagens/baus.jpg",
        galeria: [
            "imagens/baus.jpg"
        ],
        videos: []
    },
    {
        id: 23,
        nome: "Codelock",
        categoria: "construcao",
        categoriaNome: "Construção",
        preco: 10.00,
        descricao: "Voce recebera x5 codelock no pacote.",
        imagem: "imagens/codelock.jpg",
        galeria: [
            "imagens/codelock.jpg"
        ],
        videos: []
    },
    {
        id: 19,
        nome: "Base BBP 4x4",
        categoria: "bases-vip",
        categoriaNome: "Bases VIP",
        preco: 100.00,
        descricao: "Base BBP 4x4 completa com 10 storages de mil slots, 8 portões T2, bandeira,carro de brinde sem seguro.",
        imagem: "imagens/basebbp1.jpg",
        galeria: [
            "imagens/basebbp1.jpg",
            "imagens/basebbp2.jpg"
        ],
        videos: []
    },
    {
        id: 21,
        nome: "Base BBP 3x3",
        categoria: "bases-vip",
        categoriaNome: "Bases VIP",
        preco: 70.00,
        descricao: "Base 3x3 feita de BBP,vem incluso os itens: Base BBP 3x3 completa com 5 storages de mil slots, 4 portões T1, bandeira,carro de brinde sem seguro.",
        imagem: "imagens/basebbp1.jpg",
        galeria: [
            "imagens/basebbp1.jpg",
            "imagens/basebbp2.jpg"
        ],
        videos: []
    }
];

// Estado da aplicação
let carrinho = [];
let categoriaAtual = 'bases-vip';
let produtoAtual = null;

// Elementos do DOM
const produtosGrid = document.getElementById('produtos-grid');
const carrinhoItems = document.getElementById('carrinho-items');
const carrinhoTotal = document.getElementById('carrinho-total');
const cartCount = document.querySelector('.cart-count');
const produtoModal = document.getElementById('produto-modal');
const btnFinalizarCompra = document.getElementById('btn-finalizar-compra');

// URL do webhook do Discord
const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1406054885912350841/Vm751UPyk4w4Ijh-hF7p27GPP0sSbPa4gDhL77klobxy_3rhjmX8arTRKrE2cUH29ncC';

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    carregarProdutos();
    inicializarEventos();
    atualizarCarrinho();
    
    // Verificar status do pagamento ao carregar a página
    verificarStatusPagamento();
});

// Carregar produtos
function carregarProdutos() {
    const produtosFiltrados = produtos.filter(p => p.categoria === categoriaAtual);
    
    produtosGrid.innerHTML = '';
    
    produtosFiltrados.forEach(produto => {
        const produtoCard = criarProdutoCard(produto);
        produtosGrid.appendChild(produtoCard);
    });
}

// Criar card do produto
function criarProdutoCard(produto) {
    const card = document.createElement('div');
    card.className = 'produto-card';
    card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}" class="produto-imagem">
        <div class="produto-info">
            <h3 class="produto-titulo">${produto.nome}</h3>
            <p class="produto-categoria">${produto.categoriaNome}</p>
            <div class="produto-preco">R$ ${produto.preco.toFixed(2)}</div>
            <button class="btn-adicionar" onclick="adicionarAoCarrinho(${produto.id})">
                <i class="fas fa-cart-plus"></i> Adicionar ao Carrinho
            </button>
            <button class="btn-info" onclick="abrirModalProduto(${produto.id})" style="margin-top: 10px; background: #2196F3; color: white; border: none; padding: 12px; border-radius: 8px; cursor: pointer; width: 100%;">
                <i class="fas fa-info-circle"></i> Ver Detalhes
            </button>
        </div>
    `;
    return card;
}

// Abrir modal do produto
function abrirModalProduto(produtoId) {
    console.log('Abrindo modal para produto ID:', produtoId);
    produtoAtual = produtos.find(p => p.id === produtoId);
    if (!produtoAtual) {
        console.log('Produto não encontrado');
        return;
    }
    console.log('Produto encontrado:', produtoAtual.nome);
    console.log('Vídeos do produto:', produtoAtual.videos);
    
    document.getElementById('produto-titulo').textContent = produtoAtual.nome;
    document.getElementById('produto-categoria').textContent = produtoAtual.categoriaNome;
    document.getElementById('produto-descricao').textContent = produtoAtual.descricao;
    document.getElementById('produto-preco').textContent = `R$ ${produtoAtual.preco.toFixed(2)}`;
    document.getElementById('imagem-principal').src = produtoAtual.imagem;
    
    // Carregar galeria
    const galeriaContainer = document.getElementById('galeria-miniaturas');
    galeriaContainer.innerHTML = '';
    
    // Adicionar imagem principal
    const miniaturaPrincipal = document.createElement('img');
    miniaturaPrincipal.src = produtoAtual.imagem;
    miniaturaPrincipal.className = 'miniatura';
    miniaturaPrincipal.onclick = () => {
        document.getElementById('imagem-principal').innerHTML = `<img src='${produtoAtual.imagem}' alt='${produtoAtual.nome}' style='width: 100%; height: 300px; object-fit: cover; border-radius: 10px;'>`;
        abrirImagemModal(produtoAtual.imagem, [produtoAtual.imagem, ...produtoAtual.galeria]);
    };
    galeriaContainer.appendChild(miniaturaPrincipal);
    
    // Adicionar outras imagens da galeria
    produtoAtual.galeria.forEach(imagem => {
        const miniatura = document.createElement('img');
        miniatura.src = imagem;
        miniatura.className = 'miniatura';
        miniatura.onclick = () => {
            document.getElementById('imagem-principal').innerHTML = `<img src='${imagem}' alt='${produtoAtual.nome}' style='width: 100%; height: 300px; object-fit: cover; border-radius: 10px;'>`;
            abrirImagemModal(imagem, [produtoAtual.imagem, ...produtoAtual.galeria]);
        };
        galeriaContainer.appendChild(miniatura);
    });
    
    produtoModal.style.display = 'block';
}

// Fechar modal
function fecharModal() {
    produtoModal.style.display = 'none';
}

// Adicionar ao carrinho
function adicionarAoCarrinho(produtoId) {
    const produto = produtos.find(p => p.id === produtoId);
    if (!produto) return;
    
    const itemExistente = carrinho.find(item => item.id === produtoId);
    
    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinho.push({
            ...produto,
            quantidade: 1
        });
    }
    
    atualizarCarrinho();
    mostrarNotificacao(`${produto.nome} adicionado ao carrinho!`);
}

// Remover do carrinho
function removerDoCarrinho(produtoId) {
    carrinho = carrinho.filter(item => item.id !== produtoId);
    atualizarCarrinho();
}

// Atualizar quantidade
function atualizarQuantidade(produtoId, delta) {
    const item = carrinho.find(item => item.id === produtoId);
    if (item) {
        item.quantidade += delta;
        if (item.quantidade <= 0) {
            removerDoCarrinho(produtoId);
        } else {
            atualizarCarrinho();
        }
    }
}

// Atualizar carrinho
function atualizarCarrinho() {
    const total = carrinho.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
    const quantidadeTotal = carrinho.reduce((sum, item) => sum + item.quantidade, 0);
    
    carrinhoTotal.textContent = `R$ ${total.toFixed(2)}`;
    cartCount.textContent = quantidadeTotal;
    
    carrinhoItems.innerHTML = '';
    
    // Mostrar/ocultar campos de informações do cliente
    const clienteInfo = document.getElementById('cliente-info');
    if (carrinho.length === 0) {
        carrinhoItems.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Carrinho vazio</p>';
        if (clienteInfo) clienteInfo.style.display = 'none';
        return;
    } else {
        if (clienteInfo) clienteInfo.style.display = 'block';
    }
    
    carrinho.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'carrinho-item';
        itemElement.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}">
            <div class="carrinho-item-info">
                <div class="carrinho-item-titulo">${item.nome}</div>
                <div class="carrinho-item-preco">R$ ${item.preco.toFixed(2)}</div>
                <div class="carrinho-item-quantidade">
                    <button class="quantidade-btn" onclick="atualizarQuantidade(${item.id}, -1)">-</button>
                    <span class="quantidade">${item.quantidade}</span>
                    <button class="quantidade-btn" onclick="atualizarQuantidade(${item.id}, 1)">+</button>
                    <button class="remover-item" onclick="removerDoCarrinho(${item.id})">Remover</button>
                </div>
            </div>
        `;
        carrinhoItems.appendChild(itemElement);
    });
}

// Mostrar notificação
function mostrarNotificacao(mensagem) {
    const notificacao = document.createElement('div');
    notificacao.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    notificacao.textContent = mensagem;
    document.body.appendChild(notificacao);
    
    setTimeout(() => {
        notificacao.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notificacao.remove(), 300);
    }, 3000);
}

// Inicializar eventos
function inicializarEventos() {
    // Botões de categoria na navegação lateral
    const categoriaLateralBtns = document.querySelectorAll('.categoria-lateral');
    categoriaLateralBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            categoriaAtual = btn.dataset.categoria;
            
            // Atualizar botões da navegação lateral
            categoriaLateralBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            carregarProdutos();
        });
    });
    
    // Modal
    document.querySelector('.close').addEventListener('click', fecharModal);
    
    window.addEventListener('click', (e) => {
        if (e.target === produtoModal) {
            fecharModal();
        }
    });
    
    // Botão Adicionar ao Carrinho do Modal
    const btnAdicionarModal = document.getElementById('btn-adicionar-modal');
    if (btnAdicionarModal) {
        btnAdicionarModal.addEventListener('click', () => {
            if (produtoAtual) {
                adicionarAoCarrinho(produtoAtual.id);
                fecharModal();
            }
        });
    }
    
    // Finalizar compra
    btnFinalizarCompra.addEventListener('click', finalizarCompra);
}

// Finalizar compra com Mercado Pago
async function finalizarCompra() {
    if (carrinho.length === 0) {
        alert('Carrinho vazio!');
        return;
    }

    // Capturar informações do cliente
    const nicknameJogo = document.getElementById('nickname-jogo').value.trim();
    const discordUsername = document.getElementById('discord-username').value.trim();
    const steamId = document.getElementById('steam-id').value.trim();
    
    // Validar campos obrigatórios
    if (!nicknameJogo) {
        alert('Por favor, informe seu nickname no jogo!');
        document.getElementById('nickname-jogo').focus();
        return;
    }
    
    if (!discordUsername) {
        alert('Por favor, informe seu nome no Discord!');
        document.getElementById('discord-username').focus();
        return;
    }
    
    if (!steamId) {
        alert('Por favor, informe seu Steam ID!');
        document.getElementById('steam-id').focus();
        return;
    }

    try {
        // Enviar notificação inicial para o Discord com informações do cliente
        await enviarNotificacaoInicialDiscord(nicknameJogo, discordUsername, steamId);
        
        // Criar preferência no Mercado Pago usando a API do Mercado Pago
        const preference = {
            items: carrinho.map(item => ({
                title: item.nome,
                unit_price: item.preco,
                quantity: item.quantidade,
                picture_url: item.imagem
            })),
            back_urls: {
                success: window.location.origin + window.location.pathname + '?status=success&payment_id={payment_id}',
                failure: window.location.origin + window.location.pathname + '?status=failure',
                pending: window.location.origin + window.location.pathname + '?status=pending'
            },
            auto_return: "approved",
            external_reference: `site-dayz-${nicknameJogo}-${Date.now()}`,
            payment_methods: {
                excluded_payment_types: [],
                installments: 1
            }
        };
        
        console.log('Preferência sendo enviada:', preference);
        
        // Criar preferência usando a API do Mercado Pago
        const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${MERCADO_PAGO_ACCESS_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(preference)
        });
        
        if (!response.ok) {
            const errorData = await response.text();
            console.error('Resposta do Mercado Pago:', response.status, errorData);
            throw new Error(`Erro ao criar preferência: ${response.status} - ${errorData}`);
        }
        
        const data = await response.json();
        
        // Redirecionar para o Mercado Pago
        window.location.href = data.init_point;
        
    } catch (error) {
        console.error('Erro ao finalizar compra:', error);
        
        // Fallback: tentar criar preferência usando o SDK do Mercado Pago
        try {
            const mp = new MercadoPago(MERCADO_PAGO_PUBLIC_KEY);
            
            const preference = {
                items: carrinho.map(item => ({
                    title: item.nome,
                    unit_price: item.preco,
                    quantity: item.quantidade,
                    picture_url: item.imagem
                })),
                back_urls: {
                    success: window.location.origin + window.location.pathname + '?status=success&payment_id={payment_id}',
                    failure: window.location.origin + window.location.pathname + '?status=failure',
                    pending: window.location.origin + window.location.pathname + '?status=pending'
                },
                auto_return: "approved",
                external_reference: `site-dayz-${nicknameJogo}-${Date.now()}`,
                payment_methods: {
                    excluded_payment_types: [],
                    installments: 1
                }
            };
            
            mp.preferences.create(preference).then(function(response) {
                window.location.href = response.body.init_point;
            }).catch(function(error) {
                console.error('Erro com SDK:', error);
                alert('Erro ao processar pagamento. Tente novamente.');
            });
            
        } catch (sdkError) {
            console.error('Erro com SDK:', sdkError);
            alert('Erro ao processar pagamento. Tente novamente.');
        }
    }
}

// Função para abrir o modal de imagem ampliada com navegação
function abrirImagemModal(src, galeria) {
    const modal = document.getElementById('imagem-modal');
    const modalImg = document.getElementById('imagem-modal-conteudo');
    const btnPrev = document.querySelector('.imagem-modal-prev');
    const btnNext = document.querySelector('.imagem-modal-next');
    let indiceAtual = galeria.indexOf(src);
    function mostrar(indice) {
        if (indice < 0) indice = galeria.length - 1;
        if (indice >= galeria.length) indice = 0;
        indiceAtual = indice;
        modalImg.src = galeria[indiceAtual];
    }
    mostrar(indiceAtual);
    modal.style.display = 'flex';
    btnPrev.onclick = (e) => { e.stopPropagation(); mostrar(indiceAtual - 1); };
    btnNext.onclick = (e) => { e.stopPropagation(); mostrar(indiceAtual + 1); };
}

// Fechar modal ao clicar no X ou fora da imagem
window.onload = function() {
    const modal = document.getElementById('imagem-modal');
    const closeBtn = document.querySelector('.imagem-modal-close');
    closeBtn.onclick = () => { modal.style.display = 'none'; };
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    };
};

// Adicionar estilos CSS para animações
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style); 

// Função para verificar o status do pagamento
async function verificarStatusPagamento() {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');
    const paymentId = urlParams.get('payment_id');
    
    if (status === 'success' && paymentId) {
        try {
            // Verificar o status do pagamento no Mercado Pago
            const response = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${MERCADO_PAGO_ACCESS_TOKEN}`
                }
            });
            
            if (response.ok) {
                const payment = await response.json();
                
                if (payment.status === 'approved') {
                    // Pagamento aprovado - enviar notificação para o Discord
                    enviarNotificacaoDiscord(payment);
                    
                    // Mostrar mensagem de sucesso
                    mostrarNotificacao('✅ Pagamento aprovado! Sua compra foi processada com sucesso.');
                    
                    // Exibir modal de aviso
                    var modalAviso = document.getElementById('modal-aviso');
                    if (modalAviso) { modalAviso.style.display = 'flex'; }
                    
                    // Limpar carrinho
                    carrinho = [];
                    atualizarCarrinho();
                    
                    // Limpar parâmetros da URL
                    window.history.replaceState({}, document.title, window.location.pathname);
                } else if (payment.status === 'pending') {
                    mostrarNotificacao('⏳ Pagamento pendente. Aguarde a confirmação.');
                } else {
                    mostrarNotificacao('❌ Pagamento não foi aprovado. Tente novamente.');
                }
            }
        } catch (error) {
            console.error('Erro ao verificar pagamento:', error);
            mostrarNotificacao('❌ Erro ao verificar status do pagamento.');
        }
    } else if (status === 'failure') {
        mostrarNotificacao('❌ Pagamento recusado. Tente novamente.');
        window.history.replaceState({}, document.title, window.location.pathname);
    } else if (status === 'pending') {
        mostrarNotificacao('⏳ Pagamento pendente. Aguarde a confirmação.');
        window.history.replaceState({}, document.title, window.location.pathname);
    }
}

// Função para enviar notificação inicial para o Discord quando a compra for iniciada
async function enviarNotificacaoInicialDiscord(nicknameJogo, discordUsername, steamId) {
    try {
        const produtosTexto = carrinho.map(item => `• ${item.nome} (x${item.quantidade}) - R$ ${item.preco.toFixed(2)}`).join('\n');
        const total = carrinho.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
        const data = new Date();
        const horario = data.toLocaleString('pt-BR');
        
        const mensagem = {
            content: `🛒 **Nova Compra Iniciada!**\n\n` +
                     `**Cliente:** ${nicknameJogo}\n` +
                     `**Discord:** ${discordUsername}\n` +
                     `**Steam ID:** ${steamId}\n\n` +
                     `**Itens do Carrinho:**\n${produtosTexto}\n\n` +
                     `**Total:** R$ ${total.toFixed(2)}\n` +
                     `**Data/Hora:** ${horario}\n` +
                     `**Status:** Aguardando Pagamento`
        };
        
        await fetch(DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mensagem)
        });
        
        console.log('Notificação inicial enviada para o Discord com sucesso');
    } catch (e) {
        console.warn('Não foi possível enviar notificação inicial para o Discord:', e);
    }
}

// Função para enviar notificação do Discord quando o pagamento for aprovado
async function enviarNotificacaoDiscord(payment) {
    try {
        const produtosTexto = carrinho.map(item => `• ${item.nome} (x${item.quantidade}) - R$ ${item.preco.toFixed(2)}`).join('\n');
        const total = carrinho.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
        const data = new Date();
        const horario = data.toLocaleString('pt-BR');
        
        // Extrair nickname do external_reference se disponível
        const externalRef = payment.external_reference || '';
        const nicknameMatch = externalRef.match(/site-dayz-(.+?)-\d+/);
        const nicknameJogo = nicknameMatch ? nicknameMatch[1] : 'Não informado';
        
        const mensagem = {
            content: `✅ **Pagamento Aprovado!**\n\n` +
                     `**Cliente:** ${nicknameJogo}\n` +
                     `**Itens Comprados:**\n${produtosTexto}\n\n` +
                     `**Total:** R$ ${total.toFixed(2)}\n` +
                     `**ID do Pagamento:** ${payment.id}\n` +
                     `**Data/Hora:** ${horario}\n` +
                     `**Status:** ${payment.status}`
        };
        
        await fetch(DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mensagem)
        });
        
        console.log('Notificação enviada para o Discord com sucesso');
    } catch (e) {
        console.warn('Não foi possível notificar o Discord:', e);
    }
}

// ===== FUNCIONALIDADES MOBILE =====

// Função para alternar menu mobile
function toggleMenuMobile() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuMobile = document.getElementById('menu-mobile');
    
    menuToggle.classList.toggle('active');
    menuMobile.classList.toggle('active');
    
    // Prevenir scroll do body quando menu estiver aberto
    if (menuMobile.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Função para fechar menu mobile
function closeMenuMobile() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuMobile = document.getElementById('menu-mobile');
    
    menuToggle.classList.remove('active');
    menuMobile.classList.remove('active');
    document.body.style.overflow = '';
}

// Função para atualizar carrinho mobile
function atualizarCarrinhoMobile() {
    const carrinhoItemsMobile = document.getElementById('carrinho-items-mobile');
    const carrinhoTotalMobile = document.getElementById('carrinho-total-mobile');
    const cartBadge = document.querySelector('.fab-carrinho .cart-badge');
    
    if (carrinhoItemsMobile && carrinhoTotalMobile) {
        carrinhoItemsMobile.innerHTML = '';
        
        if (carrinho.length === 0) {
            carrinhoItemsMobile.innerHTML = '<p style="color: #fff; text-align: center; padding: 1rem;">Carrinho vazio</p>';
            carrinhoTotalMobile.textContent = 'R$ 0,00';
            if (cartBadge) cartBadge.textContent = '0';
            return;
        }
        
        carrinho.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'carrinho-item';
            itemElement.innerHTML = `
                <img src="${item.imagem}" alt="${item.nome}">
                <div class="carrinho-item-info">
                    <div class="carrinho-item-titulo">${item.nome}</div>
                    <div class="carrinho-item-preco">R$ ${item.preco.toFixed(2)}</div>
                    <div class="carrinho-item-quantidade">
                        <button class="quantidade-btn" onclick="alterarQuantidade(${index}, -1)">-</button>
                        <span class="quantidade">${item.quantidade}</span>
                        <button class="quantidade-btn" onclick="alterarQuantidade(${index}, 1)">+</button>
                    </div>
                </div>
                <button class="remover-item" onclick="removerDoCarrinho(${index})">×</button>
            `;
            carrinhoItemsMobile.appendChild(itemElement);
        });
        
        const total = carrinho.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
        carrinhoTotalMobile.textContent = `R$ ${total.toFixed(2)}`;
        
        if (cartBadge) {
            const totalItems = carrinho.reduce((sum, item) => sum + item.quantidade, 0);
            cartBadge.textContent = totalItems;
        }
    }
}

// Função para abrir menu mobile ao clicar no FAB
function abrirMenuMobile() {
    const menuMobile = document.getElementById('menu-mobile');
    const menuToggle = document.getElementById('menu-toggle');
    
    menuMobile.classList.add('active');
    menuToggle.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Event listeners para mobile
document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenuMobile);
    }
    
    // FAB carrinho
    const fabCarrinho = document.getElementById('fab-carrinho');
    if (fabCarrinho) {
        fabCarrinho.addEventListener('click', abrirMenuMobile);
    }
    
    // Fechar menu ao clicar fora
    const menuMobile = document.getElementById('menu-mobile');
    if (menuMobile) {
        menuMobile.addEventListener('click', function(e) {
            if (e.target === menuMobile) {
                closeMenuMobile();
            }
        });
    }
    
    // Categorias mobile
    const categoriasMobile = document.querySelectorAll('.categoria-mobile');
    categoriasMobile.forEach(categoria => {
        categoria.addEventListener('click', function(e) {
            e.preventDefault();
            const categoriaSelecionada = this.getAttribute('data-categoria');
            
            // Atualizar categoria ativa em todos os lugares
            categoriasMobile.forEach(cat => cat.classList.remove('active'));
            this.classList.add('active');
            
            // Sincronizar com categorias desktop
            const categoriasDesktop = document.querySelectorAll('.categoria-nav');
            categoriasDesktop.forEach(cat => {
                if (cat.getAttribute('data-categoria') === categoriaSelecionada) {
                    cat.classList.add('active');
                } else {
                    cat.classList.remove('active');
                }
            });
            
            // Filtrar produtos
            filtrarProdutos(categoriaSelecionada);
            
            // Fechar menu mobile
            closeMenuMobile();
        });
    });
    
    // Categorias desktop (sincronizar com mobile)
    const categoriasDesktop = document.querySelectorAll('.categoria-nav');
    categoriasDesktop.forEach(categoria => {
        categoria.addEventListener('click', function(e) {
            e.preventDefault();
            const categoriaSelecionada = this.getAttribute('data-categoria');
            
            // Atualizar categoria ativa em todos os lugares
            categoriasDesktop.forEach(cat => cat.classList.remove('active'));
            this.classList.add('active');
            
            // Sincronizar com categorias mobile
            const categoriasMobile = document.querySelectorAll('.categoria-mobile');
            categoriasMobile.forEach(cat => {
                if (cat.getAttribute('data-categoria') === categoriaSelecionada) {
                    cat.classList.add('active');
                } else {
                    cat.classList.remove('active');
                }
            });
            
            // Filtrar produtos
            filtrarProdutos(categoriaSelecionada);
        });
    });
    
    // Botão finalizar compra mobile
    const btnFinalizarMobile = document.getElementById('btn-finalizar-compra-mobile');
    if (btnFinalizarMobile) {
        btnFinalizarMobile.addEventListener('click', function() {
            if (carrinho.length === 0) {
                mostrarNotificacao('❌ Carrinho vazio!');
                return;
            }
            
            const clienteInfoMobile = document.getElementById('cliente-info-mobile');
            if (clienteInfoMobile.style.display === 'none') {
                clienteInfoMobile.style.display = 'block';
                this.innerHTML = '<i class="fas fa-credit-card"></i> Confirmar Compra';
            } else {
                finalizarCompraMobile();
            }
        });
    }
});

// Função para finalizar compra mobile
function finalizarCompraMobile() {
    const nicknameJogo = document.getElementById('nickname-jogo-mobile').value.trim();
    const discordUsername = document.getElementById('discord-username-mobile').value.trim();
    const steamId = document.getElementById('steam-id-mobile').value.trim();
    
    if (!nicknameJogo || !discordUsername || !steamId) {
        mostrarNotificacao('❌ Preencha todas as informações do cliente!');
        return;
    }
    
    // Usar a mesma lógica de finalização do desktop
    finalizarCompra();
    
    // Fechar menu mobile após finalizar
    setTimeout(() => {
        closeMenuMobile();
    }, 1000);
}

// Modificar a função atualizarCarrinho para incluir mobile
const originalAtualizarCarrinho = atualizarCarrinho;
atualizarCarrinho = function() {
    originalAtualizarCarrinho();
    atualizarCarrinhoMobile();
};