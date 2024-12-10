<?php
$mensage=$_POST['mensagem'];
$files= scandir('./mensagens');
$num_files=count($files)-2;
$fileName= "msg-{$num_files}.txt";
$file= fopen("./mensagens/{$fileName}", "x");
fwrite($file, $mensage);
fclose($file);
header("Location:index.php");




?>