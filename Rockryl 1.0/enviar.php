

<?php

$to = "rocapint@gmail.com";
$subject = "Mensaje Enviado";
$contenido .= "Nombre: ".$_POST["name"]."\n";
$contenido .= "Email: ".$_POST["mail"]."\n";
$contenido .= "Telefono: ".$_POST["phone"]."\n\n";
$contenido .= "Mensaje: ".$_POST["message"]."\n\n";
$header = "From: mail.rockryl.com\nReply-To:".$_POST["mail"]."\n";
$header .= "Mime-Version: 1.0\n";
$header .= "Content-Type: text/plain";
if(mail($to, $subject, $contenido ,$header)){
echo "Mail Enviado.";
}
else {
    echo "Mail NO Enviado.";
}

?>

<script> 

window.location.replace('MailEnviado.html'); 

</script>