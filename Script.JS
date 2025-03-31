const hex = ["0", "1", "2","3","4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const button = document.getElementById("Button2");
const text =  document.getElementById("Button1").querySelector("h3")
;
button.addEventListener("click", function() {
    let hexcolor = "#"    
    for(let i = 0; i < 6; i++){
        hexcolor += hex[randomnumber()];
    }
    
    document.body.style.backgroundColor = hexcolor;
    text.textContent = `BACKGROUND COLOR: ${hexcolor}`;
});
text

function randomnumber(){
    return Math.floor(Math.random() * hex.length)
}