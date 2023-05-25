var display =document.getElementById("display")
function displayvalue(num) {
    display.value += num;
}
function calculat(){
 display.value = eval(display.value)
}
function delet(){
    display.value = "";
}