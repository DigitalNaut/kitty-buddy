window.toggleDarkMode = () => {

  const darkElements = document.getElementsByClassName("dark");

  for (let element of darkElements) {
    if (element.classList.toggle("dark-theme"))
      element.classList.add("dark-theme");
  }
};
