function Carousel(containerSelector) {
    this.containerCarousel = document.querySelector(containerSelector);
    this.containerCarousel.classList.add('carousel-container')
    const images = document.querySelectorAll(`${containerSelector} img`)


    
    images.forEach((image, i) => {
        imgContainer = document.createElement('figure')
        this.containerCarousel.append(imgContainer)
        imgContainer.append(image)
    })

    console.log("🚀 ~ images:", images)

}

const carousel = new Carousel('#main-carousel')
console.log(carousel)

const carousel2 = new Carousel('.carousel2')