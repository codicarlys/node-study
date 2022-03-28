var carros = ['Ka','Gol','Fusca']
var carros = [];
var carriolas = new Array(10);

carros.push('Ka')
carros[1] = 'coisa'

console.log(carros)
carros.splice(1,1)
console.log(carros)

var carros = [
    { marca: 'Ford', modelo: 'Ka'},
    { marca: 'Chevrolet', modelo: 'Corsa'},
    { marca: 'Fiat', modelo: 'Palio'}
]
// Map
carros.map( function (elemento) {
    return elemento.length;
});

// Sumarizando valores
var total = 0;
carros.forEach(function(elemento){
    return total += elemento.preco;
});

// Reduce 
carros.reduce( function(prev, cur) {
    return prev + cur.preco;
},0);


// Concat 
var carros = ['Ka','Corsa','Palio'];
var motos = ['Honda','Yamaha'];
var veiculos = carros.concat(motos);
veiculos.toString();

// Slice/reverse/reverse/join
carros.slice(0,2); // remove
carros.slice(1,0,'Fusca'); // adiciona
carros.reverse(); // inverte ordem
carros.join(";"); 