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

if (window.location.hash === "#home"){
    console.log("Home")
}

const ba = ["Chrome", "Firefox", "Safari", "Opera", "MSIE"]
let b, va = navigator.userAgent
for (let i =0; i < ba.length; i++){
    if (va.indexOf(ba[i])> - 1 ){
        b = ba[i];
        break;
    }
}
console.log(b);