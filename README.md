# Crud Base

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Nodejs](https://img.shields.io/badge/node.js-v16.15.1-green)
![Npm](https://img.shields.io/badge/npm-v8.11.0-red)
![Postgres](https://img.shields.io/badge/postgresql-13-blue)
![TypeORM](https://img.shields.io/badge/typeorm-v0.3.10-orange)
![Docker](https://img.shields.io/badge/docker-v20.10.10-blue)
![Docker Compose](https://img.shields.io/badge/docker-v2.1.1-blue)

### Tecnologias

* [Node.js](https://nodejs.org/) - Ambiente de desenvolvimento para construir a aplicação usando a linguagem de programação Javascript.
* [Npm](https://www.npmjs.com/) - Gerenciador de pacotes e automação de build.
* [TypeORM](https://typeorm.io/) - ORM para integração com os bancos de dados.
* [Docker](https://docs.docker.com/) - Conteinerização open source usada para empacotar, entregar e executar aplicações em containers Linux.
* [Docker Compose](https://docs.docker.com/engine/reference/commandline/compose/) - orquestrador de containers da Docker.

### Banco de Dados

* 	[PostgreSQL](https://www.postgresql.org/) - Banco de dados usado na aplicação

Etapa 1 - Clone o repositório.

```bash
git clone https://github.com/TomeThiago/crud-base.git
cd crud-base
```

Etapa 2 - Instale as dependências necessárias para execução do projeto.

```bash
yarn install
```

Etapa 3 - Crie um arquivo .env para informar as keys necessárias para o funcionamento correto da aplicação. Use de exemplo a .env.example para criar a .env

```
PORT=
SECRET=
DATABASE_HOST=
DATABASE_PORT=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_NAME=
```

Etapa 5 - Criar o banco de dados manualmente ou rodar o código a baixo para usar o banco de dados do docker.

```bash
docker compose --env-file .env up db -d
```

Etapa 6 - Rodar as migrations para criar as tabelas.

```bash
yarn migration:run
```

Etapa 7 - Subir a aplicação

```bash
yarn start:dev
```

Se aparecer "Server is running on port ..." e logo após "Database postgreSQL connected successfully" o servidor está funcionando corretamente.

Caso tenha dado algum erro verifique se fez todas as etapas igual informado nesta documentação.

## Documentation

- [Endpoints](http://localhost:3000/docs)