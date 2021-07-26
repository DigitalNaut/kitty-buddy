import { getHtml } from "/src/js/moduleLoader.mjs";

const template = document.createElement("template");
template.innerHTML = await getHtml("../src/components/Footer/footer.htm");

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("footer-component", Footer);
