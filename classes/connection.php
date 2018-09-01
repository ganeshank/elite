<?php
$con = mysqli_connect("localhost:3306","root","","elitedea_userstaging");
if(!$con)
{
	echo "error".mysqli_error();
}
else
{   
	$db = mysqli_select_db($con,"elitedea_userstaging");
	if(!$db)
	{
		echo "error".mysqli_error();
	}
	else
	{   
		echo "";
	}
	echo "";
}
?>