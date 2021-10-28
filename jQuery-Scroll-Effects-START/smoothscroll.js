$('nav ul li a').click( function(){
    const thisSection = $(this).attr('href');
    const thisLink = $(this);

    $('html, body').stop().animate({
        scrollTop: $(thisSection).offset().top - 200
    }, 500, 'easeOutCirc');
    return false;
});

$(window).on('load', function(){
    const allLinks = $('nav ul li a');
    const posts = $('section');
    let pagetop;
    let counter = 0;
    let prevCounter = 0;
    let doneResizing;

    let posTops = [];

    posts.each( function() {
        posTops.push( Math.floor( $(this).offset().top) );
    });

    $(window).scroll(function(){
        pagetop = $(window).scrollTop() + 210;

        if (pagetop > posTops[counter+1]) {
            counter++;
        }
        else if (counter > 0 && pagetop < posTops[counter]) {
            counter--;
        }

        if (counter != prevCounter){
            $(allLinks).removeAttr('class');
            $('nav ul li a').eq(counter).addClass('selected');
            prevCounter = counter;
        }        
    });

    $(window).on('resize', function(){
        clearTimeout(doneResizing);
        doneResizing = setTimeout(function(){
            posTops = [];
            posts.each( function() {
                posTops.push( Math.floor( $(this).offset().top) );
            });

            const pagePosition = $(window).scrollTop()+210;
            counter = 0;

            for ( let i=0; i<posTops.length; i++) {
                if (pagePosition > posTops[i]) {counter++;}
            }
            counter--;

            $(allLinks).removeAttr('class');
            $('nav ul li  a').eq(counter).addClass('selected');
        }, 500);
    });
});