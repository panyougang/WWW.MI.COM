<?php
    include('./library/conn.php');

    $id = $_REQUEST['id'];

    $sql = "delete from users where id='$id'";

    $mysqli->query($sql);

    $mysqli->close();

    echo '<script>location.href="./admin.php";</script>';
?>