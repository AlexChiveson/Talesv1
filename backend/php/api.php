<?php
header('Content-Type: application/json');
$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if ($method !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

$body = file_get_contents('php://input');
$data = json_decode($body, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid JSON']);
    exit;
}

$storageDir = realpath(__DIR__ . '/../../data');
if (!$storageDir) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Storage directory missing']);
    exit;
}

function append_to_file($filePath, $record)
{
    $existing = [];
    if (file_exists($filePath)) {
        $json = file_get_contents($filePath);
        $existing = json_decode($json, true) ?: [];
    }
    $existing[] = $record;
    file_put_contents($filePath, json_encode($existing, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
}

function ensure_fields($data, $fields)
{
    foreach ($fields as $field) {
        if (!isset($data[$field]) || $data[$field] === '') {
            return false;
        }
    }
    return true;
}

switch ($path) {
    case '/order':
        if (!ensure_fields($data, ['firstName', 'lastName', 'email', 'address', 'cart'])) {
            http_response_code(400);
            echo json_encode(['ok' => false, 'error' => 'Missing required fields']);
            exit;
        }
        $record = $data;
        $record['createdAt'] = date('c');
        append_to_file($storageDir . '/orders.json', $record);
        // TODO: send confirmation email
        echo json_encode(['ok' => true]);
        break;
    case '/review':
        if (!ensure_fields($data, ['name', 'email', 'link'])) {
            http_response_code(400);
            echo json_encode(['ok' => false, 'error' => 'Missing required fields']);
            exit;
        }
        $record = $data;
        $record['createdAt'] = date('c');
        append_to_file($storageDir . '/reviews.json', $record);
        // TODO: push to Google Sheets
        echo json_encode(['ok' => true]);
        break;
    default:
        http_response_code(404);
        echo json_encode(['ok' => false, 'error' => 'Unknown endpoint']);
}
