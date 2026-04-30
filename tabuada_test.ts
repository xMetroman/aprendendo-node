import PromptSync from "prompt-sync";

const prompt = PromptSync();

// 1. Pedimos o número ao usuário
// O prompt sempre devolve um texto (string), por isso usamos o Number() para converter
const entrada = prompt("Digite um número para ver a tabuada: ");
const numero = Number(entrada);

console.log(`--- Tabuada do ${numero} ---`);

// 2. O laço de repetição (FOR)
// let i = 1    -> Começamos do 1
// i <= 10      -> Vamos repetir enquanto o i for menor ou igual a 10
// i++          -> A cada volta, somamos +1 ao valor de i
for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    
    // Exibimos a linha formatada: ex "5 x 1 = 5"
    console.log(`${numero} x ${i} = ${resultado}`);
}

console.log("-----------------------");
