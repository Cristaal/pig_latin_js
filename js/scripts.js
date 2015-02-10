var pigLatin = function(word) {
  var vowels = ["a", "e", "i", "o", "u"];
  var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

  if (vowels.indexOf(word[0]) != -1)
    return word.concat("ay");



  else if (consonants.indexOf(word[1]) != -1)
    return word.slice(2) + word.slice(0, 2).concat("ay");

  else if (consonants.indexOf(word[0]) != -1)
    return word.slice(1) + word.slice(0, 1).concat("ay");

}
