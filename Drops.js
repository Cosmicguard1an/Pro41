class Drops {
    constructor(x,y,r) {
        var options = {
            isStatic: false,
            restitution: 0.5,
            friction: 1
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,this.r,options)
        World.add(world,this.body);


    }

    update() {
        if(this.body.position.y > height) {
            Matter.Body.setPosition(this.body, {x: random(0,500), y: random(0,500)})
        }
    }

    show() {
        var pos = this.body.position
        push();
        translate(pos.x,pos.y)
        ellipseMode(RADIUS)
        fill("blue")
        ellipse(0,0,this.r, this.r);
        pop();
    }
}