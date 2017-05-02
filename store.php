<html>
<head>
<title> My Store Web Application </title>
<script
src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.mi
n.js">
</script>
<script>
$(document).ready(function(){
 $('.button').click(function(){
 var clickBtnName = $(this).attr('name');
 var ajaxurl = 'http://localhost/SQLDeleteHandler.php';
 var data = {'id': clickBtnName};
 $.post(ajaxurl, data, function(response) {
 window.location.href="http://localhost/store.php";
});
});
});
</script>
</head>
<body
<table>>
<?php
// Obtain a connection object by connecting to the db
$connection = @mysqli_connect ('127.0.0.1','root', '#Nellie1995','lab5'); // please fill these parameters with the actual data
if(mysqli_connect_errno())
{
 echo "<h4>Failed to connect to MySQL: </h4>".mysqli_connect_error();
}
else
{
 echo "<h4>Successfully connected to MySQL: </h4>";
}
$query = "Select * FROM store;";
$resultset = mysqli_query($connection, $query);
while ($row = mysqli_fetch_array($resultset, MYSQLI_NUM)) {
echo $row[0]." ".$row[1]." ".$row[2]." ".$row[3]." <input type=\"submit\" class=\"button\" name=\"".$row[0]."\"value=\"delete\"/> <br>";
}
?>
</table>
<form enctype="multipart/form-data"
action="http://localhost/SQLInsertHandler.php">
<p>Id:&nbsp <input type="text" name="Id" size="10" maxlength="11"
/></p>
<p>Name:&nbsp <input type="text" name="Name" size="10"
maxlength="20" /></p>
<p>Quantity:&nbsp <input type="text" name="Quantity"
size="10" maxlength="30" /></p>
<p>Price:&nbsp <input type="text" name="Price" size="10"
maxlength="10" /></p>
<br>
<input type="submit" value="Add item" /> &nbsp
<input type="reset" />
</form>
</body>
</html>
