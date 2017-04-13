//Charles Davies

//note, pixels are counted from the top left of the screen.
//this causes some funcy math, most notibly, moving down in the y is actually adding to pixel number
//ex:

//0,0  1,0  2,0  3,0 ----> x-axis
//0,1  1,1  2,1  3,1
//0,2  1,2  2,2  3,2
//  |
//  |
//  V
//  y-axis



boolean[] keys = {false, false, false};//a,d,spacebar



void settings() 
{
  
}
//also runs once at the very start of the program
void setup()
{
  background(color(20,40,50)); //color(r,g,b)
  size(800,800);
  frameRate(60);
  
}




//this is the main function. Will loop for ever
void draw()
{
  background(color(20,50,50)); //draw the background, commenting out this line will draw on top of the previous frame
  
  
  //this draws a square at mouse location, with a color based on if the mouse is clicked.
  if (mousePressed == true) {
    stroke(255); // outline is white
    fill(0);  //fill color is black
  } else {
    stroke(0); //outline black
    fill(255);//fill white
  }
  rect(mouseX, mouseY, 50, 50); // draw at mouse location, with width and height of 50
}



//keyPressed and keyReleased track keyboard input
//build in functions of processing.js
void keyPressed() {
  if (key=='a') {keys[0]=true;}
  if (key=='d') {keys[1]=true;}
  if (key==' ') {keys[2] = true;}
}
void keyReleased() {
  if (key=='a') {keys[0]=false;}
  if (key=='d') {keys[1]=false;}
  if (key==' ') {keys[2]=false;}
}