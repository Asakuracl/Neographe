// canvas

// 1 methode

class canvasDraw {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.squareNumber = 10;

        this.mouse = {
            x: undefined,
            y: undefined
        }

        //this.minSize = 2;
        this.maxSize = 100;

        window.addEventListener('mousemove', this.mouseEvent.bind(this));

        window.addEventListener('resize', this.resizeCanvas.bind(this));

        /*
                this.letters = {
                    letter: ["NEOGRAPHE"]
                };
        
                this.letterValues = Object.values(this.letters.letter);
        */

        this.colors = {
            color: ["#000032", "#F5E18B", "#FF9517", "#172940", "#343434"]
        };

        this.colorValues = Object.values(this.colors.color);

        this.rectArray = [];

        this.init();
        this.animate();
    }

    mouseEvent(e) {
        this.mouse.x = e.x;
        this.mouse.y = e.y;
    }

    init() {
        this.rectArray = [];

        for (let i = 0; i < this.squareNumber; i++) {
            let rect = {
                xPosRect: Math.random() * (innerWidth - 100),
                yPosRect: Math.random() * (innerHeight - 100),
                xSpeed: (Math.random() - 0.5),
                ySpeed: (Math.random() - 0.5)
            };
            rect.xRect = Math.random() * 19 + 1;
            rect.yRect = rect.xRect;
            rect.minSize = rect.xRect;
            rect.xText = rect.xPosRect - 50;
            rect.yText = rect.yPosRect - 20;
            rect.xTextEnd = rect.xPosRect - 40;
            rect.yTextEnd = rect.yPosRect - 0;
            //rect.randomLetter = this.letterValues;
            rect.randomColor = this.colorValues[Math.floor(Math.random() * this.colorValues.length)];
            this.rectArray.push(rect);
        };
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.init();
    };


    textDraw(rect) {

        this.ctx.beginPath();
        this.ctx.fillStyle = rect.randomColor;
        this.ctx.fillRect(rect.xPosRect, rect.yPosRect, rect.xRect, rect.yRect);
        this.ctx.font = "20pt Open sans";
        this.ctx.textBaseline = "up";
        this.ctx.fillStyle = "#616971";
        this.ctx.fillText("NEO", rect.xText, rect.yText);
        this.ctx.fillText("GRAPHE", rect.xTextEnd, rect.yTextEnd);
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
        rect.xTextEnd += rect.xSpeed;
        rect.yTextEnd += rect.ySpeed;


        //interactivity
        if (((this.mouse.x - rect.xPosRect < 100 && this.mouse.x - rect.xText < 100) && (this.mouse.x - rect.xPosRect > -100 && this.mouse.x - rect.xText > -100)) &&
            ((this.mouse.y - rect.yPosRect < 100 && this.mouse.y - rect.yText < 100) && (this.mouse.y - rect.yPosRect > -100 && this.mouse.y - rect.yText > -100))

        ) {
            if (rect.xRect && rect.yRect < this.maxSize) {
                rect.xRect += 1;
                rect.xText += 1;
                rect.xTextEnd += 1;
                rect.yRect += 1;
                rect.yText += 1;
                rect.yTextEnd += 1;
            }
        } else if (rect.xRect && rect.yRect > rect.minSize) {
            rect.xRect -= 1;
            rect.xText -= 1;
            rect.xTextEnd -= 1;
            rect.yRect -= 1;
            rect.yText -= 1;
            rect.yTextEnd -= 1;
        }

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

//2 methode 

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
            this.xRect.push(100);
            this.yRect.push(100);
            this.xPosRect.push(Math.random() * (innerWidth - this.xRect[i]));
            this.yPosRect.push(Math.random() * (innerHeight - this.yRect[i]));
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
            this.ctx.fillStyle = "black";
            this.ctx.fillRect(this.xPosRect[i], this.yPosRect[i], this.xRect[i], this.yRect[i]);
            this.ctx.font = "50pt Open sans";
            this.ctx.textBaseline = "up";
            this.ctx.fillStyle = "white";
            this.ctx.fillText(this.randomLetter[i], this.xText[i], this.yText[i]);
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
*/