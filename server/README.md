# Salão de beleiza da Cabeleleila Leila

## Sobre o projeto

## Ferramentas e tecnologias utilizadas

- [NodeJS](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)

## Como executar o projeto localmente

Para executar o projeto de maneira local, primeiro você precisa ter o [NodeJS](https://nodejs.org/) e o [Git](https://git-scm.com/) instalados na sua máquina. Em seguida, execute os seguintes comandos, um de cada vez em um terminal:

```bash
git clone https://github.com/alanabacco/salao-leila_teste
cd salao-leila_teste
cd server
npm install
npm run dev
```

estará rodando na porta 8080.

Obs.: é preciso fazer a conexão com o banco de dados no arquivo .env

- Banco de dados utilizado neste projeto: [postgresql](https://www.postgresql.org/).

Você pode ver o banco de dados de forma visual utilizando o [Prisma Studio](https://www.prisma.io/studio):

Para rodar o prisma studio abra o terminal e execute o comando:

```bash
npx prisma studio
```

Em seguida abrirá uma aba do navegador em http://localhost:5555/.

<!-- Explicar o Seed e o Reset do banco de dados -->
