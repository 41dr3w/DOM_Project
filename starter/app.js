
var p1Display = document.getElementById("p1Display")
var p2Display = document.getElementById("p2Display")

const btnOne = document.querySelector("#p1Button")
const btnTwo = document.querySelector("#p2Button")
const btnRst = document.querySelector("#reset")
const selected = document.querySelector("#playto")

var endpoint = 3
var valueP1 = 0
var valueP2 = 0

selected.addEventListener("change", endPoint)

btnOne.addEventListener("click", function() {
  valueP1++
  display(valueP1,valueP2)
}); 

btnTwo.addEventListener("click", function() {
  valueP2++
  display(valueP1,valueP2)
}); 

btnRst.addEventListener("click", reSet)

function endPoint(selected)  {
    return parseInt(selected.value)
}

function display(valueP1,valueP2){

    endpoint = endPoint(selected)

    p1Display.innerText = valueP1
    p2Display.innerText = valueP2

    if(valueP1===endpoint && valueP1 > valueP2){
        p1Display.style.color="green"
        p2Display.style.color="red"
        fiNish();
    }    
    else if(valueP2===endpoint && valueP2 > valueP1){
        p1Display.style.color="red"
        p2Display.style.color="green"
        fiNish();
    }
}

function fiNish() {
    console.log("termino!")
    btnOne.button.disabled = true
    btnTwo.button.disabled = true

} 

function reSet() {
    console.log("esto funciona")
    valueP1=0
    valueP2=0
    p1Display.innerText = valueP1
    p2Display.innerText = valueP2
    p1Display.style.color="black"
    p2Display.style.color="black"
    selected.value = 3
 }