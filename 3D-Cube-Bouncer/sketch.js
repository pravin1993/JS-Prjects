let angle = 0;
let w = 24;
let viewAngle;
function setup(){
    createCanvas(400,400, WEBGL)
    viewAngle = atan(cos(QUARTER_PI))
    maxEdge =dist(0,0,200,200);
}

function draw(){
    background(255)
    rectMode(CENTER)
    ortho(-400,400, 400,-400,0,1000)
    ambientLight(255,255,255,0,-1,0)
    rotateX(-QUARTER_PI)
    rotateY(viewAngle)

   //let offset = 0;
   for(let z=0;z<height;z+=w)
    {
   for(let x=0;x<width;x+=w)
   {
    push()
    let distanceBetweenXYAndEdge = dist(x,z,width/2,height/2)
    let offset = map(distanceBetweenXYAndEdge,0,maxEdge, -PI,PI)
    let LocalAngle = angle+offset;
    let h = floor(map(sin(LocalAngle),-1,1,100,300));
    translate(x-width/2,0,z-height/2)
     normalMaterial()
     box(w-2,h,w-2)  
    pop()
   } 
  // offset+= 0.134 ;
}
    angle +=0.1

}
