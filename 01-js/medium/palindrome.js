/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let str1="";
if(str.length==1){
  return true;
}
for (let i = 0; i < str.length; i++) { 
  const c = str.charAt(i); 
  if (c.match(/[a-zA-Z0-9]/)) 
    str1 += c.toLowerCase(); 
} 

let str3=str1.split("").reverse().join("");
if(str1.toLowerCase()==str3.toLowerCase()){
  return true;
}
return false;
}

module.exports = isPalindrome;
