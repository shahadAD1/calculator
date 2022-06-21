// input vaildation to prevent user entring unsutable input such as letters or other charecters  
function inputValidation(){
    if(document.querySelector("#display").value.includes('a')){
        alert('contains letters');
    } 
}
// document..querySelector("#AC").addEventListener('change', changeClearButtonNmae()); 
function changeClearButtonNmae(){
// if(document.querySelector("#display").value == " "||document.querySelector("#display").value.length==0){
    document.getElementById("#AC").innerHTML='C';
//  } 
//  else {
//     document.querySelector("#AC").value='C';
// }
}
// clearInput function, to clear text field 
if (document.querySelector("#display").value !=" "){
    document.querySelector("#AC").value='C';
}
function clearInput(){
    document.querySelector("#display").value=" ";
    document.querySelector("#AC").value='AC';
}

// numbers function to display them in text filed 
function writeNumber(Number){
    if(document.querySelector("#display").value == " "){// if empty just write the number 
        document.querySelector("#display").value= Number;
    }else {// if not empty add the number after the exist nuber  
        document.querySelector("#display").value= document.querySelector("#display").value + Number;  
    }
}
// opreater functions 
function writeOpreator(opreater){
    document.querySelector("#display").value= document.querySelector("#display").value +opreater;
}
// opreater functions 

function deleteLastChar(){
    var userInputLength = document.querySelector("#display").value.length;
    var userInputString = document.querySelector("#display").value;
    document.querySelector("#display").value=userInputString.substring(0, userInputLength - 1);
    // if(!document.querySelector("#display").value == " "){// if empty just write the number 
    //     document.querySelector("#display").value= document.querySelector("#display").value + 1;  
    // }else {// if not empty add the number after the exist nuber  
    //     document.querySelector("#display").value= document.querySelector("#display").value + ;  
    // }
}

function showResult(){
    if(document.querySelector("#display").value == " "||document.querySelector("#display").value.length==0){
        document.calculator.dispaly.value=" ";
        alert("enter input "); 
    }else {
        document.calculator.dispaly.value= eval(calculator.dispaly.value);  
    }
//    if(isNaN(eval(calculator.dispaly.value))){
//     document.calculator.dispaly.value= "not a number"
//    }else {
//     document.calculator.dispaly.value= "number"  
//    }
// var currentValue = document.calculator.dispaly.value;
// // if (eval(calculator.dispaly.value)==currentValue)
// // alert("check again")
//     document.calculator.dispaly.value= eval(calculator.dispaly.value);

}
//to restric user input (from keyboard) to only number 
function isNumberKey(evt){// ref : https://stackoverflow.com/a/13952727
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode != 46 &&(charCode < 48 || charCode > 57)))
        return false;
    return true;
}