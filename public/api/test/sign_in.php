<?php

session_start();

if(empty($_SESSION['user'])){
    $_SESSION['user'] = 'Jim Bob';

    $output['message'] = 'Session set, user signed in';
} else {
    $output['message'] = 'User already signed in';
    $output['user'] = $_SESSION['user'];
}

$output = [
    'message' => 'Sign in api working!'
];

$output['success'] = true;

print(json_encode($output));

?>