<?php
$connection = @mysqli_connect ('127.0.0.1','root', 'eraser34','Maker_Game');

$name = "Demo Level";
$Username = "hane0248";
$date = date("m-d-y");
$Rating = 0;
$Comment = "So Cool!";
$High_Score = 0;
$review_num = 0;

$rect_string = $_REQUEST["walls"];
$coin_string = $_REQUEST["coins"];
$goal_string = $_REQUEST["goal"];

$rect_array = explode(" ",$rect_string);
$coin_array = explode(" ",$coin_string);
$goal_array = explode(" ",$goal_string);


$rect_size = sizeof($rect_array);
$coin_size = sizeof($coin_array);


if(mysqli_connect_errno())
{
 echo "<h4>Failed to connect to MySQL: </h4>".mysqli_connect_error();
}
else
{
 echo "<h4>Successfully connected to MySQL (Changed): </h4>";
}


$insertMain = "INSERT INTO Levels(rating, publishment,creator,high_score,name,comments,review_num) VALUES ('$Rating','$publishment','$Username','$high_score','$name','$comments','$review_num')";
mysqli_query($connection, $insertMain);
echo"inserted level<br>";

$getID = "SELECT max(id) from Levels;";
$results = mysqli_query($connection, $getID);
echo "error:".mysqli_error($connection);
$lvl_id = 100;

echo "".$results;

//echo"inserting walls <br>";

for($i=0; $i < $rect_size; $i+=2){
	
	$rectx = $rect_array[$i];
	
	$recty = $rect_array[$i+1];
	
	echo "<br>".$rectx.",".$recty;
	
	
	$insertRect = "INSERT INTO Platforms(lvl_id, rect, x_size, y_size) VALUES ('$lvl_id',ST_GeomFromText('POINT($rectx $recty)'),10,10);";
	//echo " ".$insertRect;
	mysqli_query($connection, $insertRect);
	//echo "error:".mysqli_error($connection);
}

for($i=0; $i < $rect_size; $i+=2){
	$coinx = $coin_array[$i];
	$coiny = $coin_array[$i+1];
	
	$insertCoin = "INSERT INTO Coins(lvl_id, coin) VALUES ('$lvl_id',ST_GeomFromText('POINT($rectx $recty)'));";
	mysqli_query($connection, $insertCoin);
	
}
$goalx = $goal_array[0];
$goaly = $goal_array[1];
$insertGoal = "INSERT INTO Goal(lvl_id, goal, x_size, y_size) VALUES ('$lvl_id',ST_GeomFromText('POINT($goalx $goaly)'),10,10);";
mysqli_query($connection, $insertGoal);
//echo "error:".mysqli_error($connection);


echo "<h4>end<h4>";

//window.location.href="http://localhost/Project/SplashScreen.html";
?>
