import { getHtml } from "../../js/moduleLoader.mjs";
import "../../js/darkThemeToggle.mjs";

const template = document.createElement("template");
template.innerHTML = await getHtml("./src/components/Header/header.htm");

class Header extends HTMLElement {
  constructor() {
    super();
  }

  toggleIcon;

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.toggleIcon = this.shadowRoot.getElementById("toggle-icon");
    this.applyTheme(this.toggleIcon);

    this.shadowRoot.addEventListener("click", () =>
      this.applyTheme(this.toggleIcon)
    );

  }

  applyTheme(target) {
    let theme = window.localStorage.getItem("displayMode");

    let classToAdd, classToRemove;
    if (theme === "light") {
      classToAdd = "fa-moon";
      classToRemove = "fa-sun";
    } else if (theme === "dark") {
      classToAdd = "fa-sun";
      classToRemove = "fa-moon";
    }

    target.classList.remove(classToRemove);
    target.classList.add(classToAdd);
  }
}

customElements.define("header-component", Header);
