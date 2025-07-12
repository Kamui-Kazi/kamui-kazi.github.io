import { setCookie, getCookie } from "./cookies.js";

function load_theme() {
  const root = document.documentElement;
  const theme = getCookie("theme");
  if (theme === "dark") {
    root.className = "darkmode";
  }
  if (theme === "light") {
    root.className = "lightmode";
  }
  console.log("%s theme loaded", theme);
}

function set_label_text() {
  const theme_toggle_trigger = document.getElementById("theme_toggle_trigger");
  const theme = getCookie("theme");
  if (theme === "dark") {
    theme_toggle_trigger.textContent = "Light Mode";
  }
  if (theme === "light") {
    theme_toggle_trigger.textContent = "Dark Mode";
  }
}

function toggle_theme() {
  const root = document.documentElement;

  const isDark = root.classList.toggle("darkmode");
  setCookie("theme", isDark ? "dark" : "light", 365);
  set_label_text();
}

function awake() {
  load_theme();
  set_label_text();
}

document.addEventListener("DOMContentLoaded", awake);

document
  .getElementById("theme_toggle_trigger")
  .addEventListener("click", toggle_theme);
