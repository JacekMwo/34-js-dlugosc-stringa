let raz = "Uwielbiam JavaScript";
let dwa = "Jestem świetnym programistą";

function longerString(strA, strB) {
  if (strA.length > strB.length) {
    return strA;
  } else {
    return strB;
  }
}

console.log(longerString(raz, dwa));
