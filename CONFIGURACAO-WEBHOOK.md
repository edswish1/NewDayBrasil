# Configuração do Webhook do Mercado Pago

## Webhook do Discord Configurado ✅

**URL do Webhook:** `https://discord.com/api/webhooks/1406054885912350841/Vm751UPyk4w4Ijh-hF7p27GPP0sSbPa4gDhL77klobxy_3rhjmX8arTRKrE2cUH29ncC`

**Canal:** venas
**Servidor:** NewDay Brasil

## Funcionalidade Implementada

Agora quando um cliente clicar em "Finalizar Compra", o sistema irá:

1. **Solicitar informações do cliente:**
   - Nickname no jogo
   - Nome no Discord
   - Steam ID

2. **Enviar notificação inicial para o Discord** com:
   - Nome do cliente no jogo
   - Nome do cliente no Discord
   - Steam ID
   - Lista completa do carrinho de compras
   - Total da compra
   - Data e hora
   - Status: "Aguardando Pagamento"

3. **Redirecionar para o Mercado Pago** com as informações do cliente

4. **Quando o pagamento for aprovado**, enviar nova notificação com:
   - Confirmação do pagamento
   - Dados do cliente
   - Itens comprados
   - ID do pagamento

## Configuração do Webhook no Mercado Pago

### 1. Acesse o Painel do Mercado Pago
- Faça login na sua conta do Mercado Pago
- Vá para **Configurações > Webhooks**

### 2. Configure o Webhook
- **URL do Webhook:** `https://seudominio.com/webhook-mercadopago.php`
- **Eventos:** Selecione `payment`
- **Versão da API:** v1

### 3. Teste o Webhook
- Após configurar, o Mercado Pago enviará um teste
- Verifique se o arquivo `webhook_log.txt` foi criado
- Confirme se as notificações chegam no Discord

## Arquivos Modificados

### 1. `index.html`
- Adicionados campos para nickname do jogo e Discord
- Campos aparecem automaticamente quando há itens no carrinho

### 2. `script.js`
- Nova função `enviarNotificacaoInicialDiscord()`
- Validação dos campos obrigatórios
- Captura das informações do cliente
- Envio de notificação antes do redirecionamento

### 3. `webhook-mercadopago.php`
- Processamento das informações do cliente
- Extração do nickname do external_reference
- Notificação melhorada com dados do cliente

### 4. `styles.css`
- Estilos para os campos de informação do cliente
- Animações e responsividade

## Fluxo Completo

1. **Cliente adiciona itens ao carrinho**
2. **Campos de informação aparecem automaticamente**
3. **Cliente preenche nickname e Discord**
4. **Cliente clica em "Finalizar Compra"**
5. **Sistema valida os campos**
6. **Notificação inicial enviada para o Discord**
7. **Cliente é redirecionado para o Mercado Pago**
8. **Após pagamento aprovado, nova notificação é enviada**

## Exemplo de Notificação no Discord

### Notificação Inicial:
```
🛒 **Nova Compra Iniciada!**

**Cliente:** Player123
**Discord:** Player123#4567
**Steam ID:** 76561198123456789

**Itens do Carrinho:**
• Base VIP Media (x1) - R$ 60,00
• Roupa VIP Militar (x2) - R$ 15,00

**Total:** R$ 90,00
**Data/Hora:** 15/12/2024 14:30:25
**Status:** Aguardando Pagamento
```

### Notificação de Pagamento Aprovado:
```
✅ **Pagamento Aprovado!**

**Cliente:** Player123
**Itens Comprados:**
• Base VIP Media (x1) - R$ 60,00
• Roupa VIP Militar (x2) - R$ 15,00

**Total:** R$ 90,00
**ID do Pagamento:** 123456789
**Data/Hora:** 15/12/2024 14:35:10
**Status:** approved
```

## Troubleshooting

### Problemas Comuns:

1. **Webhook não recebe notificações:**
   - Verifique se a URL está correta
   - Confirme se o arquivo PHP está acessível
   - Verifique os logs em `webhook_log.txt`

2. **Notificações não chegam no Discord:**
   - Verifique se a URL do webhook do Discord está correta
   - Confirme se o webhook do Discord está ativo

3. **Campos não aparecem:**
   - Verifique se há itens no carrinho
   - Confirme se o JavaScript está carregando corretamente

### Logs:
- O arquivo `webhook_log.txt` registra todas as atividades do webhook
- Use para debug em caso de problemas

## Segurança

- O webhook valida as notificações do Mercado Pago
- As informações do cliente são processadas de forma segura
- Logs são mantidos para auditoria
