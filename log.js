class log{
    constructor(x,y,height,angle){

        var options ={
            'restitution': 0.8,
            'friction':1.0,
            'density':1.0
        }

        this.body = Bodies.rectangle(x,y,20,height, options);
        this.height=height;
        this.width=20;
        Matter.Body.setAngle(this.body,angle)
        World.add(world, this.body);
    }
    display(){
push();
    translate(this.body.position.x,  this.body.position.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    strokeWeight(3);
    stroke("brown");
    fill(255);
    rect( 0,  0, this.width, this.height);
pop();
}
}