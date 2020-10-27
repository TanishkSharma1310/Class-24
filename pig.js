class Pig{
    constructor(x,y){

        var options ={
            'restitution': 0.8,
            'friction':0.3,
            'density':1.0
        }

        this.body = Bodies.rectangle(x,y,50,50, options);
        this.height=50;
        this.width=50;

        World.add(world, this.body);
    }
    display(){
        var p = this.body.position;
push();
    translate(p.x,  p.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    strokeWeight(3);
    stroke("gray");
    fill("green");
    rect( 0,  0, this.width, this.height);
pop();
}
}