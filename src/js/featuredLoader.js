import { loadItems, createDisplayElement } from "./dataFetcher.mjs";

let pageCount = 0;

// Get DOM elements
const container = document.getElementById("featured-profiles");

function constructor(item) {
  return createDisplayElement(
    "featured-profile",
    item,
    ({ image, name, ageStr }) => {
      return `
      <img slot="image" class="picture" src="${image}" />
      <span slot="name">${name}</span>
      <span slot="age">${ageStr}</span>
      `;
    }
  );
}

const itemNum = 3;
const randomPage = Math.floor(Math.random() * (50 / itemNum) + 1);

loadItems(container, constructor, randomPage, 3);
