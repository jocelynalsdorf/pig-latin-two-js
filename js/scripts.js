var pig = function(sentence) {
  var sent = sentence.toLowerCase();
  var splitAt = indexOfFirstVowel(sent) 
  var newWord = sent.slice(splitAt) + sent.slice(0, splitAt);
  var nwLength = newWord.length;
    if (newWord[nwLength - 1] === "q") { 
      var final = newWord.slice(1) + "uay";
      return final;
    } else {
      return newWord + "ay"; 
    }
};

var indexOfFirstVowel = function(word){
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var letters = word.split("");
  for(var i = 0; i < letters.length; i ++) {
    for(var j = 0; j < vowels.length; j++) {
      if (letters[i] === vowels[j]) {
          return i;
        }
      } 
    }
  
};

// $(document).ready(function(){

//   $("form#factorial").submit(function(event){
//     event.preventDefault();
//     var num = parseInt($("input#num").val());
//     var result = triangle(num);
//     $(".type").text(" ");
//     $(".number").text(" ");
   
//     if(!result) {
//       $(".type").text("factorial of 1 or 0 is always 1.Boring");
//     } else {
//       $(".type").text(result);
//     }

//     $("#result").show();

//   });//end of submit event
// });//end of file