<?php
class Db {
    // The database connection
    protected static $connection;

    /**
     * Connect to the database
     * 
     * @return bool false on failure / mysqli MySQLi object instance on success
     */
    public function connect() {    
        // Try and connect to the database
        if(!isset(self::$connection)) {
            // Load configuration as an array. Use the actual location of your configuration file
            $config = parse_ini_file('./config.ini'); 
            self::$connection = new mysqli('localhost',$config['username'],$config['password'],$config['dbname']);
        }

        // If connection was not successful, handle the error
        if(self::$connection === false) {
            // Handle error - notify administrator, log to a file, show an error screen, etc.
            return false;
        }
        return self::$connection;
    }

    /**
     * Query the database
     *
     * @param $query The query string
     * @return mixed The result of the mysqli::query() function
     */
    public function query($query) {
        // Connect to the database
        $connection = $this -> connect();

        // Query the database
        $result = $connection -> query($query);

        return $result;
    }

    /**
     * Fetch rows from the database (SELECT query)
     *
     * @param $query The query string
     * @return bool False on failure / array Database rows on success
     */
    public function select($query) {
        $rows = array();
        $result = $this -> query($query);
        if($result === false) {
            return false;
        }
        while ($row = $result -> fetch_assoc()) {
            $rows[] = $row;
        }
        return $rows;
    }

    /**
     * Fetch the last error from the database
     * 
     * @return string Database error message
     */
    public function error() {
        $connection = $this -> connect();
        return $connection -> error;
    }

    /**
     * Quote and escape value for use in a database query
     *
     * @param string $value The value to be quoted and escaped
     * @return string The quoted and escaped string
     */
    public function quote($value) {
        $connection = $this -> connect();
        return "'" . $connection -> real_escape_string($value) . "'";
    }
    /*
     * Checks Database to see if username already exists
     * takes parameter from User Sign Up Form 'username'
     * */
    public function checkUsername($username){
		$result = self::query("SELECT username FROM Users WHERE username='$username'");
		return (mysqli_num_rows($usernameCheck) == 0);
	}
	/*
	 * Checks password to ensure it contains at least some letters and numbers
	 * for security
	 * */
	public function checkPassword($password){
		return preg_match('^[^A-Za-z]+$|^[^0-9]+$', $password);
	}
	
	/*
	 * Checks names to ensure there are only letters in the names
	 */
	public function checkName($name){
		return preg_match('/[^A-Za-z]+/',$name);
	}
	
	public function checkConfirm($password, $confirm){
		return ($password != $confirm);
	}
}
/*
$db = new Db();    

// Quote and escape form submitted values
$first_n = $_REQUEST['first_n'];
$last_n = $_REQUEST['last_n'];
$username = $_REQUEST['username'];
$password = $_REQUEST['password'];
$confirm = $_REQUEST['confirm'];

if($db -> checkName($first_n)){
	echo "<h4>Names can only contain letters dummy</h4>";
}
else{
	if($db -> checkName($last_n)){
		echo "<h4>Names can only contain letters dummy</h4>";
	}
	else{
		if($db -> checkConfirm($password, $confirm)){
			echo "<h4>You're password doesn't match your confirmation</h4>";
		}
		else {
			if($db -> checkPassword($password)){
				echo "<h4>You're password must contain letters and numbers to be secure</h4>";
			}
			else{
				if($db -> checkUsername($username)){
					 echo "<h4>That Username Already Exists! Try a Different One</h4>";
				}
				else{
					$result = $db -> query("INSERT INTO Users (first_n, last_n, username, password) VALUES ('$first_n','$last_n','$username','$password')");
				}
			}
		}
	}
}
// Insert the values into the database
//$result = $db -> query("INSERT INTO Users (first_n, last_n, username, password) VALUES ('$first_n','$last_n','$username','$password')");

include 'User_SignUp.php';
*/
?>
