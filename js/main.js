// canvas

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

        console.log(this.letterValues)

        this.xPosRect = [];
        this.yPosRect = [];
        this.xRect = [];
        this.yRect = [];
        this.xText = [];
        this.yText = [];
        this.xSpeed = [];
        this.ySpeed = [];
        this.randomLetter = [];

        this.squareNumber = 30;

        for (let i = 0; i < this.squareNumber; i++) {
            this.xPosRect.push(Math.random() * innerWidth);
            this.yPosRect.push(Math.random() * innerHeight);
            this.xRect.push(100);
            this.yRect.push(100);
            this.xText.push(parseFloat(this.xPosRect[i]) + 40);
            this.yText.push(parseFloat(this.yPosRect[i]) + 90);
            this.xSpeed.push((Math.random() - 0.5) * 8);
            this.ySpeed.push((Math.random() - 0.5) * 8);

            this.randomLetter.push(this.letterValues[Math.floor(Math.random() * this.letterValues.length)]);
        };

        //this.textDraw();
        this.animate();

    }


    textDraw() {
        for (let i = 0; i < this.squareNumber; i++) {
            this.ctx.beginPath();
            this.ctx.strokeRect(this.xPosRect[i], this.yPosRect[i], this.xRect[i], this.yRect[i]);
            this.ctx.font = "50pt Open sans";
            this.ctx.textBaseline = "up";
            this.ctx.fillStyle = "black";
            this.ctx.fillText(this.randomLetter, this.xText[i], this.yText[i]);
        };
    }


    update() {
        for (let i = 0; i < this.squareNumber; i++) {
            if (this.xPosRect[i] + this.xRect[i] > innerWidth || this.xPosRect[i] < 0) {
                this.xSpeed[i] = -this.xSpeed[i];
            }

            if (this.yPosRect[i] + this.yRect[i] > innerHeight || this.yPosRect[i] < 0) {
                this.ySpeed[i] = -this.ySpeed[i];
            }

            this.xPosRect[i] += this.xSpeed[i];
            this.xText[i] += this.xSpeed[i];

            this.yPosRect[i] += this.ySpeed[i];
            this.yText[i] += this.ySpeed[i];

        }
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


// 1 methode
/*
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

        for (let i = 0; i < 2; i++) {
            let rect = {
                xPosRect: Math.random() * innerWidth,
                yPosRect: Math.random() * innerHeight,
                xRect: 100,
                yRect: 100,
                xText: this.xPosRect + 40,
                yText: this.yPosRect + 90,
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
        this.ctx.fillText(rect.randomLetter, rect.xText, rect.yText);
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