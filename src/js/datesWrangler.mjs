export function getAgeFromDOB(age) {
  const diff = new Date(Date.now() - new Date(age));

  return {
    years: diff.getFullYear() - 1970,
    months: diff.getMonth(),
    days: diff.getDate(),
    hours: diff.getHours(),
  };
}

export function formatAge({ years, months, days }, label = false) {
  // Follow scientific notation of spelling out numbers below 10
  // OUTPUT: Age: Y years and M month[s]-old
  // OUTPUT: Age: M months and D day[s]-old
  // OUTPUT: Age: D day[s]-old

  function spellOutNum(num) {
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

  // prettier-ignore
  ageString += years > 0 ? `${spellOutNum(years)} year${years > 1 ? "s" : ""}` : "";
  ageString += years > 0 && months > 0 ? " and " : "";
  // prettier-ignore
  ageString += months > 0 ? `${spellOutNum(months)} month${months > 1 ? "s" : ""}` : "";
  // prettier-ignore
  ageString += years === 0 && days > 0 ? `${months > 0 ? " and " : ""}${spellOutNum(days)} day` : "";
  ageString += years === 0 && days > 1 ? "s" : "";
  ageString += years > 0 || months > 0 || days > 0 ? "-old" : "";

  return ageString;
}
