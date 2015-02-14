var DNA = {};

DNA.compute = function (arr1, arr2) {
  var count = 0,
      dna1 = arr1.split(''),
      dna2 = arr2.split('');
  
  if(dna1.length !== dna2.length) {
    throw new Error('DNA strands must be of equal length.');
  }
  
  for(var i =0; i < dna1.length; i++){
    if( dna1[i] !== dna2[i] ) {
      count += 1;
    }
  }
  
  return count;
};

module.exports = DNA;