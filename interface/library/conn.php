<?php
    header('content-Type:text/html;charset:utf-8');

    $mysql_conf = array(
        'host'=>'localhost:3306', //设置主机名和端口号
        'db_user'=>'root', //用户
        'db_pass'=>'root', // 密码
        'db'=>'work' //数据库名称
    );

    //登陆连接数据库
    $mysqli = new mysqli($mysql_conf['host'],$mysql_conf['db_user'],$mysql_conf['db_pass']);


    if($mysqli->connect_errno){ //如果连接错误  connect_errno 不为0
        //终止代码执行
        die('连接错误'.$mysqli->connect_errno);
    }

    //设置查询字符集
    $mysqli->query('set names utf8');

    //选择数据库
    $select_db = $mysqli->select_db($mysql_conf['db']);

    if(!$select_db){
        die('数据库选择错误'.$mysqli->error);
    }
?>