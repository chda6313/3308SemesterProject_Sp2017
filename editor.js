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

gameMap edit =new gameMap();

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
    fill(0); 
    coin coin1=new coin(mouseX,mouseY); //fill color is black
  } else {
    stroke(0); //outline black
    fill(255);//fill white
  }
  rect(mouseX, mouseY, 50, 50); // draw at mouse location, with width and height of 50
}

/*class gameMap{
if (mousePressed == true) 
{coin coin1 = new coin(mouseX, mouseY);}
  
  gameMap(){
    
  }
  
  void draw(){
    
    //wall colors
    stroke(200);
    fill(100);
    for (int i=0; i<wallBlocks.length; i++){
      int[] d = wallBlocks[i].getLocation();
      int[] bS = wallBlocks[i].getSize();
      
      rect(d[0], d[1], bS[0], bS[1]);//x,y,xSize,ySize
    }
    
    
    
    //coin colors
    stroke(200);
    fill(color(100,100,0));
    
    boolean allCollected = true; // this tracks if all coins are collected for the goal
    for (int i=0; i<coins.length; i++){
      if (!coins[i].collected){ // only draw them if they are not collected
        ellipse(coins[i].x , coins[i].y, coinSize, 1.5*coinSize); //x,y, xradius, yradius
        allCollected = false;
        }
      }
    
    
    //goal color
    stroke(200);
    if (allCollected) {fill(color(0,255,0));}
    else {fill(color(255,0,0));}
    //draw the goal
    rect(goal.location[0], goal.location[1], goal.blockSize[0], goal.blockSize[1]);
  }
}*/
class coin{//makes a coin.
  int x = 0;
  int y = 0;
  boolean collected = false;
  coin(int xpos, int ypos){
    x = xpos;
    y = ypos;
  }
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
