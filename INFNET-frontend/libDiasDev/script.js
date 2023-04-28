function Carousel(containerSelector) {
    this.containerCarousel = document.querySelector(containerSelector);
    this.containerScroll = document.querySelector(`${containerSelector} > .container-scroll`);
    this.imageList = document.querySelector(`${containerSelector} .image-list`);

    this.containerCarousel.setAttribute('class', 'container-carousel');
}

const carousel = new Carousel('#main-carousel')
console.log(carousel)