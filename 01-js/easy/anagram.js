/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let isAnagram = true;
  str1=str1.toLowerCase();
  str2=str2.toLowerCase();
    if (str1.length !== str2.length) {
    isAnagram = false;
    return isAnagram;
  }
  for (let i = 0; i < str1.length; i++) {
    if (str2.indexOf(str1[i]) === -1) {
      isAnagram = false;
      return isAnagram;
    }
  }
  return isAnagram;
}

module.exports = isAnagram;
