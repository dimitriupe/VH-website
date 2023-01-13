<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '/PHPMailer-master/src/Exception.php';
require '/PHPMailer-master/src/PHPMailer.php';
require '/PHPMailer-master/src/SMTP.php';

if(isset($_POST["send"])){
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'contactvenusproperties@gmail.com';
    $mail->Password = 'gbcpcqozvctqhxgf';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    $mail->setFrom('contactvenusproperties@gmail.com');

    $mail->addAddress($_POST["email"]);

    $mail->isHTML(true);

    $mail->Name = $_POST["name"];
    $mail->Surname = $_POST["surname"];
    $mail->Company = $_POST["company"];
    $mail->Body = $_POST["message"];

    $mail->send();

    echo
    "
    <script>
        alert('Email sent successfully');
        document.location.href = '/thankyou.html';
    </script>
    ";

}

?>