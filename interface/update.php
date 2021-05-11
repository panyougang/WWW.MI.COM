<?php
    include('./library/conn.php');
    $id = $_REQUEST['id'];
    $password = $_REQUEST['password'];
    $phone = $_REQUEST['phone'];
    $email = $_REQUEST['email'];
    $address = $_REQUEST['address'];

    $update = "update users set password='$password',phone='$phone',email='$email',address='$address' where id='$id'";

    $res = $mysqli->query($update);

    $mysqli->close();

    echo '<script>location.href="./admin.php";</script>'
?>