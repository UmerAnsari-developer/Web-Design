
let lastEntry = "";
function insert(btn){
    let data = document.getElementById("data");
    data.value = data.value + btn.value;
    lastEntry = btn.value;
}

function _eval(){
    let data = document.getElementById("data");

    try{
        data.value = eval(data.value);
    }    catch(err){
        alert("Invalid Expression");
    }

}

function clearDisplay(){
    let data = document.getElementById("data").value ="";
}
 function clearLastEntry(){
    let data = document.getElementById("data");
    data.value = data.value.slice(0, -lastEntry.length);
}

function insert(btn){
    let data = document.getElementById("data");
    data.value = data.value + btn.value;
}

function insert(btn){
    let data = document.getElementById("data");
    data.value = data.value + btn.value;
}

function _eval(){
    let data = document.getElementById("data");
    if(data.value === "") {
        data.value = "0";
        return;
    }
    try{
        data.value = eval(data.value);
    } catch(err){
        alert("Invalid Expression");
        data.value = "";
    }
}

function clearDisplay(){
    document.getElementById("data").value = "";
}

function clearEntry(){
    let data = document.getElementById("data");
    let currentValue = data.value;
    data.value = currentValue.slice(0, -1);
}

function getNumericValue() {
    let data = document.getElementById("data");
    if(data.value === "") {
        return 0; // Return 0 for empty display
    }
    try {
        return eval(data.value);
    } catch(err) {
        return 0; // Return 0 if evaluation fails
    }
}

function calculateSin(){
    let data = document.getElementById("data");
    let value = getNumericValue();
    data.value = Math.sin(value);
}

function calculateCos(){
    let data = document.getElementById("data");
    let value = getNumericValue();
    data.value = Math.cos(value);
}

function calculateTan(){
    let data = document.getElementById("data");
    let value = getNumericValue();
    data.value = Math.tan(value);
}

function calculatePow(){
    let data = document.getElementById("data");
    let value = getNumericValue();
    data.value = Math.pow(value, 2);
}

function calculateLog(){
    let data = document.getElementById("data");
    let value = getNumericValue();
    if(value <= 0) {
        alert("Logarithm of non-positive number is undefined");
        data.value = "Error";
        return;
    }
    data.value = Math.log10(value);
}

function calculateSqrt(){
    let data = document.getElementById("data");
    let value = getNumericValue();
    if(value < 0) {
        alert("Square root of negative number is undefined");
        data.value = "Error";
        return;
    }
    data.value = Math.sqrt(value);
}

function calculateExp(){
    let data = document.getElementById("data");
    let value = getNumericValue();
    data.value = Math.exp(value);
}

function calculatePI(){
    let data = document.getElementById("data");
    data.value = Math.PI * getNumericValue();
}

function calculatePlusMinus() {
    let data = document.getElementById("data");
    let value = getNumericValue();
    data.value = -value;
}

function calling(btn){
    // If the button has a numeric value or operator, use insert
    if(btn.value !== "Sin" && btn.value !== "Cos" && btn.value !== "Tan" && 
       btn.value !== "Pow" && btn.value !== "Log" && btn.value !== "Sqrt" && 
       btn.value !== "e^x" && btn.value !== "PI" && btn.value !== "+/-") {
        insert(btn);
        return;
    }
    
    // Handle scientific functions
    switch(btn.value){
        case "Sin":
            calculateSin();
            break;
        case "Cos":
            calculateCos();
            break;
        case "Tan":
            calculateTan();
            break;
        case "Pow":
            calculatePow();
            break;
        case "Log":
            calculateLog();
            break;
        case "Sqrt":
            calculateSqrt();
            break;
        case "e^x":
            calculateExp();
            break;
        case "PI":
            calculatePI();
            break;
        case "+/-":
            calculatePlusMinus();
            break;
    }
}