// canvas

class canvasDraw {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.canvasWidth = window.innerWidth;
        this.canvasHeight = window.innerHeight;
    }

    textDraw() {

    }
}

const canvas = document.querySelector("canvas");

const draw = new canvasDraw(canvas);