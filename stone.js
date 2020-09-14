class Stone {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,options);
      this.image = loadImage("pics/stone.png");
      World.add(world, this.body);

    }
    display(){
      var pos =this.body.position;
      push();
      imageMode(CENTER);
      fill("black");
      image(this.image, 1225, 850, 250, 200);
      pop(); 
    }
  };