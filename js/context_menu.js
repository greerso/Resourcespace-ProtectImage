document.addEventListener('DOMContentLoaded', function() {
    // Reference to the custom context menu container
    var customContextMenu = document.getElementById("customContextMenu");

    // Function to show the custom context menu
    function showContextMenu(event) {
        customContextMenu.style.left = event.pageX + "px";
        customContextMenu.style.top = event.pageY + "px";
        customContextMenu.style.display = "block";
    }

    // Hide the custom context menu when clicking elsewhere
    document.addEventListener('click', function(event) {
        if (event.button !== 2) {
            customContextMenu.style.display = "none";
        }
    });

    // Display the custom context menu on right-click
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
        showContextMenu(event);
    });
});
