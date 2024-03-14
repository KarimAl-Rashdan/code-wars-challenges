/* First Challenge
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior" */

/*Psuedocode*/
/*
Input: string
Output: string
remove - and _
if first letter is capitalized keep 
if first letter is lowercased keep
first letter after each _ and/or - is capitalized
find if array has _ or -
if yes remove that element and capitalize next index
*/

function toCamelCase(str) {
  var answer;
  if (str === "") {
    return answer = ""
  } else {
    let listOfLetters = str.split("")
    const checkThisArr = listOfLetters.forEach((letter, index) => {
      if (letter === "-" || letter === "_") {
        const upperCasedLetter = listOfLetters[index + 1].toUpperCase()
        const removedElements = listOfLetters.splice(index, 2, upperCasedLetter)
        answer = listOfLetters.join("")
      }
    })
    return answer
  }
}
console.log("here we go", toCamelCase("red-rum_jamberie"))