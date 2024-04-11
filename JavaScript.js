// function charOccurence(str, letter) {
//   let count = 0;
//   for (i = 0; i <= str.length; i++) {
//     if (str[i] == letter) {
//       count += 1;
//     }

//   }
//   return count;
// }

// Using regular exp
function countStr(str, letter) {
  const re = RegExp(letter, "g");
  const count = str.match(re).length;
  return count;
}
let string = prompt("Enetr a string");
let letter = prompt("Enter a letter");
let result = countStr(string, letter);
document.write(result);
