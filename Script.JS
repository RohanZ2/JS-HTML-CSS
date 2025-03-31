const hex = ["0", "1", "2","3","4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const button = document.getElementById("Button2");


button.addEventListener("click", function() {
    let hexcolor = "#"    
    for(let i = 0; i < 6; i++){
        hexcolor += hex[randomnumber()];
    }
    
    document.body.style.backgroundColor = hexcolor;
});


function randomnumber(){
    return Math.floor(Math.random() * hex.length)
}