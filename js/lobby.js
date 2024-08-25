class Lobby {
  constructor(username) {
    document.getElementById("fillUsername").innerText = username;
    this.player = new Player();
    this.fps = 10;
  }

  startGame() {
    this.update();
    this.events();
  }

  update() {
    setInterval(() => {
      this.player.update();
    }, 1000 / this.fps);

    setInterval(() => {
      this.player.updateModel();
    }, 1000 / 10);
  }

  events() {
    addEventListener("keydown", (e) => {
      const key = e.key.toLowerCase();

      if (key == "a") {
        this.player.moveLeft();
        this.player.model = "left";
      }
      if (key == "d") {
        this.player.moveRight();
        this.player.model = "right";
      }
      if (key === "w") {
        this.player.moveTop();
        this.player.model = "right";
      }
      if (key === "s") {
        this.player.moveBottom();
        this.player.model = "right";
      }
    });

    addEventListener("keyup", (e) => {
      const key = e.key.toLowerCase();

      if (key === "a") {
        this.player.stop();
        this.player.model = "iddle";
      }

      if (key === "d") {
        this.player.stop();
        this.player.model = "iddle";
      }

      if (key === "w") {
        this.player.stop();
        this.player.model = "iddle";
      }
      if (key === "s") {
        this.player.stop();
        this.player.model = "iddle";
      }
    });
  }
}
