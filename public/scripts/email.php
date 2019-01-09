<?php
	$sender = $_POST['sender'];
	$message = $_POST['message'];

	echo $message . " was sent from " . $sender;
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
