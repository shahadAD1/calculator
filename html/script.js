
function changeBtnAttrbuit(){  
    //change AC to C if there is something to clear 
    //and change delete button to able if there is something to delete  
if(document.querySelector("#display").value == " "||document.querySelector("#display").value.length==0){
    document.getElementById("AC").innerHTML='AC';
    document.getElementById("deleteBtn").disabled = true; 
  } 
 else {// there is somthing to be clear/delete
    document.getElementById("AC").innerHTML=' C';
    document.getElementById("deleteBtn").disabled = false; 
}

// change '=' to able (not disable) if there is result to show 
var currentValue = document.calculator.dispaly.value;
if (eval(calculator.dispaly.value)!=currentValue){
     // if the result not the same as user wrote make it able = in athor word if there is no result will stay disable 
    document.getElementById("equalSign").disabled = false; 
}
if(document.querySelector("#display").value == " "||document.querySelector("#display").value.length==0){
    document.getElementById("equalSign").disabled = true; 
}

}

// clearInput function, to clear text field 
function clearInput(){
    document.querySelector("#display").value=" ";
    changeBtnAttrbuit(); 
}

// numbers function to display them in text filed 
function writeNumber(Number){
    if(document.querySelector("#display").value == " "){// if empty just write the number 
        document.querySelector("#display").value= Number;
    }else {// if not empty add the number after the exist nuber  
        document.querySelector("#display").value= document.querySelector("#display").value + Number;  
    }
    changeBtnAttrbuit();
}
// opreater functions 
function writeOpreator(opreater){
    document.querySelector("#display").value= document.querySelector("#display").value +opreater;
    changeBtnAttrbuit()
}

// delete button
function deleteLastChar(){
    var userInputLength = document.querySelector("#display").value.length;
    var userInputString = document.querySelector("#display").value;
    document.querySelector("#display").value=userInputString.substring(0, userInputLength - 1);
    
    changeBtnAttrbuit();
}

function showResult(){
        document.calculator.dispaly.value= eval(calculator.dispaly.value);
        document.getElementById("equalSign").disabled = true; 
        changeBtnAttrbuit();  
   
}
//to restric user input (from keyboard) to only number 
function isNumberKey(evt){// ref : https://stackoverflow.com/a/13952727
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode != 46 &&(charCode < 48 || charCode > 57)))
        return false;
    return true;
}