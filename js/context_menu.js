document.addEventListener('contextmenu', function(e) {
    if (e.target.classList.contains('ResourceThumbnail') || e.target.classList.contains('ResourcePreview')) {
        e.preventDefault();
        
        // Hide any existing context menus
        document.querySelectorAll('.custom-context-menu').forEach(menu => {
            menu.style.display = 'none';
        });
        
        // Display the context menu
        let contextMenu = document.querySelector('.custom-context-menu');
        if (contextMenu) {
            contextMenu.style.left = `${e.pageX}px`;
            contextMenu.style.top = `${e.pageY}px`;
            contextMenu.style.display = 'block';
        }
    }
});

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
