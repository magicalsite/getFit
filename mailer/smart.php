<?php 

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'name@mail.ru';    // Наш логин
$mail->Password = 'password';           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;               
 
$mail->setFrom('name@mail.ru', 'Письмо с сайта GetFitApps'); // Наш логин (должно совпадать с почтой, которая записана в 14 строке)
$mail->addAddress('login@mail.ru');//Куда отправлять письмо
$mail->isHTML(true);

$mail->Subject = 'Письмо с сайта GetFitApps';
$mail->Body    = '
	Пользователь оставил свои данные: <br> 
	Имя: ' . $name . ' <br>
	E-mail: ' . $email . ' <br>
	Текст сообщения: ' . $message . '';
$mail->AltBody = 'Это альтернативный текст';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>