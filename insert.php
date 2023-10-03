
<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$data = json_decode(file_get_contents("php://input"));

if (isset($data->name) && isset($data->subject) && isset($data->email) && isset($data->phone) && isset($data->message)) {

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "payessence";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO contact (name, subject, email, phone, message) VALUES ('$data->name', '$data->subject', '$data->email', '$data->phone', '$data->message')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "Data inserted successfully"]);
    } else {
        echo json_encode(["message" => "Error: " . $sql . "<br>" . $conn->error]);
    }

    $conn->close();
} else {
    echo json_encode(["message" => "Invalid input"]);
}
?>
