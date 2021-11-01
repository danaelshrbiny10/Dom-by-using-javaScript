/*
var imgs = document.querySelectorAll('.item img');
var imgsArray = [];

for (var i = 0; i < imgs.length; i++) {
    imgsArray.push(imgs[i]);
}
*/

var imgs = Array.from(document.querySelectorAll('.item img'));

var lightBoxContainer = document.getElementById('lightBoxContainer');
var lightBoxItem = document.getElementById('lightBoxItem');

var nextBtn = document.getElementById('next');
var prevBtn = document.getElementById('prev');
var closeBtn = document.getElementById('close');

var currentIndex = 0;

for (var i = 0; i < imgs.length; i++) {

    imgs[i].addEventListener('click', function(eventInfo) {

        currentIndex = imgs.indexOf(eventInfo.target);
        console.log(currentIndex);


        var imgSrc = eventInfo.target.getAttribute("src");
        // console.log(imgSrc);
        lightBoxItem.style.backgroundImage = "url(" + imgSrc + ")";
        lightBoxContainer.style.display = "flex";

    })
}

function nextSlide() {

    currentIndex++;
    if (currentIndex == imgs.length) {
        currentIndex = 0;
        // currentIndex = imgs.length + 1;
    }
    var imgSrc = imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = "url(" + imgSrc + ")";
}

function prevSlide() {

    currentIndex--;
    console.log(currentIndex)
    if (currentIndex < imgs.length) {
        currentIndex = imgs.length - 1;
    }
    var imgSrc = imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = "url(" + imgSrc + ")";
}

function closeSlide() {
    lightBoxContainer.style.display = "none";
}


function lightBoxContainerSlide() {
    lightBoxContainer.style.display = "none";
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
closeBtn.addEventListener("click", closeSlide);


lightBoxContainer.addEventListener("click", lightBoxContainerSlide);

/*
var events = ["click", "mouseenter", "mousemove"];
for (var i = 0; i < events.length; i++) {
    prevBtn.addEventListener('events[i]', prevSlide);
    nextBtn.addEventListener('events[i]', nextSlide);
}
*/

/*
document.addEventListener("keydown", function(eventInfo) {
    if (eventInfo.keycode == 39) {
        nextSlide();
    } else if (eventInfo.keycode == 37) {
        prevSlide();
    } else if (eventInfo.keycode == 27) {
        closeSlide();
    }
})
*/

document.addEventListener("keydown", function(eventInfo) {
    // console.log(eventInfo);

    if (eventInfo.code == "ArrowRight") {
        nextSlide();
    } else if (eventInfo.code == "ArrowLeft") {
        prevSlide();
    } else if (eventInfo.code == "Escape") {
        closeSlide();
    }
})



var shiftClicked = false;
var aClicked = false;

document.addEventListener("keydown", function(eventInfo) {
    if (eventInfo.code == "ShiftLeft") {
        shiftClicked = true;
    } else if (eventInfo.code == "ShiftLeft") {
        aClicked = true;
    }
})


document.addEventListener("keyup", function(eventInfo) {
    if (eventInfo.code == "ShiftLeft") {
        shiftClicked = false;
    }
})