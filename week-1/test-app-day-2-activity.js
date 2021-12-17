// activity morning session

// activity 1

// option 1

// function introduction(name, age, colour) {
//   console.log(`My name is ${name}. I am ${age}. My favourite colour is ${colour}.`)
// }

// introduction('Iryna', 33, 'blue');
// introduction('Jane', 30, 'red');

// option 2

// let name = 'Iryna';
// let age = 33;
// let dinnercolour = 'blue';

// console.log(`My name is ${name}. I am ${age}. My favourite colour is ${colour}.`);

// name = 'Jane';
// age = 30;
// colour = 'red';

// console.log(`My name is ${name}. I am ${age}. My favourite colour is ${colour}.`);

// activity 2

// let breakast = 'oat porridge';
// let lunch = 'soup';
// let dinner = 'salad';

// console.log(`I ate ${breakast} for breakfast, ${lunch} for lunch and ${dinner} for dinner.`);

// breakast = 'avocado toast';
// lunch = 'chicken roast';
// dinner = 'pasta';

// console.log(`Tomorrow I will eat ${breakast} for breakfast, ${lunch} for lunch and ${dinner} for dinner.`);

// activity 3

// const birthday = new Date('06/29/1988');
// const oneDay = 1000 * 60 * 60 * 24;
// const today = new Date();

// const difference = Math.round((today.getTime() - birthday.getTime()) / oneDay);

// console.log(difference);

// activity 4

// const space1 = 'x';
// const space2 = 'o';
// const space3 = 'o';
// const space4 = 'x';
// const space5 = 'o';
// const space6 = 'o';
// const space7 = 'x';
// const space8 = 'x';
// const space9 = 'o';

// function matrix() {

//   for (let i = 0; i <= 2; i++) {
    
//     for (let j = 0; j < 3; j++) {
//       if (j === 1) {
//         console.log(`  ${space5}   |   ${space6}   |   ${space8}    `)
//       } else {
//         console.log(`      |       |       `)
//       }
      
//     }
//     if (i < 2) {
//       console.log('- - - - - - - - - - -')
//     }
    
    
//   }

// }

// matrix();

// activity afternoon session

// activity 1

const age = 33;

if (age > 17) {
  console.log("Yes I can serve you")
} else {
  console.log("You aren't old enough")
}

const country = "UK";

if (age > 17 && country == "UK") {
  console.log("Yes I can serve you")
} else {
  console.log("You aren't old enough")
}

// activity 2

const topping = "cheese";

switch(topping) {
  case "cheese":
    console.log("These are important ingredients for my pizza")
    break;
  case "pepperoni":
    console.log(`I don’t mind having ${topping} on my pizza`)
    break;
  default:
    console.log(`${topping} should not be on a pizza`)
}

// activity 3

const password = "strongP@ssword";

if (password.length < 7) {
  console.log("Password is too short")
} else {
  console.log(password)
}

// activity 4

const num = 9;

if (num % 3 === 0 || num % 5 === 0) {
  console.log("This number is divisible by 3 or 5")
} else {
  console.log("Try another number")
}

// activity 5

const num1 = 10;

switch(true) {
  case num1 % 3 === 0:
    console.log("fizz")
    break;
  case num1 % 5 === 0:
    console.log("buzz")
    break;
  case num1 % 3 === 0 && num1 % 5 === 0:
    console.log("fizz buzz")
    break;  
  default:
    console.log(num1)
}

// activity 6

const num2 = 3151513;

function checkPalindrome(num) {
  
  const string = num.toString();
  
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return console.log("This is not palindrome!")
    }
  }
  console.log("This is palindrome!")
}

checkPalindrome(num2)

// activity 7

const date = new Date();
const time = date.getHours();

if (time <= 8) {
  console.log("I am at home")
} else if (time < 9) {
  console.log("I am commuting")
} else if (time >= 9) {
  console.log("I am at work")
}

// activity 8

const newString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";

function findVowel(str) {
  
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  vowels.forEach(i => console.log(str.lastIndexOf(i)))

  console.log(vowels[i] - str.lastIndexOf(i))
  }

  findVowel(newString)

  // activity 9

  const word = "Some random word";
  const wordLower = word.toLowerCase();

  if (wordLower.charAt(0) == wordLower.charAt(wordLower.length -1)) {
    return console.log(true)
  } else {
    return console.log(false)
  }

  // activity 10

  const num9 = 5;
  const num11 = 8;

  const sum = num9 + num11;
  const multiply = num9 * num11;

  if (sum % 2 === 0) {
    console.log(sum)
    return sum;
  } else {
    console.log(multiply)
  }