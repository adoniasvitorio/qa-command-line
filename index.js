const fs = require('fs');

const { runInteractiveQuestions } = require('./src/question');
const { showResults } = require('./src/result');

const json = JSON.parse(fs.readFileSync('./prompts.json'));

const greetings = json.greetings;
if (greetings) {
    console.log(`[${greetings.name}] ${greetings.desciption}`);
    console.log('------------------------');
}

// Iniciar o fluxo de perguntas e respostas
runInteractiveQuestions((answers) => {
    // Exibir as respostas armazenadas
    showResults(answers);
});
