# GitHub User Info CLI

Este é um projeto de linha de comando simples em Node.js que permite que você obtenha informações de um usuário do GitHub.

## Como Usar

### Clonando o Projeto

Você pode clonar este projeto para o seu computador usando o seguinte comando Git:

```bash
git clone https://github.com/adoniasvitorio/nodejs-command-line.git
```

### Executando o Projeto
```bash
cd nodejs-command-line
```
```bash
node index.js
```

## Descrição das Propriedades do Arquivo JSON

| Propriedade     | Descrição                                       |
| --------------- | ----------------------------------------------- |
| `greetings`     | Saudação de boas-vindas exibida antes das perguntas. |
| `prompts`       | Uma matriz de objetos representando as perguntas interativas. Cada objeto contém as seguintes propriedades: |
| `prompts.name`          | Identificador para pergunta. |
| `prompts.question`      | A pergunta que será exibida ao usuário.         |
| `prompts.key`      | Usado como chave para armazenar a resposta..         |
| `options`       | Uma matriz de opções de resposta, cada uma contendo as seguintes propriedades: |
| `options.name`          | Nome da opção de resposta.                      |
| `options.answer`        | A resposta correspondente à opção selecionada.  |

Certifique-se de atualizar as descrições de acordo com as informações reais do seu arquivo JSON. Isso fornecerá uma documentação clara das propriedades e de como elas são usadas no seu projeto.


### Dependências do Projeto

[readline](https://nodejs.org/api/readline.html): Um módulo Node.js que facilita a leitura de entrada do usuário na linha de comando.
Você pode encontrar uma lista completa de dependências no arquivo package.json do projeto.

### Testes