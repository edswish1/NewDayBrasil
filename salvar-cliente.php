<?php
/**
 * Sistema de Salvamento de Dados do Cliente
 * Para mapeamento entre compras e Steam ID
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Permitir requisições OPTIONS (CORS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Log para debug
function logCliente($message) {
    $logFile = 'cliente_log.txt';
    $timestamp = date('Y-m-d H:i:s');
    file_put_contents($logFile, "[$timestamp] $message\n", FILE_APPEND);
}

// Verificar método HTTP
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método não permitido']);
    exit();
}

// Obter dados do cliente
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Dados inválidos']);
    exit();
}

// Validar dados obrigatórios
$steamId = $data['steamId'] ?? '';
$nickname = $data['nickname'] ?? '';
$discord = $data['discord'] ?? '';
$timestamp = $data['timestamp'] ?? time();

if (empty($steamId) || empty($nickname) || empty($discord)) {
    http_response_code(400);
    echo json_encode(['error' => 'Dados obrigatórios faltando']);
    exit();
}

// Validar formato do Steam ID
if (!preg_match('/^7656119\d{10}$/', $steamId)) {
    http_response_code(400);
    echo json_encode(['error' => 'Steam ID inválido']);
    exit();
}

// Criar registro do cliente
$cliente = [
    'steam_id' => $steamId,
    'nickname' => $nickname,
    'discord' => $discord,
    'timestamp' => $timestamp,
    'data_criacao' => date('Y-m-d H:i:s'),
    'ultima_atualizacao' => date('Y-m-d H:i:s')
];

// Salvar no arquivo de mapeamento
$mapeamentoFile = 'steam_id_mapping.json';
$mapeamento = [];

if (file_exists($mapeamentoFile)) {
    $mapeamento = json_decode(file_get_contents($mapeamentoFile), true) ?? [];
}

// Adicionar/atualizar cliente
$mapeamento[$steamId] = $cliente;

// Salvar arquivo
if (file_put_contents($mapeamentoFile, json_encode($mapeamento, JSON_PRETTY_PRINT))) {
    logCliente("Cliente salvo: Steam ID $steamId, Nickname: $nickname");
    
    // Salvar também em formato de histórico
    $historicoFile = 'clientes_historico.json';
    $historico = [];
    
    if (file_exists($historicoFile)) {
        $historico = json_decode(file_get_contents($historicoFile), true) ?? [];
    }
    
    // Adicionar ao histórico com timestamp único
    $historico[] = $cliente;
    
    // Manter apenas os últimos 1000 registros
    if (count($historico) > 1000) {
        $historico = array_slice($historico, -1000);
    }
    
    file_put_contents($historicoFile, json_encode($historico, JSON_PRETTY_PRINT));
    
    echo json_encode([
        'success' => true,
        'message' => 'Dados do cliente salvos com sucesso',
        'steam_id' => $steamId,
        'nickname' => $nickname
    ]);
} else {
    logCliente("ERRO: Falha ao salvar cliente Steam ID $steamId");
    http_response_code(500);
    echo json_encode(['error' => 'Erro ao salvar dados']);
}

/**
 * Função para buscar cliente por Steam ID
 */
function buscarClientePorSteamID($steamId) {
    $mapeamentoFile = 'steam_id_mapping.json';
    
    if (!file_exists($mapeamentoFile)) {
        return null;
    }
    
    $mapeamento = json_decode(file_get_contents($mapeamentoFile), true) ?? [];
    return $mapeamento[$steamId] ?? null;
}

/**
 * Função para buscar cliente por nickname
 */
function buscarClientePorNickname($nickname) {
    $mapeamentoFile = 'steam_id_mapping.json';
    
    if (!file_exists($mapeamentoFile)) {
        return null;
    }
    
    $mapeamento = json_decode(file_get_contents($mapeamentoFile), true) ?? [];
    
    foreach ($mapeamento as $steamId => $cliente) {
        if (strtolower($cliente['nickname']) === strtolower($nickname)) {
            return $cliente;
        }
    }
    
    return null;
}

// Se for uma requisição GET para buscar cliente
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $steamId = $_GET['steam_id'] ?? '';
    $nickname = $_GET['nickname'] ?? '';
    
    if ($steamId) {
        $cliente = buscarClientePorSteamID($steamId);
        echo json_encode($cliente ?: ['error' => 'Cliente não encontrado']);
    } elseif ($nickname) {
        $cliente = buscarClientePorNickname($nickname);
        echo json_encode($cliente ?: ['error' => 'Cliente não encontrado']);
    } else {
        echo json_encode(['error' => 'Parâmetro steam_id ou nickname necessário']);
    }
}
?>
