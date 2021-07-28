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

  var elements = [...document.getElementsByClassName("dark")];

  if (elements.length > 0) {
    if (mode === "dark")
      elements.forEach((element) => {
        element?.classList.add("dark-theme");
      });
    else if (mode === "light")
      elements.forEach((element) => {
        element?.classList.remove("dark-theme");
      });
  }
}

// Initialize display mode
applyTheme();

// Register
window.toggleDarkMode = toggleDisplayMode;
