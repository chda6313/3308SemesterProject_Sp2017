//3 arrays will be created 
//coins=coin
//platforms=block
//goal=final block 
//dynamic arrays utilized 

//'name'[20] + 'comments'[140] field -- 


boolean[] keys = {false, false, false};//b,c,g

gameMap edit=new gameMap();

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
  background(color(20,150,50)); //draw the background, commenting out this line will draw on top of the previous frame
  edit.draw();
  fill(edit.MouseColor);
  rect(mouseX, mouseY, 100, 100); // draw at mouse location, with width and height of 
  
}


class gameMap{
	//blank level
  wallBlock[] wallBlocks = {};
  coin[] coins = {};
  wallBlock goal = new wallBlock(700, 400,100,50);//end goal location
  color MouseColor = color(100);
  gameMap(){
	  
  }
  
  void addThing(){
	  if (keys[0]){
		//add block
		MouseColor = color(0,255,255);
		wallBlocks = append(wallBlocks, new wallBlock(mouseX, mouseY, 100,40));
		}
	if (keys[1]){
		//add coin
		MouseColor = color(255,0,255);
		
		}
	if (keys[2]){
		//change goal
		MouseColor = color(255,255,0);
		
		}
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
}
class coin{//makes a coin.
  int x = 0;
  int y = 0;
  boolean collected = false;
  coin(int xpos, int ypos){
    x = xpos;
    y = ypos;
  }
}


class wallBlock{
  int[] location = {0,0};
  int[] blockSize = {10,10};
  wallBlock(int x, int y, int xSize, int ySize){
    location[0] = x;
    location[1] = y;
    
    blockSize[0] = xSize;
    blockSize[1] = ySize;
  }
  
  int[] getLocation(){
    
    return location;
  }
  int[] getSize(){
    return blockSize;
  }
}















//keyPressed and keyReleased track keyboard input
//build in functions of processing.js
void keyPressed() {
  if (key=='b') {keys[0]=true;}
  if (key=='c') {keys[1]=true;}
  if (key=='g') {keys[2]=true;}
}
void keyReleased() {
  if (key=='b') {keys[0]=false;}
  if (key=='c') {keys[1]=false;}
  if (key=='g') {keys[2]=false;}
}

void mouseClicked() {
	console.log("here1");
	edit.addThing();
	console.log("here");
	}
