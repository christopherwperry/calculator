//eval() to resolve

let operators = document.getElementsByClassName("operator");

console.log(operators);

for (let i = 0; i<operators.length; i++){
  operators.addEventListener("click", logValue, true);
}

function logValue() {

};
