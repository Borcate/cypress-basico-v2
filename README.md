# Testes automatizados com Cypress - Básico

❤️ Curso 1

## Documentação para o projeto de testes automatizados:

- Como configurar um projeto Cypress do zero
- Como visitar páginas locais e remotas
- Como lidar com os elementos mais comuns encontrados em aplicações web
- Como testar _upload_ de arquivos
- Como realizar as mais diversas verificações de resultados esperados
- Como criar comandos customizados
- Como lidar com links que abrem em outra aba do navegador
- Como rodar testes simulando as dimensões de um dispositivo móvel
- Como resolver os mesmos problemas de diferentes formas, conhecendo a [API do Cypress](https://docs.cypress.io/api/table-of-contents)
- Como executar os testes em um _pipeline_ de integração contínua sempre que mudanças ocorrerem no código da aplicação (ou dos testes)
- Como criar uma documentação mínima para seu projeto de testes automatizados.

# Pré-requisitos

Os seguintes sistemas devem estar instalados.
(em junho de 2023)
- [git](https://git-scm.com/) (estou usando a versão `git version 2.40.0.windows.1`)
- [Node.js](https://nodejs.org/en/) (estou usando a versão `v18.16.0`)
- npm (estou usando a versão `9.5.1` enquanto escrevo esta aula)
- [Google Chrome](https://www.google.com/intl/pt_br/chrome/) (estou usando a versão `98.0.4758.80 (Official Build) (x86_64)`)
- [Visual Studio Code](https://code.visualstudio.com/) (estou usando a versão `1.79.0` enquanto escrevo esta aula) ou alguma outra IDE de sua preferência
>
> **Obs. 1:** Ao instalar o Node.js o npm é instalado junto. 🎉
>
> **Obs. 2:** Para verificar as versões do git, Node.js e npm instaladas em seu computador, execute o comando `git --version && node --version && npm --version` no seu terminal de linha de comando.

## Instalação e inicialização do [Cypress](https://cypress.io) 🌲

1. Executar o comando `npm install cypress@9.5.1 --save-dev` (ou `npm i cypress@9.5.1 -D` para a versão curta) > para versão utilizada durante o curso  
2. Executar o comando `npx cypress open` para abrir o Cypress pela primeira vez
## Npm Scripts 
package.json

    "cypress-open": "npx cypress open",
    "cypress-open:mobile":"npx cypress open --config viewportWidth=410 viewportHeight=860",
    "cypress-run": "npx cypress run",
    "cy:run:mobile":"npx cypress run --config viewportWidth=410 viewportHeight=860"