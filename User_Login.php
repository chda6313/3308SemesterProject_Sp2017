<html>
<head>
<title> User Login Page </title>
<script
src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.mi
n.js">
</script>

</head>
<body>
<h1><strong>User Login</strong></h1>

<?php
// Obtain a connection object by connecting to the db
$connection = @mysqli_connect ('127.0.0.1','root', '#Nellie1995','Maker_Game'); // please fill these parameters with the actual data
if(mysqli_connect_errno())
{
 echo "<h4>Failed to connect to MySQL: </h4>".mysqli_connect_error();
}
?>


<table>
<form enctype="multipart/form-data" action="http://localhost/LoginHandler.php">
	<th><strong>Login Info</strong></th>
	<tr>
		<td>Username:</td>
		<td>&nbsp  <input type="text" name="log_username" size="15" maxlength="11"/></td>
	</tr>
	<tr>
		<td>Password:</td>
		<td>&nbsp <input type="text" name="log_password" size="15"maxlength="20" /></td>
	</tr>
</table>
<br>
<input type="submit" value="Log In" /> &nbsp
<input type="reset" />
</form>

</body>
</html>
