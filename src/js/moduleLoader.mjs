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

