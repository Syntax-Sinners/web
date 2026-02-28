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