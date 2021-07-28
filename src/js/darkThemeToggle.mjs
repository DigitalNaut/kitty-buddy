// Toggle night mode settings
function toggleDisplayMode() {
  let mode = window.localStorage.getItem("displayMode");

  // prettier-ignore
  window.localStorage.setItem("displayMode", mode === "light" ? "dark" : "light");

  applyTheme();
}

// Toggle classes based on settings
function applyTheme() {
  let mode = window.localStorage.getItem("displayMode");

  var darkElements = document.getElementsByClassName("dark");

  let changeFn;
  // prettier-ignore
  if (mode === "dark")
    changeFn = (el) => el.classList.add("dark-theme");
  else
    changeFn = (el) => el.classList.remove("dark-theme");

  for (const element of darkElements) changeFn(element);
}

// Initialize display mode
applyTheme();

// Register
window.toggleDarkMode = toggleDisplayMode;
