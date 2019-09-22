class slideshow {
    constructor() {

        this.counter = 0;

        //add groupe in bracket, change groupe name in quotation marks.
        this.textContainer = [
            "HTML/CSS",
            "CMS",
            "JAVASCRIPT"];

        this.textIn = document.querySelector(".text-container");

        this.move = document.querySelector("#square");
        this.move.addEventListener("click", this.Next.bind(this));

        document.addEventListener("keydown", this.keyboard.bind(this));

    }

    Next() {

        if (this.counter > this.textContainer.length - 1) {
            this.counter = 0;
        }
        this.textIn.innerHTML = this.textContainer[this.counter];

        this.counter++;
    }

    Prev() {
        this.counter--;
        if (this.counter < 0) {
            this.counter = this.textContainer.length - 1;
        }
        this.textIn.innerHTML = this.textContainer[this.counter];
    }


    // Change text with keyboard
    keyboard(e) {
        if (e.keyCode === 39) {
            this.Next();
        } else if (e.keyCode === 37) {
            this.Prev();
        }
    }
}

const slide = new slideshow();