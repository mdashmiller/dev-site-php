<?php
	if (isset($_POST['submit'])) {
		$email = $_POST['email'];
		$subject = "a message from me.com";
		$message = $_POST['message'];

		$mailTo = "m.robert.miller@gmail.com";
		$headers = "From: " . $email;

		mail($mailTo, $subject, $message, $headers);
		header("Location: index.html?mail-sent");
	}
?>
