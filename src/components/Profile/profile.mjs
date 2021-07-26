import { getHtml } from "/src/js/moduleLoader.mjs";

const template = document.createElement("template");
template.innerHTML = await getHtml("../src/components/Profile/profile.htm");

class FeaturedProfile extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    const el = this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("featured-profile", FeaturedProfile);
