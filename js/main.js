document.addEventListener('DOMContentLoaded', function() {
    // Load actual images (for thumbnails and previews) if JavaScript is enabled
    document.querySelectorAll('img[data-src]').forEach(img => {
        let actualSrc = img.getAttribute('data-src');
        if (actualSrc) {
            img.src = actualSrc;
        }
    });
});
