const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   let titleCased = tutorials.map(element => element.charAt(0).toUpperCase() + element.slice(1).join(' '));
//   return titleCased;
// }

// console.log(titleCased());

const titleCased = () => {
  let titleCased = tutorials.map(element => element.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
  return titleCased;
}

console.log(titleCased());


// let test = ['hello World', 'hello World'];

// function testingTest(array){
//   let titleCased = array.map(element => element.charAt(0).toUpperCase() + element.slice(1).toLowerCase());
//   return titleCased;
// }

// console.log(testingTest(test));

// let string = 'heLlo WorlD'
// let upCasedString = string.charAt(0).toUpperCase();
// let lowCasedString = string.slice(1).toLowerCase();
// let titleCase = upCasedString + lowCasedString;


// console.log(titleCase);