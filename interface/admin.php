<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <script src="./jquery.js"></script>
    <script src="./cookie.js"></script>
    <script>
        if(!(cookie.get('username')=='admin' && cookie.get('isLogined') == 'true')){
            location.href = './page/login.html';
        }
        $(function(){
            $('#username').html(cookie.get('username'));    

            $('#loginout').on('click',function(){
                cookie.remove('isLogined');
                cookie.remove('username');
                location.reload();
            });
        });
    </script>
</head>
<body>
    <div class="container">
        <div class="text-center h1">用户信息管理</div>
        <div class="text-right h4"><span id="username"></span>,欢迎回来! <a id="loginout">退出登陆</a></div>
        <table class="table table-bordered table-hover text-center">
            <tr>
                <td>id</td>
                <td>username</td>
                <td>password</td>
                <td>email</td>
                <td>phone</td>
                <td>address</td>
                <td>more</td>
                <?php
                    include('./library/conn.php');
                    
                    $select = 'select * from users';

                    $result = $mysqli->query($select);

                    $mysqli->close();

                    while($row = $result->fetch_assoc()){
                        echo '<tr>';
                        echo  "<td>$row[id]</td>";
                        echo  "<td>$row[username]</td>";
                        echo  "<td>$row[password]</td>";
                        echo  "<td>$row[email]</td>";
                        echo  "<td>$row[phone]</td>";
                        echo  "<td>$row[address]</td>";
                        echo  "<td><a class='btn btn-info' href='./page/update.html?username=$row[username]&id=$row[id]'>修改</a><a class='btn btn-danger' href='./remove.php?id=$row[id]'>删除</a></td>";
                        echo  '</tr>';
                    }
                ?>
            </tr>
        </table>
    </div>
</body>
</html>