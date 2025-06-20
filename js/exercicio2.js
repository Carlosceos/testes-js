const calcular = (operator, num1, num2) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      alert("operador invadido");
      var confirmacao = confirm("Você gostaria de confirmar algo?");
      if (confirmacao) {
        alert("Você confirmou!");
      } else {
        alert("Você cancelou!");
      }
  }
};
let operator = prompt("Digite o operador: +, -, * ou /");
let number1 = parseFloat(prompt("Digite o primeiro número:"));
let number2 = parseFloat(prompt("Digite o segundo número:"));

let resultado = calcular(operator, number1, number2);
document.getElementById(
  "resultado"
).innerHTML = `O resultado da operação é: ${resultado}`;

