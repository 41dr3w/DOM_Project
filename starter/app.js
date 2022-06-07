
const p1 = {
    Display : document.getElementById("p1Display"),
    btnOne : document.querySelector("#p1Button"),
    value : 0,
};

const p2 = {
    Display : document.getElementById("p2Display"),
    btnTwo : document.querySelector("#p2Button"),
    value : 0,
};

const btnRst = document.querySelector("#reset"), 
selected = document.querySelector("#playto");
selected.addEventListener("change",() => endPoint())  
var endpoint = 3;

p1.btnOne.addEventListener("click", () => { begining=false;
p1.value++;
display()}); 

p2.btnTwo.addEventListener("click", () => { begining=false;
p2.value++; 
display()}); 

btnRst.addEventListener("click", reSet());

function endPoint(selected){
    return parseInt(selected.value);
}

function display(){

    endpoint = endPoint(selected)

    p1.Display.innerText = p1.value
    p2.Display.innerText = p2.value

    if(p1.value===endpoint && p1.value > p2.value){
        p1.Display.style.color="green"
        p2.Display.style.color="red"
        fiNish();
    }

    else if(p2.value===endpoint && p2.value > p1.value){
        p1.Display.style.color="red"
        p2.Display.style.color="green"
        fiNish();
    }
}

function fiNish() {
     p1.btnOne.disabled = true;
     p2.btnTwo.disabled = true;
} 

function reSet(){
        p1.value=0
        p2.value=0
        p1.Display.innerText = p1.value
        p2.Display.innerText = p2.value
        p1.Display.style.color="black"
        p2.Display.style.color="black"
        p1.btnOne.disabled = false,
        p2.btnTwo.disabled = false }
 