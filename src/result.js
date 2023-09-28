const showResults = (answers) => {
    console.log('Você concluiu todas as perguntas!');
    console.log('Respostas:');
    for (const promptName in answers) {
        console.log(`${promptName}: ${answers[promptName]}`);
    }
}

module.exports = { showResults };