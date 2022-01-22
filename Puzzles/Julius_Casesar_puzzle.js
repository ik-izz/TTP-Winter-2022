function ceaserCipher(str, num) {
    // created a funcion to take a string and parse it by x number of times

    num = num % 26;
    // stores the remainder of the value in number

    var lowerCaseStr = str.toLowerCase();
    // converts all the letters in the string to lowercase to narrow it down to only 26 ASCII values

    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    // sets the variable aplhabet to an array of substrings

    var newStr = '';
    // creates a new empty string letiable

    for(var i=0; i<lowerCaseStr.length; i++){
        // loop to iterate through the entire string

        var currentLetter = lowerCaseStr[i];
        // stores current string index into variable currentLetter

        if(currentLetter === ' '){
            // checks if the current string index is a space
            newStr += currentLetter;
            continue;        }

        var currentIndex = alphabet.indexOf(currentLetter);
        // finds the index of the current current string and stores it in the variable

        var newIndex = currentIndex + num;
        // takes the current strings postion and shifts it + num postions

        if(newIndex>25) newIndex= newIndex-26;
        //checks if the current value is above 26 if it is it subtracts 26 to wrap back to a
        if(newIndex<0) newIndex= newIndex +26;
        // if it's less than zero it adds 26 so it's an actual letter

        if(str[i] === str[i].toUpperCase()){
            newStr += alphabet[newIndex].toUpperCase();}
        else newStr += alphabet[newIndex];
    } return newStr
} console.log(ceaserCipher('Hello there this is top secret stuff', 20))
