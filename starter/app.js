var p1Display = document.getElementById("p1Display")
var p2Display = document.getElementById("p2Display")

const playTo = document.get
const selected = playTo.Index
var valueP1 = 0, valueP2 = 0

const btnOne = document.getElementById("p1Button")
const btnTwo = document.getElementById("p2Button")
const resetButton = document.getElementById("reset")

btnOne.addEventListener("click", function() {
    p1Display.innerText=valueP1++
    display()
}); 

btnTwo.addEventListener("click", function() {
    p2Display.innerText=valueP2++
    display()
}); 

resetButton.addEventListener("click",function(){reSet()})

function display(){
    if(p1Display===selected&&p1Display>p2Display){
        p1Display.innerHTML.getAttribute("color")="green"
        p2Display.innerHTML.getAttribute("color")="red"
    }
    else(p2Display===seLected&&p2Display>p1Display)
        p2Display.innerText=valueP2
        p1Display.innerHTML.getAttribute("color")="green"
        p2Display.innerHTML.getAttribute("color")="red"
    
    //DESHABILITAR BOTONES.
}

function reSet() {valueP1=0;valueP2=0;
    p1Display.innerText=valueP1;
    p2Display.innerText=valueP2;}

function seLector(presel){
    for(var i=0; i<presel.length; i++){
        if(presel[i].selectedIndex==true)
        {  var posel=presel[i].value }
        }
        return posel;
}