var input = document.getElementById("number")
var inputValue = document.getElementById("number")
function setNumber(num) {
    input.value += num
}
function ans(){
    
    var output = eval(inputValue.value)
    inputValue.value = output
}
function del(){
    input.value = input.value.slice(0,-1)
}