var sentence = "I'll Believe it when i see it";
function countWords(sentence){
    var words = sentence.split(" ");
    return words.length;
}
console.log(countWords(sentence));