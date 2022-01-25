// reverses entire string
// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// console.log(reverseString('hello there'));


// reverses specified words
// function reverseString(str){
//     var newString = '';
//     newString = str.split(' ')
//     secondStr = [newString[1], newString[0]]
//     console.log(secondStr.join())
// }

// reverseString('hello there')


// function reverseString(str){
//     for(var i = str.length - 1; i >= 0; i-- ){
//     var newString = '';
//     newString = str.split(' ')
//     secondStr = []
//     secondStr = newString[i]
//     }
//     console.log(secondStr)
// }

// reverseString('hello there')

// reverses specified words
// function reverseString(str){
//     var newString = '';
//     newString = str.split(' ')
//     for (var i = newString.length; i >= 0; i--){
//         var results = 
//     }
//     console.log(secondStr.join())

// }

// reverseString('hello there')


//function to reverse the word
function reverseWord(str){
    //split it into char array
    str = str.split("");
    //j is reverse word(revWord) variable index
    var j=0;
    //declaring a new array to hold the reverse stuff
    var revWord=[];

    //since we can't use reverse(), just manually store each element from
    // the back to the new array
    for(var i=str.length-1;i>=0;i--){
        revWord[j] = str[i];
        j++;
    }

    //join it into a string
    revWord = revWord.join("");

    //part 2
    //split it again
    revWord= revWord.split(" ");

    //reset j
    j=0;
    //new array to basically do the same steps again
    var revWord2=[]
    //same reversing
    for(var i=revWord.length-1;i>=0;i--){
        revWord2[j] = revWord[i];
        j++;
    }
    //only difference this time is having space in "" to split it between words
    revWord2 = revWord2.join(" ");

    //return the array
    return revWord2;
}

console.log(reverseWord('I am happy'))