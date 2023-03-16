function calcularAnos() {
    // Obter os valores dos campos do formulário
    var popA = Number(document.getElementById("popA").value);
    var taxaA = Number(document.getElementById("taxaA").value);
    var popB = Number(document.getElementById("popB").value);
    var taxaB = Number(document.getElementById("taxaB").value);
  
    // Verificar se os valores são válidos
    if (popA <= 0 || popB <= 0 || taxaA <= 0 || taxaB <= 0) {
      alert("Os valores devem ser maiores que zero!");
      return;
    }
  
    // Calcular o número de anos necessários
    var anos = 0;
    while (popA < popB) {
      popA *= 1 + taxaA / 100;
      popB *= 1 + taxaB / 100;
      anos++;
    }
  
    // Exibir o resultado
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Serão necessários " + anos + " anos para que a população do País A ultrapasse ou iguale a população do País B.";
  }
  