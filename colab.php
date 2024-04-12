<!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap" rel="stylesheet">


      <link rel="shortcut icon" href="logo.png" type="image/x-icon">
      <link rel="stylesheet" href="style.css">
      <title>Blood Mask Music | Collab</title>
</head>
<body>
      <form action="send.php" method="post" style="background-color: black; font-size: 50px; height: 100%; padding: 40px;" align="center">
            <legend style="color: white;">Your telegram</legend>
            <input type="text" name="telegram" placeholder="Type here" style="width: 400px; font-size: 30px;" required> <br>
            <input type="submit" value="Send" style="background-color: black; color: white; font-size: 25px; border: 1px solid white;">
      </form>
      <?php
$telegram = $_POST['telegram'];

$telegram = htmlspecialchars($telegram);

$telegram = urldecode($telegram);

$telegram = trim($telegram);

if (mail("example@mail.ru", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email ,"From: example2@mail.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>
</body>
</html>