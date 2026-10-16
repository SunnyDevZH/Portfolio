<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
        case("POST"): //Send the email;
            header("Access-Control-Allow-Origin: *");
            // Payload is not send to $_POST Variable,
            // is send to php:input as a text
            $json = file_get_contents('php://input');
            //parse the Payload from text format to Object
            $params = json_decode($json);

            if (!$params) {
                http_response_code(400);
                exit;
            }

            $email = filter_var($params->email ?? '', FILTER_SANITIZE_EMAIL);
            $name = str_replace(array("\r", "\n"), '', (string)($params->name ?? ''));
            $message = (string)($params->message ?? '');

            if (!filter_var($email, FILTER_VALIDATE_EMAIL) || $name === '' || $message === '') {
                http_response_code(400);
                exit;
            }

            $recipient = 'yannick.vaterlaus@windowslive.com';
            $fromAddress = 'noreply@yannick-vaterlaus.ch';
            $subject = 'Neue Kontaktanfrage von ' . $name;
            $message = 'Von: ' . htmlspecialchars($name, ENT_QUOTES, 'UTF-8')
                . ' (' . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . ')<br><br>'
                . nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));

            $headers   = array();
            $headers[] = 'MIME-Version: 1.0';
            $headers[] = 'Content-type: text/html; charset=utf-8';
            $headers[] = 'From: Portfolio <' . $fromAddress . '>';
            $headers[] = 'Reply-To: ' . $email;
            $headers[] = 'Return-Path: ' . $fromAddress;

            mail($recipient, $subject, $message, implode("\r\n", $headers), '-f' . $fromAddress);
            break;
        default: //Reject any non POST or OPTIONS requests.
            header("Allow: POST", true, 405);
            exit;
    }
