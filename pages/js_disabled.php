<?php
include "../../../include/db.php";
include "../../../include/authenticate.php"; 

// Logout the user
session_destroy();

// Redirect to the main login page with an error message
header("Location: " . $baseurl . "/login.php?error=JavaScript is required to use this platform.");
exit();
