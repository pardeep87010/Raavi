let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 4000); // Adjust slide speed here (change this value)
}

function toggleNavbar() {
    document.querySelector('.navbar').classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("Navbar Loaded");
});


// section 4 

// end section 4 

// navbar 

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    let isScrolling;

    window.addEventListener('scroll', () => {
        navbar.style.top = '0'; // Show the navbar when scrolling starts

        // Clear our timeout throughout the scroll
        window.clearTimeout(isScrolling);

        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(() => {
            navbar.style.top = '-60px'; // Hide the navbar after scrolling stops
        }, 5000); // 2 seconds after scrolling stops
    }, false);
});


// end navbar
