<?php

	$project_name = 'PROLeveL';
	$text = urlencode("Новая заявка". "\n");
	$message = '<table><tr><td style="border: 1px solid grey; padding: 10px; text-align:center;" colspan="2"><h3>Новая заявка</h3></td></tr>';
	foreach ( $_POST as $key => $value ) {

			$message .= '<tr><td style="border: 1px solid grey; padding: 10px:"><b>' . "$key" . '</b></td><td style="border: 1px solid grey; padding: 10px:">' . "$value" . '</td></tr>';
			$text .= urlencode("$key" . ": " ."$value" . "\n");

	}

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=utf-8\r\n";
$headers .= "From: " . $project_name .  " <admin@web-prolevel.ru.ru>\r\n";

$to = "alex.m.sky@gmail.com";
mail($to, $project_name, $message, $headers);

header('Location: ' . $_SERVER['HTTP_REFERER']);