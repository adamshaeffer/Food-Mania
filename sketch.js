let game = 0;
let sel = 0;
let from, to, lerpC;
let bgcolor = 0;

let foodBG;
let applePic;
let orangePic;
let bananaPic;
let apple2; 
let banana2;
let Grape2;
let Pear2; 
let banana3;
let apple3;
let pear3;
let grape3;
let shoppingcart;
let bananacounter;
let applecounter;
let grapecounter;
let pearcounter;
let counterX;
let counter2X;
let fontTango;
let needColor = true;
let color1, color2, color3, color4;
let randomNum;
let mouseV;
let congrats = false;


var apple2X = 60;
var apple2Y = 90;
var grape2X = 60;
var grape2Y = 225;
var banana2X = 60;
var banana2Y = 155;
var pear2X = 60;
var pear2Y = 300;
var apple1, banana1, grape1, pear1, orange;//Game3


var food1X, food1Y, food2X, food2Y,food3X, food3Y, food4X,food4Y, food5X, food5Y;//Game4
let xCoor, xText;
let bananaText, appleText, orangeText, grapeText, pearText;
let value;
let check = false;
let box1, box2, box3, box4;
let nextLevel2, nextLevel3;
let boxText;
let timer;
let boxText1, boxText2, boxText3, boxText4;

let wait=0, previewy=135,previewy2=135;
let xbunt, ybunt, xbunb, ybunb, xpat, ypat, xtom,ytom, xonn,yonn, xchz,ychz, xlet,ylet; //Game1 stuff
let xstop, ystop;
let topping, spd=.5, diff, totDiff;
let difSel=0;
let burgerMenu;

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
  if(game == 5) {
    game2Lvl2();
  }
  if(game == 6) {
    game2Lvl3();
  }
  if (game == 7){
    game4Lvl2();
  }
  if( game == 8){
    game3lvl2();
  }
  if(game == 9){
    game4Lvl3();
  }

}

function mouseDragged() {
  if (game == 4) {
    if ((mouseX > food1X - 50) && (mouseX < food1X + 50)) {
      if ((mouseY > food1Y - 50) && (mouseY < food1Y + 50)) {
        food1X = mouseX;
        food1Y = mouseY;
        return;
      }
    }
    if ((mouseX > food2X - 50) && (mouseX < food2X + 50)) {
      if ((mouseY > food2Y - 50) && (mouseY < food2Y + 50)) {
        food2X = mouseX;
        food2Y = mouseY;
        return;
      }
    }
    if ((mouseX > food3X - 50) && (mouseX < food3X + 50)) {
      if ((mouseY > food3Y - 50) && (mouseY < food3Y + 50)) {
        food3X = mouseX;
        food3Y = mouseY;
        return;
      }
    }
    if ((mouseX > food4X - 50) && (mouseX < food4X + 50)) {
      if ((mouseY > food4Y - 50) && (mouseY < food4Y + 50)) {
        food4X = mouseX;
        food4Y = mouseY;
        return;
      }
    }
    if ((mouseX > food5X - 50) && (mouseX < food5X + 50)) {
      if ((mouseY > food5Y - 50) && (mouseY < food5Y + 50)) {
        food5X = mouseX;
        food5Y = mouseY;
        return;
      }
    }
  }
    if ((game == 7) || ((game == 9) && (timer == 0 ))) {
    if ((mouseX > food1X - 35) && (mouseX < food1X + 35)) {
    if ((mouseY > food1Y - 35) && (mouseY < food1Y + 35)) {
      food1X = mouseX;
      food1Y = mouseY;
      return;
    }
  }
  if ((mouseX > food2X - 35) && (mouseX < food2X + 35)) {
    if ((mouseY > food2Y - 35) && (mouseY < food2Y + 35)) {
      food2X = mouseX;
      food2Y = mouseY;
      return;
    }
  }
  if ((mouseX > food3X - 35) && (mouseX < food3X + 35)) {
    if ((mouseY > food3Y - 35) && (mouseY < food3Y + 35)) {
      food3X = mouseX;
      food3Y = mouseY;
      return;
    }
  }
  if ((mouseX > food4X - 35) && (mouseX < food4X + 35)) {
    if ((mouseY > food4Y - 35) && (mouseY < food4Y + 35)) {
      food4X = mouseX;
      food4Y = mouseY;
      return;
    }
  }
  if ((mouseX > food5X - 35) && (mouseX < food5X + 35)) {
    if ((mouseY > food5Y - 35) && (mouseY < food5Y + 35)) {
      food5X = mouseX;
      food5Y = mouseY;
      return;
    }
  }
}
if(game == 3){
  if ((mouseX > apple2X - 40) && (mouseX < apple2X + 40) && (applecounter < apple1)) {
    if ((mouseY > apple2Y - 40) && (mouseY < apple2Y + 40)) {
      apple2X = mouseX;
      apple2Y = mouseY;
      return;
    }
  }
  if ((mouseX > banana2X - 40) && (mouseX < banana2X + 20) && (bananacounter < banana1)) {
    if ((mouseY > banana2Y - 40) && (mouseY < banana2Y + 40)) {
      banana2X = mouseX;
      banana2Y = mouseY;
      return;
    }
  }
  if ((mouseX > grape2X - 40) && (mouseX < grape2X + 40) && (grapecounter < grape1)) {
    if ((mouseY > grape2Y - 40) && (mouseY < grape2Y + 40)) {
      grape2X = mouseX;
      grape2Y = mouseY;
      return;
    }
  }
  if ((mouseX > pear2X - 40) && (mouseX < pear2X + 40) && (pearcounter < pear1)) {
    if ((mouseY > pear2Y - 40) && (mouseY < pear2Y + 40)) {
      pear2X = mouseX;
    pear2Y = mouseY;
      return;
    }
  }
}
if(game == 8){
  if ((mouseX > apple2X - 40) && (mouseX < apple2X + 40) && (applecounter < apple1 + apple3)) {
    if ((mouseY > apple2Y - 40) && (mouseY < apple2Y + 40)) {
      apple2X = mouseX;
      apple2Y = mouseY;
      return;
    }
  }
  if ((mouseX > banana2X - 40) && (mouseX < banana2X + 20) && (bananacounter < banana1 + banana3)) {
    if ((mouseY > banana2Y - 40) && (mouseY < banana2Y + 40)) {
      banana2X = mouseX;
      banana2Y = mouseY;
      return;
    }
  }
  if ((mouseX > grape2X - 40) && (mouseX < grape2X + 40) && (grapecounter < grape1 + grape3)) {
    if ((mouseY > grape2Y - 40) && (mouseY < grape2Y + 40)) {
      grape2X = mouseX;
      grape2Y = mouseY;
      return;
    }
  }
  if ((mouseX > pear2X - 40) && (mouseX < pear2X + 40) && (pearcounter < pear1 + pear3)) {
    if ((mouseY > pear2Y - 40) && (mouseY < pear2Y + 40)) {
      pear2X = mouseX;
    pear2Y = mouseY;
      return;
    }
  }
}
}

function makeLerp(r,g,b,num) {
  from = color(r,g,b);
  to = color(0);
  lerpC = lerpColor(from,to,.2);
  fill(from);
  if(num==sel) {
    fill(lerpC)
  }
}

function strokeLerp(r,g,b,num) {
  from = color(r,g,b);
  to = color(0);
  lerpC = lerpColor(from,to,.2);
  stroke(from);
  if(num==sel) {
    stroke(lerpC);
  }
}

function fillLerp(col,num) {
  from = color(col);
  to = color(0);
  lerpC = lerpColor(from,to,.2);
  fill(from);
  if(num==sel) {
    fill(lerpC);
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

  if(mouseX<=175) {
    if(mouseY>=125 && mouseY<=225) {
      cursor(HAND);
      sel=1;
    }
    else if(mouseY>=275) {
      cursor(HAND);
      sel=3;
    }
    else {
      cursor(ARROW);
      sel=0;
    } 
  }
  else if(mouseX>=225) {
    if(mouseY>=125 && mouseY<=225) {
      cursor(HAND);
      sel=2;
    }
    else if(mouseY>=275) {
      cursor(HAND);
      sel=4;
    }
    else {
      cursor(ARROW);
      sel=0;
    } 
  }
  else {
    cursor(ARROW);
    sel=0;
  } 
  
  background(0,190,40);

  // fill(lerpC);
  // if(sel==1) {
  //   rect(0,100,200,150);
  // }
  // if(sel==2) {
  //   rect(200,100,200,150);
  // }
  // if(sel==3) {
  //   rect(0,250,200,150);
  // }
  // if(sel==4) {
  //   rect(200,250,200,150);
  // }

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
  makeLerp(100,100,100,1);
  rect(50,150,125,40);
  makeLerp(200,200,200,1);
  rect(50,190,125,35);
  strokeLerp(150,150,150,1);
  strokeWeight(5);
  strokeCap(SQUARE);
  line(25,125,25,225);
  noStroke();
  makeLerp(100,100,100,1);
  arc(25,140,40,40,PI,0);
  rect(5,140,40,20);
  makeLerp(133,255,251,1);
  rect(50,195,45,15);
  rect(130,195,45,15);
  rect(103,195,20,30);
  makeLerp(255,157,0,1);
  arc(25,140,25,25,PI,0);
  rect(12.5,150,25,5,0,0,2,2);
  text("Build-A",112,167);
  text("Burger",112,183);
  makeLerp(115,44,0,1);
  rect(11,140,28,10,3,3,3,3);
  makeLerp(255,230,0,1);
  rect(36,200,5,20);
  triangle(38.5,190,47,200,30,200);
  rect(140,135,20,5);
  triangle(160,129,160,146,170,137.5);
  rect(60,135,20,5);
  triangle(80,129,80,146,90,137.5);


  noStroke();  
  makeLerp(168,79,0,2); //Gingerbread house "Sugar Switch"
  strokeLerp(255,255,255,2);
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
  makeLerp(117,55,0,2);
  rect(290,185-2,20,40);
  rect(255+5,170-2,10,10);
  rect(265+5,170-2,10,10);
  rect(255+5,180-2,10,10);
  rect(265+5,180-2,10,10);
  rect(335-5,170-2,10,10);
  rect(325-5,170-2,10,10);
  rect(335-5,180-2,10,10);
  rect(325-5,180-2,10,10);
  makeLerp(168,79,0,2);
  rect(250,130,100,30);
  noStroke();
  makeLerp(255,138,196);
  text("Sugar Switch",300,150);
  
  noStroke();
  strokeCap(ROUND);
  fill(0);
  rect(25,275,150,100); //Grocery store "Ralmart"
  makeLerp(150,150,150,3);
  rect(25,275,150,50);
  makeLerp(0,85,186,3);
  rect(62,270,75,50);
  makeLerp(255,255,255,3);
  textSize(17);
  text("Ralmart",100,290);
  makeLerp(133,255,251,3);
  rect(65,310,20,15);
  rect(114,310,20,15);
  strokeLerp(253,177,40,3);
  strokeWeight(3);
  line(90,305,95,305);
  line(97,300,94,295);
  line(97,310,94,315);
  line(105,305,110,305);
  line(103,300,106,295);
  line(103,310,106,315);
  strokeLerp(255,255,255,3);
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
  strokeLerp(150,150,150,3);
  strokeWeight(1);
  line(75,310,75,325);
  line(124,310,124,325);
  strokeCap(ROUND);
  
  strokeLerp(199,119,0,4);
  strokeWeight(4);
  line(270+2,330,270+2,350);
  line(340-2,330,340-2,350);
  noStroke();
  makeLerp(224,135,0,4);
  rect(270,360,70,32);
  rect(270,305,70,32);
  fill(0);
  text("Orchard",305,320);
  text("Order",305,335);
  makeLerp(117,55,0,4); // "Orhard Order"
  rect(250,300,10,30);
  rect(250,300+50,10,30);
  rect(250+50,300-20,10,30);
  rect(250+100,300,10,30);
  rect(250+100,300+50,10,30);
  makeLerp(38,105,0,4);
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
  makeLerp(247,50,47,4); // Apple
  ellipse(260,295,7,7);
  ellipse(250,295,7,7);
  ellipse(245,305,7,7);
  ellipse(265,305,7,7);
  makeLerp(227,47,247,4); // Grape
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
  makeLerp(250,243,55,4); // Banana
  arc(260,295+50,7,7,PI/4,PI+PI-PI/4);
  arc(250,295+50,7,7,PI/4,PI+PI-PI/4);
  arc(245,305+50,7,7,PI/4,PI+PI-PI/4);
  arc(265,305+50,7,7,PI/4,PI+PI-PI/4);
  makeLerp(146,250,55,4); // Pear
  ellipse(260+50,295-20,7,7);
  ellipse(250+50,295-20,7,7);
  ellipse(245+50,305-20,7,7);
  ellipse(265+50,305-20,7,7);
  ellipse(260+50,295-23,4,4);
  ellipse(250+50,295-23,4,4);
  ellipse(245+50,305-23,4,4);
  ellipse(265+50,305-23,4,4);
  makeLerp(255,150,38,4); // Orange
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
  textSize(20);
  text("Select a store!",87.5,120);
}

function game1() { //All code for the Build-A-Burger game
  background(220);
  cursor(ARROW);
  fill(0);
  textFont(fontTango);
  textAlign(CENTER);
  textSize(20);
  ellipseMode(CENTER);
  rectMode(CORNER);
  strokeCap(ROUND);
  smooth();
  strokeJoin(ROUND);
  strokeWeight(0);
//  text(diff,25,100);
//  text(totDiff,25,150);
  stroke(0);
  strokeJoin(MITER);

  fill(150);
  rect(0,280,400,120);

  if(mouseX<=100 && mouseY<=50){
    sel=1;
    cursor(HAND);
  } else if((mouseX>100 && mouseX<300) && (mouseY>300 && mouseY<400) && burgerMenu) { //Start game button
    sel=2;
    cursor(HAND);
  } else if((mouseY>200 && mouseY<285) && (mouseX>50 && mouseX<140) && burgerMenu) {
    sel=3;
    cursor(HAND);
  } else if((mouseY>200 && mouseY<285) && (mouseX>155 && mouseX<245) && burgerMenu) {
    sel=4;
    cursor(HAND);
  } else if((mouseY>200 && mouseY<285) && (mouseX>260 && mouseX<350) && burgerMenu) {
    sel=5;
    cursor(HAND);
  } else if((mouseX>xstop-(15*1.4) && mouseX<xstop+30+(15*1.4)) && (mouseY>ystop && mouseY<ystop+30+(30*1.4)) && !burgerMenu) {
    sel=2;
    cursor(HAND);
  } else {
    sel=0;
    cursor(ARROW);
  }
  stroke(0);
  makeLerp(255,0,0,1);
  triangle(1,25,25,1,25,50);
  rect(25,10,75,30);
  noStroke();
  triangle(1,25,25,1,25,50);
  rect(25,10,75,30);
  textFont(fontTango);
  textSize(20);
  fill(0);
  text("Go Back",52,32);


  if(burgerMenu) {
    makeLerp(200,200,200,3);
    if(difSel==0) {
      fillLerp(100,3);
    }
    rect(50,250,90,35);
    makeLerp(200,200,200,4);
    if(difSel==1) {
      fillLerp(100,4);
    }
    rect(155,250,90,35);
    makeLerp(200,200,200,5);
    if(difSel==2) {
      fillLerp(100,5);
    }
    rect(260,250,90,35);
    makeLerp(255,157,0,2);
    rect(100,300,200,80);

    stroke(0);
    strokeWeight(4);
    fill(0);
    if(previewy<180) {
      rect(172,180,56,15,6,6,6,6);
    }
    else if(previewy2<180) {
      arc(200,180,50,50,PI,0);  
    }
    noStroke();

    fill(255,157,0);
    rect(175,195,50,10,0,0,4,4);
    if(!(previewy<180)) {
      arc(200,previewy2,50,50,PI,0);
    }
    fill(115,44,0);
    rect(172,previewy,56,15,6,6,6,6);

    if(previewy<180) {
      previewy+=spd;
    } else if(previewy2<180) {
      previewy2+=spd;
    }else {
      wait++;
    }
    if(wait>=200) {
      previewy=135;
      previewy2=135;
      wait=0;
    }

    fill(0);
    textSize(17);
    text("In this game you will build a delicious burger!",200,50);
    text("When you click play, the toppings will begin to fall,",200,70);
    text("press the big stop button to stop the toppings in place.",200,90);
    text("Stop each burger topping inside the outline to get the best",200,110);
    text("score.",200,130);
    textSize(22);
    text("Select a difficulty:",200,225);
    text("Easy",95,275);
    text("Medium",200,275);
    text("Hard",305,275);
    text("Start the game!",200,325);
  }
  else {
  textSize(20); 
  text("Make... your... BURGER!",25,45,375);
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
    fill(255,157,0);
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
    fill(255,157,0);
    strokeWeight(0);
    arc(xbunt,ybunt,100,50,PI,0,CHORD);
  }

  if(topping<7) {
    makeLerp(209,0,14,2);//Draws the stop button
    strokeLerp(255,255,255,2);
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
  
    fillLerp(255,2);//Prints STOP on the stop button
    strokeWeight(1);
    textFont('Helvetica');
    text("STOP",xstop+15,ystop+42);
    textFont(fontTango);
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
  }


function game2() { //All code for the Color Match game
  fill(0);
  cursor(ARROW);
  textFont(fontTango);
  textAlign(CENTER);
  textSize(20);
  ellipseMode(CENTER);
  rectMode(CORNER);
  strokeCap(ROUND);
  smooth();
  strokeJoin(ROUND);
  strokeWeight(0);
  background(255, 138, 196);

  if(mouseX<=100 && mouseY<=50){
    sel=1;
    cursor(HAND);
  } else if ((mouseX > 80 && mouseX < 180) && (mouseY > 290 && mouseY < 350))  {
    sel=2;
    cursor(HAND);
  } else if ((mouseX > 217 && mouseX < 317) && (mouseY > 290 && mouseY < 350))  {
    sel=3;
    cursor(HAND);
  } else if ((mouseX > 300 && mouseX < 400) && (mouseY > 0 && mouseY < 50)) {
    sel=0;
    cursor(HAND);
  } else {
    sel=0;
    cursor(ARROW);
  }
  stroke(0);
  makeLerp(255,0,0,1);
  triangle(1,25,25,1,25,50);
  rect(25,10,75,30);
  noStroke();
  triangle(1,25,25,1,25,50);
  rect(25,10,75,30);
  textFont(fontTango);
  textSize(20);
  fill(0);
  text("Go Back",52,32);
  
  if (congrats == false) {
  if (needColor == true) {
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    color1 = random(colors);
    color2 = random(colors);
    while (color2 == color1) {
      color2 = random(colors);
    }
    randomNum = random([0,1]);
    needColor = false;
    }
  
  
  
  fill(color1);
  stroke('null');
  circle(200, 85, 110);
  fill('white');
  stroke('grey');
  rect(193, 140, 12, 125);
  fill('black');
  textSize(17);
  textFont(fontTango);
  text('Click the color that is the same as the lollipop!', 5, 375, 400);
  
  if (randomNum == 0) {
    fillLerp(color1,2);
  } 
  else {
    fillLerp(color2,2);
  }
  rect(80, 290, 100, 60);
  
  if (randomNum == 1) {
    fillLerp(color1,3);
  } 
  else {
    fillLerp(color2,3);
  } 
  rect(217, 290, 100, 60);
  }
  
  if (congrats == true) {
    fill('black');
    textSize(40);
    textFont(fontTango);
    text('Congratulations!', 25, 175, 375); 
    confetti();
    textSize(20);
    textAlign(CENTER);
    fill('black');
    textSize(15);
    text('Click here for the next level!', 300, 15, 100);
  }
}

function game2Lvl2() {
  fill(0);
  textFont(fontTango);
  cursor(ARROW);
  textAlign(CENTER);
  textSize(20);
  ellipseMode(CENTER);
  rectMode(CORNER);
  strokeCap(ROUND);
  smooth();
  strokeJoin(ROUND);
  strokeWeight(0);
  background(255, 138, 196);



  if(mouseX<=100 && mouseY<=50){
    sel=1;
    cursor(HAND);
  } else if ((mouseX > 60 && mouseX < 130) && (mouseY > 290 && mouseY < 350))  {
    sel=2;
    cursor(HAND);
  } else if ((mouseX > 165 && mouseX < 235) && (mouseY > 290 && mouseY < 350))  {
    sel=3;
    cursor(HAND);
  } else if ((mouseX > 270 && mouseX < 340) && (mouseY > 290 && mouseY < 350)) {
    sel=4;
    cursor(HAND);
  } else if ((mouseX > 300 && mouseX < 400) && (mouseY > 0 && mouseY < 50)) {
    sel=0;
    cursor(HAND);
  } else {
    sel=0;
    cursor(ARROW);
  }
  
  stroke(0);
  makeLerp(255,0,0,1);
  triangle(1,25,25,1,25,50);
  rect(25,10,75,30);
  noStroke();
  triangle(1,25,25,1,25,50);
  rect(25,10,75,30);
  textFont(fontTango);
  textSize(20);
  fill(0);
  text("Go Back",52,32);

  if (congrats == false) {
    if (needColor == true) {
      let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
      color1 = random(colors);
      color2 = random(colors);
      color3 = random(colors);
      while (color2 == color1) {
        color2 = random(colors);
      }
      while (color3 == color2 || color3 == color1) {
        color3 = random(colors);
      }
      randomNum = random([0, 1, 2]);
      needColor = false;
      }
    

    
    fillLerp(color1,2);
    rect(60, 290, 70, 60);

    fillLerp(color2,3);
    rect(165, 290, 70, 60);

    fillLerp(color3,4);
    rect(270, 290, 70, 60);
    
    if(randomNum == 0)
      fill(color1);
    if(randomNum == 1)
      fill(color2);
    if(randomNum == 2)
      fill(color3);
   
    stroke('null');
    circle(200, 85, 110);
    fill('white');
    stroke('grey');
    rect(193, 140, 12, 125);
    fill('black');
    textSize(17);
    textFont(fontTango);
    text('Click the color that is the same as the lollipop!', 5, 375, 400);
}    
    
    if (congrats == true) {
      fill('black');
      textSize(40);
      textFont(fontTango);
      text('Congratulations!', 25, 185, 375); 
      confetti();
      fill('black');
      textSize(15);
      textAlign(CENTER);
      fill('black');
      textSize(15);
      text('Click here for the next level!', 300, 15, 100);
    }
}



function game2Lvl3() {
  fill(0);
  cursor(ARROW);
  textFont(fontTango);
  textAlign(CENTER);
  textSize(20);
  ellipseMode(CENTER);
  rectMode(CORNER);
  strokeCap(ROUND);
  smooth();
  strokeJoin(ROUND);
  strokeWeight(0);
  background(255, 138, 196);



  if(mouseX<=100 && mouseY<=50){
    sel=1;
    cursor(HAND);
  } else if ((mouseX > 20 && mouseX < 80) && (mouseY > 290 && mouseY < 350))  {
    sel=2;
    cursor(HAND);
  } else if ((mouseX > 165 && mouseX < 235) && (mouseY > 290 && mouseY < 350))  {
    sel=3;
    cursor(HAND);
  } else if ((mouseX > 270 && mouseX < 340) && (mouseY > 290 && mouseY < 350)) {
    sel=4;
    cursor(HAND);
  } else if ((mouseX > 320 && mouseX < 380) && (mouseY > 290 && mouseY < 350)) {
    sel=5;
    cursor(HAND);
  } else {
    sel=0;
    cursor(ARROW);
  }
  
  stroke(0);
  makeLerp(255,0,0,1);
  triangle(1,25,25,1,25,50);
  rect(25,10,75,30);
  noStroke();
  triangle(1,25,25,1,25,50);
  rect(25,10,75,30);
  textFont(fontTango);
  textSize(20);
  fill(0);
  text("Go Back",52,32);
   
  if (congrats == false) {
    if (needColor == true) {
      let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
      color1 = random(colors);
      color2 = random(colors);
      color3 = random(colors);
      color4 = random(colors);
      
      while (color2 == color1) {
        color2 = random(colors);
      }
      while (color3 == color2 || color3 == color1) {
        color3 = random(colors);
      }
      while (color4 == color3 || color4 == color2 || color4 == color){
        color4 = random(colors);
      }

      randomNum = random([0, 1, 2, 3]);
      needColor = false;
      }
    
      fillLerp(color1,2);
      rect(20, 290, 60, 60);
  
      fillLerp(color2,3);
      rect(120, 290, 60, 60);
  
      fillLerp(color3,4);
      rect(220, 290, 60, 60);
      
      fillLerp(color4,5);
      rect(320, 290, 60, 60);
      
      if(randomNum == 0)
        fill(color1);
      if(randomNum == 1)
        fill(color2);
      if(randomNum == 2)
        fill(color3);
      if(randomNum == 3)
        fill(color4);
      //draw lollipop code
      stroke('null');
      circle(200, 85, 110);
      fill('white');
      stroke('grey');
      rect(193, 140, 12, 125);
      fill('black');
      textSize(17);
      textFont(fontTango);
      text('Click the color that is the same as the lollipop!', 5, 375, 400);
}
if (congrats == true) {
    fill('black');
    textSize(40);
    text('Nice job! You have completed all levels!', 25, 160, 375)
    confetti();
}
}


function game3() { //All code for the Number Buckets game
  fill(0);
  cursor(ARROW);
  textFont(fontTango);
  textAlign(CENTER);
  textSize(20);
  ellipseMode(CENTER);
  rectMode(CORNER);
  strokeCap(ROUND);
  smooth();
  strokeJoin(ROUND);
  strokeWeight(0);

  background(128, 150, 300);
  
  if(mouseX<=100 && mouseY<=50){
    sel=1;
    cursor(HAND);
  } else {
    sel=0;
    cursor(ARROW);
  }
  stroke(0);
  makeLerp(255,0,0,1);
  triangle(1,25,25,1,25,50);
  rect(25,10,75,30);
  noStroke();
  triangle(1,25,25,1,25,50);
  rect(25,10,75,30);
  textFont(fontTango);
  textSize(20);
  fill(0);
  text("Go Back",52,32);

  textSize(20);
  textFont(fontTango);
  stroke('rgba(0,255,0,0.25)');
  strokeWeight(4);  
  fill("purple");
  text("Welcome to RalMart!",100,30,300);
  text("Drag the instructed number of fruits into the shopping cart!",0,70,400);
  text(bananacounter + "/" + banana1, 150, 185, 10);
  text(applecounter + "/" + apple1,150,120,10);
  text(grapecounter + "/" + grape1,150,255,10);
  text(pearcounter + "/" + pear1,150,330,10);
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

  strokeWeight(5);
  stroke("yellow");
  strokeWeight(5);
  fill("rgba(0,255,130,0.24)");
  rect(30,360,100,30,5,5,5,5);
  fill("rgba(255,0,231,0.88)");
  textSize(15);
  textFont(fontTango);
  strokeWeight(0);
  text("Level 1",54,366,60,20);
  textSize(20);

  if ((banana2X > 200) && (banana2X < 250)) {
    if ((banana2Y > 185) && (banana2Y < 250)) {
      fill(0);
      banana2X = 60;
      banana2Y = 155;
      bananacounter++;
      return;
      
    }
  }

  if ((apple2X > 200) && (apple2X < 250)) {
    if ((apple2Y > 185) && (apple2Y < 250)) {
      fill(0);
      apple2X = 60;
      apple2Y = 90;
      applecounter++;
      return;
      
    }
  }

  if ((grape2X > 200) && (grape2X < 250)) {
    if ((grape2Y > 185) && (grape2Y < 250)) {
      fill(0);
      grape2X = 60;
      grape2Y = 225;
      grapecounter++;
      return;
    }
  }
  
  if ((pear2X > 200) && (pear2X < 250)) {
    if ((pear2Y > 185) && (pear2Y < 250)) {
      fill(0);
      pear2X = 60;
      pear2Y = 300;
      pearcounter++;
      return;
    }
  }

  if ((apple1==applecounter)&&(banana1 == bananacounter)&&(pearcounter == pear1)&&(grape1 == grapecounter)){
    confetti();
  fill(255,247,0);
  stroke('black');
  strokeWeight(4);
  beginShape();
  vertex(330,180)
  vertex(250,180)
  vertex(220,95)
  vertex(180,180)
  vertex(100,180)
  vertex(165,235)
  vertex(140,305)
  vertex(215,265)
  vertex(290,305)
  vertex(265,235)
  endShape(CLOSE);
  strokeWeight(0);
    fill("black");
    text("Congrats! Press me to move to the next level",150,185,130,120);

     
    
  }
 
}

function game3lvl2() {
  fill(0);
  textFont('Georgia');
  cursor(ARROW);
  textAlign(CENTER);
  textSize(20);
  ellipseMode(CENTER);
  rectMode(CORNER);
  strokeCap(ROUND);
  smooth();
  strokeJoin(ROUND);
  strokeWeight(0);

  background(128, 150, 300);
  
  if(mouseX<=100 && mouseY<=50){
    sel=1;
    cursor(HAND);
  } else {
    sel=0;
    cursor(ARROW);
  }
  stroke(0);
  makeLerp(255,0,0,1);
  triangle(1,25,25,1,25,50);
  rect(25,10,75,30);
  noStroke();
  triangle(1,25,25,1,25,50);
  rect(25,10,75,30);
  textFont(fontTango);
  textSize(20);
  fill(0);
  text("Go Back",52,32);

  textSize(20);
  textFont(fontTango);
  stroke('rgba(0,255,0,0.25)');
  strokeWeight(4);  
  fill("purple");
  text("Welcome to RalMart!",100,30,300);
  text("Drag the instructed number of fruits into the shopping cart!",0,70,400);

  text(bananacounter + "/" + banana1 + "+" + banana3, 150, 185,17);
  text(applecounter + "/" + apple1 + "+" + apple3,150,120,17);
  text(grapecounter + "/" + grape1 + "+" + grape3,150,255,17);
  text(pearcounter + "/" + pear1 + "+" + pear3,150,330,17);
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

  strokeWeight(5);
  stroke("purple");
  strokeWeight(5);
  fill("rgba(0,255,130,0.24)");
  rect(30,360,100,30,5,5,5,5);
  fill("rgba(255,0,231,0.88)");
  textSize(15);
  textFont(fontTango);
  strokeWeight(0);
  text("Level 2",54,366,60,20);
  textSize(20);

  if ((banana2X > 200) && (banana2X < 250)) {
    if ((banana2Y > 185) && (banana2Y < 250)) {
      fill(0);
      banana2X = 60;
      banana2Y = 155;
      bananacounter++;
      return;
      
    }
  }

  if ((apple2X > 200) && (apple2X < 250)) {
    if ((apple2Y > 185) && (apple2Y < 250)) {
      fill(0);
      apple2X = 60;
      apple2Y = 90;
      applecounter++;
      return;
      
    }
  }

  if ((grape2X > 200) && (grape2X < 250)) {
    if ((grape2Y > 185) && (grape2Y < 250)) {
      fill(0);
      grape2X = 60;
      grape2Y = 225;
      grapecounter++;
      return;
    }
  }
  
  if ((pear2X > 200) && (pear2X < 250)) {
    if ((pear2Y > 185) && (pear2Y < 250)) {
      fill(0);
      pear2X = 60;
      pear2Y = 300;
      pearcounter++;
      return;
    }
  }

  if ((apple1 + apple3 == applecounter)&&(banana1 + banana3 == bananacounter)&&(pearcounter == pear1 + pear3)&&(grape1 + grape3 == grapecounter)){
    confetti();
    fill(255,247,0);
    stroke('black');
    strokeWeight(4);
    beginShape();
    vertex(330,180)
    vertex(250,180)
    vertex(220,95)
    vertex(180,180)
    vertex(100,180)
    vertex(165,235)
    vertex(140,305)
    vertex(215,265)
    vertex(290,305)
    vertex(265,235)
    endShape(CLOSE);
    strokeWeight(0);
      fill("black");
      text("Congrats! You have completed all the level",150,185,130,120);

  
  }
}

  


function game4() { //All code for the Pattern Match game
  fill(0);
  textFont('Georgia');
  cursor(ARROW);
  textAlign(CENTER);
  textSize(20);
  ellipseMode(CENTER);
  rectMode(CORNER);
  strokeCap(ROUND);
  smooth();
  strokeJoin(ROUND);
  strokeWeight(0);
  
  background(105,212,91);

  if(mouseX<=100 && mouseY<=50){
    sel=1;
    cursor(HAND);
  } else if((mouseX > 175 && mouseX< 205) && (mouseY > 345 && mouseY < 375)) {
    sel=2;
    cursor(HAND);
  } else if((mouseX > 100 && mouseX < 300) && (mouseY > 100 && mouseY < 300)){
    sel=3;
    cursor(HAND);
  } else {
    sel=0;
    cursor(ARROW);
  }
  
  stroke(0);
  makeLerp(255,0,0,1);
  triangle(1,25,25,1,25,50);
  rect(25,10,75,30);
  noStroke();
  triangle(1,25,25,1,25,50);
  rect(25,10,75,30);
  textFont(fontTango);
  textSize(20);
  fill(0);
  text("Go Back",52,32);

  strokeWeight(5);
  stroke("yellow");
  strokeWeight(5);
  fill("rgba(0,255,130,0.24)");
  rect(290,10,100,30,5,5,5,5);
  fill("rgba(255,0,231,0.88)");
  textSize(15);
  textFont(fontTango);
  strokeWeight(0);
  text("Level 1",310,15,60,20);
  
  textFont(fontTango);
  fill(400);
  stroke('green');
strokeWeight(4);
  rect( 210, 240, 80, 80);
  rect( 120, 240, 80, 80);
  rect( 30, 240, 80, 80);
  rect( 300, 240, 80, 80);
  strokeWeight(0);
  fill(0);
  
    textSize(15);
  text("Banana", bananaText, 280,100);
  text("Apple", appleText, 280,100);
  text("Grape", grapeText, 280,100);
  text("Pear", pearText, 280,100);
  
  textSize(24); 
  strokeLerp(255,255,255,2);
  strokeWeight(3);
  fill('black');
  ellipse(190, 360 , 70, 70);
  fill('green');
  text("Check", 180, 350, 30, 30);
  
  
strokeWeight(0);
  fill("red");
  text("Drag the fruit to the matching box",25,200,375);
  
  image(bananaPic,food1X, food1Y, 75, 75);
  image(applePic, food2X, food2Y, 70, 70);
  image(Grape2, food3X, food3Y, 75, 75);
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
    if ((food1X > bananaText) && (food1X < bananaText + 80)) {
      if ((food1Y > 230) && (food1Y < 270)) {
        value++;
        box1=true;
      }
    }
  if ((food2X > appleText) && (food2X < appleText + 80)) {
    if ((food2Y > 230) && (food2Y < 270)) {
        
      value++;
      box2=true;
    }
  }
  if ((food3X > grapeText) && (food3X < grapeText + 80)) {
    if ((food3Y > 230) && (food3Y < 270)) {
      value++;
      box3 = true;
    }
  }
  if ((food4X > pearText) && (food4X < pearText + 80)) {
    if ((food4Y > 230) && (food4Y < 270)) {
        value++;
        box4 = true;
    }
  }
  check=false;
}
if(value == 4){//to check if all the boxes are correct
  confetti();
  strokeWeight(4);
  strokeLerp(255,255,255,2);
  fill('black');
ellipse(200, 200, 200,200);
makeLerp(255,255,255,3);
textSize(20);
fill('green');
  text("Congrats, you got everything right! Click to move on to level 2", 137, 150, 120, 120);
  nextLevel2 = true;
}
if((value < 4) && (value > 0)){//checks how many are correct
  strokeWeight(4);
  strokeLerp(255,255,255,2);
  fill('black');
ellipse(200, 200, 200,200);
textSize(20);
fill('green');
text("Nice try, You got " + value + "/4 correct. Click anywhere in the circle to restart", 137, 150, 120,120);
}

}

function game4Lvl2(){
  fill(0);
  textFont(fontTango);
  cursor(ARROW);
  textAlign(CENTER);
  textSize(20);
  ellipseMode(CENTER);
  rectMode(CORNER);
  strokeCap(ROUND);
  strokeJoin(ROUND);
  strokeWeight(0);
  
  background(105,212,91);

  if(mouseX<=100 && mouseY<=50){
    sel=1;
    cursor(HAND);
  } else if((mouseX > 175 && mouseX< 205) && (mouseY > 345 && mouseY < 375)) {
    sel=2;
    cursor(HAND);
  } else if((mouseX > 100 && mouseX < 300) && (mouseY > 100 && mouseY < 300)){
    sel=3;
    cursor(HAND);
  } else {
    sel=0;
    cursor(ARROW);
  }

  stroke(0);
  makeLerp(255,0,0,1);
  triangle(1,25,25,1,25,50);
  rect(25,10,75,30);
  noStroke();
  triangle(1,25,25,1,25,50);
  rect(25,10,75,30);
  textFont(fontTango);
  textSize(20);
  fill(0);
  text("Go Back",52,32);

  strokeWeight(5);
  stroke("yellow");
  strokeWeight(5);
  fill("rgba(0,255,130,0.24)");
  rect(290,10,100,30,5,5,5,5);
  fill("rgba(255,0,231,0.88)");
  textSize(15);
  textFont(fontTango);
  strokeWeight(0);
  text("Level 2",310,15,60,20);
  
  textFont(fontTango);
  fill(400);
  stroke('green');
strokeWeight(4);
  rect( 165, 240, 70, 70);
  rect( 85, 240, 70, 70);
  rect( 5, 240, 70, 70);
  rect( 245, 240, 70, 70);
  rect(325 , 240, 70, 70)
  strokeWeight(0);
  
  fill('green');
  textSize(14);
  text("Orange", orangeText , 280,100);
  text("Pear", pearText, 280,100);
  text("Apple", appleText, 280,100);
  text("Banana", bananaText, 280,100); 
  text("Grape", grapeText, 280, 100);

  textSize(24); 
  strokeLerp(255,255,255,2);
  strokeWeight(3);
  fill('black');
  ellipse(190, 360 , 70, 70);
  fill('green');
  text("Check", 180, 350, 30, 30);

  noStroke();
  fill("red");
  
  text("Drag the fruit to the matching box",25,200,375);
  
  image(bananaPic,food1X, food1Y, 60, 60);
  image(applePic, food2X, food2Y, 55, 55);
  image(Grape2, food3X, food3Y, 60, 60);
  image(Pear2, food4X, food4Y, 65, 65);
  image(orange, food5X, food5Y, 60, 60)
  
  if (check == true){//Checks if the first box is correct
    if ((food1X > bananaText) && (food1X < bananaText + 70)) {
      if ((food1Y > 230) && (food1Y < 270)) {
        value++;
        box1=true;
      }
    }
  if ((food2X > appleText) && (food2X < appleText + 70)) {
    if ((food2Y > 230) && (food2Y < 270)) {
        
      value++;
      box2=true;
    }
  }
  if ((food3X > grapeText) && (food3X < grapeText + 70)) {
    if ((food3Y > 230) && (food3Y < 270)) {
      value++;
      box3 = true;
    }
  }
  if ((food4X > pearText) && (food4X < pearText + 70)) {
    if ((food4Y > 230) && (food4Y < 270)) {
        value++;
        box4 = true;
    }
  }
    if ((food5X > orangeText) && (food5X < orangeText + 70)){
      if((food5Y > 230) && (food5Y < 270)){
         value++;
      }
    }
  
  check=false;
}
if(value == 5){//to check if all the boxes are correct
  confetti();
  fill('black');
  strokeWeight(4);
  strokeLerp(255,255,255,2);
ellipse(200, 200, 200,200);
makeLerp(255,255,255,3);
textSize(20);
fill('green');
  text("Congrats! Click to move on to level 3! You're going to need to memorize the boxes this time!", 136, 125, 125, 170);
  nextLevel2 = true;
}
if((value < 5) && (value > 0)){//checks how many are correct
  fill('black');
  strokeWeight(4);
  strokeLerp(255,255,255,2);
ellipse(200, 200, 200,200);
makeLerp(255,255,255,3);
textSize(20);
fill('green');
text("Nice try, You got " + value + "/5 correct. Click anywhere in the circle to restart", 137, 150, 120,120);
}

}

function game4Lvl3(){
  fill(0);
  cursor(ARROW);
  textAlign(CENTER);
  textSize(20);
  ellipseMode(CENTER);
  rectMode(CORNER);
  strokeCap(ROUND);
  smooth();
  strokeJoin(ROUND);
  strokeWeight(0);
  
  background(105,212,91);

  if(mouseX<=100 && mouseY<=50){
    sel=1;
    cursor(HAND);
  } else if((mouseX > 175 && mouseX< 205) && (mouseY > 345 && mouseY < 375)) {
    sel=2;
    cursor(HAND);
  } else if((mouseX > 100 && mouseX < 300) && (mouseY > 100 && mouseY < 300)){
    sel=3;
    cursor(HAND);
  } else {
    sel=0;
    cursor(ARROW);
  }

  strokeWeight(5);
  stroke("yellow");
  strokeWeight(5);
  fill("rgba(0,255,130,0.24)");
  rect(290,10,100,30,5,5,5,5);
  fill("rgba(255,0,231,0.88)");
  textSize(15);
  textFont(fontTango);
  strokeWeight(0);
  text("Level 3",310,15,60,20);

  stroke(0);
  makeLerp(255,0,0,1);
  triangle(1,25,25,1,25,50);
  rect(25,10,75,30);
  noStroke();
  triangle(1,25,25,1,25,50);
  rect(25,10,75,30);
  textFont(fontTango);
  textSize(20);
  fill(0);
  text("Go Back",52,32);
  
  fill(400);
  if (frameCount % 60 == 0 && timer > 0) {
    --timer;
    }
    textFont(fontTango);
    fill(400);
    stroke('green');
  strokeWeight(4);
  rect( 165, 240, 70, 70);
  rect( 85, 240, 70, 70);
  rect( 5, 240, 70, 70);
  rect( 245, 240, 70, 70);
  rect(325 , 240, 70, 70)
    strokeWeight(0);
    
    textSize(24); 
  strokeLerp(255,255,255,2);
  strokeWeight(3);
  fill('black');
  ellipse(190, 360 , 70, 70);
  fill('green');
  text("Check", 180, 350, 30, 30);
  
  noStroke();
  textSize(14);
  if(timer > 0){
  text("Orange", orangeText, 280,100);
  text("Pear", pearText, 280,100);
  text("Apple", appleText, 280,100);
  text("Banana", bananaText, 280,100); 
  text("Grape", grapeText, 280, 100)
  textSize(24);
  fill("red");
  textFont(fontTango);
  text("Memorize the boxes! They are going to dissappear when the timer ends!", 25, 200, 375);
  }
  

  fill("red");
  
  if(timer == 0){
    textSize(24);
  text("Drag the fruit to the matching box",25,200,375);
  }
  text(timer, 200, 185);
  
  
  image(bananaPic,food1X, food1Y, 60, 60);
  image(applePic, food2X, food2Y, 55, 55);
  image(Grape2, food3X, food3Y, 60, 60);
  image(Pear2, food4X, food4Y, 65, 65);
  image(orange, food5X, food5Y, 60, 60)
  
  if (check == true){//Checks if the first box is correct
    if ((food1X > bananaText) && (food1X < bananaText + 70)) {
      if ((food1Y > 230) && (food1Y < 270)) {
        value++;
        box1=true;
      }
    }
  if ((food2X > appleText) && (food2X < appleText + 70)) {
    if ((food2Y > 230) && (food2Y < 270)) {
        
      value++;
      box2=true;
    }
  }
  if ((food3X > grapeText) && (food3X < grapeText + 70)) {
    if ((food3Y > 230) && (food3Y < 270)) {
      value++;
      box3 = true;
    }
  }
  if ((food4X > pearText) && (food4X < pearText + 70)) {
    if ((food4Y > 230) && (food4Y < 270)) {
        value++;
        box4 = true;
    }
  }
    if ((food5X > orangeText) && (food5X < orangeText + 70)){
      if((food5Y > 230) && (food5Y < 270)){
         value++;
      }
    }
  check=false;
}
if(value == 5){//to check if all the boxes are correct
  confetti();
  fill('black');
  strokeWeight(4);
  strokeLerp(255,255,255,2);
ellipse(200, 200, 200,200);
makeLerp(255,255,255,3);
textSize(20);
fill('green');
  text("Congrats, you completed all the level! Click to go back to menu and play the other games!", 137, 140, 120, 120);
  nextLevel2 = true;
}
if((value < 5) && (value > 0)){//checks how many are correct
  
  fill('black');
  strokeWeight(4);
  strokeLerp(255,255,255,2);
ellipse(200, 200, 200,200);
makeLerp(255,255,255,3);
textSize(20);
fill('green');
text("Nice try, You got " + value + "/5 correct. Click anywhere in the circle to restart", 137, 150, 120,120);
}
}




//-----------------------------------------------------

function toGame1() {
  game=1;
  burgerMenu=true;
  diff=0;
  totDiff=0;
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
  start = true;
}

function toGame2Lvl2() {
  game = 5;
  background(255, 138, 196);
  congrats = false;
  needColor = true;
  start = true;
}

function toGame2Lvl3() {
  game = 6;
  background(255, 138, 196);
  congrats = false;
  needColor = true;
  start = true;
}

function toGame3() {
  game = 3;
  start = true;
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
  counterX = [3,2,5,1,4];
  apple1 = random(counterX);
  counterX.splice(counterX.indexOf(apple1),1);
  banana1 = random(counterX);
  counterX.splice(counterX.indexOf(banana1),1);
  grape1 = random(counterX);
  counterX.splice(counterX.indexOf(grape1),1);
  pear1 = random(counterX); 
  counterX.splice(counterX.indexOf(pear1),1);

}

function toGame3lvl2(){
  game = 8;
  start = true;
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
  counterX = [3,2,5,1,4];
  counter2X = [1,2];
  apple1 = random(counterX);
  counterX.splice(counterX.indexOf(apple1),1);
  banana1 = random(counterX);
  counterX.splice(counterX.indexOf(banana1),1);
  grape1 = random(counterX);
  counterX.splice(counterX.indexOf(grape1),1);
  pear1 = random(counterX); 
  counterX.splice(counterX.indexOf(pear1),1);

  apple3 = random(counter2X);
  banana3 = random(counter2X);
  grape3 = random(counter2X);
  pear3 = random(counter2X); 
 
  
}

function toGame4() {
  game = 4;
  start = true;
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
  xText = [25, 110, 195, 290];
  bananaText = random(xText);
  xText.splice(xText.indexOf(bananaText), 1);
  appleText = random(xText);
  xText.splice(xText.indexOf(appleText), 1);
  grapeText = random(xText);
  xText.splice(xText.indexOf(grapeText), 1);
  pearText = random(xText);
  check = false;
  box1=false;
  box2=false;
  box3=false;
  box4=false;
  value = 0;
  nextLevel2 = false;
  nextLevel3 = false;
}

function toGame4Lvl2(){
  game = 7;
  start = true;
  xCoor = [10, 100, 235, 315, 180];
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
  xCoor.splice(xCoor.indexOf(food4X),1)
  food4Y = 50;
  food5X = random(xCoor);
  food5Y = 50;
  xText = [0, 70, 155, 230, 310];
  bananaText = random(xText);
  xText.splice(xText.indexOf(bananaText), 1);
  appleText = random(xText);
  xText.splice(xText.indexOf(appleText), 1);
  grapeText = random(xText);
  xText.splice(xText.indexOf(grapeText), 1);
  pearText = random(xText);
  xText.splice(xText.indexOf(pearText), 1);
  orangeText = random(xText);
  value = 0;
  check = false;
  box1=false;
  box2=false;
  box3=false;
  box4=false;
}

function toGame4Lvl3(){
game = 9;
start = true;
timer = 7;
xCoor = [10, 100, 235, 315, 180];
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
xCoor.splice(xCoor.indexOf(food4X),1)
food4Y = 50;
food5X = random(xCoor);
food5Y = 50;
xText = [0, 70, 155, 230, 310];
  bananaText = random(xText);
  xText.splice(xText.indexOf(bananaText), 1);
  appleText = random(xText);
  xText.splice(xText.indexOf(appleText), 1);
  grapeText = random(xText);
  xText.splice(xText.indexOf(grapeText), 1);
  pearText = random(xText);
  xText.splice(xText.indexOf(pearText), 1);
  orangeText = random(xText);
value = 0;
check = false;
box1=false;
box2=false;
box3=false;
box4=false;
}

function toMenu() {
  game = 0;
  start = true;
  needColor = true;
}

function preload() {
  foodBG = loadImage('images/burgerBg.png');
  applePic = loadImage('images/IMG_7378.PNG');
  bananaPic = loadImage('images/IMG_7377.PNG');
  orangePic = loadImage('images/Orange.png');
  apple2 = loadImage("images/IMG_2245.PNG");
  banana2 = loadImage("images/Banana.png");
  Grape2 = loadImage("images/IMG_7376.PNG");
  Pear2 = loadImage("images/IMG_7375.PNG");
  shoppingcart = loadImage("images/IMG_2250.PNG");
  fontTango = loadFont("fonts/Tango_BT.ttf");  
  orange = loadImage("images/IMG-2514.PNG");
  
  soundFormats("mp3");
  chimeSound = loadSound("sounds/mystical-wind-chimes-transition-fx-6327.mp3");
  gameSound = loadSound("sounds/game-start-6104.mp3");
}


function mouseClicked() {
  xstart = mouseX;
  ystart = mouseY;
  if(game==0) {
    if(mouseX<=175) {
      if(mouseY>=125 && mouseY<=225) {
        toGame1();
        gameSound.play();
      }
      if(mouseY>=275) {
        toGame3();
        gameSound.play();
      }
    }
    if(mouseX>=225) {
      if(mouseY>=125 && mouseY<=225) {
        toGame2();
        gameSound.play();
      }
      if(mouseY>=275) {
        toGame4();
        gameSound.play();
      }
    }
  }
  if(game>0) {
    if(mouseX<=100 && mouseY<=50){
      toMenu();
    }
  }
  if(game==1) {
    if(burgerMenu) {
      if((mouseX>100 && mouseX<300) && (mouseY>300 && mouseY<400)) {
        burgerMenu=false;
      }
      if(mouseY>200 && mouseY<285) {
        if(mouseX>50 && mouseX<140) {
          spd=1;
          difSel=0;
          previewy=135;
          previewy2=135;
          wait=0;    
        }
        else if(mouseX>155 && mouseX<245) {
          spd=1.5;
          difSel=1;
          previewy=135;
          previewy2=135;
          wait=0;    
        }
        else if(mouseX>260 && mouseX<350) {
          spd=2.5;
          difSel=2;
          previewy=135;
          previewy2=135;
          wait=0;    
        }
      }
    }
    else {
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
  } 

  if (game == 2) {
    if ((mouseX > 80 && mouseX < 180) && (mouseY > 290 && mouseY < 350) && randomNum == 0)  {
      congrats = true;
    }

    if ((mouseX > 217 && mouseX < 317) && (mouseY > 290 && mouseY < 350) && randomNum == 1)  {
      congrats = true;

    }

    if ((mouseX > 300 && mouseX < 400) && (mouseY > 0 && mouseY < 50) && congrats) {
      toGame2Lvl2();
    }
  }

  if (game == 5) {
    if ((mouseX > 60 && mouseX < 130) && (mouseY > 290 && mouseY < 350) && randomNum == 0)  {
      congrats = true;
    }

    if ((mouseX > 165 && mouseX < 235) && (mouseY > 290 && mouseY < 350) && randomNum == 1)  {
      congrats = true;
    } 

    if ((mouseX > 270 && mouseX < 340) && (mouseY > 290 && mouseY < 350) && randomNum == 2) {
      congrats = true;
    }

    if ((mouseX > 300 && mouseX < 400) && (mouseY > 0 && mouseY < 50) && congrats) {
      toGame2Lvl3();
    }
  }

  if (game == 6) {
    if ((mouseX > 20 && mouseX < 80) && (mouseY > 290 && mouseY < 350) && randomNum == 0)  {
      congrats = true;
    }

    if ((mouseX > 165 && mouseX < 235) && (mouseY > 290 && mouseY < 350) && randomNum == 1)  {
      congrats = true;  
    } 

    if ((mouseX > 270 && mouseX < 340) && (mouseY > 290 && mouseY < 350) && randomNum == 2) {
      congrats = true;
    }

    if ((mouseX > 320 && mouseX < 380) && (mouseY > 290 && mouseY < 350) && randomNum == 3) {
      congrats = true;
    }
  }
  
  if (game == 3){
    if((mouseX > 150 && mouseX < 250) && (mouseY > 150 && mouseY < 250) && (apple1==applecounter)&&(banana1 == bananacounter)&&(pearcounter == pear1)&&(grape1 == grapecounter)) {
      toGame3lvl2();
      check = true;
      value = 0;
    }
  }
    if (game == 8){
      if((mouseX > 150 && mouseX < 250) && (mouseY > 150 && mouseY < 250) && (apple1 + apple3 == applecounter) && (banana1 + banana3 == bananacounter) && (pearcounter == pear1 + pear3)&&(grape1 + grape3 == grapecounter)){
        toMenu();
        check = true;
        value = 0;
      }
    
  }

if (game == 4){
  if ((mouseX > 175 && mouseX< 205) && (mouseY > 345 && mouseY < 375)){
    check = true;
    value = 0;
  }
    if((value == 4) && (mouseX > 100 && mouseX < 300) && (mouseY > 100 && mouseY < 300)){
    toGame4Lvl2();
    }
    if((value > 0) && (value < 4) && (mouseX > 100 && mouseX < 300) && (mouseY > 100 && mouseY < 300)){
      toGame4();
  }

}
if (game == 7){
  if ((mouseX > 175 && mouseX< 205) && (mouseY > 345 && mouseY < 375)){
    check = true;
    value = 0;
  }
  if((value == 5) && (mouseX > 100 && mouseX < 300) && (mouseY > 100 && mouseY < 300)){
    toGame4Lvl3();
}
if((value > 0) && (value < 5) && (mouseX > 100 && mouseX < 300) && (mouseY > 100 && mouseY < 300)){
  toGame4Lvl2();
}
}
if (game == 9){
  if((mouseX > 175 && mouseX < 205) && (mouseY > 345 && mouseY < 375)){
    check = true;
    value = 0;
  }
  if((value == 5) && (mouseX > 100 && mouseX < 300) && (mouseY > 100 && mouseY < 300)){
    toMenu();
  }
if((value > 0) && (value < 5) && (mouseX > 100 && mouseX < 300) && (mouseY > 100 && mouseY < 300)){
  toGame4Lvl3();
}
}
}

function confetti() {
  noStroke();
  if(start) {
    chimeSound.play();
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
