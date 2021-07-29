import { getHtml } from "../../js/moduleLoader.mjs";

const template = document.createElement("template");
template.innerHTML = await getHtml("./src/components/FeaturedProfile/featured-profile.htm");

class featuredProfile extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("featured-profile", featuredProfile);
