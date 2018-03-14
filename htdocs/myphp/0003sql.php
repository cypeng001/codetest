<?php

$con = mysqli_connect("localhost:3306","root","");

if ($con)
{
	echo "Connect Success\n";
	//echo "<br/>";
}
else
{
	die('Connect Fail');
}

mysqli_select_db($con, "roledb");

$result = mysqli_query($con, "SELECT * FROM role_data");

if (!$result)
{
	die('SELECT FAIL: ' . mysqli_error($con));
}

while($row = mysqli_fetch_array($result))
{
	//var_dump($row);
	echo $row['id'] . " " . $row['name'] . " " . $row['sex'] . "\n";
	//echo "<br/>";
}

mysqli_close($con);

?>