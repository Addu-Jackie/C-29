class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        //load the static image in the computer memory(one that does not move or interact with the other object).
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //display the sling shot.
        image(this.sling1,200,20);
        image(this.sling2,175,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            //get the colour of the rubberband from colour zila.
            //RGB = 48,22,8.
            stroke(48,22,8);
            //The base of the rubberband should be in front of the bird when the bird is pulled in front of the sling shot. 
            if (pointA.x<220) {
            //draw the rubberband and display the base of the rubber band.
            //give the rubberband effect by giving different stroke wieght.
            strokeWeight(7);
            line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
            line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
            image(this.sling3,pointA.x-30,pointA.y-10,15,30);
            }
             else {
            strokeWeight(3);
            line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
            line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
            image(this.sling3,pointA.x+25,pointA.y-10,15,30);
            }

        }
    }
    
}