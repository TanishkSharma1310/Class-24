class Box{
    constructor(x,y,width,height){

        var options ={
            'restitution': 0.8,
            'friction':1.0,
            'density':1.0
        }

        this.body = Bodies.rectangle(x,y,width,height, options);
        this.height=height;
        this.width=width;

        World.add(world, this.body);
    }
    display(){
push();
    translate(this.body.position.x,  this.body.position.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    strokeWeight(3);
    stroke("green");
    fill(255);
    rect( 0,  0, this.width, this.height);
pop();
}
}