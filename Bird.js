class bird{
    constructor(x,y){

        var options ={
            'restitution': 0.5,
            'friction':1.0,
            'density':1.5
        }

        this.body = Bodies.rectangle(x,y,50,50, options);
        this.height=50;
        this.width=50;

        World.add(world, this.body);
    }
    display(){
        var p = this.body.position;
        p.x=mouseX;
        p.y=mouseY;
push();
    translate(p.x,  p.y);
    rotate(this.body.angle);
    strokeWeight(3);
    stroke("blue");
    fill("red");
    rectMode(CENTER);
    rect( 0,  0, this.width, this.height);
pop();
}
}