export class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const template = document.getElementById(
      "headerComponent"
    ) as HTMLTemplateElement;
    if (template) {
      const content = template.content.cloneNode(true);
      this?.appendChild(content);
    }
  }
}

customElements.define("my-header", Header);
