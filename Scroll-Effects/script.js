const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach( eachLink => {
    eachLink.addEventListener('click', smoothScroll);
});

function smoothScroll(event){
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        const originalTop = Math.floor(targetSection.getBoundingClientRect().top) - 200;
        window.scrollBy({
            top: originalTop,
            left: 0,
            behavior: 'smooth'});
        console.log(originalTop);
};

window.addEventListener('load', function(){
    const posts = document.querySelectorAll('section');
    let postTops = [];
    let pagetop;
    let counter = 1;
    let prevCounter = 1;
    let doneResizing;
    
    posts.forEach(function(post){
        postTops.push( Math.floor( post.getBoundingClientRect().top + window.pageYOffset ));
    });
    
    window.addEventListener('scroll', function(){
        pagetop = window.pageYOffset;
        if (pagetop > postTops[counter]) {
            counter++;
            console.log(`down ${counter}`);
        }
        else if (counter > 1 && pagetop < postTops[counter-1]) {
            counter--;
        }
        if (counter != prevCounter){
            navLinks.forEach( function(eachLink){
                eachLink.removeAttribute('class')
            });

            const thisLink = document.querySelector(`nav ul li:nth-child(${counter}) a`);
            thisLink.className = 'selected';
            prevCounter = counter;
        }
    });

    window.addEventListener('resize', function(){
        this.clearTimeout(doneResizing);
        doneResizing = this.setTimeout(function(){
            resetPagePosition();
        }, 500);
    });

    function resetPagePosition(){
        postTops = [];
        posts.forEach(function(post){
            postTops.push( Math.floor( post.getBoundingClientRect().top + window.pageYOffset ) );
        });
        const pagePosition = window.pageYOffset + 250;
        counter = 0;
        postTops.forEach(function(post){
            if (pagePosition > post){
                counter++;
            }
        });
        navLinks.forEach(function(eachLink){
            eachLink.removeAttribute('class');
        });
        const thisLink = document.querySelector(`nav ul li:nth-child(${counter}) a`);
        thisLink.className = 'selected';
    }
});