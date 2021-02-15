class Log{
    constructor(x,y,height,angle){
        //properties
        var options = {
            restitution: 0.8,
            friction:1.5,
            density:1.0
         }
       this.Body = Bodies.rectangle(x,y,20,height,options);
       this.width = 20;
       this.height = height;
       Matter.Body.setAngle(this.Body,angle)
       World.add(World,this.Body);
    } 

    //function
    display(){
        var pos = this.Body.position;
        var angle = this.Body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4)
        stroke("blue")
        fill("white");
        rect(0,0,this.width,this.height);
       pop();
    }
}