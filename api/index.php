<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'database.php';
$objDb = new Database;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "GET":        
        $sql = "SELECT * FROM recetas";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
            $stmt->execute();
            $recetas = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $recetas = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        echo json_encode($recetas);
        
        break;
    case "POST":
        
        $recip = json_decode( file_get_contents('php://input') );
        $sql = "INSERT INTO recetas (id, title, image, link, calories, readyInMinutes, servings) VALUES(:id, :title, :image, :link, :calories, :readyInMinutes, :servings)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $recip->id);
        $stmt->bindParam(':title', $recip->title);
        $stmt->bindParam(':image', $recip->image);
        $stmt->bindParam(':link', $recip->link);
        $stmt->bindParam(':calories', $recip->calories);
        $stmt->bindParam(':readyInMinutes', $recip->readyInMinutes);
        $stmt->bindParam(':servings', $recip->servings);
        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        
        break;

    // case "DELETE":
    //     $sql = "DELETE FROM recetas WHERE id = :id";
    //     $path = explode('/', $_SERVER['REQUEST_URI']);

    //     $stmt = $conn->prepare($sql);
    //     $stmt->bindParam(':id', $path[3]);

    //     if($stmt->execute()) {
    //         $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
    //     } else {
    //         $response = ['status' => 0, 'message' => 'Failed to delete record.'];
    //     }
    //     echo json_encode($response);
    //     break;
}