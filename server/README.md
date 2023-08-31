# Salão de beleiza da Cabeleleila Leila

## Sobre o projeto

Projeto desenvolvido como teste técnico para a empresa [DSIN](https://www.dsin.com.br/). O projeto consiste em um sistema de gerenciamento de um salão de beleza, onde é possível os clientes se cadastrarem, logarem e agendarem um serviço no salão de beleza.

## Ferramentas e tecnologias utilizadas

- [NodeJS](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [postgresql](https://www.postgresql.org/) - ferramenta de sistema de gerenciamento de bancos de dados

## Como executar o projeto localmente

```bash
git clone https://github.com/alanabacco/salao-leila_teste
cd teste-salao-leila_teste
cd server # para entrar na pasta server
npm install # instalar dependencias

npm run migrate # para fazer as migrações das tabelas
npm run seed # para alimentar as tabelas com dados

npm run dev # rodar o projeto
```

o backend estará rodando na porta 8080.

obs.: é preciso fazer a **conexão com o banco de dados** em `.env`. Há um arquivo `.exemple.env` para exemplificar.

Se quiser resetar o banco de dados, rode o comando `npm run reset:db`;

Você pode ver o banco de dados de forma visual utilizando o [Prisma Studio](https://www.prisma.io/studio): para rodar o prisma studio, abra o terminal e execute o comando: `npx prisma studio`. Ele abrirá o navegador com o prisma studio rodando na porta 5555.

#### Utilizar o swagger ui

O projeto também contém uma documentação da API feita com o [swagger](https://swagger.io/). Para acessar a documentação, basta ir no navegador e acessar a url `http://localhost:8080/api-docs/`.

Para poder fazer as operações que precisam de autenticação, é preciso pegar o token de autenticação: Na interface do Swagger UI, localize a operação de autenticação `/clientLogin` e clique em `Try it out`. Preencha os campos `phone` e `password` com um telefone e senha que esteja no banco de dados. Clique em `Execute` e copie o token que aparecerá. Agora, na parte de cima da página, onde está escrito `Authorize`, cole o token e clique em `Authorize`.
