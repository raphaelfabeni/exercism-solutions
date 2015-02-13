//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.isQuestion = function(input) {
  return input.charAt(input.length - 1) === '?';
};

Bob.prototype.isSilentTreatment = function(input) {
  return /^\s*$/.test(input);
};

Bob.prototype.isShouting = function(input) {
  return input.toUpperCase() === input && input.toLowerCase() !== input;
};

Bob.prototype.hey = function(input) {
  if (this.isSilentTreatment(input)) {
    return 'Fine. Be that way!';
  }

  if (this.isShouting(input)) {
    return 'Whoa, chill out!';
  }

  if (this.isQuestion(input)) {
    return 'Sure.';
  }

  return 'Whatever.';
};

module.exports = Bob;
