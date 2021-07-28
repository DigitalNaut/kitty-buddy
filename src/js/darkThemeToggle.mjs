window.toggleDarkMode = () => {
  console.log("Dark theme click");
  for (let element of document.getElementsByClassName("dark")) {
    element.classList.toggle("dark");
  }
};
