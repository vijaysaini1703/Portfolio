/* ================= MOBILE MENU ================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

/* ================= DARK / LIGHT MODE ================= */

const themeBtn = document.getElementById("theme-toggle");

/* ================= LOAD SAVED THEME ================= */
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    if (themeBtn) themeBtn.classList.add("active");
  } else {
    document.body.classList.remove("light-mode");
    if (themeBtn) themeBtn.classList.remove("active");
  }
});

/* ================= TOGGLE THEME (SWIPE BUTTON) ================= */
if (themeBtn) {
  themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");
    themeBtn.classList.toggle("active");

    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }

  });
}
/* ================= ACTIVE NAV LINK ================= */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navItems.forEach(link => {

    link.classList.remove("active-link");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active-link");
    }

  });

});

/* ================= NAVBAR EFFECT ================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (!navbar) return;

  if (window.scrollY > 50) {

    navbar.style.backdropFilter = "blur(15px)";
    navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";

  } else {

    navbar.style.boxShadow = "none";

  }

});

/* ================= SCROLL ANIMATION ================= */

const revealElements = document.querySelectorAll(
  ".skill-card,.certificate-card,.project-card,.achievement-card,.timeline-item,.internship-card"
);

function reveal() {

  revealElements.forEach(element => {

    const windowHeight = window.innerHeight;
    const top = element.getBoundingClientRect().top;

    if (top < windowHeight - 100) {
      element.classList.add("show");
    }

  });

}

window.addEventListener("scroll", reveal);
reveal();

/* ================= SKILL BAR ANIMATION ================= */

const skillBars = document.querySelectorAll(".progress");

function animateSkills() {

  skillBars.forEach(bar => {

    const value = bar.getAttribute("data-width");

    const top = bar.getBoundingClientRect().top;

    if (top < window.innerHeight - 50) {
      bar.style.width = value;
    }

  });

}

window.addEventListener("scroll", animateSkills);
animateSkills();

/* ================= PROJECT POPUP ================= */

const projectImages = document.querySelectorAll(".project-card img");

projectImages.forEach(img => {

  img.addEventListener("click", () => {

    const modal = document.createElement("div");

    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.background = "rgba(0,0,0,0.9)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "9999";

    modal.innerHTML = `
      <img src="${img.src}"
      style="max-width:90%;max-height:90%;border-radius:15px;">
    `;

    modal.addEventListener("click", () => {
      modal.remove();
    });

    document.body.appendChild(modal);

  });

});

/* ================= CONTACT FORM ================= */

const form = document.querySelector(".contact-form");

if (form) {

  form.addEventListener("submit", function (e) {

    e.preventDefault();

    const btn = form.querySelector("button");

    btn.innerHTML = "Sending...";

    setTimeout(() => {

      btn.innerHTML = "Message Sent ✓";
      btn.style.background = "#28a745";

      form.reset();

      setTimeout(() => {
        btn.innerHTML = "Send Message";
        btn.style.background = "";
      }, 3000);

    }, 1500);

  });

}

/* ================= COUNTER ANIMATION ================= */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  const updateCount = () => {

    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const increment = target / 100;

    if (count < target) {

      counter.innerText = Math.ceil(count + increment);

      setTimeout(updateCount, 20);

    } else {

      counter.innerText = target;

    }

  };

  updateCount();

});

/* ================= BACK TO TOP ================= */

const backTop = document.getElementById("backToTop");

if (backTop) {

  window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
      backTop.style.display = "flex";
    } else {
      backTop.style.display = "none";
    }

  });

  backTop.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}

/* ================= TYPING EFFECT ================= */

const typing = document.querySelector(".typing");

if (typing) {

  const text = "Civil Engineer | Web Developer";
  let i = 0;

  typing.innerHTML = "";

  function type() {

    if (i < text.length) {

      typing.innerHTML += text.charAt(i);
      i++;

      setTimeout(type, 100);

    }

  }

  type();

}

