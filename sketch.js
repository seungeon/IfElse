function setup()
{
	createCanvas(800,600);
	noFill();
	stroke(fill(225,mouseY*225/320,mouseY*225/210));
}


function draw()
{
	background(0);
	fill(Math.random() * 255,Math.random() * 255,Math.random() * 255,Math.random() * 255);
	ellipse(mouseX,mouseY,50,50)

if (mouseX < 300) {
  	  fill(220,20,60);
	  stroke(220,20,60);
	  rect(mouseX+20,mouseY+20,10,10);
	  rect(mouseX+20,mouseY+30,30,10);
	  rect(mouseX+20,mouseY+40,40,10);
//white
	  fill(255,248,220);
	  stroke(255,248,220);
	  rect(mouseX+20,mouseY+50,50,40);
	  rect(mouseX+20,mouseY+90,70,40);
	  //yello;
	  	  fill(255,127,80);
	  stroke(255,127,80);
	  rect(mouseX+10,mouseY+70,10,20);
	  //black

	  fill(0);
	  stroke(0);
	  rect(mouseX+30,mouseY+60,10,10)
	    //brown;
	  fill(165,42,42);
	  stroke(165,42,42);
	  rect(mouseX+40,mouseY+130,10,30);
	  rect(mouseX+30,mouseY+150,10,10);
} else {
  	  	  fill(255,215,0);
	  stroke(255,215,0);
	  rect(mouseX+120,mouseY+90,40,40);

	  	  fill(0);
	  stroke(0);
	  rect(mouseX+130,mouseY+100,10,10);

	  	  	  fill(255,127,80);
	  stroke(255,127,80);
	  rect(mouseX+110,mouseY+110,10,10);

	    fill(165,42,42);
	  stroke(165,42,42);
	  rect(mouseX+140,mouseY+130,10,20);	  
	  rect(mouseX+130,mouseY+140,10,10);
}

}