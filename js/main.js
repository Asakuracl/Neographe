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
        this.xRect = 100;
        this.yRect = 100;
        this.xText = this.xRect - 60;
        this.yText = this.yRect - 10;

        this.ctx.fillRect(0, 0, this.xRect, this.yRect);
        this.ctx.font = "50pt Open sans";
        this.ctx.textBaseline = "up";
        this.ctx.fillStyle = "white";
        this.ctx.fillText("A", this.xText, this.yText);
    }
}

const canvas = document.querySelector("canvas");

const draw = new canvasDraw(canvas);