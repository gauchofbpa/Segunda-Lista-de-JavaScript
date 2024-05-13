// Questão 01 //
function resultadoVariavel() {
    let variavelUm = parseFloat(prompt("Digite o valor da primeira variável: "));
    let variavelDois = parseFloat(prompt("Digite o valor da segunda variável: "));
    let caso = parseFloat(prompt("Digite 1 para ver a diferença das variáveis;" + "\n" + "Digite 2 para ver o dobro da primeira mais o triplo da segunda variável;" + "\n" + "Digite 3 para multiplicação das variáveis;" + "\n" + "Digite 4 para mostrar no console o valor das duas do maior para o menor."));
    switch (caso) {
        case 1:
            resultado = variavelUm - variavelDois;
            alert(resultado);
            break;
        case 2:
            resultado = 2 * variavelUm + 3 * variavelDois;
            alert(resultado);
            break;
        case 3:
            resultado = variavelUm * variavelDois;
            alert(resultado);
            break; 
        case 4:
            if (variavelUm >= variavelDois) {
                console.log(variavelUm+" >= "+variavelDois)
            } else {
                console.log(variavelDois+" >= "+variavelUm) 
            }
    }
}
// Questão 02 //
function folhaFuncionario() {
    let nomeFuncionario = (prompt("Digite seu nome:"));
    let salarioBruto = parseFloat(prompt("Digite seu salário bruto:"));
    valorINSS = salarioBruto * 0.08;
    alert("O valor do seu INSS é de: "+valorINSS);
    salarioLiquido = salarioBruto - valorINSS;
    alert("Seu salário bruto é de: "+salarioLiquido);
    alert("Agora, com critérios!")
    if (salarioBruto <= 1000.00) {
        valorINSS = salarioBruto * 0.08;
        alert("O valor do seu INSS é de: "+valorINSS);
        salarioLiquido = salarioBruto - valorINSS;
        alert("Seu salário bruto é de: "+salarioLiquido);
    }
    if (salarioBruto >= 1000.01 && salarioBruto <= 1500.00) {
        valorINSS = salarioBruto * 0.085;
        alert("O valor do seu INSS é de: "+valorINSS);
        salarioLiquido = salarioBruto - valorINSS;
        alert("Seu salário bruto é de: "+salarioLiquido);
    }
    if (salarioBruto > 1500.00) {
        valorINSS = salarioBruto * 0.09;
        alert("O valor do seu INSS é de: "+valorINSS);
        salarioLiquido = salarioBruto - valorINSS;
        alert("Seu salário bruto é de: "+salarioLiquido);
    }
}