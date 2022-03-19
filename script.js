function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  var valorEmEuroNumerico = parseFloat(valor);

  var valorEmRealDolar = valorEmDolarNumerico * 5;
  console.log(valorEmRealDolar);

  //var valorEmRealEuro = valorEmEuroNumerico * 6;
  //console.log(valorEmRealEuro);

  var elementoValorConvertido = document.getElementById("valorConvertidoDolar");
  //var elementoValorConvertido = document.getElementById("valorConvertidoEuro");
  var valorConvertidoDolar = "O resultado em real é R$ " + valorEmRealDolar;
  //var valorConvertidoEuro = "O resultado em real é R$ " + valorEmRealEuro

  elementoValorConvertido.innerHTML = valorConvertidoDolar;
  //elementoValorConvertido.innerHTML = valorConvertidoEuro
}