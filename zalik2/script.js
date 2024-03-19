var textInput = document.getElementById('textInput')
var oneButton = document.getElementById('oneButton')
var twoButton = document.getElementById('twoButton')
var threeButton = document.getElementById('threeButton')
var fourButton = document.getElementById('fourButton')
var fiveButton = document.getElementById('fiveButton')
var sixButton = document.getElementById('sixButton')
var sevenButton = document.getElementById('sevenButton')
var eightButton = document.getElementById('eightButton')
var nineButton = document.getElementById('nineButton')
var zeroButton = document.getElementById('zeroButton')
var plusButton = document.getElementById('plusButton')
var minusButton = document.getElementById('minusButton')
var podilutuButton = document.getElementById('podilutuButton')
var mnozhutuButton = document.getElementById('mnozhutuButton')
var EQUALSButton = document.getElementById('EQUALSButton')
var CLEARButton = document.getElementById('CLEARButton')

var num1 = ''
var num2 = ''
var result = ''
var sign = ''


function undateInput(){
    if(result == ''){
        textInput.innerText = `${num1} ${sign} ${num2}  ${result}`
    }
    else{
        textInput.innerText = `${num1} ${sign} ${num2} = ${result}`
    }
}
undateInput()

oneButton.onclick = function(){
    if(sign == ""){
        num1 += 1
    } 
    else{
        num2 += 1
    }
    undateInput()
}
twoButton.onclick = function(){
    if(sign == ""){
        num1 += 2
    } 
    else{
        num2 += 2
    }
    undateInput()
}
threeButton.onclick = function(){
    if(sign == ""){
        num1 += 3
    } 
    else{
        num2 += 3
    }
    undateInput()
}
fourButton.onclick = function(){
    if(sign == ""){
        num1 += 4
    } 
    else{
        num2 += 4
    }
    undateInput()
}
fiveButton.onclick = function(){
    if(sign == ""){
        num1 += 5
    } 
    else{
        num2 += 5
    }
    undateInput()
}
sixButton.onclick = function(){
    if(sign == ""){
        num1 += 6
    } 
    else{
        num2 += 6
    }
    undateInput()
}
sevenButton.onclick = function(){
    if(sign == ""){
        num1 += 7
    } 
    else{
        num2 += 7
    }
    undateInput()
}
eightButton.onclick = function(){
    if(sign == ""){
        num1 += 8
    } 
    else{
        num2 += 8
    }
    undateInput()
}
nineButton.onclick = function(){
    if(sign == ""){
        num1 += 9
    } 
    else{
        num2 += 9
    }
    undateInput()
}
zeroButton.onclick = function(){
    if(sign == ""){
        num1 += 0
    } 
    else{
        num2 += 0
    }
    undateInput()
}
plusButton.onclick = function(){
    sign = '+'
    undateInput()
}
minusButton.onclick = function(){
    sign = '-'
    undateInput()
}
podilutuButton.onclick = function(){
    sign = '/'
    undateInput()
}
mnozhutuButton.onclick = function(){
    sign = '*'
    undateInput()
}
EQUALSButton.onclick = function(){
    if(sign == '+'){
        result = parseInt(num1) + parseInt(num2)
        undateInput()
    }
    else if(sign == '-'){
        result = parseInt(num1) - parseInt(num2)
        undateInput()
    }
    else if(sign == '/'){
        result = parseInt(num1) / parseInt(num2)
        undateInput()
    }
    else if(sign == '*'){
        result = parseInt(num1) * parseInt(num2)
        undateInput()
    }
}
CLEARButton.onclick = function(){
    location.reload()
}