const navButton = document.getElementById("nav-button");
const nav = document.getElementById('main-menu');
const desktopWidth = 992;

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

    if (window.innerWidth >= desktopWidth){
        nav.removeAttribute('style');
        navButton.classList.remove('open');
    }
});

