class slideshow {
    constructor() {

        this.counter = 0;
        this.temps = 3000;

        this.textContainer = [
            "HTML/CSS",
            "JAVASCRIPT",
            "CMS"];

        this.textIn = document.querySelector(".text-container");
        this.launch();
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

    // Change auto
    launch() {
        this.interv = setInterval(this.Next.bind(this), this.temps);
    }
}

const slide = new slideshow();