
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex'); // Switch between hidden and flex when clicked
  });

document.addEventListener("DOMContentLoaded", function () {

  // --- NAVBAR BRAND ---
  // Targets the "EzIcHi" logo text on the left of the navbar.
  // It slides down from above and fades in first.
  gsap.from("nav .font-bold", {
    y: -30,
    autoAlpha: 0,
    duration: 0.6,
    ease: "power2.out"
  });

  // --- DESKTOP NAV LINKS ---
  // Only runs on screens wider than 768px (desktop).
  // On mobile your hamburger menu is showing instead, so we skip this.
  // Targets the four <a> tags inside the nav's <ul>.
  if (window.innerWidth > 768) {
    gsap.from("#menu ul li a", {
      y: -20,
      autoAlpha: 0,
      duration: 0.5,
      stagger: 0.1, // each link appears 0.1s after the previous
      delay: 0.3,
      ease: "power2.out"
    });
  }

  // --- HERO HEADING ---
  // Targets your <h1> which contains "I'm" and the typed text.
  // Slides up from below and fades in.
  gsap.from("#intro h1", {
    y: 50,
    autoAlpha: 0,
    duration: 0.8,
    delay: 0.4,
    ease: "power3.out"
  });

  // --- HERO PARAGRAPH ---
  // The subtitle paragraph under your heading.
  gsap.from("#intro p", {
    y: 40,
    autoAlpha: 0,
    duration: 0.8,
    delay: 0.6,
    ease: "power3.out"
  });

  // --- HERO BUTTON ---
  // The "My Projects.." anchor button.
  // Uses back.out for a snappy pop-in feel that draws the eye.
  gsap.from("#intro a", {
    scale: 0.8,
    autoAlpha: 0,
    duration: 0.6,
    delay: 0.8,
    ease: "back.out(1.7)"
  });

  // --- PROFILE PHOTO ---
  // Your circular profile photo slides in from the right.
  // x: 60 means it starts 60px to the right of its natural position.
  // This creates a nice horizontal contrast against the vertical text animations.
  gsap.from("#home img", {
    x: 60,
    autoAlpha: 0,
    duration: 1,
    delay: 0.4,
    ease: "power3.out"
  });

});
