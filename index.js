let qtd = 0;

qtd = prompt("Digite a quantidade de alunos em sala");

for (let i = 0; i <= qtd; i++) {
    if (i == 0) {
        console.log(`Zero ${i}`);
    } else {
        if (i % 2 == 0) {
            console.log("Par", i);
        } else {
            if (i % 2 == 1) {
                console.log("Impar" + i);
            }
        }
    }
}