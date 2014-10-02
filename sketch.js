var count;


function setup()
{
	createCanvas(800,600);
	noFill();
	stroke(fill(225,mouseY*225/320,mouseY*225/210));

	count=0;
}


function draw()
{
	background(0);
	fill(Math.random() * 255,Math.random() * 255,Math.random() * 255,Math.random() * 255);
	ellipse(mouseX,mouseY,50,50);

	if (mouseX < 100) {
		fill(220,20,60);
		stroke(220,20,60);
		rect(20,20,10,10);
		rect(20,30,30,10);
		rect(20,40,40,10);
		//white
		fill(255,248,220);
		stroke(255,248,220);
		rect(20,50,50,40);
		rect(20,90,70,40);
		  //yello;
		  fill(255,127,80);
		  stroke(255,127,80);
		  rect(10,70,10,20);
		  //black

		  fill(0);
		  stroke(0);
		  rect(30,60,10,10);
	    //brown;
	    fill(165,42,42);
	    stroke(165,42,42);
	    rect(40,130,10,30);
	    rect(30,150,10,10);

	} 



	else if (mouseX < 200){
		fill(255,215,0);
		stroke(255,215,0);
		rect(120,90,40,40);

		fill(0);
		stroke(0);
		rect(130,100,10,10);

		fill(255,127,80);
		stroke(255,127,80);
		rect(110,110,10,10);

		fill(165,42,42);
		stroke(165,42,42);
		rect(140,130,10,20);	  
		rect(130,140,10,10);

		console.log("second");
	} else if (mouseX < 450){
		ellipse(50,50,50,50);

		console.log("third");
	} else if (mouseX < 600){
		fill(255,215,0);
	  
		rect(130,140,10,10);
	} else if (mouseY < 300){


		fill(255,127,80);
		stroke(255,127,80);
		rect(110,110,10,10);


	} else {
		fill(255,215,0);
		stroke(255,215,0);
		rect(120,90,40,40);

		fill(0);
		stroke(0);
		rect(130,100,10,10);

		fill(255,127,80);
		stroke(255,127,80);
		rect(110,110,10,10);

		fill(165,42,42);
		stroke(165,42,42);
		rect(140,130,10,20);	  
		rect(130,140,10,10);
	}


      ellipse(count,100,10,10);
      count=count+1;
      if(count>600){
      	count=0;
      }
}