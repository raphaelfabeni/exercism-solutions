var countWords = function (words) {
    var wordsObj = Object.create(null);
    words.forEach(function (word) {
        wordsObj[word] = wordsObj[word] || 0;
        wordsObj[word] += 1;
    });
    return wordsObj;
};

var Words = function (input) {
    var phrase = input.replace(/[\n\t]/g, ' ');
    phrase = phrase.replace(/  /g, ' ');
    phrase = phrase || '';
    phrase = phrase.split(' ');
    this.count = countWords(phrase);

    return this.count;
};

module.exports = Words;