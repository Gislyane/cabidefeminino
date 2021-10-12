const Produto = require("./model/Produto");
const Cliente = require("./model/Cliente");
const Funcionario = require("./model/Funcionario");
const Entrega = require("./model/Entrega");

let produto1 = new Produto();
let funcionario1 = new Funcionario();
let cliente1 = new Cliente();
let entrega1 = new Entrega();


let produto2 = new Produto("vestido", "azul", "P", "Amaralda","012");

let funcionario2 = new Funcionario("Juliana", "150.00");

let cliente2 = new Cliente("Alicia", "000.000.000-00", "Rua jubiscreldo da silva", "11 1 11111111");

let entrega2 = new Entrega("Juliana", "Rua jubiscreldo da silva","102", "11 1 11111111","Remígio-PB", "012", "PIX");


console.log(produto2);
console.log(funcionario2);
console.log(cliente2);
console.log(entrega2);
