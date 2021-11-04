# Gohubly - Seller Center

This project was generated using [Nx](https://nx.dev).
🔎 **Smart, Extensible Build Framework**

## Explicando o Monorepo

Este repositório contém as aplicações para o software do _Seller Center da Hubly_, as quais estao no diretório `gohubly/apps`.

## Criando uma nova aplicaçao

Execute `nx g @nrwl/react:app my-app` para gerar uma aplicação.

## Nova library

Execute `nx g @nrwl/react:lib my-lib` para gerar uma lib.
Libs sao compartilhaveis entre outras libs e aplicações. Elas podem ser importadas via `@gohubly/mylib`.

## Iniciar local em dev

_Lembre-se de ter o .env preenchido!_

Execute `yarn start:api` para rodar o server de desenvolvimento da API em [Express+TypeORM].
Execute `yarn start:frontend` para rodar o server de desenvolvimento do FrontEnd em [NextJs].

## Build

Execute `yarn build` para buildar o projeto. Os arquivos irão para o diretório `dist/`. Use a flag `--prod` para uma build de produção.

## Testes unitarios

Execute `nx test my-app` para rodar o teste via [Jest].

## Testes end-to-end

Execute `nx e2e my-app` para rodar o teste end-to-end via [Cypress].
