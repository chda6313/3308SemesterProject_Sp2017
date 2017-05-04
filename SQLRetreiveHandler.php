<html>
<head>
	<script type="text/javascript" src="processing.js"></script>
	<script type="text/javascript">
		var platforms = <?php echo json_encode($platforms_array);?>;
		var coins = <?php echo json_encode($coins_array);?>;
		var goal = <?php echo json_encode($goal_array);?>
	</script>
</head>
<?php
error_log("PHP file entered",0);
$connection = @mysqli_connect ('127.0.0.1','root', 'eraser34','Maker_Game');
if(mysqli_connect_errno())
{
	error_log("Database couldn't Connect (Changed)",0);
}
else
{
	error_log("Database Connect",0);
}
$id = $_REQUEST['lvl_id'];
error_log($id,0);
$retreive_platforms = "SELECT ST_X(rect),ST_y(rect), x_size, y_size FROM Platforms WHERE lvl_id=$id;";
$retreive_coins = "SELECT ST_X(coin),ST_y(coin) FROM Coins WHERE lvl_id=$id;";
$retreive_goal = "SELECT ST_X(goal),ST_y(goal), x_size, y_size FROM Goal WHERE lvl_id=$id;";


$platforms_results = mysqli_query($connection, $retreive_platforms);
$coins_results = mysqli_query($connection, $retreive_coins);
$goal_results = mysqli_query($connection, $retreive_goal);

if(!$platforms_results){
	error_log("Error Description:".mysqli_error($connection));
}
while($platform_row = mysqli_fetch_array($platforms_results, MYSQLI_NUM)){
	$platforms_array[] = $platform_row;
}


error_log('PLATFORM DATA: '.$platforms_array[0][2],0);
error_log('PLATFORM DATA: '.$platforms_array[1][2],0);

while($coin_row = mysqli_fetch_array($coins_results, MYSQLI_NUM)){
	$coins_array[] = $coin_row;
}

error_log('COIN DATA'.$coins_array[0][1],0);
error_log('COIN DATA'.$coins_array[1][1],0);

while($goal_row = mysqli_fetch_array($goal_results, MYSQLI_NUM)){
	$goal_array[] = $goal_row;
}

error_log('GOAL DATA: '.$goal_array[0][1],0);
error_log('GOAL DATA: '.$goal_array[0][0],0);

//include 'Game_Selection.php';
//include playpage.html;
?>

<body>



     <div id="msg">HelloWorld</div>
<canvas id="mysketch" data-processing-sources="GamePlay.js"></canvas>

<script type="application/javascript">
		 var coins = <?php echo json_encode($coins_array);?>;
		 var platforms = <?php echo json_encode($platforms_array);?>;
         var goal = <?php echo json_encode($goal_array);?>;
         
         var printMessage = function (msg) {
             document.getElementById('msg').innerHTML = "Message: " + msg;
         };
</script>



			
<p id="demo"></p>

</body>

</html>

