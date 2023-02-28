//working backend

const prompt = require("prompt-sync")();
const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./output.txt"));

console.log("plik Y/N");
let yn = prompt(">>");

var input = prompt(">>");

podzielone = input.match(/.[\s\S]{1,1999}/g);

const n = podzielone.length;

for (let i = 0; i < n; i++) {
  myConsole.log(podzielone[i]);
}
