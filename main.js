//eval() to resolve

let operators = document.querySelectorAll(".operator");
let display = document.getElementById("display");
let numbers = document.querySelectorAll(".number");
let output;
let zero;
let decimal;

for (let i = 0; i<numbers.length; i++){
  numbers[i].addEventListener("click", function() {
    output = display.innerHTML +=this.value;
    }, false)
  };

document.querySelector(".zero").addEventListener("click",function() {
  zero = this.value;
  if(display.innerHTML === "") {
    output = display.innerHTML = zero;
    } else if(display.innerHTML === output) {
         output = display.innerHTML +=zero;
        }
    },false);

document.getElementById("decimal").addEventListener("click",function() {
  period = this.value;
  if(display.innerHTML === "") {
    output = display.innerHTML = display.innerHTML.concat("0.");
    } else if(display.innerHTML === output) {
        display.innerHTML = display.innerHTML.concat(".");
        }
  },false);

document.querySelector("#equals").addEventListener("click",function() {
  if(display.innerHTML === output) {
    display.innerHTML = eval(output);
    } else {
        display.innerHTML = "";
      }
    },false);

document.getElementById("clear").addEventListener("click",function() {
  display.innerHTML = "";
  },false);

for(var i = 0; i < operators.length; i++ ) {
  operators[i].addEventListener("click",function() {
      if(display.innerHTML === "") {
        display.innerHTML = display.innerHTML.concat("");
      } else if(output) {
          display.innerHTML = output.concat(this.value);
        }
      },false);
    };

document.getElementById("multiply").addEventListener("click", function(){
  if(display.innerHTML === "") {
    display.innerHTML = display.innerHTML.concat("");
  } else if(output) {
      display.innerHTML = output.concat("*");
    }
  },false);
