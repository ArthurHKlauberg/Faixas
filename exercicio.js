const reader = require('readline-sync');

// EXERCICIO 1)
// Para este exercicio, preciso criar uma tabela de controle de imposto de renda.


// Mostrar as opções pro usuário:
// mandar mensagem "1 - Cadastrar Faixas" .  
// 2 - mandar mensagem "Listar Faixas" .  
// 3 - mandar mensagem "Remover Faixa" .  
// 4 - mandar mensagem "Editar Faixas" .  
// 5 - mandar mensagem "Sair" .
// Fazer uma verificação, se o usuário digitar Cadastrar Faixa, pedir pra ele digitar o valor inicial, o valor final e o valor da alícota .
// Criar um Array vazio para guardas essas informações pelo usuário .
// Pedir pra ele digitar:
// o valor inicial.
// o valor final.
// o valor da alícota.
// Criar um objeto para colocar: 
// Valor inicial. 
// Valor final.
// Valor da alicota .
// Usar metodo Push para adicionar no Array que criei .
// Mandar mensagem console.log("Imposto de renda adicionado com Sucesso!!!")
// Fazer uma verificação .
// Se o usuário digitar listar faixas, mostrar a lista pro usuário . 
// Usar o For .
// Começando com a posição com o valor 0,
// A posição for menor que a quantidade de informações dentro do Array, recebe o valor atual da faixa atual, igual  o Array que criei dentro da posição . 
// Buscar pelo valor inicial, valor final e o valor da alícota .
// Fazer uma verificação . 
// Se usuário digitar remover faixa, pedir pro usuário digitar qual faixa ele quer remover .
// Usar o For .
// Criar uma variável começando com o valor 0 .
// A posicao menor que a quantidade de informações dentro do Array criado .
// Fazer uma verifição .
// se a faixa dentro da posicao for igual a faixa que o usuário digitou .
// Dar um Break(Parar de executar o for).
// Depois de ter feito a procura, preciso remover de acordo da faixa encontrada .
// Se posição for maior ou igual a -1, dou um splice com a posicao 1 .
// Se conseguiu remover, mando a mensagem: console.log ("Sucesso") .
// Se não conseguir excluir, dou uma mensagem de falha .
// Para editar uma faixa, preciso pedir pro usuário digitar a faixa que ele deseja editar .
// Usar o for .
// Criar uma variavel com o valor 0.
// Posicao menor que a quantidade de caracteres dentro do Array.
// Fazer uma verificação .
// Se a faixa dentro da posicao for igual a faixa que o usuário digitou, podemos dar um break para parar de executar o for .
// Podemos editar de acordo com a faixa que foi encontrada .
// Mandar mensagem "Adicione um novo valor Inicial".
// Ler essa informação e guardar essa informação .
// Mandar mensagem "Adicione um novo valor Final" .
// Ler essa informação e guardar essa informação .
// Mandar mensagem "Adicione um novo valor para a Alicota" .
// Ler essa informação e guardar essa informação .
// Criar um objeto para botar as informações:
// novoValorInicial,
// novoValorFinal,
// novoValorAlicota,
// Usar o metodo push . 
// Adicionar essas informações no array de faixas .
// Mandar a mensagem "Faixa editada com Sucesso !!!" .
// Usar o while .
// Se a opção que o usuário digitar for igual a 5, vai mandar a mensagem console.log ("Encerrando o Programa") .

function mostrarOpcao() {
    console.log("1 - Cadastrar Faixas");
    console.log("2 - Listar Faixas");
    console.log("3 - Remover Faixas");
    console.log("4 - Editar Faixas");
    console.log("5 - Sair");
}

function tratarOpcao(opcao) {
    if (opcao == 1) {
        console.log("Cadastrando Faixas");
        cadastrarFaixas();
    } else if (opcao == 2) {
        console.log("Listando Faixas");
        listarFaixas();
    } else if (opcao == 3) {
        console.log("Removendo Faixas");
        removerFaixas();
    } else if (opcao == 4) {
        console.log("Editando Faixas");
        editarFaixas();
    } else if (opcao == 5) {
        console.log("Encerrando o Programa");
    }
}

let faixas = []

function cadastrarFaixas() {
    console.log("Digite o valor inicial");
    let valorInicial = parseFloat(reader.prompt());
    console.log("Digite o valor final");
    let valorFinal = parseFloat(reader.prompt());
    console.log("Digite o valor da Alicota");
    let valorAlicota = parseFloat(reader.prompt());
    let faixa = {
        valorInicial,
        valorFinal,
        valorAlicota
    }
    faixas.push(faixa)
    console.log("Faixa adicionada com Sucesso!!!")
}






function listarFaixas() {
    for (let index = 0; index < faixas.length; index++) {
        const faixaAtual = faixas[index];
        console.log(faixaAtual.valorInicial, faixaAtual.valorFinal, faixaAtual.valorAlicota)
    }
}

function removerFaixas() {
    console.log("Digite o valor Inicial da Faixa que voce deseja excluir")
    let valorInicial = parseFloat(reader.prompt());

    let posicao = -1
    for (let index = 0; index < faixas.length; index++) {
        if (faixas[index].valorInicial == valorInicial) {
            posicao = index
            break;
        }
    }
    if (posicao > -1) {
        faixas.splice(posicao, 1)
        console.log("Faixa excluida com Sucesso !!!");
    } else {
        console.log("Falha ao excluir a Faixa");
    }
}

function editarFaixas() {
    console.log("Digite o valor Inicial da Faixa que deseja editar")
    let valorInicial = parseInt(reader.prompt());

    let posicao = -1
    for (let index = 0; index < faixas.length; index++) {
        if (faixas[index].valorInicial == valorInicial) {
            posicao = index
            break;
        }
    }
    
   if(posicao > -1 && posicao< faixas.length){
    console.log("Adicione um novo valor Inicial")
    let valorInicial = parseFloat(reader.prompt());
    console.log("Adicione um novo valor Final")
    let valorFinal = parseFloat(reader.prompt());
    console.log("Digite um novo valor da Alicota");
    let valorAlicota = parseFloat(reader.prompt());
    let novasFaixas = {
        valorInicial,
        valorFinal,
        valorAlicota
    }
    faixas[posicao] = novasFaixas
    console.log("Faixa editada com Sucesso!!!")
   }else{
       console.log("Registro não encontrado")
   }
}


let opcao = -1
while (opcao != 5) {
    mostrarOpcao();
    opcao = parseInt(reader.prompt());
    tratarOpcao(opcao);
}



