<?php
extract($_POST);
$name = $_POST['name'];
$email = $_POST['email'];
$contact = $_POST['contact'];
$address = $_POST['address'];
if(isset($_POST['message'])){$message = $_POST['message'];}else{$message="";}
$payment = $_POST['payment'];
$item = $_POST['item'];
ini_set('display_errors', 1);
error_reporting(E_ALL);
$mailto = "areebghaniadmission@gmail.com";
$subject = "New Order - Arts By Esham";
$body = "
  Name: ".$name."
  Email: ".$email."
  Contact No: ".$contact."
  Address: ".$address."
  Message: ".$message."
  Payment Method: ".$payment."
  Item No: ".$item."
    ";
$headers = "From: Arts By Esham";
if (mail($mailto, $subject, $body, $headers)) {
    echo "ok";
} else {
    echo "no";
}
