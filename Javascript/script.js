function calculadora() {
    const operação = prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Divisão Inteira (/)\n 4 - Multiplicação (x)');

    if (!operação || operação >= 5 || operação <= 0) {
        alert('Erro - Operação Inválida');
        calculadora(); // Recursão para solicitar a operação novamente
    } else {
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));

        if (!n1 || !n2) {
            alert('Erro - Parâmetros inválidos');
            calculadora();
        } else {
            let resultado;

            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperação();
            }
            function subtração() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperação();
            }
            function divisão() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperação();
            }
            function multiplicação() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperação();
            }
            function novaOperação() {
                let opção = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
                if (opção == 1) {
                    calculadora();
                } else if (opção == 2) {
                    alert('Até mais!');
                } else {
                    alert('Digite uma opção válida!');
                    novaOperação();
                }
            }

            if (operação == 1) {
                soma();
            } else if (operação == 2) {
                subtração();
            } else if (operação == 3) {
                divisão();
            } else if (operação == 4) {
                multiplicação();
            } else {
                alert('Esta operação não é válida');
            }
        }
    }
}

calculadora();
