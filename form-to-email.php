<?php

    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $company = $_POST['company'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = "dimitriupe@gmail.com";
    $subject = "Venus Holdings | New Form Submission";

    $headers = "From: $email \r\n";

    $email_body = "You have received a new message from $name $surname.\r\n".
                    "Read the message below:\r\n $message".

    if ($email!=NULL) {
        mail($to, $subject, $email_body, $headers);
    }

    header('Location:thankyou.html');

?>