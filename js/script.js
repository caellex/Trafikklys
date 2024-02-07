
function grayLight(selectDiv, selectColor,selectDiv2, selectColor2){
document.getElementById(selectDiv).classList.toggle(selectColor)
document.getElementById(selectDiv2).classList.toggle(selectColor2)
}

function activeRed(){
    grayLight('redLight', 'red');

}

function activeYellow(){
grayLight('yellowLight', 'yellow');

}

function activeGreen(){
    grayLight('greenLight', 'green');

}

function onloadToggle(div2,color2,div3,color3){
document.getElementById(div2).classList.toggle(color2)
document.getElementById(div3).classList.toggle(color3)
}