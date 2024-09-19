<?php
header('Content-Type: application/json');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require __DIR__ . '/vendor/autoload.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

set_time_limit(300);

try {
    // Verificar el método de solicitud
    if ($_SERVER["REQUEST_METHOD"] !== "POST") {
        throw new Exception('Método de solicitud no permitido.');
    }

    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['telefono'] ?? '';
    $message = $_POST['mensaje'] ?? '';

    // Verificar que se recibieron todos los datos
    if (empty($name) || empty($email) || empty($phone) || empty($message)) {
        throw new Exception('Todos los campos son obligatorios.');
    }

    $mail = new PHPMailer(true);

    // Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.hostinger.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'servicios@alertaroja.co';
    $mail->Password = '';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Configuración del correo a Alerta Roja
    $mail->CharSet = 'UTF-8';
    $mail->setFrom('servicios@alertaroja.co', 'Alerta Roja');
    $mail->addAddress('servicios@alertaroja.co');
    $mail->addEmbeddedImage(__DIR__ . '/img/demo-2/logo-splash.png', 'logo');

    $mail->Subject = 'Alerta Roja';
    $body = "
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                margin: 0;
                padding: 0;
                background-color: #f0f0f0;
            }
            .container {
                padding: 20px;
                border-radius: 5px;
                background-color: #fff;
                max-width: 700px;
                margin: 20px auto;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .header {
                text-align: center;
                background-color: #242424;
                border-bottom: 1px solid #ddd;
                padding-bottom: 20px;
                padding-top:20px;
                border-radius: 15px;
            }
            .header img {
                width: 150px;
                border-radius: 15px;
            }
            .header h2 {
                margin: 0;
                color: #333;
            }
            .content {
                padding: 20px;
            }
            .content p {
                margin: 10px 0;
                color: #333;
            }
            .footer {
                border-top: 1px solid #ddd;
                padding-top: 20px;
                text-align: center;
                color: #888;
                font-size: 12px;
            }
            .footer img {
                width: 100px;
                margin: 10px;
            }
            .label{
                color: #F44730;
            }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <img src='cid:logo' alt='Alerta Roja Logo'>
            </div>
            <div class='content'>
                <p>Hola,</p>
                <p>Usted ha sido contactado por <span class='label'>$name</span>, con el siguiente mensaje:</p>
                <p><em>$message</em></p>
                <p>Por favor, responda a <a href='mailto:$email'>$email</a> o póngase en contacto por teléfono:<span class='label'> $phone </span> </p>
                <p>Saludos cordiales,</p>
                <p>El equipo de Alerta Roja</p>
            </div>
            <div class='footer'>    
                <p>&copy; 2024 Alerta Roja. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    ";

    $mail->isHTML(true);
    $mail->Body = $body;

    // Send email to Alerta Roja
    $mail->send();

    // Send confirmation email to sender
    $mail->clearAddresses();
    $mail->addAddress($email);

    $confirmBody = "
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                margin: 0;
                padding: 0;
                background-color: #f0f0f0;
            }
            .container {
                padding: 20px;
                border-radius: 5px;
                background-color: #fff;
                max-width: 700px;
                margin: 20px auto;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .header {
                text-align: center;
                border-bottom: 1px solid #ddd;
                background-color:#242424;
                padding-bottom: 20px;
                padding-top:20px;
                border-radius: 15px;
            }
            .header img {
                width: 150px;
                border-radius: 15px;
            }
            .header h2 {
                margin: 0;
                color: #333;
            }
            .content {
                padding: 20px;
            }
            .content p {
                margin: 10px 0;
                color: #333;
            }
            .footer {
                border-top: 1px solid #ddd;
                padding-top: 20px;
                text-align: center;
                color: #888;
                font-size: 12px;
            }
            .footer img {
                width: 100px;
                margin: 10px;
            }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <img src='cid:logo' alt='Alerta Roja Logo'>
            </div>
            <div class='content'>
                <p>Hola, <strong>$name</strong>,</p>
                <p>Gracias por ponerse en contacto con nosotros. Hemos recibido su mensaje y le responderemos lo antes posible.</p>
                <p>Saludos cordiales,</p>
                <p>El equipo de Alerta Roja</p>
            </div>
            <div class='footer'>    
                <p>&copy; 2024 Alerta Roja. All rights reserved.</p>
            </div>  
        </div>
    </body>
    </html>
    ";

    $mail->Body = $confirmBody;
    $mail->Subject = 'Gracias por contactarnos.';

    $mail->send();

    // Respuesta de éxito
    echo json_encode(['message' => 'El correo ha sido enviado correctamente']);
    http_response_code(200);
} catch (Exception $e) {
    // Respuesta de error
    echo json_encode(['error' => $e->getMessage()]);
    http_response_code(500);
}
