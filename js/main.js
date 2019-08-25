// canvas

class canvasDraw {
    constructor(canvas) {
        this.canvas = canvas
        console.log(this.canvas)
    }
}

const canvas = document.querySelector("canvas");

const draw = new canvasDraw(canvas);