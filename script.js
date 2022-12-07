let images = [{
    url: "./img/image_1.jpg",
    title: "Rostov-on-Don, Admiral",
    city: "Rostov-on-Don<br> LCD admiral",
    area: "81 m2",
    time: "3.5 months"
}, {
    url: "./img/image_2.jpg",
    title: "Sochi Thieves",
    city: "Sochi<br> Thieves",
    area: "105 m2",
    time: "4 months"
}, {
    url: "./img/image_3.jpg",
    title: "Rostov-on-Don Patriotic",
    city: "Rostov-on-Don<br> Patriotic",
    area: "93 m2",
    time: "3 months"
}];

function initSlider() {
    if (!images || !images.length) return;

    let sliderImages = document.querySelector(".slider__images");
    let sliderArrows = document.querySelector(".slider__arrows");
    let sliderDots = document.querySelector(".slider__dots");
    let sliderTitles = document.querySelector(".slider__titles");

    let infoCity = document.querySelector(".block_1");
    let infoRepairTime = document.querySelector(".block_2");
    let infoArea = document.querySelector(".block_3")

    initImages();
    initArrows();
    initDots();
    initTitles();
    initCards();


    function initImages() {
        images.forEach((image, index) => {            
            let imageDiv = `<div class="image n${index} ${index === 0 ? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
            sliderImages.innerHTML += imageDiv;
        });
    }

    function initArrows (){
        sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
            arrow.addEventListener("click", function() {
                let curNumber = +sliderImages.querySelector(".active").dataset.index;
                let nextNumber;
                if (arrow.classList.contains("left")) {
                    nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;            
                } else {
                    nextNumber = curNumber === images.length - 1? 0 : curNumber + 1; 
                }
                moveSlider(nextNumber);
            });           
        });         
    }

    function initDots() {
        images.forEach((images, index) => {
            let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
            sliderDots.innerHTML += dot;
        });

        sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
            dot.addEventListener("click", function() {
                moveSlider(this.dataset.index);            
            });
        });
    }

    function initTitles() {
        images.forEach((image, index) => {
            let title = `<div class="slider__title-item n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].title}</div>`;
            sliderTitles.innerHTML += title;
        });

        sliderTitles.querySelectorAll(".slider__title-item").forEach(title => {
            title.addEventListener("click", function() {
            moveSlider(this.dataset.index);            
            });
        });
    }

    function initCards() {
        images.forEach((image, index) => {
            let city = `<div class="text n${index} ${index === 0 ? "text-active" : ""}" data-index="${index}">${images[index].city}</div>`;
            infoCity.innerHTML += city;
            let area = `<div class="text n${index} ${index === 0 ? "text-active" : ""}" data-index="${index}">${images[index].area}</div>`;
            infoArea.innerHTML += area;
            let time = `<div class="text n${index} ${index === 0 ? "text-active" : ""}" data-index="${index}">${images[index].time}</div>`;
            infoRepairTime.innerHTML += time;   
        })         
    }   
     
    function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(".n" + num).classList.add("active");

        sliderDots.querySelector(".active").classList.remove("active");
        sliderDots.querySelector(".n" + num).classList.add("active");

        sliderTitles.querySelector(".active").classList.remove("active");
        sliderTitles.querySelector(".n" + num).classList.add("active");

        infoCity.querySelector(".text-active").classList.remove("text-active");
        infoCity.querySelector(".n" + num).classList.add("text-active");

        infoArea.querySelector(".text-active").classList.remove("text-active");
        infoArea.querySelector(".n" + num).classList.add("text-active");

        infoRepairTime.querySelector(".text-active").classList.remove("text-active");
        infoRepairTime.querySelector(".n" + num).classList.add("text-active");
    }    
}
document.addEventListener("DOMContentLoaded", initSlider);
