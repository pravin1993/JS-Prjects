
function setup(){
    createCanvas(800,800)
    background(0)
    frameRate(1000)
    translate(width/2,height/2)

}

var x =0;
var y =0;

function maprange(curentnum,in_min,in_max,out_min,out_max){
   return (((curentnum-in_min)/(in_max-in_min) )*(out_max-out_min))+out_min;
}

var probability = 0 
var nextx;
var nexty;
var px =0;
var py = 0;
function draw(){
   
    //fill(255,0,0)
   // stroke(map(random(),0,1,0,255),map(random(),0,1,0,255),map(random(),0,1,0,255))
   stroke(map(nexty,0,9.9983,255,0),map(nextx,-2.1820,2.6558,0,255),map(nextx,-2.1820,2.6558,0,width))
    strokeWeight(4)
    point(px,py)


    if(probability < 0.02){
        nextx = 0;
        nexty = 0.16*y;
     //   stroke(255,0,0)
      //  console.log("prlogob 1 "+x+" "+y)
    }
    else if(probability < 0.86){
        nextx = 0.85*x + 0.04*y 
        nexty = -0.04*x + 0.85*y + 1.6
       // console.log("prob 2 "+x+" "+y)
     //  stroke(0,255,0)


    }
    else if(probability < 0.93 ){
        nextx = 0.2*x - 0.26*y
        nexty = 0.23*x +0.22*y + 1.6
       // console.log("prob 3 "+x+" "+y)
     //  stroke(0,0,255)

    }
    else{
        nextx = -0.15*x + 0.28*y
        nexty =  0.26*x + 0.24*y + 0.44
      //  console.log("prob 4 "+x+" "+y)
     //  stroke(0,0,255)

    }

    probability = random(1)
    px = maprange(nextx,-2.1820,2.6558,0,width)
    py = maprange(nexty,0,9.9983,height,0)
   // console.log(px+" "+py)
    x=nextx;
    y=nexty;
    //console.log(x)
 
}