//Adds a function to the button makign it drop down the differnt links
const menu = document.querySelector('.menu')
const links = document.querySelector('.links');

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


//Checks what brower you are on
const ba = ["Chrome", "Firefox", "Safari", "Opera", "MSIE"]
let b, va = navigator.userAgent
for (let i =0; i < ba.length; i++){
    if (va.indexOf(ba[i])> - 1 ){
        b = ba[i];
        break;
    }
}
console.log(b);


const sections = document.querySelectorAll('.section-container section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            links.querySelectorAll('a').forEach(link => {
                link.classList.remove('active');
            });

            const activeLink = document.querySelector(`.links a[href="#${entry.target.id}"]`);
            if(activeLink) {
                activeLink.classList.add('active')
            }
        }
    });
    
},
{
    threshold:0.5,
}
);

sections.forEach(section =>{
    observer.observe(section)
})