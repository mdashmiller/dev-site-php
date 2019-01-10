<?php
	if($_POST) {
		$to = $_POST['to'];
		$sender = $_POST['sender'];
		$message = $_POST['message'];
		$subject = "a message from " . $sender . " on me.com";
		$headers = "From: " . $sender;
		$sent = mail($to, $subject, $message, $headers);

		echo $sent ? 'mail sent' : 'mail failed';
	}
?>
