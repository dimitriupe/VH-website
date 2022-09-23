<?php

    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $company = $_POST['company'];
    $sender_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = "dimitriupe@gmail.com";

    $email_subject = "Venus Holdings | New Form Submission";

    $email_body = "You have received a new message from $name $surname.\n".
                            "Read the message below:\n $message".

    $to = "dimitriupe@gmail.com";

    $headers = "From: $email_from \r\n";
                         
    $headers .= "Reply-To: $sender_email \r\n".
                "X-Mailer: PHP/' . phpversion()";
                          
    mail($to, $email_subject, $email_body, $headers);

    function IsInjected($str)
    {
        $injections = array('(\n+)',
            '(\r+)',
            '(\t+)',
            '(%0A+)',
            '(%0D+)',
            '(%08+)',
            '(%09+)'
            );
                
        $inject = join('|', $injections);
        $inject = "/$inject/i";
        
        if(preg_match($inject,$str))
        {
        return true;
        }
        else
        {
        return false;
        }
    }

    if(IsInjected($sender_email))
    {
        echo "Invalid email value!";
        exit;
    }

?>