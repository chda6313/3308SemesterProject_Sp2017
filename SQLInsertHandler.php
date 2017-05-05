<?php
$connection = @mysqli_connect ('127.0.0.1','root', 'Nellie95','Maker_Game');

$name = $_REQUEST['name'];
$Username = $_REQUEST['User_Name'];
$date = date("m-d-y");
$Rating = 0;
$Comment = "blank"
$High_Score = 0;
$review_num = 0;

$Rectangle = NULL;


$walls = $_REQUEST['walls'];
error_log($walls);


$Coin = NULL;

$insertMain = "INSERT INTO Levels(rating, publishment,creator,high_score,name,comments,review_num) VALUES ('$Rating','$publishment','$Username','$high_score','$name','$comments','$review_num')";
$insertRect = "INSERT INTO Platforms(lvl_id, rect) VALUES ('$lvl_id','$Rectangle')";
$insertCoin = "INSERT INTO Coins(id, coin) VALUES ('$Id','$Coin')";


mysqli_query($connection, $insertMain);
mysqli_query($connection, $insertRect);
mysqli_query($connection, $insertCoin);

?>
