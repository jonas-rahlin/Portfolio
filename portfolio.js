// Function for adding and removing the css class that contains "display:none".
function showHide(id){
    element = document.getElementById(id);
        if (element.classList.contains("hide")) {
            element.classList.remove("hide");
        }

        else {
            element.classList.add("hide");
        }
}

//Function for disabling scrolling.
function disableScroll() { 
    // Get the current page scroll position.
    scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 
  
        // if any scroll is attempted, set this to the previous value.
        window.onscroll = function() { 
            window.scrollTo(scrollLeft, scrollTop); 
        }; 
}

//Function for disabling scrolling.
function enableScroll() { 
    window.onscroll = function() {}; 
}

//Applying showHIDE() to an element when you hover over another element (ONLY FOR 720P AND LARGER SCREEN SIZES).
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
if (viewportWidth > 720) {
document.getElementById("portfolio-project-info-a").addEventListener("mouseenter", () => showHide("project-info-wrapper-a"));
document.getElementById("portfolio-project-info-a").addEventListener("mouseleave", () => showHide("project-info-wrapper-a"));
document.getElementById("portfolio-project-info-b").addEventListener("mouseenter", () => showHide("project-info-wrapper-b"));
document.getElementById("portfolio-project-info-b").addEventListener("mouseleave", () => showHide("project-info-wrapper-b"));
document.getElementById("portfolio-project-info-c").addEventListener("mouseenter", () => showHide("project-info-wrapper-c"));
document.getElementById("portfolio-project-info-c").addEventListener("mouseleave", () => showHide("project-info-wrapper-c"));
document.getElementById("portfolio-project-info-d").addEventListener("mouseenter", () => showHide("project-info-wrapper-d"));
document.getElementById("portfolio-project-info-d").addEventListener("mouseleave", () => showHide("project-info-wrapper-d"));
}

//Applying showHIDE() on contact modal.
document.getElementById("contact-modal-close").addEventListener("click", () => showHide("connect-contact-modal"));
document.getElementById("connect-contact").addEventListener("click", () => showHide("connect-contact-modal"));

//Enabling and disabling scrolling when contact modal is active.
document.getElementById("connect-contact").addEventListener("click", () => disableScroll());
document.getElementById("contact-modal-close").addEventListener("click", () => enableScroll());


//Applying showHide() on navbar and sitedisabler(wraps site in opacity layer) when the contact modal is active.
document.getElementById("connect-contact").addEventListener("click", () => showHide("nav"));
document.getElementById("connect-contact").addEventListener("click", () => showHide("sitedisabler"));
document.getElementById("contact-modal-close").addEventListener("click", () => showHide("nav"));
document.getElementById("contact-modal-close").addEventListener("click", () => showHide("sitedisabler"));



