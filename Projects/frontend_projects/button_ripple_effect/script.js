/*
    Video Guide: https://youtu.be/QI2rDHQM5Pc
    
    Note: You may want to wrap this code in a self-executing
    anonymous function to prevent globals from being created:
    
    (function () {
        ...
    })();
*/

var buttons = document.getElementsByTagName('button');

Array.prototype.forEach.call(buttons, function (b) {
    b.addEventListener('click', createRipple);
});

function createRipple (e) {
    /*
        Note that these next two lines will create a
        NEW ripple element for each click. If this is
        undesirable behavior, try:
        
        * Setting a timeout to delete the element
        * Checking if an element has already been made & reuse it
        * Create an element around line 8 and always reuse it
        * etc.
    */
    var circle = document.createElement('div');
    this.appendChild(circle);

    var d = Math.max(this.clientWidth, this.clientHeight);

    circle.style.width = circle.style.height = d + 'px';

    circle.style.left = e.clientX - this.offsetLeft - d / 2 + 'px';
    circle.style.top = e.clientY - this.offsetTop - d / 2 + 'px';

    circle.classList.add('ripple');
}