<?php 

require_once('mysqlconnect.php');
require_once('functions.php');

set_exception_handler('handleError');

$query = 'SELECT p.id, p.name, p.price,
i.url AS `images`
    FROM `products` AS p
    JOIN `images` AS i
        ON p.`id` = i.`products_id`
    ORDER BY p.`id` DESC';

/*procedural*/
$result = mysqli_query($conn, $query);

if(!$result) {
    throw new Exception('invalid query: '.mysqli_error($conn));
}

$data = [];
$images = [];

while($row = mysqli_fetch_assoc($result)){
    $currentID = $row['id'];
    if(isset($data[$currentID])){
        $data[$currentID] = $row;
        $image = $row['images'];
        $data[$currentID]['images'][] = $row;
    } else {
        $row['price'] = intval($row['price']);
        $data[$currentID] = $row;
        $image = $row['images'];
        unset($row['images']);

        $row['images'] = [$image];
    };
}

$pureData = [];
foreach($data as $value){
    $pureData[] = $value;
}

$output = [
    'sucess' => true,
    'products' => $data
];

$json_output = json_encode($output);

print($json_output);

?>