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

// Reveal team cards on scroll
const teamCards = document.querySelectorAll(".team-card");
if (teamCards.length) {
  const isMobileTeamLayout = () => window.matchMedia("(max-width: 760px)").matches;

  const setActiveTeamCard = () => {
    if (isMobileTeamLayout()) {
      teamCards.forEach((card) => card.classList.add("in-view"));
      return;
    }

    const focusY = window.scrollY + window.innerHeight * 0.42;
    let activeIndex = 0;

    teamCards.forEach((card, index) => {
      const cardTop = window.scrollY + card.getBoundingClientRect().top;
      if (focusY >= cardTop) activeIndex = index;
    });

    teamCards.forEach((card, index) => {
      card.classList.toggle("in-view", index === activeIndex);
    });
  };

  let ticking = false;
  const queueSetActiveTeamCard = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      setActiveTeamCard();
      ticking = false;
    });
  };

  setActiveTeamCard();
  window.addEventListener("scroll", queueSetActiveTeamCard, { passive: true });
  window.addEventListener("resize", queueSetActiveTeamCard);
}

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
