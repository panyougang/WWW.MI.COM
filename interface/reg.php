<?php
    include('./library/conn.php');
    
    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];
    $phone = $_REQUEST['phone'];
    $email = $_REQUEST['email'];
    $address = $_REQUEST['address'];

    $sql = "select * from users where username='$username'";

    $result = $mysqli->query($sql);

    if($result->num_rows>0){
        echo '<script>alert("用户名已存在")</script>';
        echo '<script>location.href="./page/reg.html";</script>';
        $mysqli->close();
        die();
    }

    $insert = "insert into users (username,password,email,phone,address) values ('$username','$password','$email','$phone','$address')";

    $res = $mysqli->query($insert);
    $mysqli->close();

    if($res){
        echo '<script>alert("注册成功");</script>';
        echo '<script>location.href="./page/login.html";</script>';
    }
?>