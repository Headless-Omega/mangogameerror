class Tree {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,50,50,options);
      this.image = loadImage("pics/tree.png");
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