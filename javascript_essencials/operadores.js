10 == '10' //True
10 === '10' // False
null == undefined // True
10 == new Number(10) // True

// Validacao de operadores deve ser implementado

// Operadores || &&
// 0 || 2 
// 1 || 2

function testa () {
    var thisIsTrue = true;
    if (thisIsTrue) {
      console.log('It certainly is!');
    }
  };
testa();


function testa () {
    var nothing = '';
    if (nothing) {
      console.log('Nothing');
    } else {
      console.log('Huh?');
    }
};
testa();

// Trushy and Falsy 
// ECMA http://www.ecma-internacional.org/ecma-262/5.1/#sec-9.2
!0 // True
!!0 // False

// Validators
if (max !== undefined || max !== '' || max !== null )
if ( !max )
max = max || 100;

var Pessoa = function (nome, idade){
    this.nome = nome;
    this.idade = idade;
};

var pedro = new Pessoa("Pedro", 20);e