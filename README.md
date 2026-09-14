# Portfólio — Vinicius Venâncio

Portfólio pessoal desenvolvido com Angular para apresentar minha trajetória profissional, projetos, tecnologias estudadas e materiais de contato.

O projeto foi criado com foco em uma interface simples, responsiva e fácil de manter, direcionada a recrutadores e profissionais de tecnologia.

## Objetivos

- Apresentar minha trajetória em suporte de TI e desenvolvimento de software.
- Destacar projetos acadêmicos e pessoais.
- Demonstrar conhecimentos em Java, Spring Boot, APIs REST, bancos de dados e Angular.
- Disponibilizar meu currículo e links profissionais.
- Registrar estudos e aprendizados técnicos.

## Tecnologias

- Angular
- TypeScript
- HTML
- CSS
- Git e GitHub

## Estrutura atual

O site possui três áreas principais:

| Rota | Descrição |
|---|---|
| `/` | Apresentação profissional, trajetória, tecnologias e contatos |
| `/projetos` | Lista de projetos com descrição, tecnologias, status e links para o GitHub |
| `/estudos` | Lista de estudos e aprendizados técnicos |

O currículo está disponível como arquivo estático na pasta `public` e pode ser acessado pelo botão correspondente na página inicial.

## Pré-requisitos

Para executar o projeto localmente, é necessário ter instalado:

- Node.js;
- npm;
- Angular CLI;
- Git.

As versões utilizadas durante o desenvolvimento podem ser consultadas com:

```bash
node --version
npm --version
ng version
git --version
```

## Como executar localmente

Clone o repositório e acesse a pasta do projeto:

```bash
git clone https://github.com/ViniciusV3nancio/portfolio-vinicius.git
cd portfolio-vinicius
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
ng serve
```

Depois, abra no navegador:

```text
http://localhost:4200/
```

O Angular atualiza a aplicação automaticamente quando os arquivos são alterados.

## Build de produção

Para gerar os arquivos otimizados para publicação, execute:

```bash
ng build
```

Os arquivos de saída serão gerados dentro da pasta `dist`.

Antes de publicar, verifique se o build terminou sem erros e se a pasta gerada contém o arquivo `index.html`.

## Conteúdo estático

Arquivos que precisam ser acessados diretamente pelo navegador devem ficar na pasta `public`.

Exemplo:

```text
public/
└── curriculo-vinicius-venancio.pdf
```

Após o build, o currículo deve estar disponível na raiz do site pelo endereço configurado no projeto.

## Publicação

O projeto pode ser publicado em uma plataforma de hospedagem para sites estáticos conectada ao GitHub.

O fluxo recomendado é:

1. enviar o projeto para um repositório público no GitHub;
2. conectar o repositório a uma plataforma de hospedagem;
3. configurar o comando de build como `ng build`;
4. informar como diretório de publicação a pasta de saída gerada pelo Angular;
5. configurar o fallback das rotas Angular para `index.html`;
6. validar as rotas `/`, `/projetos` e `/estudos` após a publicação.

## Projetos apresentados

### API To-Do List

API REST para gerenciamento de usuários e tarefas, com foco em autenticação, autorização, persistência e documentação.

Tecnologias relacionadas:

- Java;
- Spring Boot;
- PostgreSQL;
- Spring Security;
- JWT;
- JPA.

### Constructo

Plataforma web para criação de plantas baixas e cálculo automatizado de materiais de construção.

Tecnologias relacionadas:

- PHP;
- JavaScript;
- MySQL;
- Modelagem de dados.

## Status do projeto

O portfólio está em evolução. A versão atual prioriza uma apresentação simples e funcional, com conteúdo estático e navegação entre páginas.

Possíveis próximos passos:

- adicionar novos projetos;
- publicar posts técnicos completos;
- melhorar testes do frontend;
- conectar o Angular a uma API Spring Boot;
- adicionar demos online dos projetos;
- automatizar build e deploy.

## Autor

**Vinicius Venâncio**

- GitHub: [ViniciusV3nancio](https://github.com/ViniciusV3nancio)
- LinkedIn: [vvenanciodev](https://linkedin.com/in/vvenanciodev)
- E-mail: [viniciusvenancio143@outlook.com](mailto:viniciusvenancio143@outlook.com)

## Licença

Este projeto é um portfólio pessoal. O código pode ser consultado para fins de estudo, mas o conteúdo pessoal, currículo e identidade visual não devem ser reutilizados sem autorização.
