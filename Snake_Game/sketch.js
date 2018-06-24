class snake{

    constructor()
    {
    this.x = 0;
    this.y =0;
    this.size = 10;
    this.xspeed = 1;
    this.yspeed = 0;
    this.tails = [];
    this.length = 0;
    }

    direction(x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }

    dideat(fx,fy){
         if (dist(this.x,this.y,fx,fy) == 0)
         {
             console.log("Ate!"+this.length)
             this.length++;
             console.log(this.x+" this is the tail push "+this.y)
             this.tails.push({x:this.x,y:this.y})
            return true;
         }        
    }



    update()
    {
        fill(255)
            
       for(let i = 0 ;i<this.length-1;i++){
            this.tails[i] = this.tails[i+1]
            console.log(this.tails[i])
          }
          if(this.length >= 1){
              this.tails[this.length-1]= {x:this.x,y:this.y}
          }
          this.tails.forEach(tail => {
          rect(tail.x,tail.y,this.size,this.size)

          })

            this.x = this.x + this.xspeed * this.size;
            this.y = this.y + this.yspeed * this.size;
            //Prevents the snake from moving out of the 
            this.x = constrain(this.x, 0, width - this.size);
            this.y = constrain(this.y, 0, height - this.size);
            
            rect(this.x,this.y,this.size,this.size)
    }
}
var s;
var fx,fy;

function setup(){
    createCanvas(400,400)
    background(0)
    frameRate(10)
    s = new snake();
    fx = foodPosistion();
    fy = fx.fy;
    fx = fx.fx;
    s.dideat(fx,fy)

}

function draw(){
    background(51);
    fill(255,51,51)
    rect(fx,fy,10,10);
    s.update()
    console.log(fx+" "+fy)
    if(s.dideat(fx,fy)){
        fx = foodPosistion();
        fy = fx.fy;
        fx = fx.fx;
       // s.dideat(fx,fy)
    }
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
      s.direction(0, -1);
    } else if (keyCode === DOWN_ARROW) {
      s.direction(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
      s.direction(1, 0);
    } else if (keyCode === LEFT_ARROW) {
      s.direction(-1, 0);
    }
  }

  function foodPosistion(){
     let fx = Math.floor(Math.random()*10)*width/10;
     let fy = Math.floor(Math.random()*10)*height/10;
      return {fx:fx,fy:fy}
  }