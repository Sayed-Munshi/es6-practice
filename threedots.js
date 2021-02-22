const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 42];
const allAges = ages.concat(ages2).concat(ages3);
const allAges2 = [...ages, ...ages2, ...ages3];
// console.log(allAges2);

const business = 650;
const minister = 450;
const cochib = 339;
const max = Math.max(business, minister, cochib);
const takaPoisa = [650, 345, 1234, 4567];
const max1 = Math.max(...takaPoisa);

console.log(max1);