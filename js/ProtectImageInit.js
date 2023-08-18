// Target only the images inside elements with the class 'ImageWrapper' or 'PreviewImageWrapper'
window.addEventListener("load", function() {
    // Target images within 'ImageWrapper', 'PreviewImageWrapper', and potential 'LightboxImageWrapper'
    var targetedImages = document.querySelectorAll(".ImageWrapper img, .PreviewImageWrapper img");
    
    // Exclude images within UI elements and logos
    var excludedImages = document.querySelectorAll(".ResourceTools img, .ResourcePanelTools img, .fa img, .HomePanel img, .TopInpageNavLeft img, .TopInpageNavRight img, #HeaderLogo");
    
    // Convert NodeList to Array and filter out excluded images
    targetedImages = Array.from(targetedImages).filter(img => !Array.from(excludedImages).includes(img));
    
    ProtectImageJS.protect(targetedImages);
});