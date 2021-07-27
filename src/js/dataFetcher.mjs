export async function fetchData(page, limit) {
  return await fetch(
    `https://60f2262e6d44f3001778853a.mockapi.io/api/Cats?page=${page}&limit=${limit}`
  ).then(async (data) => await data.json());
}

const data = await fetchData(1, 16);
console.log(data);

// Fetch DOM references
const notice = document.getElementById("notice-empty");
const grid = document.getElementById("grid-gallery");

// Hide the display
notice.style.display = "none";

// Construct grid item
function createGridItem({ image, name, age }) {
  let newItem = document.createElement("grid-profile");
  newItem.classList.add("grid-item");

  const ageObj = getAgeFromDOB(age);
  const ageStr = formatAge(ageObj);

  console.log(age);

  newItem.innerHTML = `
  <img slot="image" class="picture" src="${image}" />
  <span slot="name" class="caption-name">${name}</span>
  <span slot="age" class="caption-age">${ageStr}</span>
  `;

  return newItem;
}

function getAgeFromDOB(age) {
  const diff = new Date(Date.now() - new Date(age));

  return {
    years: diff.getFullYear() - 1970,
    months: diff.getMonth(),
    days: diff.getDate(),
    hours: diff.getHours(),
  };
}

function formatAge({ years, months, days }, label = false) {
  // OUTPUT: Age: Y years and M month[s]-old
  // OUTPUT: Age: M months and D day[s]-old
  // OUTPUT: Age: D day[s]-old

  function numSpell(num) {
    const numNouns = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];
    if (num >= 0 && num < 10) return numNouns[num];
    else return num;
  }

  let ageString = label ? "Age: " : "";

  ageString += years > 0 ? `${numSpell(years)} years and ` : "";
  // prettier-ignore
  ageString += months > 0 ? `${numSpell(months)} month${months > 1 ? "s" : ""}` : "";
  // prettier-ignore
  ageString += years === 0 && days > 0 ? `${months > 0 ? " and " : ""}${numSpell(days)} day` : "";
  ageString += years === 0 && days > 1 ? "s" : "";
  ageString += years > 0 || months > 0 || days > 0 ? "-old" : "";

  return ageString;
}

// const data = [{ age: "1990-11-25T23:04:55.530Z" }];

// Populate the grid
data.forEach((item) => {
  grid.appendChild(createGridItem(item));
});
