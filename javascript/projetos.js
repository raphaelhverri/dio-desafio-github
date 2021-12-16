/*
//Projeto 1 

function max(numero1, numero2) {
    if(numero1 > numero2){
    return numero1;
}
    return numero2;
};

let valorMaior = max(5,-9);
console.log(valorMaior);

//FizzBuzz
// Divisível por 3 => Fizz
// Divisível por 5 => Buzz
// Divisível por 3 e 5 => FizzBuzz
// Não divisível por 3 e 5 => entrada
// Não é um número => 'Não é um número'

function fizzBuzz(entrada){

    if(entrada%3 == 0 && entrada%5 == 0){
        return 'FizzBuzz';
    }
    if (entrada%3 == 0){
        return 'Fizz';
    }
    if(entrada%5 == 0){
        return 'Buzz';
    }
    if (entrada%3 < 0 || entrada%3 > 0){
        return entrada;
    }
    return 'Não é um número'

};

const testeFizzBuzz = fizzBuzz('teste');
console.log(testeFizzBuzz);

// Medidor de Velocidade
// Velocidade máxima: 70
// A cada 5km acima do limite, ganha-se 1 ponto na carteira
// Math.floor()
// Caso os 12 pontos sejam ultrapassados => Carteira Suspensa

function verificadorVelocidade(velocidade){
    if(velocidade <= 70){
        return 'Ok';
    }
    if(Math.floor((velocidade - 70)/5)>12){
        return 'Sua carteira está suspensa';
    }
    return 'Você foi multado em: ' + Math.floor((velocidade - 70)/5) + ' ponto(s)'
};

let verificador = verificadorVelocidade(65);
console.log(verificador);

//Par ou Ímpar
// Receber uma quantidade de valores para avaliar
// Função exibe se cada valor é par ou ímpar

function exibirTipo(limite) {
    i = 0;
    while(i <= limite){
        
        if(i%2 == 0){
        console.log(i + ' Par');
        i++};
        
        console.log(i + ' Ímpar');
        i++;
    };
};

let ParouImpar = exibirTipo(5);

//Encontre o string
//Exibir somente as propriedades do tipo string do objeto

const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Joe Russo',
    personagem: 'Thor'
};

function exibirPropriedades(variable){
    for(value in variable){
        if(typeof(variable[value]) == 'string')
        console.log(value, variable[value]);
    }
};


exibirPropriedades(filme);

//Somar multiplos de 3 e 5

function somar(limite){
    let multiplosDe3 = 0;
    let multiplosDe5 = 0;
    for(i = 0; i<=limite; i++){
        if(i%3 === 0)
        multiplosDe3 += i;
        };
    for(i = 0; i<=limite; i++){
        if(i%5 === 0)
        multiplosDe5 += i;
        };

        console.log(multiplosDe5 + multiplosDe3);
};

somar(10);


//Nota escolar
//Obter média a partir de um array

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const notas = [70,70,80];
//75

function mediaDoAluno(arrayNotas){
    let somaNotas = 0;
    for(i of arrayNotas){
        somaNotas += i;
    };
    let media = somaNotas/arrayNotas.length;

    if(media <= 59) return 'E';
    if(media <= 69) return 'D';
    if(media <= 79) return 'C';
    if(media <= 89) return 'B';
    return 'A';
};

console.log(mediaDoAluno(notas));

// Criar uma função que exibe a quantidade de *
// que aquela linha possui

function exibirAsteriscos(linhas){
    let armazena = '';
    for(i=0; i<=linhas; i++){
        
        armazena = armazena + '*';
        console.log(armazena);
       
    };
    
};

exibirAsteriscos(10);

// Números Primos
console.log('Numeros Primos');
function exibirNumerosPrimos (limite){
    for(dividendo = 2; dividendo<=limite; dividendo++){
        let primo = 'verdadeiro';

        for(divisor = 2; divisor<dividendo;divisor++){
            if(dividendo%divisor == 0){
            primo = 'falso';
            break;
            }
        }

        if(primo == 'verdadeiro')
        console.log(dividendo);
    }
    
};

exibirNumerosPrimos(10);



//Endereço
//Criar um objeto endereço que contenha:
//Rua, cidade, CEP
//Criar função que mostre o objeto com todas as propriedades

function criarEndereco(rua, cidade, cep) {
    return {
        rua,
        cidade,
        cep
}
};

function exibirObjeto(objeto){
    console.log(objeto)
};

const meuEndereco = criarEndereco('Albino Triques', 'São Carlos', '13563-340');
exibirObjeto(meuEndereco);

//Igualdade de objetos
//Criar dois objetos de endereço
//Comparar se são iguais em propriedade e valores

function Endereco(rua,cidade,cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}
const endereco1 = new Endereco('a','b','c');
const endereco2 = new Endereco('a','b','c');

function saoIguais(endereco1,endereco2){
    return endereco1.rua === endereco2.rua &&
    endereco1.cidade === endereco2.cidade &&
    endereco1.cep === endereco2.cep
};

console.log(saoIguais(endereco1,endereco2));

//Blog
//Objeto postagem contendo:
//Título
//Mensagem
//Autor
//Visualizações
//Comentários (autor, mensagem)
//estaAoVivo

function criarObjBlog(titulo, mensagem, autor, visualizacoes,
    comentarios,estaAoVivo){
        return{
            titulo,
            mensagem,
            autor,
            visualizacoes,
            comentarios,
            estaAoVivo
        }
    }

const blog = criarObjBlog('Teste Blog', 'Olá', 'Raphael',
100, ['Raphael','Isso é um Comentário'], true);
console.log(blog);

//Faixa de Preço
//Criar um array de objetos

let faixas = [
    {tooltip: 'Até R$ 700', mínimo: 0, maximo: 700},
    {tooltip: 'De R$ 700 a R$ 1000', mínimo: 701, maximo: 1000},
    {tooltip: 'R$ 1000 ou mais', mínimo: 1001, maximo: 999999999}
];

*/