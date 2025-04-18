const menu = document.querySelector('.menu')
const links = document.querySelector('.links')

menu.addEventListener('click', function(){
    
    if(links.classList.contains('show-links')){
        links.classList.remove('show-links');
    }
    
    else{
        links.classList.add('show-links');
    }
})
