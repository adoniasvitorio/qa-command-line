const readline = require('readline');
const fs = require('fs');

const runInteractiveQuestions = (callback) => {
    const json = JSON.parse(fs.readFileSync('./prompts.json'));
    const prompts = json.prompts;
    let currentPromptIndex = 0;
    let answers = {};

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const askQuestion = () => {
        if (currentPromptIndex < prompts.length) {
            const prompt = prompts[currentPromptIndex];
            console.log(prompt.question);

            prompt.options.map((option, index) =>
                console.log(`${index + 1}. ${option.name}`));

            rl.question('Escolha uma opção (1-' + prompt.options.length + '): ', (answerIndex) => {
                const selectedOption = prompt.options[parseInt(answerIndex) - 1];
                if (selectedOption) {
                    console.log('Sua resposta: ' + selectedOption.name);
                    console.log('------------------------');

                    // Armazena a resposta
                    answers[prompt.key] = selectedOption.answer;

                    currentPromptIndex++;
                    askQuestion();
                } else {
                    console.log('Opção inválida. Por favor, escolha uma opção válida.');
                    askQuestion();
                }
            });
        } else {
            rl.question('Deseja refazer o questionário (s/n)? ', (response) => {
                if (response.toLowerCase() === 's') {
                    currentPromptIndex = 0;
                    answers = {};
                    askQuestion();
                } else {
                    rl.close();
                    callback(answers);
                }
            });
        }
    }

    askQuestion();
}

module.exports = { runInteractiveQuestions };
