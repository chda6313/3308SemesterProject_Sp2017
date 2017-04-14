<?php
$connection = @mysqli_connect ('127.0.0.1','root', '#Nellie1995','Maker_Game');

$first_n = $_REQUEST['first_n'];
$last_n = $_REQUEST['last_n'];
$username = $_REQUEST['username'];
$password = $_REQUEST['password'];
$confirm = $_REQUEST['confirm'];

if($confirm != $password){
	echo "<h4>You're password doesn't match your confirmation</h4>";
}
else{
	$checkUsername = "SELECT username FROM Users WHERE username='$username'";
	//$usernameCheck = mysqli_query($connection, $checkUsername);
	$usernameCheck = mysqli_query($connection,$checkUsername);
	if(!$usernameCheck){
		 echo "ERROR: Could not able to execute $usernameCheck. " .mysqli_error($connection);
	}
	else{
		 if(mysqli_num_rows($usernameCheck) != 0){
			 echo "<h4>That Username Already Exists! Try a Different One</h4>";
		 }
		 else{
			$insertUser = "INSERT INTO Users (first_n, last_n, username, password) VALUES ('$first_n','$last_n','$username','$password')";
			if(mysqli_query($connection, $insertUser)){
				echo "inserted successfully into the database";
			} else{
				echo "ERROR: Could not execute $insertUser. " .mysqli_error($connection);
			}
		 }
	}
	}
include 'User_SignUp.php';
?>
