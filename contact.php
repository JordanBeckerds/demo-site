<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = 'contact@cyberdev.studio'; // Remplace par ton email
    $subject = 'Nouveau contact depuis le site';
    $body = "Email: $email\nMessage: $message";
    if (mail($to, $subject, $body)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
} else {
    http_response_code(405);
}
?>