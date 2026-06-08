/* ================= MOBILE MENU ================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* Close menu when clicking a nav link */

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


/* ================= ACTIVE NAV LINK ================= */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active-link");
        }

    });

});


/* ================= NAVBAR SHADOW ON SCROLL ================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(13,17,23,0.95)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";

    } else {

        navbar.style.background = "rgba(13,17,23,0.8)";
        navbar.style.boxShadow = "none";

    }

});


/* ================= SCROLL REVEAL ANIMATION ================= */

const revealElements = document.querySelectorAll(
    ".skill-card, .certificate-card, .timeline-item, .project-card, .stat-box"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* ================= CONTACT FORM ================= */

const contactForm = document.querySelector(".contact-form");

if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        const button = contactForm.querySelector("button");

        button.innerHTML = "Sending...";

        setTimeout(() => {

            button.innerHTML = "Message Sent ✓";

            button.style.background = "#28a745";

            contactForm.reset();

        }, 1500);

    });

}


/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* ================= TYPING EFFECT ================= */

const typingElement = document.querySelector(".tagline");

if (typingElement) {

    const text = "CIVIL ENGINEER • WEB DEVELOPER";

    let index = 0;

    typingElement.innerHTML = "";

    function typeText() {

        if (index < text.length) {

            typingElement.innerHTML += text.charAt(index);

            index++;

            setTimeout(typeText, 80);

        }

    }

    typeText();

}