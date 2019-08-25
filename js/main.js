// canvas

class canvasDraw {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.textDraw();
    }

    textDraw() {
        this.ctx.fillRect(0, 0, 100, 100);
        this.ctx.font = "50pt Open sans";
        this.ctx.textBaseline = "up";
        this.ctx.fillStyle = "white";
        this.ctx.fillText("A", 40, 90);
    }
}

const canvas = document.querySelector("canvas");

const draw = new canvasDraw(canvas);