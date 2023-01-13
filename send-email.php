<?php

  // Get the form data
  $name = $_POST['name'];
  $surname = $_POST['surname'];
  $company = $_POST['company'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Set the recipient email address
  $to = "contactvenusproperties@gmail.com";

  // Set the email subject
  $subject = 'Venus Holdings | New Message from Online Contact Form';

  // Build the email content
  $email_content = "Name: $name\n";
  $email_content .= "Surname: $surname\n";
  $email_content .= "Company: $company\n";
  $email_content .= "Email: $email\n\n";
  $email_content .= "Message:\n$message\n";

  // Build the email headers
  $email_headers = "From: $name <$email>";

  // Send the email
  mail ($to, $subject, $email_content, $email_headers);

?>