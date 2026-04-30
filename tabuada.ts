import PromptSync from "prompt-sync";
const prompt = PromptSync();

const num = Number(prompt("Digite um número para ver a tabuada: "));

for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}
