// Prevent the default right-click menu on the entire page
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    
    // Display the custom context menu
    let customMenu = document.querySelector('.custom-context-menu');
    if (customMenu) {
        customMenu.style.display = 'block';
        customMenu.style.top = e.clientY + 'px';
        customMenu.style.left = e.clientX + 'px';
    }
}, false);

document.addEventListener('click', function(e) {
    // Hide context menus on any click
    document.querySelectorAll('.custom-context-menu').forEach(menu => {
        menu.style.display = 'none';
    });
});

document.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('download-option')) {
        // Display the download sub-menu
        let downloadSubMenu = document.querySelector('.download-sub-menu');
        if (downloadSubMenu) {
            downloadSubMenu.style.display = 'block';
        }
    } else {
        // Hide the download sub-menu
        let downloadSubMenu = document.querySelector('.download-sub-menu');
        if (downloadSubMenu) {
            downloadSubMenu.style.display = 'none';
        }
    }
});

// Function to apply blur effect
function applyBlurEffect() {
    let resources = document.querySelectorAll('.ResourceThumbnail, .ResourcePreview');
    resources.forEach(resource => {
        resource.style.filter = 'blur(5px)'; // Adjust the pixel value as needed
    });
}

// Function to remove blur effect
function removeBlurEffect() {
    let resources = document.querySelectorAll('.ResourceThumbnail, .ResourcePreview');
    resources.forEach(resource => {
        resource.style.filter = 'none';
    });
}

// Event listeners for window focus and blur
window.addEventListener('blur', applyBlurEffect);
window.addEventListener('focus', removeBlurEffect);

ProtectImage({
    protect: "all"
});
