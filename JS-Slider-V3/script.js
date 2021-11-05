window.addEventListener('load', function(){
    const slides = document.querySelectorAll('#slider-wrapper ul li');
    //количество элементов
    const slideCount = slides.length;
    //ширина одного слайда
    const slideWidth = document.querySelector('#slider-wrapper').offsetWidth;
    //Ширина всех слайдов
    const totalWidth = slideCount * slideWidth +'px'
    //слайдер DOM-элемент
    const slider = document.querySelector('#slider-wrapper ul');
    //кнопка next и prev
    const next = document.querySelector('#next');
    const prev = document.querySelector('#prev');

    let leftPosition = 0;
    let counter = 0;

    next.addEventListener('click', function(event){
        event.preventDefault();
        counter++;
        if (counter === slideCount) {            
            const newUl = slider.cloneNode(true);
            const sliderControls = document.querySelector('#slider-controls');
            const sliderWrapper = document.querySelector('#slider-wrapper');
            sliderWrapper.insertBefore(newUl, sliderControls);
            const lastUl = document.querySelector('#slider-wrapper ul:nth-child(2)');
            const firstUl = document.querySelector('#slider-wrapper ul:nth-child(1)');
            counter = 0;
            /* sliderWrapper.removeChild(sliderWrapper.children[0]); */
        }
        leftPosition = `-${counter * slideWidth}px`;
        slider.style.left = leftPosition;
    });

    prev.addEventListener('click', function(event){
        event.preventDefault();
        counter--;
        if (counter < 0) {
            counter = slideCount - 1;
        }
        leftPosition = `-${counter * slideWidth}px`;
        slider.style.left = leftPosition;
    });
    
});