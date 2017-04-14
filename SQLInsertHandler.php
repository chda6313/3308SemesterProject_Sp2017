<?php
$connection = @mysqli_connect ('127.0.0.1','root', 'Nellie95','Maker_Game');
$Id = mysql_insert_id()+1;
$Name = $_REQUEST['User_Name'];
$Publish = date("d.m.Y");
$Rating = $_REQUEST['Rating'];
$Comment = $_REQUEST['Comment'];
$High_Score = NULL;

$Rectangle = NULL;
$Coin = NULL;

$insertMain = "INSERT INTO store (id, name, qty, price) VALUES ('$Id','$Name','$Quantity','$Price')";
$insertRect = "INSERT INTO Platforms(id, rect) VALUES ('$Id','$Rectangle')";
$insertCoin = "INSERT INTO Coins(id, coin) VALUES ('$Id','$Coin')";

mysqli_query($connection, $insertMain);
mysqli_query($connection, $insertRect);
mysqli_query($connection, $insertCoin);

}
?>
