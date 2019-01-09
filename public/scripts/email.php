<?php
	$email = $_POST['email'];
	$message = $_POST['message'];

	echo $message . " was sent from " . $email;
	// if (isset($_POST['submit'])) {
	// 	$email = $_POST['email'];
	// 	$subject = "a message from me.com";
	// 	$message = $_POST['message'];

	// 	$mailTo = "myAddress";
	// 	$headers = "From: " . $email;

	// 	mail($mailTo, $subject, $message, $headers);
	// 	header("Location: index.html?mail-sent");
	// }
?>
