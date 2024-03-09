let amigos =[]; 

function adicionar(){
    let nome = document.getElementById('nome-amigo');
        if(nome.value == ''){
            alert('Digite um nome!');
            return;
        }
        if(amigos.includes(nome.value)){
            alert('Nome ja adicionado');
            return;
        }
    let lista =document.getElementById('lista-amigos');
    amigos.push(nome.value)
    if(lista.textContent == ''){
    lista.textContent = nome.value;
    }else{
        lista.textContent = lista.textContent + ', ' + nome.value;
    }
    nome.value = '';
    atualizarLista();
    atualizarSorteio();

}
function sortear (){
    if(amigos.length<4){
       alert('Adicione pelo menos 4 amigos');
       return 
    }
    embaralha(amigos);
    let sorteados=document.getElementById('lista-sorteio');

    for(i=0; i<amigos.length;i++){
        if(i == amigos.length - 1){
            sorteados.innerHTML= sorteados.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';
        }else{
            sorteados.innerHTML= sorteados.innerHTML + amigos[i] + '-->' + amigos[i+1] + '<br>';
        }
        
    }

}

function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = 
        [lista[indiceAleatorio], lista[indice - 1]];
    }
}
function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}


function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });
        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}


function reiniciar(){
    amigos =[];
    document.getElementById('lista-amigos').innerHTML=''
    document.getElementById('lista-sorteio').innerHTML=''
}    

