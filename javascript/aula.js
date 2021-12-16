//criação de objetos com seus respectivos parâmetros
let pessoa = {
    nome: 'Raphael',
    idade: 28,
    estaAprovado: true,
    sobreNome: 'Verri'
};

let pessoa1 = {
    nome: pessoa.nome
};

console.log(pessoa1);

//if...else
let horaAtual = 20;

if(horaAtual < 12 && horaAtual > 0) {
    console.log('Bom dia')
    }

else if(horaAtual > 12 && horaAtual < 18) {
    console.log('Boa tarde')
}

else{
    console.log('Boa noite')
};

//switch...case
let usuario = 'gerente';

switch(usuario){
    case 'gerente':
        console.log('usuario gerente');
        break;
    
    case 'comum':
        console.log('usuario comum');
        break;

    case 'diretor':
        console.log('usuario diretor');
        break;

    default:
        console.log('usuario não encontrado');
        break;

}

//loop for
for(let i = 0; i<5; i++){
    console.log('Número: ' + i); 
}

for(let i = 1; i<= 5; i++){
    if(i%2 !==0){
        console.log('Número ímpar: ' + i)}
    else{console.log('Número par: ' + i)}
    };

//Loop While

let iWhile = 0;
while(iWhile <= 5){
    console.log('Loop While: '+ iWhile);
    iWhile++;
};

//Loop Do..While
let iDoWhile = 0
do{
    console.log('Digitando..' + iDoWhile);
    iDoWhile++;
} while(iDoWhile<3);

//Loop For-In (Acessa o 'Key' de cada objeto ou array)
const pessoaForIn = {
    nome: 'Raphael',
    idade: 28
};

for(let nome in pessoaForIn){
    console.log(nome,pessoaForIn['nome']);
};

const cores = ['Azul', 'Vermelho', 'Verde'];
for(i in cores){
    console.log(cores[i], 'de índice: ' + i);
};

//Loop For-of (Acessa o valor de cada array)
console.log('Loop For-Of');
for(cor of cores){
    console.log(cor);
}

//Factory Functions
//Encapsula a informação dentro de um método 
//que cria um objeto

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("Fazendo ligação...")
        }
    }
}

const celular1 = criarCelular('Zenfone', 5.5, 5000);

console.log(celular1);

//Natureza dinâmica dos objetos
const mouse = {
    cor: 'red',
    marca: 'dazz'
}

mouse.velocidade = 5000;
mouse.trocarDPI = function(){
    console.log('Mudando DPI');
}

delete mouse.velocidade;
console.log(mouse);

//Clonando objetos
const novoObjeto = Object.assign({}, celular1);
console.log(novoObjeto);

const objeto2 = {...celular1};

//Strings

//Tipo primitivo
const mensagem = 'minha mensagem';

//Tipo objeto
const outraMensagem = new String('Bom dia')

//Os dois tipos de string possuem propriedades de objeto

//Tipo primitivo
//const aula39 = 'Oi' + nome39 + ',\n essa é a minha \'primeira\' mensagem';

//Template literal
const nome39 = 'Raphael'
const aula39 = 
`Olá ${nome39} ${2 + 2},
Obrigado por se inscrever no canal`;

console.log(aula39);

//Date
const data1 = new Date();
const data2 = new Date('March 06 2019');
const data3 = new Date(2019,03, 06,9,30);

const data4 = data3.getDate();

//Introdução a Arrays
//Adicionando elemento ao Array

const aula53 = [1,2,3];

//Início do Array
aula53.unshift(0);
console.log(aula53);

//Meio do Array
aula53.splice(1,0,'a');
console.log(aula53);

//Final do Array
aula53.push(5);
console.log(aula53);

//Encontrando elementos dentro de um array
const aula54 = [1,2,3,1,4];
console.log(aula54.indexOf(2));
console.log(aula54.lastIndexOf(1));
console.log(aula54.includes(1));

//Encontrando elemenetos tipo referência
const marcas = [
    {id: 1, nome: 'a'},
    {id: 2, nome: 'b'}
];

const marca = marcas.find(function(marca){
    return marca.nome === 'a';
});
console.log(marca);