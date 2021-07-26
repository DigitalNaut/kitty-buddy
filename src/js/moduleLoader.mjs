export async function getHtml(path) {
  try {
    const source = await fetch(path);
    const blob = await source.blob();
    const content = blob.text();
    return content;
  } catch (error) {
    console.log("An error?!");
    return `<span>Error: ${err}<span>`;
  }
}

// async function createComponent(componentName, htmlSourcePath) {
//   const template = document.createElement("template");
//   template.innerHTML = await getHtml(htmlSourcePath);

//   try {
//     customElements.define(
//       componentName,
//       class extends HTMLElement {
//         constructor() {
//           super();
//           console.log(`Class ${componentName} created!`);
//         }

//         connectedCallback() {
//           console.log("connectedCallback");
//           this.attachShadow({ mode: "closed" }).appendChild(template.content);
//         }
//       }
//     );    
//   } catch (error) {
//     console.error(`Error creating component: ${error}`);
//   }
// }

// export default createComponent;
