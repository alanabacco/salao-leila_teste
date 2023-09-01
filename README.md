# Salão de beleiza da Cabeleleila Leila

## Sobre o projeto

Projeto desenvolvido como teste técnico para a empresa [DSIN](https://www.dsin.com.br/). O projeto consiste em um sistema de gerenciamento de um salão de beleza, onde é possível os clientes se cadastrarem, logarem e agendarem um serviço no salão de beleza.

<figure align="center">
    <img alt="Pagina inicial do projeto, onde é possível o cliente fazer login para fazer os agendamentos do salão de beleza" src="./web/public/home-page2.png">
    <figcaption>Página inicial</figcaption>
</figure>

### Neste repositório se encontram os diretórios:

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

# faça a conexão com o banco de dados em .env primeiro - veja o exemplo em .exemple.env

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

Para poder fazer as operações que precisam de autenticação, é preciso pegar o token de autenticação: na interface do Swagger UI, localize a operação de autenticação `/clientLogin` e clique em `Try it out`. Preencha os campos `phone` e `password` com um telefone e senha que esteja no banco de dados. Clique em `Execute` e copie o token que aparecerá. Agora, na parte de cima da página, onde está escrito `Authorize`, cole o token e clique em `Authorize`.

### Para rodar o frontend

Em outro terminal rode os comandos:

```bash
cd web # para entrar na pasta web
npm install # instalar dependencias
npm run dev # rodar o projeto
```

o frontend estará rodando na porta 3000.

Para testar pode-se usar o cliente com o telefone `16987654321` e senha `123456`, que foi criado no seed do backend, ou outros que estejam no banco de dados.

---

obs.: Existem dois componentes/páginas incompletas no frontend: a página de editar agendamento e a página do salão que mostra todos os agendamentos. Infelizmente, esses componentes não foram finalizados devido do limite de tempo.
