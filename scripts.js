
let sentence = prompt("Enter a sentence");

function capitalize (sentence) {
	const firstLetter = sentence.charAt(0);
  const uppercaseFirstLetter = firstLetter.toUpperCase();
  const length = sentence.length;
  const lastLetter = sentence.charAt(length - 1);
  const uppercaseLastLetter = lastLetter.toUpperCase();
  const wholeSentence = uppercaseLastLetter + sentence.slice(1, length - 1) + uppercaseFirstLetter;
  return alert(wholeSentence);
}

capitalize(sentence); 

let sentence = prompt("Enter a sentence");
function concat (sentence) {
const length = sentence.length;
const divide = Math.floor(length / 2);
const character = sentence.charAt(divide);
return alert(character + sentence);
}

let sentence = prompt("Enter a sentence");

function reverseString(sentence) {
  return str.split("").reverse().join("");
}
reverseString(sentence);

let sentence = prompt("Enter a sentence");

function reverseString(sentence) {
  return sentence.split("").reverse().join("");
}
alert(reverseString(sentence));
