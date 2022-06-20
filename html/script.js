console.log("helllo")
// clearInput function, to clear text field 
// document.querySelector("#AC").addEventListener("click", ()=>{
//     document.querySelector("#display").value=" ";
// });
function clearInput(){
    document.querySelector("#display").value=" ";
}
// numbers function to display them in text filed 
function numberZero(){
    if(document.querySelector("#display").value == " "){// if empty jsut write the number 
        document.querySelector("#display").value= "0";
    }else {// if not empty add the number after the exist nuber  
        document.querySelector("#display").value= document.querySelector("#display").value + "0";  
    }
    
}
function numberOne(){
    if(document.querySelector("#display").value == " "){// if empty jsut write the number 
        document.querySelector("#display").value= "1";
    }else {// if not empty add the number after the exist nuber  
        document.querySelector("#display").value= document.querySelector("#display").value + "1";  
    }
    
}
function numberTow(){
    if(document.querySelector("#display").value == " "){// if empty jsut write the number 
        document.querySelector("#display").value= "2";
    }else {// if not empty add the number after the exist nuber  
        document.querySelector("#display").value= document.querySelector("#display").value + "2";  
    }
    
}
function numberThree(){
    if(document.querySelector("#display").value == " "){// if empty jsut write the number 
        document.querySelector("#display").value= "3";
    }else {// if not empty add the number after the exist nuber  
        document.querySelector("#display").value= document.querySelector("#display").value + "3";  
    }
    
}
function numberFour(){
    if(document.querySelector("#display").value == " "){// if empty jsut write the number 
        document.querySelector("#display").value= "4";
    }else {// if not empty add the number after the exist nuber  
        document.querySelector("#display").value= document.querySelector("#display").value + "4";  
    }
    
}
function numberFive(){
    if(document.querySelector("#display").value == " "){// if empty jsut write the number 
        document.querySelector("#display").value= "5";
    }else {// if not empty add the number after the exist nuber  
        document.querySelector("#display").value= document.querySelector("#display").value + "5";  
    }
    
}
function numberSix(){
    if(document.querySelector("#display").value == " "){// if empty jsut write the number 
        document.querySelector("#display").value= "6";
    }else {// if not empty add the number after the exist nuber  
        document.querySelector("#display").value= document.querySelector("#display").value + "6";  
    }
    
}
function numberSeven(){
    if(document.querySelector("#display").value == " "){// if empty jsut write the number 
        document.querySelector("#display").value= "7";
    }else {// if not empty add the number after the exist nuber  
        document.querySelector("#display").value= document.querySelector("#display").value + "7";  
    }
    
}
function numberEight(){
    if(document.querySelector("#display").value == " "){// if empty jsut write the number 
        document.querySelector("#display").value= "8";
    }else {// if not empty add the number after the exist nuber  
        document.querySelector("#display").value= document.querySelector("#display").value + "8";  
    }
    
}
function numberNine(){
    if(document.querySelector("#display").value == " "){// if empty jsut write the number 
        document.querySelector("#display").value= "9";
    }else {// if not empty add the number after the exist nuber  
        document.querySelector("#display").value= document.querySelector("#display").value + "9";  
    }
    
}
// opreater functions 
// toggleNegativePositive to switch + and - 
function toggleNegativePositive(){///////// may be i need to check and only add - sign without multyplaying 
        document.querySelector("#display").value= -1*document.querySelector("#display").value ; // multiply bu -1  
}
function remainder(){
    document.querySelector("#display").value= document.querySelector("#display").value +"%"; // add % sign  
}
function division(){
    document.querySelector("#display").value= document.querySelector("#display").value +"/"; 
}
function multiply(){
    document.querySelector("#display").value= document.querySelector("#display").value +"*"; 
}
function subtraction(){
    document.querySelector("#display").value= document.querySelector("#display").value +"-"; 
}
function addition(){
    document.querySelector("#display").value= document.querySelector("#display").value +"+"; 
}
function point(){
    document.querySelector("#display").value= document.querySelector("#display").value +"."; 
}
function showResult(){
    document.calculator.dispaly.value= eval(calculator.dispaly.value)
}