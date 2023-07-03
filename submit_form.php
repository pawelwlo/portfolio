<?php
if(isset($_POST['submit'])) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$to = 'pawelwlo@icloud.com';
	$subject = 'New Contact Form Submission';
	$body = "Name: $name\nEmail: $email\nMessage: $message";
	$headers = 'From: ' . $email . "\r\n" .
	'Reply-To: ' . $email . "\r\n" .
	'X-Mailer: PHP/' . phpversion();
	mail($to, $subject, $body, $headers);
	echo 'Thank you for contacting us!';
}
?>
