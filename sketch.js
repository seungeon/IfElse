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


}