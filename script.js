const formAgenda = document.getElementById('form-agenda');

let linhas = ''

formAgenda.addEventListener('submit', function(e){
    e.preventDefault();
    
    adicionaContato();
    atualizaTabela();
});


//funções
function adicionaContato (){
    const nomeContato = document.getElementById('nome-contato');
    const telefoneContato = document.getElementById('telefone-contato');
    
    let linha = `<tr>`;
    linha += `<td id='AdicionaLinha'>${nomeContato.value}</td>`;
    linha += `<td id='AdicionaLinha'>${telefoneContato.value}</td>`;
    linha += `</tr>`;
    linhas += linha;
    
    
    nomeContato.value = '';
    telefoneContato.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}