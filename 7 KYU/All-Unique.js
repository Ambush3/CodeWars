function hasUniqueChars(str){
  var obj = {};
  for (var z = 0; z < str.length; ++z) {
    var ch = str[z];
    if (obj[ch]) return false;
    obj[ch] = true;
  }
  return true;
}
