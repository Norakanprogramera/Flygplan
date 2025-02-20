console.log("salam världen!")


console.log("hjälp det funkar inte")

//slideshowskitensomtog1oårförattfunka
let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");

    if (slides.length === 0) {
        console.error("Inga bilder hittades! Kontrollera HTML-strukturen.");
        return;
    }

    
    slides.forEach(slide => (slide.style.display = "none"));

    
    slideIndex++;

    
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    
    slides[slideIndex].style.display = "block";

    
    setTimeout(showSlides, 3000);
}



document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");

    if (slides.length > 0) {
        slides[0].style.display = "block"; 
    }

    setTimeout(showSlides, 3000); 
});

//menyskiten
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("show"); 
    });
});

//sökfunktionsskiten
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const searchContainer = document.querySelector('.search-container');

searchButton.addEventListener('click', () => {
    searchContainer.classList.toggle('active');
    if (searchContainer.classList.contains('active')) {
        searchInput.focus();
    } else {
        searchInput.value = '';
    }
});


searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
            window.open(`https://www.google.com/search?q=${query}`, '_blank');
        }
    }
});

// JavaScript för att markera aktiv länk i menyn
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.menu ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});
document.querySelectorAll('.tema-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
