// canvas

class canvasDraw {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");

    }


}

const canvas = document.querySelector("canvas");

const draw = new canvasDraw(canvas);