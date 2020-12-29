class Box
{
    constructor(x,y,w,h)
    {
    
    var box_options = {
        restitution : 0.6,
        friction : 1,
        density : 1

    }
    this.body=Bodies.rectangle(x,y,w,h,box_options);
    
    World.add(myWorld,this.body);
    
    this.width = w;
    this.height = h;
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push ();
        translate (pos.x,pos.y);
        rotate (angle);
        rectMode(CENTER);
        rect (0,0,this.width,this.height);
        pop ();
    }
}