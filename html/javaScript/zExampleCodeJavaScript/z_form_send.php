<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>answer from server</title>
</head>
<body>
<?php
   echo "The user has submitted: " . "<mark>" . htmlentities($_POST["entry"]) . "</mark>" . "<br>" . "Thank you :)";
?></p> 
</body>
</html>