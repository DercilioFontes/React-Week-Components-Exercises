/* eslint-disable */
function rando(){
  var letters = 'abcdefghijklmnopqrstuvwxyz';
  var alphabet = `0123456789${letters}${letters.toUpperCase()}`;

 
    var output = '';
    for (var i = 0; i < 6; i += 1) {
      output += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    return output;
  
}