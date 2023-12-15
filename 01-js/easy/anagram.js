/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  // Checking whether the lenght of the strings are same or not

  if (str1.length != str2.length){
    return false
  }
  else{
    new_str1 = str1.toLowerCase()
    new_str2 = str2.toLowerCase()

    new_str1 = new_str1.split("")
    new_str2 = new_str2.split("")

    new_str1 = new_str1.sort()
    new_str2 = new_str2.sort()

    if (new_str1 == new_str2){
      return true
    }
    else{
      return false
    }


  }

}

module.exports = isAnagram;
