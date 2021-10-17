function mostrarPromocao()
{
    // cria referência aos elementos da página
    var inMedicamento = document.getElementById("inMedicamento");
    var inPreco = document.getElementById("inPreco");
    var outMedicamento = document.getElementById("outMedicamento");
    var outPromocao = document.getElementById("outPromocao");
    var outUnidade = document.getElementById("outUnidade");

    // obtém conteúdo dos campos de entrada
    var medicamento = inMedicamento.value;
    var preco = Number(inPreco.value);
    var unidade = Number(inPreco.value);

    // calcula valor a ser pago
    var promocao = Math.floor(preco * 2);

    //altera o conteúdo da linha da resposta
    outUnidade.textContent = "Valor da unidade: R$" + unidade.toFixed(2);
    outMedicamento.textContent = "Promoção de " + medicamento;
    outPromocao.textContent = "Leve 2 por apenas R$: " + promocao.toFixed(2);
}

// cria referência ao elemento btCalcular
var btPromocao = document.getElementById("btPromocao");

// registra um evento associado ao botão, para carregar uma função
btPromocao.addEventListener("click", mostrarPromocao);