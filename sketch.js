var tbutton = [];
var trotate = 30;
var stem;
var petiol;
var fr = 24;
var inp;

var leaf;
var leaf2;
var x;
var y;

function setup() {

    noCanvas();
    
    frameRate(fr);
    
    stem = createButton('stemstemstemstemstemstemstemstemstemstemstem');
    stem.position(windowWidth/2 - 85 , windowHeight/2);
    stem.style("rotate", 90);
    
    for (var i = 0; i < 12; i++){

        tbutton[i] = createButton('petalspetalspetalspetals');
        tbutton[i].position(windowWidth/2, windowHeight/3);
        tbutton[i].style("rotate", trotate*i);
        tbutton[i].rotation = trotate*i
        console.log(tbutton[i]);
    }
    
    inp = createInput('soilsoilsoilsoilsoilsoilsoilsoilsoilsoilsoil');
    inp.position(windowWidth/2, windowHeight/2 + 175);
    
    petiol = createButton('petiolpetiol');
    petiol.position(windowWidth/2+85, windowHeight/2+30);
    petiol.style("rotate", -30);
    
    leaf = createButton('leafleaf');
    leaf.position(windowWidth/2+160, windowHeight/2+10);
    
    leaf2 = createButton('leafleaf');
    leaf2.position(windowWidth/2+160, windowHeight/2);
    
}

function draw() {   
    
    for(var i = 0; i < tbutton.length; i++){
        tbutton[i].rotation += 23;
    tbutton[i].style("rotate", tbutton[i].rotation);
    }
}