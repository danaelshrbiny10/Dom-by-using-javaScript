var imgs = document.querySelectorAll('.item img');
var lightBoxContainer = document.getElementById('lightBoxContainer');
var lightBoxItem = document.getElementById('lightBoxItem');


for (var i = 0; i < imgs.length; i++) {

    imgs[i].addEventListener('click', function(eventInfo) {
        var imgSrc = eventInfo.target.getAttribute("src");
        console.log(imgSrc);
        lightBoxItem.style.backgroundImage = "url(" + imgSrc + ")";
        lightBoxContainer.style.display = "flex";
    })
}