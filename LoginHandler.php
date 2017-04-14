<?php
$connection = @mysqli_connect ('127.0.0.1','root', '#Nellie1995','Maker_Game');

$username = $_REQUEST['log_username'];
$password = $_REQUEST['log_password'];



	$checkLogin = "SELECT username FROM Users WHERE (username='$username') AND (password ='$password')";
	//$usernameCheck = mysqli_query($connection, $checkUsername);
	$LoginCheck = mysqli_query($connection,$checkLogin);
	if(!$LoginCheck){
		 echo "ERROR: Could not execute $LoginCheck. " .mysqli_error($connection);
	}
	else{
		 if(mysqli_num_rows($LoginCheck) == 0){
			 echo "<h4>Your username or password is incorrect</h4>";
		 }
		 else{
			echo "You're logged in!";
		 }
	}
include 'User_Login.php';
?>
