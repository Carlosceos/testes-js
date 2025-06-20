const calcular = (operator) => {
  let num1 = parseFloat(prompt("Digite o primeiro número:"));
  let num2 = parseFloat(prompt("Digite o segundo número:"));
  let num3 = parseFloat(prompt("Digite o terceiro número:"));
  switch (operator) {
    case "/":
      return (num1 + num2 + num3) / 3;
      default:
        var confirmacao = confirm("Você gostaria de confirmar algo?");
      if (confirmacao) {
        alert("Você confirmou!");
      } else {
        alert("Você cancelou!");
      }
      return null;
  };
  }
   const executar = () => {
      let operador = prompt("Digite o operador: (use '/' para média)");
      let resultado = calcular(operador);
      if (resultado !== null) {
        document.getElementById(
          "resultado"
        ).innerHTML = `O resultado da operação é: ${resultado}`;
      }
    }