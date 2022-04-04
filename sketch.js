let game = 0;
let bgcolor = 0;
let foodBG;
let applePic;
let orangePic;
let bananaPic;
let apple2; 
let banana2;
let Grape2;
let Pear2; 
let shoppingcart;
let bananacounter;
let applecounter;
let grapecounter;
let pearcounter;
let counterX;
let fontTango;
let needColor = true;
let color, color2, color3, color4;
let randomNum;
let mouseV;
let congrats = false;
let level2 = false;
let level3 = false;


var apple2X = 60;
var apple2Y = 90;
var grape2X = 60;
var grape2Y = 225;
var banana2X = 60;
var banana2Y = 155;
var pear2X = 60;
var pear2Y = 300;
var apple1, banana1, grape1, pear1;//Game3


var food1X, food1Y, food2X, food2Y,food3X, food3Y, food4X,food4Y;//Game4
let xCoor;
let value;
let check = false;
let box1, box2, box3, box4;
let nextLevel2, nextLevel3;

let xbunt, ybunt, xbunb, ybunb, xpat, ypat, xtom,ytom, xonn,yonn, xchz,ychz, xlet,ylet; //Game1 stuff
let xstop, ystop;
let topping, spd, diff, totDiff;
let start, xstart=200, ystart=200;
let numConf = 200;
let maxSpd = 3;
var xconf = new Array(numConf);
var yconf = new Array(numConf);
var vxconf = new Array(numConf);
var vyconf = new Array(numConf);
var rconf = new Array(numConf);
var gconf = new Array(numConf);
var bconf = new Array(numConf);
//

function setup() {
  createCanvas(400, 400);
  toMenu();
}

function draw() {
//  background(bgcolor);

  fill(0);
  textSize(24);
  textFont('Georgia');
  textAlign(CENTER);
  if(game == 0) {
    menu();
  }
  if(game == 1) {
    game1();
  }
  if(game == 2) {
    game2();
  }
  if(game == 3) {
    game3();
  }
  if(game == 4) {
    game4();
  }
}

function mouseDragged() {
  if (game == 4) {
    if ((mouseX > food1X - 55) && (mouseX < food1X + 55)) {
    if ((mouseY > food1Y - 55) && (mouseY < food1Y + 55)) {
      food1X = mouseX;
      food1Y = mouseY;
      return;
    }
  }
  if ((mouseX > food2X - 55) && (mouseX < food2X + 55)) {
    if ((mouseY > food2Y - 55) && (mouseY < food2Y + 55)) {
      food2X = mouseX;
      food2Y = mouseY;
      return;
    }
  }
  if ((mouseX > food3X - 55) && (mouseX < food3X + 55)) {
    if ((mouseY > food3Y - 55) && (mouseY < food3Y + 55)) {
      food3X = mouseX;
      food3Y = mouseY;
      return;
    }
  }
  if ((mouseX > food4X - 55) && (mouseX < food4X + 55)) {
    if ((mouseY > food4Y - 55) && (mouseY < food4Y + 55)) {
      food4X = mouseX;
      food4Y = mouseY;
      return;
    }
  }
}
if (game == 3) {
  if ((mouseX > apple2X - 40) && (mouseX < apple2X + 40)) {
    if ((mouseY > apple2Y - 40) && (mouseY < apple2Y + 40)) {
      apple2X = mouseX;
      apple2Y = mouseY;
      return;
    }
  }
  if ((mouseX > banana2X - 40) && (mouseX < banana2X + 40)) {
      if ((mouseY > banana2Y - 40) && (mouseY < banana2Y + 40)) {
        banana2X = mouseX;
        banana2Y = mouseY;
        return;
      }  
  }
  if ((mouseX > grape2X - 40) && (mouseX < grape2X + 40)) {
    if ((mouseY > grape2Y - 40) && (mouseY < grape2Y + 40)) {
      grape2X = mouseX;
      grape2Y = mouseY;
      return;
    }
    }
      if ((mouseX > pear2X - 40) && (mouseX < pear2X + 40)) {
        if ((mouseY > pear2Y - 40) && (mouseY < pear2Y + 40)) {
          pear2X = mouseX;
          pear2Y = mouseY;
          return;
}
}
}
}




function menu() {
  fill(0);
  textFont('Georgia');
  textAlign(CENTER);
  textSize(20);
  ellipseMode(CENTER);
  rectMode(CORNER);
  strokeCap(ROUND);
  smooth();
  strokeJoin(ROUND);
  strokeWeight(0);
  
  background(0,190,40);
  fill(0);
  rect(0,225,400,50);
  rect(175,0,50,400);
  fill(255,230,0);
  for(let i=-55; i<400; i+=20) {
    if(!(i>175 && i<225)) {
      rect(197,i+50,5,10);
      rect(i,250,10,5);
    }
  }

  textSize(17);
  fill(0);
  rect(25,125,150,100,25,0,0,0); //Fast food store "Build-A-Burger"
  fill(100);
  rect(50,150,125,40);
  fill(200);
  rect(50,190,125,35);
  stroke(150);
  strokeWeight(5);
  strokeCap(SQUARE);
  line(25,125,25,225);
  noStroke();
  fill(100);
  arc(25,140,40,40,PI,0);
  rect(5,140,40,20);
  fill(133,255,251);
  rect(50,195,45,15);
  rect(130,195,45,15);
  rect(103,195,20,30);
  fill(255,157,0);
  arc(25,140,25,25,PI,0);
  rect(12.5,150,25,5,0,0,2,2);
  text("Build-A",112,167);
  text("Burger",112,183);
  fill(115,44,0);
  rect(11,140,28,10,3,3,3,3);
  fill(255,230,0);
  rect(36,200,5,20);
  triangle(38.5,190,47,200,30,200);
  rect(140,135,20,5);
  triangle(160,129,160,146,170,137.5);
  rect(60,135,20,5);
  triangle(80,129,80,146,90,137.5);
  triangle();


  noStroke();  
  fill(168,79,0); //Gingerbread house "Candy Clash"
  stroke(255);
  strokeWeight(3);
  beginShape();
  vertex(240,160-2);
  vertex(240,225-2);
  vertex(360,225-2);
  vertex(360,160-2);
  vertex(300,115-2);
  vertex(240,160-2);
  endShape();
  beginShape();
  vertex(220,145+20-2);
  vertex(300,85+20-2);
  vertex(300,115+20-2);
  vertex(300,85+20-2);
  vertex(380,145+20-2);
  vertex(360,160+20-2);
  vertex(300,115+20-2);
  vertex(240,160+20-2);
  vertex(220,145+20-2);
  endShape();
  fill(117,55,0);
  rect(290,185-2,20,40);
  rect(255+5,170-2,10,10);
  rect(265+5,170-2,10,10);
  rect(255+5,180-2,10,10);
  rect(265+5,180-2,10,10);
  rect(335-5,170-2,10,10);
  rect(325-5,170-2,10,10);
  rect(335-5,180-2,10,10);
  rect(325-5,180-2,10,10);
  
  noStroke();
  strokeCap(ROUND);
  fill(0);
  rect(25,275,150,100); //Grocery store "Ralmart"
  fill(150);
  rect(25,275,150,50);
  fill(0,85,186);
  rect(62,270,75,50);
  fill(255);
  textSize(17);
  text("Ralmart",100,290);
  fill(133,255,251);
  rect(65,310,20,15);
  rect(114,310,20,15);
  stroke(253,177,40);
  strokeWeight(3);
  line(90,305,95,305);
  line(97,300,94,295);
  line(97,310,94,315);
  line(105,305,110,305);
  line(103,300,106,295);
  line(103,310,106,315);
  stroke(255);
  strokeCap(SQUARE);
  line(90,335,110,335);
  line(90,345,110,345);
  line(90,355,110,355);
  line(90,365,110,365);
  line(25,335,65,335);
  line(25,345,65,345);
  line(25,355,65,355);
  line(25,365,65,365);
  line(45,335,45,365);
  line(135,335,175,335);
  line(135,345,175,345);
  line(135,355,175,355);
  line(135,365,175,365);
  line(155,335,155,365);
  stroke(150);
  strokeWeight(1);
  line(75,310,75,325);
  line(124,310,124,325);
  strokeCap(ROUND);
  
  noStroke();
  
  fill(117,55,0);
  rect(250,300,10,30)
  rect(250,300+50,10,30)
  rect(250+50,300-20,10,30)
  rect(250+100,300,10,30)
  rect(250+100,300+50,10,30)
  fill(38,105,0);
  ellipse(255,295,20,20);
  ellipse(245,305,20,20);
  ellipse(265,305,20,20);
  ellipse(255,295+50,20,20);
  ellipse(245,305+50,20,20);
  ellipse(265,305+50,20,20);
  ellipse(255+50,295-20,20,20);
  ellipse(245+50,305-20,20,20);
  ellipse(265+50,305-20,20,20);
  ellipse(255+100,295,20,20);
  ellipse(245+100,305,20,20);
  ellipse(265+100,305,20,20);
  ellipse(255+100,295+50,20,20);
  ellipse(245+100,305+50,20,20);
  ellipse(265+100,305+50,20,20);
  stroke(199,119,0);
  strokeWeight(4);
  line(280+2,330,280+2,350);
  line(330-2,330,330-2,350);
  noStroke();
  fill(224,135,0);
  rect(280,350,50,30);
  rect(280,320,50,10);
  fill(247,50,47); // Apple
  ellipse(260,295,7,7);
  ellipse(250,295,7,7);
  ellipse(245,305,7,7);
  ellipse(265,305,7,7);
  fill(227,47,247); // Grape
  ellipse(260+100+2,295+50,4,4);
  ellipse(250+100+2,295+50,4,4);
  ellipse(245+100+2,305+50,4,4);
  ellipse(265+100+2,305+50,4,4);
  ellipse(260+100-2,295+50,4,4);
  ellipse(250+100-2,295+50,4,4);
  ellipse(245+100-2,305+50,4,4);
  ellipse(265+100-2,305+50,4,4);
  ellipse(260+100,295+50-3,4,4);
  ellipse(250+100,295+50-3,4,4);
  ellipse(245+100,305+50-3,4,4);
  ellipse(265+100,305+50-3,4,4);
  fill(250,243,55); // Banana
  arc(260,295+50,7,7,PI/4,PI+PI-PI/4);
  arc(250,295+50,7,7,PI/4,PI+PI-PI/4);
  arc(245,305+50,7,7,PI/4,PI+PI-PI/4);
  arc(265,305+50,7,7,PI/4,PI+PI-PI/4);
  fill(146,250,55); // Pear
  ellipse(260+50,295-20,7,7);
  ellipse(250+50,295-20,7,7);
  ellipse(245+50,305-20,7,7);
  ellipse(265+50,305-20,7,7);
  ellipse(260+50,295-23,4,4);
  ellipse(250+50,295-23,4,4);
  ellipse(245+50,305-23,4,4);
  ellipse(265+50,305-23,4,4);
  fill(255,150,38); // Orange
  ellipse(260+100,295,7,7);
  ellipse(250+100,295,7,7);
  ellipse(245+100,305,7,7);
  ellipse(265+100,305,7,7);

  //Title
  fill(0);
  textSize(30);
  text("Welcome",100,50);
  text("to:",140,80);
  text("Food",280,50);
  text("Mania!!",300,80);

}

function game1() { //All code for the Build-A-Burger game
  background(220);
  fill(0);
  textFont('Georgia');
  textAlign(CENTER);
  textSize(20);
  ellipseMode(CENTER);
  rectMode(CORNER);
  strokeCap(ROUND);
  smooth();
  strokeJoin(ROUND);
  strokeWeight(0);
  text("Stop the toppings to build a delicious burger!",25,45,375);
//  text(diff,25,100);
//  text(totDiff,25,150);
  stroke(0);
  strokeJoin(MITER);

  fill(150);
  rect(0,280,400,120);

  stroke(0);
  fill(255,0,0);
  triangle(1,25,25,1,25,50);
  rect(25,10,75,30);
  noStroke();
  triangle(1,25,25,1,25,50);
  rect(25,10,75,30);
  textFont('Georgia');
  textSize(20);
  fill(0);
  text("GO BACK",52,32);


  if(topping==0){
    fill(0);
    strokeWeight(10);
    rect(xbunb,350,100,25,0,0,25,25);
    ybunb+=spd;
    if(ybunb>410) {
      ybunb=-20;
    }
  }else if(topping==1) {
    fill(0);
    strokeWeight(10);
    rect(xpat,330,120,20,5,5,5,5);
    ypat+=spd;
    if(ypat>410) {
      ypat=-20;
    }
  }else if(topping==2) {
    strokeJoin(ROUND);
    strokeWeight(15);
    beginShape();
    vertex(xchz-5,328+5);
    vertex(xchz,328);
    vertex(xchz+120,328);
    vertex(xchz+125,328+5);
    endShape();
    ychz+=spd;
    if(ychz>410) {
      ychz=-20;
    }
  }else if(topping==3) {
    fill(0);
    strokeWeight(10);
    rect(xtom,315,90,10);
    ytom+=spd;
    if(ytom>410) {
      ytom=-20;
    }
  }else if(topping==4) {
    fill(0);
    strokeWeight(10);
    rect(xonn,310,80,5);
    yonn+=spd;
    if(yonn>410) {
      yonn=-20;
    }
  }else if(topping==5) {
    strokeJoin(ROUND);
    strokeWeight(15);
    beginShape();
    vertex(xlet,308);
    vertex(xlet+30,308-3);
    vertex(xlet+60,308);
    vertex(xlet+90,308-3);
    vertex(xlet+120,308);
    endShape();
    ylet+=spd;
    if(ylet>410) {
      ylet=-20;
    }
  }else if(topping==6) {
    fill(0);
    strokeWeight(10);
    arc(xbunt,305,100,50,PI,TWO_PI,CHORD);
    ybunt+=spd;
    if(ybunt>410) {
      ybunt=-20;
    }
  }

  if(topping>=0) {//Draw the bottom bun
    fill(255,210,77);
    strokeWeight(0);
    rect(xbunb,ybunb,100,25,0,0,25,25);
  } if(topping>=1) {//Draws the patty
    fill(115,44,0);
    strokeWeight(0);
    rect(xpat,ypat,120,20,5,5,5,5);
  } if(topping>=2) {//Draws the cheese
    strokeJoin(ROUND);
    stroke(255,241,38);
    noFill();
    strokeWeight(5);
    beginShape();
    vertex(xchz-5,ychz+5);
    vertex(xchz,ychz);
    vertex(xchz+120,ychz);
    vertex(xchz+125,ychz+5);
    endShape();
    stroke(0);
    strokeJoin(MITER);
  } if(topping>=3) {//Draws the tomato
    fill(255,53,38);
    strokeWeight(0);
    rect(xtom,ytom,90,10);
  } if(topping>=4) {//Draws the onion
    fill(255,158,255);
    strokeWeight(0);
    rect(xonn,yonn,80,5);
  } if(topping>=5) {//Draws the lettuce
    strokeJoin(ROUND);
    stroke(102,255,82);
    noFill();
    strokeWeight(5);
    beginShape();
    vertex(xlet,ylet);
    vertex(xlet+30,ylet-3);
    vertex(xlet+60,ylet);
    vertex(xlet+90,ylet-3);
    vertex(xlet+120,ylet);
    endShape();
    stroke(0);
    strokeJoin(MITER);
  } if(topping>=6) {//Draws the top bun
    fill(255,210,77);
    strokeWeight(0);
    arc(xbunt,ybunt,100,50,PI,TWO_PI,CHORD);
  }

  if(topping<7) {
    fill(209,0,14);//Draws the stop button
    stroke(255);
    strokeWeight(3);
    beginShape();
    vertex(xstop,ystop);
    vertex(xstop+30,ystop);
    vertex(xstop+30+(15*1.4),ystop+(15*1.4));
    vertex(xstop+30+(15*1.4),ystop+30+(15*1.4));
    vertex(xstop+30,ystop+30+(30*1.4));
    vertex(xstop,ystop+30+(30*1.4));
    vertex(xstop-(15*1.4),ystop+30+(15*1.4));
    vertex(xstop-(15*1.4),ystop+(15*1.4));
    vertex(xstop,ystop);
    endShape();
  
    fill(255);//Prints STOP on the stop button
    strokeWeight(1);
    textFont('Helvetica');
    text("STOP",xstop+15,ystop+42);
    textFont('Georgia');
    strokeWeight(0);
  } else {
//if(totDiff<2000){ // Editor hacks to display congratulations
    if(totDiff<100) {
      confetti();
      fill(0,195,255);
      stroke(0,195,255);
      strokeWeight(1);
      text("CONGRATULATIONS",25,150,375);
    } else{
      fill(209,0,14);
      stroke(209,0,14);
      strokeWeight(1);
      text("YOU FAIL TRY AGAIN",25,150,375);
    }
    strokeWeight(2);
    stroke(100);
    if(totDiff<100) {
      fill(255,247,0);
    } else{
      noFill();
    }
    beginShape();
    vertex(190,235);
    vertex(200,200);
    vertex(210,235);
    vertex(245,235);
    vertex(214,253);
    vertex(235,290);
    vertex(200,265);
    vertex(165,290);
    vertex(186,253);
    vertex(155,235);
    vertex(190,235);
    endShape();
    
      if(totDiff<75) {
        fill(255,247,0);
      } else{
        noFill();
      }
      beginShape();
      vertex(120,215);
      vertex(130,180);
      vertex(140,215);
      vertex(175,215);
      vertex(144,233);
      vertex(165,270);
      vertex(130,245);
      vertex(95,270);
      vertex(116,233);
      vertex(85,215);
      vertex(120,215);
      endShape();
      
      if(totDiff<50) {
        fill(255,247,0);
      } else{
        noFill();
      }
      beginShape();
      vertex(260,215);
      vertex(270,180);
      vertex(280,215);
      vertex(315,215);
      vertex(284,233);
      vertex(305,270);
      vertex(270,245);
      vertex(235,270);
      vertex(256,233);
      vertex(225,215);
      vertex(260,215);
      endShape();    
    }
  }


function game2() { //All code for the Color Match game
  fill(0);
  textFont('Georgia');
  textAlign(CENTER);
  textSize(20);
  ellipseMode(CENTER);
  rectMode(CORNER);
  strokeCap(ROUND);
  smooth();
  strokeJoin(ROUND);
  strokeWeight(0);
  background(255, 138, 196);

  stroke(0);
  fill(255,0,0);
  triangle(1,25,25,1,25,50);
  rect(25,10,75,30);
  noStroke();
  triangle(1,25,25,1,25,50);
  rect(25,10,75,30);
  textFont('Georgia');
  textSize(20);
  fill(0);
  text("GO BACK",52,32);
  
  if (congrats == false) {
  if (needColor == true) {
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    color = random(colors);
    color2 = random(colors);
    while (color2 == color) {
      color2 = random(colors);
    }
    randomNum = random([0,1]);
    needColor = false;
    }
  
  
  
  fill(color);
  stroke('null');
  circle(200, 85, 110);
  fill('white');
  stroke('grey');
  rect(193, 140, 12, 125);
  
  if (randomNum == 0) {
    fill(color);
  } 
  else {
    fill(color2);
  }
  rect(80, 290, 100, 60);
  
  if (randomNum == 1) {
    fill(color);
  } 
  else {
    fill(color2);
  } 
  rect(217, 290, 100, 60);
  }
  
  if (congrats == true) {
    fill('black');
    textSize(40);
    text('Congratulations!', 25, 175, 375); 
    confetti();
    fill('black');
    rect(300, 0, 100, 50);
  }

if (level2) {
  congrats = false;  
  if (congrats == false) {
    if (needColor == true) {
      let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
      color = random(colors);
      color2 = random(colors);
      color3 = random(colors);
      while (color2 == color) {
        color2 = random(colors);
      }
      while (color3 == color2) {
        color3 = random(colors);
      }
      while (color3 == color) {
        color = random(colors);
      }
      randomNum = random([0, 1, 2]);
      needColor = false;
      }
    
    fill(color);
    stroke('null');
    circle(200, 85, 110);
    fill('white');
    stroke('grey');
    rect(193, 140, 12, 125);
    
    if (randomNum == 0) {
      fill(color);
    } 
    else if (randomNum == 0){
      fill(color2);
    }
    else {
      fill(color3);
    }
    rect(80, 290, 100, 60);
    
    if(randomNum == 1) {
      fill(color2);
    }
    else if (randomNum == 1){
      fill(color);
    }  
    else {
      fill(color3);
    } 
    rect(217, 290, 100, 60);

    if(randomNum == 2) {
      fill(color3);
    }
    else if (randomNum == 2){
      fill(color2);
    }
    else {
      fill(color);
    } 
    rect(100, 100, 100, 100);
    }  
}
}

if (level3) {
  congrats = false;  
  if (congrats == false) {
    if (needColor == true) {
      let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
      color = random(colors);
      color2 = random(colors);
      color3 = random(colors);
      color4 = random(colors);
      while (color2 == color) {
        color2 = random(colors);
      }
      while (color3 == color2) {
        color3 = random(colors);
      }
      while (color3 == color){
        color = random(colors);
      }
      while (color4 == color3) {
        color4 = random(colors);
      } 
      while (color4 == color2) {
        color4 = random(colors);
      }
      while (color4 == color) {
        color4 = random(colors);
      }
      randomNum = random([0, 1, 2, 3]);
      needColor = false;
      }
    
    fill(color);
    stroke('null');
    circle(200, 85, 110);
    fill('white');
    stroke('grey');
    rect(193, 140, 12, 125);
    
    if(randomNum == 0) {
      fill(color);
      rect(80, 290, 100, 60);
      fill(color2);
      rect(217, 290, 100, 60);
      fill(color3);
      rect(100, 100, 100, 100);
      fill(color4);
      rect(300, 300, 100, 100);
    } 
    else if(randomNum == 1) {
      fill(color2);
      rect(80, 290, 100, 60);
      fill(color);
      rect(217, 290, 100, 60);
      fill(color3);
      rect(100, 100, 100, 100);
      fill(color4);
      rect(300, 300, 100, 100);
    } 
    else if(randomNum == 2) {
      fill(color3);
      rect(80, 290, 100, 60);
      fill(color4);
      rect(217, 290, 100, 60);
      fill(color2);
      rect(100, 100, 100, 100);
      fill(color);
      rect(300, 300, 100, 100);     
    }
    else {
      fill(color4);
      rect(80, 290, 100, 60);
      fill(color);
      rect(217, 290, 100, 60);
      fill(color2);
      rect(100, 100, 100, 100);
      fill(color3);
      rect(300, 300, 100, 100);
    }
}
}


function game3() { //All code for the Number Buckets game
  fill(0);
  textFont('Georgia');
  textAlign(CENTER);
  textSize(20);
  ellipseMode(CENTER);
  rectMode(CORNER);
  strokeCap(ROUND);
  smooth();
  strokeJoin(ROUND);
  strokeWeight(0);

  background(110,192,255);
  
  stroke(0);
  fill(255,0,0);
  triangle(1,25,25,1,25,50);
  rect(25,10,75,30);
  noStroke();
  triangle(1,25,25,1,25,50);
  rect(25,10,75,30);
  textFont(fontTango);
  textSize(20);
  fill(0);
  text("GO BACK",52,32);

  textSize(20);
  textFont(fontTango);
  stroke('rgba(0,255,0,0.25)');
  strokeWeight(4);  
  fill("purple");
  text("Welcome to Number Buckets!",100,70,300);
  text(bananacounter + "/" + banana1, 150, 185, 10);
  text(applecounter + "/" + apple1,150,120,10);
  text(grapecounter + "/" + grape1,150,255,10)
  text(pearcounter + "/" + pear1,150,330,10)
  image(apple2,apple2X,apple2Y,50,50);
  image(apple2,60,90,50,50);
  image(banana2,banana2X,banana2Y,50,50); 
  image(banana2,60,155,50,50);
  image(Grape2,grape2X,grape2Y,50,50);
  image(Grape2,60,225,50,50);
  image(Pear2,pear2X,pear2Y,50,50);
  image(Pear2,60,300,50,50);
  shoppingcart.resize(150,165);
  image(shoppingcart,180,165); 

  if ((banana2X > 200) && (banana2X < 240)) {
    if ((banana2Y > 185) && (banana2Y < 230)) {
      fill(0);
      banana2X = 60;
      banana2Y = 155;
      bananacounter++;
      return;
      
    }
  }

  if ((apple2X > 200) && (apple2X < 240)) {
    if ((apple2Y > 185) && (apple2Y < 230)) {
      fill(0);
      apple2X = 60;
      apple2Y = 90;
      applecounter++;
      return;
      
    }
  }

  if ((grape2X > 200) && (grape2X < 240)) {
    if ((grape2Y > 185) && (grape2Y < 230)) {
      fill(0);
      grape2X = 60;
      grape2Y = 225;
      grapecounter++;
      return;
    }
  }
  
  if ((pear2X > 200) && (pear2X < 240)) {
    if ((pear2Y > 185) && (pear2Y < 230)) {
      fill(0);
      pear2X = 60;
      pear2Y = 300;
      pearcounter++;
      return;
    }
  }

  if ((apple1==applecounter)&&(banana1 == bananacounter)&&(pearcounter == pear1)&&(grape1 == grapecounter)){
    confetti();
  }
}

 

  


function game4() { //All code for the Pattern Match game
  fill(0);
  textFont('Georgia');
  textAlign(CENTER);
  textSize(20);
  ellipseMode(CENTER);
  rectMode(CORNER);
  strokeCap(ROUND);
  smooth();
  strokeJoin(ROUND);
  strokeWeight(0);
  
  background(105,212,91);

  stroke(0);
  fill(255,0,0);
  triangle(1,25,25,1,25,50);
  rect(25,10,75,30);
  noStroke();
  triangle(1,25,25,1,25,50);
  rect(25,10,75,30);
  textFont('Georgia');
  textSize(20);
  fill(0);
  text("GO BACK",52,32);

  fill(400);
  
  rect( 210, 240, 80, 80);
  rect( 120, 240, 80, 80);
  rect( 30, 240, 80, 80);
  rect( 300, 240, 80, 80);
  fill(0);
  textSize(12);
  text("Banana", 25, 280,100);
  text("Apple", 110, 280,100);
  text("Grape", 195, 280,100);
  text("Pear", 290, 280,100); 
  textSize(24); 

  fill('black');
  ellipse(190, 360 , 70, 70);
  fill('blue');
  text("Check", 180, 350, 30, 30);
  
  

  fill("red");
  textFont(fontTango);
  text("Drag the fruit to the matching box",25,200,375);
  
  image(bananaPic,food1X, food1Y, 75, 75);
  image(applePic, food2X, food2Y, 80, 80);
  image(Grape2, food3X, food3Y, 80, 80);
  image(Pear2, food4X, food4Y, 80, 80);
  if(box1 == true) {

  }
  if(box2 == true) {
    
  }
  if(box3 == true) {
    
  }
  if(box4 == true) {
    
  }

  if (check == true){//Checks if the first box is correct
    if ((food1X > 15) && (food1X < 45)) {
      if ((food1Y > 230) && (food1Y < 270)) {
        value++;
        box1=true;
      }
    }
  if ((food2X > 100) && (food2X < 140)) {
    if ((food2Y > 230) && (food2Y < 270)) {
        
      value++;
      box2=true;
    }
  }
  if ((food3X > 195) && (food3X < 230)) {
    if ((food3Y > 230) && (food3Y < 270)) {
      value++;
      box3 = true;
    }
  }
  if ((food4X > 285) && (food4X < 320)) {
    if ((food4Y > 230) && (food4Y < 270)) {
        value++;
        box4 = true;
    }
  }
  check=false;
}
if(value == 4){//to check if all the boxes are correct
  confetti();
  fill('black');
ellipse(200, 200, 200, 200);
fill('white');
textSize(20);
  text("Congrats, click to go back to menu", 137, 150, 120, 120);
  nextLevel2 = true;
}
if((value < 4) && (value > 0)){//checks how many are correct
fill('black');
ellipse(200, 200, 200, 200);
fill('white');
textSize(20);
text("Nice try, You got " + value + "/4 correct. Click anywhere in the circle to restart", 137, 150, 120,120);
}

}



//-----------------------------------------------------

function toGame1() {
  game=1;
  diff=0;
  totDiff=0;
  spd=1;
  topping=0;
  xbunt=200;
  ybunt=120;
  xbunb=150;
  ybunb=100;
  xpat=140;
  ypat=100;
  xtom=155;
  ytom=100;
  xonn=160;
  yonn=100;
  xchz=140;
  ychz=100;
  xlet=140;
  ylet=100;
  xstop=50;
  ystop=300;
}

function toGame2() {
  game = 2;
  background(255, 138, 196);
  congrats = false;
}

function toGame3() {
  game = 3;
  apple2X = 60;
  apple2Y = 90;
  banana2X = 60;
  banana2Y = 155;
  grape2X = 60;
  grape2Y = 225;
  pear2X = 60;
  pear2Y = 300;
  bananacounter = 0;
  applecounter = 0;
  grapecounter = 0;
  pearcounter = 0;
  counterX = [3,2,5,6,1,4];
  apple1 = random(counterX);
  counterX.splice(counterX.indexOf(apple1),1);
  banana1 = random(counterX);
  counterX.splice(counterX.indexOf(banana1),1);
  grape1 = random(counterX);
  counterX.splice(counterX.indexOf(grape1),1);
  pear1 = random(counterX); 
  counterX.splice(counterX.indexOf(pear1),1);

}

function toGame4() {
  game = 4;
xCoor = [20, 140, 220,300];
  food1X = random(xCoor);
  xCoor.splice(xCoor.indexOf(food1X),1);
  food1Y = 50;
  food2X = random(xCoor);
  xCoor.splice(xCoor.indexOf(food2X),1);
  food2Y = 50;
  food3X = random(xCoor);
  xCoor.splice(xCoor.indexOf(food3X),1);
  food3Y = 50;
  food4X = random(xCoor);
  food4Y = 50;
  check = false;
  box1=false;
  box2=false;
  box3=false;
  box4=false;
  value = 0;
  nextLevel2 = false;
  nextLevel3 = false;
}

function toMenu() {
  game = 0;
  background(220);
  image(foodBG, 77,87);
  start = true;
}

function preload() {
  foodBG = loadImage('images/burgerBg.png');
  applePic = loadImage('images/IMG_2245.PNG');
  bananaPic = loadImage('images/Banana.png');
  orangePic = loadImage('images/Orange.png');
  apple2 = loadImage("images/IMG_2245.PNG");
  banana2 = loadImage("images/Banana.png");
  Grape2 = loadImage("images/IMG_2246.PNG");
  Pear2 = loadImage("images/IMG_2248.PNG");
  shoppingcart = loadImage("images/IMG_2250.PNG");
  fontTango = loadFont("fonts/Tango_BT.ttf");  
}


function mouseClicked() {
  xstart = mouseX;
  ystart = mouseY;
  if(game==0) {
    if(mouseX<=175) {
      if(mouseY>=125 && mouseY<=225) {
        toGame1();
      }
      if(mouseY>=275) {
        toGame3();
      }
    }
    if(mouseX>=225) {
      if(mouseY>=125 && mouseY<=225) {
        toGame2();
      }
      if(mouseY>=275) {
        toGame4();
      }
    }
  }
  if(game>0) {
    if(mouseX<=100 && mouseY<=50){
      toMenu();
    }
  }
  if(game==1) {
    if(mouseX>xstop-(15*1.4) && mouseX<xstop+30+(15*1.4)) {
    if(mouseY>ystop && mouseY<ystop+30+(30*1.4)) {
      if(topping==0){
        diff=abs(ybunb-350);
        totDiff+=diff;
      }
      if(topping==1){
        diff=abs(ypat-330);
        totDiff+=diff;
      }
      if(topping==2){
        diff=abs(ychz-328);
        totDiff+=diff;
      }
      if(topping==3){
        diff=abs(ytom-315);
        totDiff+=diff;
      }
      if(topping==4){
        diff=abs(yonn-310);
        totDiff+=diff;
      }
      if(topping==5){
        diff=abs(ylet-308);
        totDiff+=diff;
      }
      if(topping==6){
        diff=abs(ybunt-305);
        totDiff+=diff;
      }
      topping++;
    }
   }
  }  

  if (game == 2) {
    if ((mouseX > 80 && mouseX < 180) && (mouseY > 290 && mouseY < 350) && randomNum == 0)  {
      congrats = true;
      level2 = false;
      level3 = false;
    }

    if ((mouseX > 217 && mouseX < 317) && (mouseY > 290 && mouseY < 350) && randomNum == 1)  {
      congrats = true;
      level2 = false;
      level3 = false;
    }

    if ((mouseX > 300 && mouseX < 400) && (mouseY > 0 && mouseY < 50)) {
      level2 = true;
      level3 = false;
    }
  }

  

 

if (game == 4){
  if ((mouseX > 175 && mouseX< 205) && (mouseY > 345 && mouseY < 375)){
    check = true;
    value = 0;
  }
    if((value > 0) && (mouseX > 100 && mouseX < 300) && (mouseY > 100 && mouseY < 300)){
    toMenu();
    }
  }

}

function confetti() {
  noStroke();
  if(start) {
    for(let i=0; i<numConf; i++) {
      xconf[i]=xstart;
      yconf[i]=ystart;
      vxconf[i]=random(0-maxSpd,maxSpd);
      vyconf[i]=random(0-maxSpd,maxSpd);
      rconf[i]=random(256);
      gconf[i]=random(256);
      bconf[i]=random(256);
    }
    start = false;
  }
  for(let i=0; i<numConf; i++) {
    fill(rconf[i],gconf[i],bconf[i]);
    circle(xconf[i],yconf[i],10,10);
    xconf[i]+=vxconf[i];
    yconf[i]+=vyconf[i];
    if(xconf[i]>400 || xconf[i]<0) {
      vxconf[i]*=-1;
    }
    if(yconf[i]>400 || yconf[i]<0) {
      vyconf[i]*=-1;
    }
  }
} 