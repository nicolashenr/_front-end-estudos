/*
Crie um projeto com dois arquivos: index.html e script.js. No arquivo 'index' insira apenas a estrutura base HTML e a tag script para conectar o arquivo HTML com o arquivo de extensão JavaScript.

Usando os conceitos aprendidos nesse módulo, e sem alterar o arquivo index.html, adicione um título simples ao site com o id 'titulo', e um elemento que represente um produto à venda. O produto precisa incluir pelo menos o nome, a descrição e o preço. Pode incluir outros "elementos filhos" se achar necessário como, por exemplo, uma imagem. Procure usar o método simples e o método complexo, ensinados neste tópico.

*/




const titulo = document.createElement("h1");
titulo.innerText = "Título da Página";
titulo.id = "titulo";




const principalTitulo = document.querySelector('body');
principalTitulo.appendChild(titulo);




const produtoVenda = document.createElement('div');
produtoVenda.innerHTML = `
    <div>
        <h3>Produto Super-Faturado</h3>
        <p>Descrição: <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere neque voluptates suscipit nostrum fuga! Odio consequatur et dolores vero vel.</span></p>
        <p>Preço: <span>&dollar; 12,00</span></p>
        <img src="https://uploads.metropoles.com/wp-content/uploads/2015/11/16142352/OC_Galoes-Agua_-Apos-Sabesp-admitir-o-racionamento-cresce-a-procura-por-galoes-dagua-na-cidade-de-Sao-Paulo-foto-Oswaldo-Corneti-Fotos-Publicas_201501300002.jpg" alt="galões de água" width="50%">
    </div>
`;

const produto = document.querySelector('body');
produto.appendChild(produtoVenda);




