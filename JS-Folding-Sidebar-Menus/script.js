/* (function(){

    "use strict";

    const subMenus = document.querySelectorAll('ul li ul');*/

    /* for (let i = 0; i <subMenu.length; i++){
        subMenu[i].className = 'hide-menu';    
    } */
    /* for (let eachUl of subMenu){
        eachUl.className = 'hide-menu';
    } */
    /* function hideMenu () {
        subMenus.forEach(function(ul){
        ul.className = 'hide-menu';
        })
    }

    hideMenu();

    const menuLinks = document.querySelectorAll('.menulink')
    for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('click', function(event){
            event. preventDefault();
            const thisMenu = this.parentNode.querySelector('ul');
            if (thisMenu.classList.contains('hide-menu')){
                hideMenu();
                thisMenu.className = 'show-menu';
            }
            else{
                thisMenu.className = 'hide-menu';
            }
                
        });
    }
})(); */



//using jQuery

$('ul li ul').hide();
$('.menulink').click(function(){
    var thisMenu = $(this).next('ul');
    $('ul li ul').not(thisMenu).hide();
    thisMenu.toggle();
});




