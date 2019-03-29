<?php 

require_once('mysqlconnect.php');

$query = 'SELECT p.id, p.name, p.price,
i.url AS `images`
    FROM `products` AS p
    JOIN `images` AS i
        ON p.`id` = i.`products_id`
    ORDER BY p.`id` DESC';

/*procedural*/
$result = mysqli_query($conn, $query);

$data = [];
$images = [];

while($row = mysqli_fetch_assoc($result)){
    $currentID = $row['id'];
    if(isset($data[$currentID])){
        $data[$currentID] = $row;
        $image = $row['images'];
        $data[$currentID]['images'][] = $row;
    } else {
        $data[$currentID] = $row;
        $image = $row['images'];
        unset($row['images']);

        $row['price'] = (int)$row['price'];

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