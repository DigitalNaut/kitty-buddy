import { loadItems, createDisplayElement } from "./dataFetcher.mjs";

let pageCount = 0;

// Get DOM elements
const grid = document.getElementById("grid-gallery");
const notice = document.getElementById("notice-empty");
const button = document.getElementById("load-button");

function gridProfileConstructor(item) {
  return createDisplayElement(
    "grid-profile",
    item,
    ({ image, name, ageStr }) => {
      return `
      <img slot="image" class="picture" src="${image}" />
      <span slot="name" class="caption-name">${name}</span>
      <span slot="age" class="caption-age">${ageStr}</span>
      `;
    }
  );
}

function loadGridItems() {
  // Alternatingly load 5 or 4 items to maintain grid positions
  // ! Known bug: Inconsistent itemsNum causes page to fetch items that were already displayed, leading to duplicates
  const itemsNum = ++pageCount % 2 ? 5 : 4;
  loadItems(grid, gridProfileConstructor, pageCount, itemsNum);
}

// Populate the grid first
loadGridItems();

// Hide the default message and show the load button
notice.style.display = "none";
button.style.display = "flex";

// Construct grid item

// Register callback on window to call from page
window.loadGridItems = loadGridItems;
