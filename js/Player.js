class Player {
  constructor() {
    this.el = document.getElementById("character");
    this.dx = 0;
    this.dy = 0;
    this.currentFrame = 1;
    this.model = "iddle";
  }

  update() {
    this.el.style.top = this.el.offsetTop + this.dy + "px";
    this.el.style.left = this.el.offsetLeft + this.dx + "px";
  }

  updateModel(){
    const limit = {
      'left': 4,
      'right': 4,
      'iddle': 3,
    };

    if (this.currentFrame > limit[this.model]) {
      this.currentFrame = 1;
    }

    let img = this.el.querySelector("img");

    const frame = this.currentFrame.toString();
    this.currentFrame++;
    img.src = `./image/Among_us/Blue/among_us_${this.model}_0${frame}_blue.png `;
  }

  moveLeft() {
    this.dx = -5;
  }

  moveRight() {
    this.dx = 5;
  }

  moveTop() {
    this.dy = -5;
  }

  moveBottom() {
    this.dy = 5;
  }

  stop() {
    this.dx = 0;
    this.dy = 0;
  }
}
