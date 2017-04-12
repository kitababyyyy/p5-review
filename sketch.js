var x = 0;
var y = 0;
sizes = [5,10,15,20,25,30,35,40,45,50];

function setup(){
    createCanvas(600,400);
}

function draw(){
    background(0);
    redCircle();
    greenStripe();
    whiteLines();
    changeBackground();
    rowOfCircles(250);
    rowOfCircles(350);
}
    
    
   


function redCircle(){
    noStroke();
    ellipse(mouseX,mouseY,100,100);
    fill(66, 215, 244);
}

function greenStripe(){
     x = 200;
    y+=3;
    
    noStroke();
    rect(x,y, 100,height);
    fill(66, 215, 244);
     
     if(y > height){
        y = 0 - height;
    }
    
}

function whiteLines(){
    var i = 0;
    var yLine = 20;
    while(i<10){
        stroke(66, 215, 24);
        line(100,yLine,500,yLine);
        i++;
        yLine += 20;
}
}

function changeBackground(){
     if(mouseIsPressed && mouseY < 200){
        background(0,0,255);
    }
    
    else if(mouseIsPressed && mouseY >=200){
        background(255,255,0);
    }
}

function rowOfCircles(yRow){
     var xCircle = 40;
    for(var i = 0; i <10; i++){
        noStroke();
        ellipse(xCircle, yRow, sizes[i], sizes[i]);
        fill(255,255,0);
        xCircle += 50;
    }
}
