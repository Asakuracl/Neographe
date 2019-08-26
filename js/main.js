// canvas

class canvasDraw {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;


        this.xPosRect = [];
        this.yPosRect = [];
        this.xRect = [];
        this.yRect = [];
        this.xText = [];
        this.yText = [];
        this.xSpeed = [];
        this.ySpeed = [];


        for (let i = 0; i < 2; i++) {
            this.xPosRect = Math.random() * innerWidth;
            this.yPosRect = Math.random() * innerHeight;
            this.xRect = 100;
            this.yRect = 100;
            this.xText = this.xPosRect + 40;
            this.yText = this.yPosRect + 90;
            this.xSpeed = (Math.random() - 0.5) * 8;
            this.ySpeed = (Math.random() - 0.5) * 8;

            this.xPosRectArray.push(this.xPosRect);
            this.yPosRectArray.push(this.yPosRect);
            this.xRectArray.push(this.xRect);
            this.yRectArray.push(this.yRect);
            this.xTextArray.push(this.xText);
            this.yTextArray.push(this.yText);
            this.xSpeedArray.push(this.xSpeed);
            this.ySpeedArray.push(this.ySpeed);

        };
        console.log(this.xPosRectArray)

        //this.textDraw();
        this.animate();

    }


    textDraw() {
        for (let i = 0; i < 2; i++) {
            this.ctx.beginPath();
            this.ctx.strokeRect(this.xPosRect[i], this.yPosRect[i], this.xRect[i], this.yRect[i]);
            this.ctx.font = "50pt Open sans";
            this.ctx.textBaseline = "up";
            this.ctx.fillStyle = "black";
            this.ctx.fillText("A", this.xText[i], this.yText[i]);

        }


    }


    update() {

        if (this.xPosRect + this.xRect > innerWidth || this.xPosRect < 0) {
            this.xSpeed = -this.xSpeed;
        }

        if (this.yPosRect + this.yRect > innerHeight || this.yPosRect < 0) {
            this.ySpeed = -this.ySpeed;
        }

        this.xPosRect += this.xSpeed;
        this.xText += this.xSpeed;

        this.yPosRect += this.ySpeed;
        this.yText += this.ySpeed;

        this.textDraw();

    }


    animate() {
        requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, innerWidth, innerHeight);

        this.update();

    };

}

const canvas = document.querySelector("canvas");

const draw = new canvasDraw(canvas);


//
/* 1 methode
class canvasDraw {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.letters = {
            letter: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
        };

        this.letterValues = Object.values(this.letters.letter);

        this.rectArray = [];

        for (let i = 0; i < 30; i++) {
            let rect = {
                xPosRect: Math.random() * innerWidth,
                yPosRect: Math.random() * innerHeight,
                xRect: 100,
                yRect: 100,
                xText: this.xPosRect + 40,
                yText: this.xPosRect + 90,
                xSpeed: (Math.random() - 0.5) * 8,
                ySpeed: (Math.random() - 0.5) * 8
            };
            rect.xText = rect.xPosRect + 40;
            rect.yText = rect.yPosRect + 90;
            rect.randomLetter = this.letterValues[Math.floor(Math.random() * this.letterValues.length)]
            this.rectArray.push(rect);
        };

        console.log(this.rectArray);

        this.animate();
    }


    textDraw(rect) {

        this.ctx.beginPath();
        this.ctx.strokeRect(rect.xPosRect, rect.yPosRect, rect.xRect, rect.yRect);
        this.ctx.font = "50pt Open sans";
        this.ctx.textBaseline = "up";
        this.ctx.fillStyle = "black";
        this.ctx.fillText(rect.randomLetter , rect.xText, rect.yText);
    }


    update(rect) {
        if (rect.xPosRect + rect.xRect > innerWidth || rect.xPosRect < 0) {
            rect.xSpeed = -rect.xSpeed;
        }

        if (rect.yPosRect + rect.yRect > innerHeight || rect.yPosRect < 0) {
            rect.ySpeed = -rect.ySpeed;
        }

        rect.xPosRect += rect.xSpeed;
        rect.xText += rect.xSpeed;
        rect.yPosRect += rect.ySpeed;
        rect.yText += rect.ySpeed;
        this.textDraw(rect);
    }


    animate() {
        requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, innerWidth, innerHeight);

        for (let i = 0; i < this.rectArray.length; i++) {
            this.update(this.rectArray[i]);
        }
    };

}

const canvas = document.querySelector("canvas");

const draw = new canvasDraw(canvas);

*/