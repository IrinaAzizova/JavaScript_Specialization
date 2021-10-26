const imgArray = ['image1', 'image2', 'image3', 'image4', 'image5'];
let currentImg = 0;
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const container = document.querySelector('.imgBox');

nextBtn.addEventListener('click', function(event){
    event.preventDefault();
    currentImg++;
    if (currentImg > imgArray.length-1){
       currentImg = 0;
    }
    addImg();
});

prevBtn.addEventListener('click', function(event){
    event.preventDefault();
    currentImg--;
    if (currentImg < 0){
        currentImg = imgArray.length-1;
    }
    addImg();
});
function addImg(){
    let newSlide = document.createElement('img');
    newSlide.src = `img/${imgArray[currentImg]}.jpg`;
    newSlide.className = 'newImg';
    container.appendChild(newSlide);
    if (container.children.length > 2) {
        container.removeChild(container.children[0]);
    }
}