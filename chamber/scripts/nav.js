const navButton = document.getElementById("mobile-menu");
const nav = document.getElementById('main-menu');
const desktopWidth = 992;

// The debouce function will help the code from my window resize event not run until 
// the timeout is able to finish.
// if the window is resized again before the timer has expired it will reset the timer 
// and the code will not run.
function debounce(callback, timeout=100) {
    let timer;

    // ...args is called rest parament syntax.
    // the javascript engine pushed any remaining arguments into an array args
    // that can be passed into the callback function 
    return (...args) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback.apply(this, args)
        }, timeout);
    };
}


 

navButton.addEventListener('click', () => {
    const isOpen = navButton.classList.toggle('open');
    
    navButton.setAttribute('aria-expanded', isOpen);

    if (!isOpen) {
        
        requestAnimationFrame(() => {
            nav.style.height = '0px';
        });
    
    } else {        
        nav.style.height = `${nav.scrollHeight}px`;
        

    }
})

window.addEventListener('resize', () => {

    debounce( ()=>{

        
    
        if (window.innerWidth >= desktopWidth){
            nav.removeAttribute('style');
            navButton.classList.remove('open');
        }

    },100 );

    
});

