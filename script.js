const formAgenda = document.getElementById('form-agenda');

let linhas = ''

formAgenda.addEventListener('submit', function(e){
    e.preventDefault();
    
    const corpoTabela = document.querySelector('tbody');
    const nomeContato = document.getElementById('nome-contato');
    const telefoneContato = document.getElementById('telefone-contato');
    
    let linha = `<tr>`;
    linha += `<td>${nomeContato.value}</td>`;
    linha += `<td>${telefoneContato.value}</td>`;
    linha += `</tr>`;
    linhas += linha;

    corpoTabela.innerHTML = linhas;
})