var anagram = function(input) {  
  return {
    matches: function() {
      var newArr = typeof arguments[0] === 'string'? Array.prototype.slice.call(arguments) : arguments[0]
      return newArr.filter(function(i){
        var inputLower = input.toLowerCase(),
            iLower = i.toLowerCase();
        
        if(iLower === inputLower) { return; }
        
        if(order(iLower) === order(inputLower)) {
          return iLower;
        }
      });
    }
  }
};

function order(word) {
   return word.split('').sort().join('');
};



module.exports = anagram;