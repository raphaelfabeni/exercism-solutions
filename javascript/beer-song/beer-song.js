var Beer = {};

Beer.verse = function(verse) {
  var amount, rest, phrase, action;
  switch(verse) {
    case 0:
      amount = 'No more bottles ';
      action = 'Go to the store and buy some more, '
      rest = '99'
      break;
    case 1:
      amount = '1 bottle ';
      action = 'Take it down and pass it around, '
      rest = 'no more'
      break;
    default:
      amount = verse + ' bottles ';
      action = 'Take one down and pass it around, '
      rest = verse - 1;
      break;
  }

  phrase = amount + 'of beer on the wall, ' + amount.toLowerCase() + 'of beer.\n' + action + rest + ' bottles of beer on the wall.\n';

  return phrase;
};

module.exports = Beer;