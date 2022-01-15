const container = document.getElementById('container');
// stores the id container element in the variable container
const text = document.getElementById('text');
// stores the id text element in the text variable

const totalTime = 7500;
// sets totalTime to 7500 ms

const breatheTime = (totalTime / 5) * 2;
// takes totalTime divides it by 5 then multiplies the results by 2 and stores it in breathTime

const holdTime = totalTime / 5;
// takes totalTime divides it by 5 then stores the results in holdTime

breatheAnimation();
// calls the function breathAnimation 

function breatheAnimation() {
    // displayes the animation when to breath, hold, etc

    text.innerText = 'Breathe In! ';
    //displayes "breath in" onto the screen

    container.className = 'container grow';
    //makes the circle on the screen get bigger as you breathe 

    setTimeout(() => {
        text.innerText = 'Hold';
        // types "hold" to the screen for as long as specified in the breathTime variable

        setTimeout(() => {
            text.innerText = 'Breather Out!';
            // displayes "breathe out" as long as specified by the holdTime variable

            container.className = 'container shrink';
            //makes the container shrink
        },holdTime);
    },breatheTime);
}

setInterval(breatheAnimation, totalTime);