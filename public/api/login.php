<?php

require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

$output = [
    'success' => false
];

$json_input = file_get_contents("php://input");

$input = json_decode($json_input,true);

if(empty($_POST['email'])){
    throw new Exception('email is a required value');
}

if(empty($_POST['password'])){
    throw new Exception('password is a required value');
}

$email = $input['email'];
$password = $input['password'];

$email = addslashes($email);

$hashedPassword = sha1($password);

unset($input['password']);

$query = "SELECT `id`, `name` FROM `users`
    WHERE `email` = ? AND `password` = ?
    ";

$statement = mysqli_prepare($conn, $query); //send the safe query to the db

mysqli_stmt_bind_param($statement, 'ss', $email, $hashedPassword); //send the dangerous data to the db

mysqli_stmt_execute($statement); //tell the db to mix the query and the data

$result = mysqli_stmt_get_result($statement); //get the result pointer for the prepared query statement's data

if(!$result){
    throw new Exception(mysqli_error($conn));
}

if(mysqli_num_rows($result) !== 1) {
    throw new Exception('invalid username or password');
}

$data = mysqli_fetch_assoc($result);

$token = $email . $data['id'] . microtime();
$token = sha1($token);

$connect_query = "INSERT INTO `user_connections` SET
    `token` = '$token',
    `users_id` = {$data['id']},
    `created` = NOW(),
    `ip_address` = '{$_SERVER['REMOTE_ADDR']}'
";

$connect_result = mysqli_query($conn, $connect_query);

if(!$connect_result){
    throw new Exception(mysqli_error($conn));
}

if(mysqli_affected_rows($conn) !== 1){
    throw new Exception('could not log you in: connection not saved');
}

$_SESSION['user_data'] = [
    'id' => $data['id'],
    'username' => $data['name'],
    'token' => $token
];

$output['success'] = true;
$output['username'] = $data['name'];

$json_output = json_encode($output);
print($json_output);

?>