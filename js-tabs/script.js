(function(){

    'use strict';

    const tabs = document.querySelectorAll('#tabs>ul>li>a');

    tabs.forEach(tab => {
        tab.addEventListener('click', selectTab);
    })
    
    function selectTab (event) {
        event.preventDefault();
        tabs.forEach(tab => {
            tab.removeAttribute('class');
        });
        
        event.target.className = 'active';

        const thisTab = event.target.gettAtribute('href');
        const thisContent = document.querySelector(thisTab);
        const oldcontent = document.querySelector('.visible');
        oldContent.className = 'visuallynidden';
        oldContent.addEventListener('transitionend', function(){
            oldContent.className = 'hidden';
            thisContent.className = 'visible visuallyhidden';
            setTimeout(function(){
                thisContent.classList.remove('visuallyhidden');
            }, 20);
        }, {capture:false, once:true, passive:false});
    }
})();

