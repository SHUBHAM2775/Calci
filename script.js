const display = document.getElementById('display');

function calculate(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function result(){
    try{
        display.value = eval(display.value);
    }
    catch(err){
        display.value = "Error";
    }
}