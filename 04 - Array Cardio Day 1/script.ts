// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

interface Inventor {
  first: string;
  last: string;
  year: number;
  passed: number;
}

const inventors: Inventor[] = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people: string[] = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen: Inventor[] = inventors.filter(
  (inventor: Inventor): boolean =>
    inventor.year >= 1500 && inventor.year < 1600,
);
console.table(fifteen);
// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const fullNames: string[] = inventors.map(
  (inventor: Inventor): string => `${inventor.first} ${inventor.last}`,
);
console.table(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const ordered: Inventor[] = inventors.sort(
  (a: Inventor, b: Inventor): number => a.year - b.year,
);
console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalYear: number = inventors.reduce(
  (acc: number, inventor: Inventor): number => {
    return acc + (inventor.passed - inventor.year);
  },
  0,
);
console.table(totalYear);

// 5. Sort the inventors by years lived
const sortByLivedYear: Inventor[] = inventors.sort(
  (a: Inventor, b: Inventor): number => {
    return b.passed - a.year - (a.passed - a.year);
  },
);
console.table(sortByLivedYear);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const category = document.querySelector(".mw-category") as HTMLElement;
const links = category.querySelectorAll("a") as NodeListOf<HTMLElement>;

const de: string[] = Array.from(links)
  .map((link: HTMLElement): string => link.textContent as string)
  .filter((streetName: string): boolean => streetName.includes("de"));

// 7. sort Exercise
// Sort the people alphabetically by last name

const alpha: string[] = people.sort((a: string, b: string): number => {
  const [aLast, aFirst] = a.split(", ");
  const [bLast, bFirst] = b.split(", ");
  return aLast > bLast ? 1 : -1;
});
console.table(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data: string[] = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

interface Sum {
  [key: string]: number;
}

const sumForEach: Sum = data.reduce((acc: Sum, item: string): Sum => {
  if (!acc[item]) {
    acc[item] = 0;
  }
  acc[item]++;
  return acc;
}, {});
console.table(sumForEach);
