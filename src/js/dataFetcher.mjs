import { getAgeFromDOB, formatAge } from "./datesWrangler.mjs";

export async function fetchData(page, limit) {
  return await fetch(
    `https://60f2262e6d44f3001778853a.mockapi.io/api/Cats?page=${page}&limit=${limit}`
  ).then(async (data) => await data.json());
}

export function createDisplayElement(elementType, { image, name, age }, callback) {
  let newItem = document.createElement(elementType);
  newItem.classList.add("grid-item");

  const ageObj = getAgeFromDOB(age);
  const ageStr = formatAge(ageObj);

  newItem.innerHTML = callback({ image, name, ageStr });

  return newItem;
}

export async function loadItems(container, constructor, page, itemsNum) {
  // Fetch data from DB
  const data = await fetchData(page, itemsNum);

  // Populate the grid
  data.forEach((item) => {
    container.appendChild(constructor(item));
  });
}
