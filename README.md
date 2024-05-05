# API de Tarefas

Este é um projeto de API de tarefas desenvolvido com Node.js, Prisma como ORM, seguindo os princípios SOLID e utilizando TypeScript. A API permite adicionar, ler, editar e remover tarefas, além de oferecer documentação com Swagger, testes unitários com Jest e contêineres Docker para facilitar o desenvolvimento e implantação.

## Pré-requisitos

Para executar a API, você precisará ter os seguintes pré-requisitos instalados em sua máquina:

- Node.js (versão 16 ou superior)
- Banco de dados PostgreSQL
- Gerenciador de pacotes npm ou Yarn

## Instalação

1. Clone este repositório em sua máquina local:

    ```bash
    git clone https://github.com/bruno-henr/corelab-api-todo.git
    ```

2. Acesse o diretório do projeto:

    ```bash
    cd corelab-api-todo
    ```

3. Instale as dependências do projeto:

    ```bash
    npm install
    # ou
    yarn install
    ```

4. Crie o banco de dados PostgreSQL e configure as credenciais de acesso no arquivo `.env`:
   ```bash
     DATABASE_URL="postgresql://<USER>:<PASSWORD>@<HOST>:<PORT>/<DATABASE>?schema=public"
    ```

6. Execute as migrações do Prisma para criar as tabelas no banco de dados:

    ```bash
    npx prisma migrate dev
    ```

## Execução

### Modo de Desenvolvimento

Para iniciar o servidor no modo de desenvolvimento, execute o seguinte comando:

```bash
npm run dev
# ou
yarn dev
```

### Docker Compose

Se preferir usar Docker, você pode iniciar a aplicação com Docker Compose. Certifique-se de ter o Docker instalado e execute o seguinte comando:

```bash
docker-compose up -d
```

### Testes Unitários

Para executar a bateria de testes unitários com Jest, use o seguinte comando:
```bash
npm test
# ou
yarn test

```

## Endpoints

- **GET /task**: Retorna todas as tarefas cadastradas.
- **POST /task**: Adiciona uma nova tarefa.
- **PUT /task**: Atualiza uma tarefa existente.
- **DELETE /task/:id**: Remove uma tarefa existente com base no ID.

## Documentação Swagger

Você pode acessar a documentação Swagger da API em:

```bash
http://localhost:3003/api-docs/
```

Certifique-se de substituir `localhost:3003` pelo host e porta onde a API está sendo executada, se necessário.

---

Sinta-se à vontade para contribuir, abrir problemas ou fornecer feedback para melhorar este projeto!
