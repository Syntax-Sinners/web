const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const storedTheme = localStorage.getItem("syntax-theme");

if (storedTheme === "dark") {
  root.setAttribute("data-theme", "dark");
}

themeToggle.addEventListener("click", () => {
  const isDark = root.getAttribute("data-theme") === "dark";

  if (isDark) {
    root.removeAttribute("data-theme");
    localStorage.setItem("syntax-theme", "light");
    return;
  }

  root.setAttribute("data-theme", "dark");
  localStorage.setItem("syntax-theme", "dark");
});

// Scroll-based Hero Transitions
const hero = document.querySelector('.hero');
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const threshold = 600; // Animation range in pixels
  const progress = Math.max(0, Math.min(scrollY / threshold, 1));

  if (hero) {
    // Zoom in and push upward
    const scale = 1 + progress * 0.5;
    const translateY = progress * -250;
    const opacity = 1 - progress * 1.5;

    hero.style.transform = `scale(${scale}) translateY(${translateY}px)`;
    hero.style.opacity = Math.max(0, opacity);

    // Performance optimization: hide hero when fully scrolled past
    if (progress >= 1) {
      hero.style.visibility = 'hidden';
    } else {
      hero.style.visibility = 'visible';
    }
  }
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -50px 0px'
};

const revealOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      // Optional: unobserve if you only want it to happen once
      // observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove('in-view');
    }
  });
}, observerOptions);

document.querySelectorAll('.team-card').forEach(card => {
  revealOnScroll.observe(card);
});


// 3D tilt interaction for service cards
const tiltCards = document.querySelectorAll(".service-card");
tiltCards.forEach((card) => {
  let frame;

  const reset = () => {
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
    card.classList.remove("tilt-active");
  };

  const handleMove = (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotY = ((x - midX) / midX) * 8; // left/right
    const rotX = -((y - midY) / midY) * 6; // up/down

    if (frame) cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      card.style.setProperty("--ry", `${rotY.toFixed(2)}deg`);
      card.style.setProperty("--rx", `${rotX.toFixed(2)}deg`);
    });
  };

  const handleEnter = () => {
    card.classList.add("tilt-active");
  };

  const handleLeave = () => {
    reset();
  };

  card.addEventListener("mousemove", handleMove);
  card.addEventListener("mouseenter", handleEnter);
  card.addEventListener("mouseleave", handleLeave);
  card.addEventListener("touchstart", reset);
  card.addEventListener("touchend", reset);
});
