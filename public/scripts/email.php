<?php
	if($_POST) {
		$to = $_POST['to'];
		$sender = $_POST['sender'];
		$message = $_POST['message'];
		$subject = "a message from " . $sender . " on me.com";
		$headers = "From: " . $sender;
<<<<<<< HEAD
		$sent = mail($to, $subject, $message, $headers);

=======

		$sent = mail($to, $subject, $message, $headers);

>>>>>>> 4ee6e314c3597b4e2bba49f13aef6f83731ebf7a
		echo $sent ? "mail sent" : "mail failed";
	}
?>
