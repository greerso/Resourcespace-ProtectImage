<?php
include "../../../include/db.php";
include "../../../include/authenticate.php"; 

// Only destroy the session if it's already started
if (session_status() == PHP_SESSION_ACTIVE) {
    session_destroy();
}

// Redirect to the main login page with an error message
header("Location: " . $baseurl . "/login.php?error=JavaScript is required to use this platform.");
exit();
