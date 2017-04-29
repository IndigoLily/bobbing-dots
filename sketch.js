var dots = [];
var currHue = 0;
var offset;

function setup() {
    noCanvas();
    colorMode(HSL);
    for(var i = 0; i < 5; i++) {
        var newDiv = createDiv('')
        newDiv.addClass('dot');
        newDiv.addClass(i);
        newDiv.parent('#container');
        dots.push(newDiv);
    }
}

function draw() {
    for(var i = 0; i < dots.length; i++) {
        speed = millis() * .0015;
        offset = map(i, 0, dots.length, 0, PI);
        select('.'+i).style('top', map(sin(speed + offset), -1, 1, -25, 25)+'vh');
    }
}
