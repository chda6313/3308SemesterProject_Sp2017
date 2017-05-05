<html>
<head>
<title>User Level Selection </title>
<script
src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.mi
n.js">
</script>
<script>
$(document).ready(function(){
 $('.button').click(function(){
 var clickBtnName = $(this).attr('name');
 var ajaxurl = 'http://localhost/Project/SQLRetreiveHandler.php';
 var data = {'lvl_id': clickBtnName};
 
 $.post(ajaxurl, data, function(response) {





 
 //window.location.href="http://localhost/Project/playpage.html";
});
});
});
</script>
</head>
<body
<a href='http:127.0.0.1/Game_Selection.php'><p>BACK</p></a>
<h1>Select one of Your Level!</h1>
\
<?php
// Obtain a connection object by connecting to the db
$username = $_SESSIONS['user'];
$connection = @mysqli_connect ('127.0.0.1','root', '#Nellie1995','Maker_Game'); // please fill these parameters with the actual data
if(mysqli_connect_errno())
{
 echo "<h4>Failed to connect to MySQL: </h4>".mysqli_connect_error();
}
else
{
 echo "<h4>Successfully connected to MySQL (Changed): </h4>";
}
?>
<table class ="striped">
	<tr class = "header">
		<td><strong>Rank</strong></td>
		<td><strong>Name</strong></td>
		<td><strong>Creator</strong></td>
		<td><strong>Publish Date</strong></td>
	</tr>
<?php
$query = "Select * FROM Levels WHERE (creator == '$username' ) ORDER BY publishment;";
$resultset = mysqli_query($connection, $query);
while ($row = mysqli_fetch_array($resultset, MYSQLI_NUM)) {
	echo "<tr>";
	echo "<td>".$row[1]."</td>";
	echo "<td>".$row[5]."</td>";
	echo "<td>".$row[3]."</td>";
	echo "<td>".$row[2]."</td>";
//	echo "<td><input type=\"submit\" class=\"button\" name=\"".$row[0]."\" value=\"Select\"/></td>";
	echo "<td><form action = 'http://localhost/Project/SQLRetreiveHandler.php'>
	<input type='hidden' name = 'lvl_id' value=\"".$row[0]."\" >
	<input type='submit' class='button'></form></td>";
	echo "</tr>";
}
?>
</table>
</body>
</html>
