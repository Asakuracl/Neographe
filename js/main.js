// canvas

class canvasDraw {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.xPosRect = 0;
        this.yPosRect = 0;
        this.xRect = 100;
        this.yRect = 100;
        this.xText = this.xPosRect + 40;
        this.yText = this.yPosRect + 90;

        //this.textDraw();
        this.animate();


    }

    /*
        textDraw() {
    
            this.ctx.beginPath();
            this.ctx.strokeRect(this.xPosRect, this.yPosRect, this.xRect, this.yRect);
            this.ctx.font = "50pt Open sans";
            this.ctx.textBaseline = "up";
            this.ctx.fillStyle = "black";
            this.ctx.fillText("A", this.xText, this.yText);
    
            //this.xPosRect += 1;
    
        }
    */


    animate() {
        //requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, innerWidth, innerHeight);

        this.ctx.beginPath();
        this.ctx.strokeRect(this.xPosRect, this.yPosRect, this.xRect, this.yRect);
        this.ctx.font = "50pt Open sans";
        this.ctx.textBaseline = "up";
        this.ctx.fillStyle = "black";
        this.ctx.fillText("A", this.xText, this.yText);

        this.xPosRect += 1;
        this.xText += 1;
        //this.ctx.clearRect(0, innerWidth, innerHeight);

    }

}

const canvas = document.querySelector("canvas");

const draw = new canvasDraw(canvas);