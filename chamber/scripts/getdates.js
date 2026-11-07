(function() {
    const TODAY = new Date();   

    window.addEventListener('load', () => {
        
        
        document.getElementById('currentyear').innerHTML = TODAY.getFullYear();
        document.getElementById('last-modified').innerHTML = "Last Modified: " + document.lastModified;
        
        
    });
    
    
})()