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
  background(color(10,50,50)); //draw the background, commenting out this line will draw on top of the previous frame
  edit.draw();
  fill(edit.MouseColor);
  rect(mouseX-5, mouseY-5, 10, 10); // draw at mouse location, with width and height of 
  
  stroke(255,100);
  
  text("SAVE LEVEL", 720,790)
}


class gameMap{
	//blank level
  wallBlock[] wallBlocks = {};
  coin[] coins = {};
  wallBlock[] goal = {};
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
		MouseColor = color(0,255,0);
		coins = append(coins, new coin(mouseX, mouseY, 5, 10));
		
		}
	if (keys[2]){
		//change goal
		MouseColor = color(255,255,0);
		goal= new wallBlock(mouseX, mouseY, 100,50);

		
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
    for (int i=0; i<coins.length; i++){
      int[] d = coins[i].getLocation();
      int[] bS = coins[i].getSize();
      
      rect(d[0], d[1], bS[0], bS[1]);//x,y,xSize,ySize
    }
  
    //goal color
    stroke(200);
    fill(color(0,255,0));
    for (int i=0; i<goal.length; i++){
      int[] d = goal[i].getLocation();
      int[] bS = goal[i].getSize();
 
      rect(d[0], d[1], bS[0], bS[1]);//x,y,xSize,ySize
    }
  }
}


class coin{//makes a coin.
  int[] location = {0,0};
  int[] coinSize = {10,10};
  coin(int x, int y, int xSize, int ySize){
    location[0]=x;
    location[1]=y;
    
    coinSize[0]=xSize;
    coinSize[1]=ySize;
  }
  int[] getLocation(){
    
    return location;
  }
  int[] getSize(){
	  
    return coinSize;
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
	if (mouseX > 720 && mouseY > 790){
		String h = "http://localhost/Project/SQLInsertHandler.php";
		vars = "?";
		a = edit.wallBlocks;
		b = edit.coins;
		c = edit.goal;
		
		vars += "walls";
		for (int i=0; i<a.length; i++){
			if(i==0){
			vars+= "=";
			}else{
				vars += "+";
			}
			vars += a[i].location[0]+"+"+a[i].location[1];
			}
		
		vars += "&coins";
		for (int i=0; i<b.length; i++){
			if(i==0){
			vars+= "=";
			}else{
				vars += "+";
			}
			vars += b[i].location[0]+"+"+b[i].location[1];
			}
			
		vars += "&goal=";
		vars += c.location[0]+"+"+c.location[1];
		link(h+vars);
		}
	
	edit.addThing();
	}
