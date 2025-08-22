# banco-web-tests

Este projeto tem como objetivo demonstrar para os alunos da Mentoria 2.0 como automatizar testes de aplicações web utilizando Cypress com JavaScript, organizando o código com Custom Commands e gerando relatórios automáticos.

## Objetivo

Automatizar cenários de testes para a aplicação [banco-web](https://github.com/juliodelimas/banco-web), validando fluxos de login e transferência, utilizando boas práticas de organização e relatórios.

## Componentes do Projeto

- **Cypress**: Framework principal de automação de testes end-to-end.
- **Custom Commands**: Comandos personalizados para reutilização de ações comuns nos testes, localizados em [`cypress/support/commands/`](cypress/support/commands/).
- **Fixtures**: Dados de teste em [`cypress/fixtures/`](cypress/fixtures/).
- **Relatórios Mochawesome**: Geração automática de relatórios em HTML via [`cypress-mochawesome-reporter`](https://github.com/lukejpreston/cypress-mochawesome-reporter).
- **Testes**: Casos de teste organizados em [`cypress/e2e/`](cypress/e2e/).

## Pré-requisitos

- Node.js instalado
- Clonar e executar a [API](https://github.com/juliodelimas/banco-api) e a [aplicação Web](https://github.com/juliodelimas/banco-web) localmente

## Instalação

1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/banco-web-tests.git
   cd banco-web-tests

2. Instale as dependências:
   npm install

3. Certifique-se de que a API e a aplicação Web estejam rodando em http://localhost:4000.  

Execução dos Testes
Para rodar todos os testes em modo headless:
npm test

Para abrir o Cypress em modo interativo:
npm run cy:open

Para rodar com interface (headed):
npm run cy:headed

Relatórios
Após a execução dos testes, os relatórios em HTML estarão disponíveis em cypress/reports/html/index.html.

Estrutura dos Testes
Os testes estão organizados em arquivos dentro de cypress/e2e/:

login.cy.js: Testes de login com credenciais válidas e inválidas.
transferencia.cy.js: Testes de transferência entre contas.

Custom Commands
Os comandos customizados facilitam a escrita e manutenção dos testes. Eles estão definidos em cypress/support/commands/:

* fazerLoginComCredenciaisValidas: Realiza login com usuário e senha válidos do fixture credenciais.json.

* fazerLoginComCredenciaisInvalidas: Realiza login com dados inválidos.
verificarMensagemNoToast: Valida mensagens exibidas em toasts.

* selecionarOpcaoNaCombobox: Seleciona opções em comboboxes por label.
realizarTransferencia: Executa o fluxo de transferência entre contas.

Dados de Teste
Os dados de login estão em cypress/fixtures/credenciais.json.