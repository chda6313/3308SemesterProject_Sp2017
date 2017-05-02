<?php
$connection = @mysqli_connect ('127.0.0.1','root', 'Nellie95','lab5');
$Id = $_REQUEST['id'];
$deleteq = "DELETE FROM store WHERE id = $Id;";
if(mysqli_query($connection, $deleteq)){
    echo "deleted successfully from the database";
} else{
    echo "ERROR: Could not able to execute $deleteq. " . mysqli_error($connection);
}
?>

