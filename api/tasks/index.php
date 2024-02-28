<?php
$string = file_get_contents('../../database/tasks.json');

$tasks = json_decode($string, true);



header('Content-Type: application/json');

echo json_encode($tasks);

