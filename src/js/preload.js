// Prevent CSS animations from firing until page loads
document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.remove("preload");
});
