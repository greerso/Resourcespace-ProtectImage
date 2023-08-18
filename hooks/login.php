<?php

function Hookprotect_imageAllRenderLoginFormField(){
    echo '<input type="hidden" id="js_check" name="js_check" value="disabled">';
    echo '<script>document.getElementById("js_check").value = "enabled";</script>';
}

function Hookprotect_imageAllLoginCheckusercredentials(){
    global $error;

    if (isset($_POST['js_check']) && $_POST['js_check'] == "disabled") {
        $error = "JavaScript is required to use this platform.";
        return false;  // Prevent login
    }

    return true;  // Allow login
}
