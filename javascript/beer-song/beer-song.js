var Beer = {};

Beer.verse = function(verse) {
  return this.voice(verse);
};

Beer.sing = function(startVerse, endVerse) {
  var song = "";
  var end = endVerse ? endVerse : 0;

  for(var i = startVerse; i >= end; i--) {
    song = song + this.verse(i);
    if(i !== end) {
      song = song + '\n';
    }
    
  }
  return song;
};

Beer.voice = function(verse) {
  var amount, rest, phrase, action;
  switch(verse) {
    case 0:
      amount = 'No more bottles ';
      action = 'Go to the store and buy some more, '
      rest = '99 bottles'
      break;
    case 1:
      amount = '1 bottle ';
      action = 'Take it down and pass it around, '
      rest = 'no more bottles'
      break;
    case 2:
      amount = '2 bottles ';
      action = 'Take one down and pass it around, '
      rest = '1 bottle'
      break;
    default:
      amount = verse + ' bottles ';
      action = 'Take one down and pass it around, '
      rest = (verse - 1) + ' bottles';
      break;
  }

  phrase = amount + 'of beer on the wall, ' + amount.toLowerCase() + 'of beer.\n' + action + rest + ' of beer on the wall.\n';

  return phrase;
};

module.exports = Beer;