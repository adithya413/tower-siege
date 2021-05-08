class Ball{
    constructor(x, y, width, height) {
        
                     
        
        this.body = Bodies.circle(x, y, width,height);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.width, this.height);
        pop();
      }
}
