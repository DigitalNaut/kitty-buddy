import { getHtml } from "../../js/moduleLoader.mjs";

const template = document.createElement("template");
template.innerHTML = await getHtml("./src/components/Footer/footer.htm");

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.modal = this.shadowRoot.getElementById("modal");
    this.modalOpen = this.shadowRoot.getElementById("modal-open");
    this.modalClose = this.shadowRoot.getElementById("modal-close");

    this.modalOpen.onclick = () => (this.modal.style.display = "block");
    this.modalClose.onclick = () => (this.modal.style.display = "none");
  }
}

customElements.define("footer-component", Footer);
