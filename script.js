function calcularMedia() {
    const form = document.getElementById('Notas');
    const nota1 = parseFloat(form.nota1.value);
    const nota2 = parseFloat(form.nota2.value);
    const nota3 = parseFloat(form.nota3.value);
    const nota4 = parseFloat(form.nota4.value);
    const media = (nota1 + nota2 + nota3 + nota4) / 4;
    let situacao;
    if (media >= 6) {
        situacao = 'Aprovado';
    } else if (media >= 4 && media < 6 ) {
        situacao = 'IFA';
        
    } else {
        situacao = 'Reprovado';
    }
    document.getElementById('resultado').innerHTML = 'Média: ' + media.toFixed(2) + '<br>Situação: ' + situacao;
}
