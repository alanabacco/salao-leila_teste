# Salão de beleiza da Cabeleleila Leila

## Sobre o projeto

<!-- Explicar o projeto -->

Neste repositório se encontram os diretórios

- [server](https://github.com/alanabacco/salao-leila_teste/tree/main/server), que contém o backend da aplicação;
- [web](https://github.com/alanabacco/salao-leila_teste/tree/main/web), contendo o frontend.

## Ferramentas e tecnologias utilizadas

### Backend

- [NodeJS](https://nodejs.org/) - ambiente de execução JavaScript
- [Express](https://expressjs.com/) - framework para Node.js
- [Prisma](https://www.prisma.io/) - ORM (Object-Relational Mapper)
- [postgresql](https://www.postgresql.org/) - ferramenta de sistema de gerenciamento de bancos de dados

### Frontend

- [React](https://react.dev/) - biblioteca de código aberto para interfaces gráficas
- [NextJS](https://nextjs.org/) - framework para React
- [TypeScript](https://www.typescriptlang.org/) - superset de javascript que adiciona recursos à linguagem

## Como executar o projeto localmente

Para executar o projeto de maneira local, você precisa ter o [NodeJS](https://nodejs.org/) e o [Git](https://git-scm.com/) instalados na sua máquina. Em seguida, execute os seguintes comandos, um de cada vez em um terminal:

```bash
git clone https://github.com/alanabacco/salao-leila_teste # para clonar o repositorio
cd salao-leila_teste # para entrar na pasta do projeto
```

### Para rodar o backend:

```bash
cd server # para entrar na pasta server
npm install # instalar dependencias
npm run migrate # para fazer as migrações das tabelas
npm run seed # para alimentar as tabelas com dados

npm run dev # rodar o projeto
```

o backend estará rodando na porta 8080.

obs.: é preciso fazer a **conexão com o banco de dados** em `.env`. Há um arquivo `.exemple.env` para exemplificar.

Se quiser resetar o banco de dados, rode o comando `npm run reset:db`;

Você pode ver o banco de dados de forma visual utilizando o [Prisma Studio](https://www.prisma.io/studio):

Para rodar o prisma studio abra o terminal e execute o comando: `npx prisma studio`.

### Para rodar o frontend

Em outro terminal rode os comandos:

```bash
cd web # para entra na pasta web
npm install # instalar dependencias
npm run dev # rodar o projeto
```

o frontend estará rodando na porta 3000.

Para testar pode-se usar o cliente com o telefone `16987654321` e senha `123456`.
