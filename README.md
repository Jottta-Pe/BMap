# 🗺️ BMap — Inclusão em Movimento

**Tecnologia e acessibilidade para uma mobilidade mais inclusiva.**

O BMap é uma aplicação desenvolvida com o objetivo de facilitar o acesso a informações sobre acessibilidade em estabelecimentos e serviços de saúde. A plataforma permite localizar locais, consultar recursos de acessibilidade e compartilhar informações que contribuam para uma sociedade mais inclusiva.

---

## 📌 Sobre o projeto

A acessibilidade ainda representa um desafio para pessoas com deficiência ou mobilidade reduzida. Muitas vezes, a falta de informações sobre a estrutura de estabelecimentos dificulta o planejamento de deslocamentos e o acesso a serviços essenciais.

O BMap surge como uma solução tecnológica para centralizar essas informações, oferecendo recursos para identificação de locais acessíveis, consulta de serviços de saúde e compartilhamento de relatos sobre acessibilidade.

## 🎯 Objetivos

- Facilitar a localização de estabelecimentos e serviços de saúde.
- Disponibilizar informações sobre recursos de acessibilidade.
- Permitir o registro e a consulta de relatos de acessibilidade.
- Oferecer preferências personalizadas de acessibilidade.
- Incentivar a participação colaborativa dos usuários.
- Promover autonomia, inclusão e mobilidade.

## 🚀 Funcionalidades

- Cadastro e gerenciamento de usuários.
- Consulta e gerenciamento de locais.
- Consulta de serviços de saúde.
- Cadastro e consulta de especialidades.
- Associação entre serviços de saúde e especialidades.
- Cadastro de tipos de recursos de acessibilidade.
- Associação de recursos aos locais.
- Gerenciamento de preferências de acessibilidade.
- Registro e consulta de relatos de acessibilidade.
- Gerenciamento de locais favoritos.

## 🛠️ Tecnologias utilizadas

### Front-end
- React Native
- Expo
- JavaScript
- React

### Back-end
- Java
- Spring Boot
- Spring Data JPA
- Spring Security
- API REST
- Maven

### Banco de dados
- Oracle Database 19c
- SQL

### Ferramentas
- Visual Studio Code
- IntelliJ IDEA
- Git e GitHub
- Android Studio
- Expo Go

## 🏗️ Arquitetura do projeto

O projeto está organizado em três partes principais:

**Front-end:** responsável pela interface mobile e pela interação com o usuário, desenvolvido utilizando React Native e Expo.

**Back-end:** responsável pelas regras de negócio, processamento das requisições HTTP e comunicação com o banco de dados, utilizando Java e Spring Boot.

**Banco de dados:** responsável pelo armazenamento e gerenciamento das informações da aplicação, utilizando Oracle Database 19c.

O back-end utiliza uma organização em camadas:

- `controller`: recebe e processa as requisições HTTP.
- `bo`: concentra as regras de negócio.
- `dao`: realiza as operações de persistência.
- `model`: representa as entidades do sistema.
- `dto`: organiza os dados de entrada e saída.
- `mapper`: realiza a conversão entre entidades e DTOs.

## 🔌 Endpoints da API

A API disponibiliza operações REST para gerenciamento dos dados.

| Recurso | Endpoint |
|---|---|
| Usuários | `/usuarios` |
| Locais | `/locais` |
| Favoritos | `/favoritos` |
| Especialidades | `/especialidades` |
| Serviços de saúde | `/servicos-saude` |
| Tipos de recursos | `/tipos-recursos` |
| Recursos dos locais | `/local-recursos` |
| Preferências de acessibilidade | `/preferencias-acessibilidade` |
| Relatos de acessibilidade | `/relatos-acessibilidade` |
| Serviço e especialidade | `/servico-especialidades` |

As operações disponíveis variam conforme o recurso, incluindo GET, POST, PUT e DELETE. A associação entre serviços e especialidades utiliza chave composta e não possui operação PUT implementada.

## ⚙️ Como executar o projeto

### 1. Pré-requisitos

Instale as seguintes ferramentas:

- Java JDK 21.
- Maven.
- Node.js e npm.
- Oracle Database 19c.
- Visual Studio Code ou IntelliJ IDEA.
- Android Studio ou Expo Go para executar o aplicativo.

### 2. Configuração do banco de dados

1. Inicie o Oracle Database 19c.
2. Abra o Oracle SQL Developer.
3. Conecte-se ao banco de dados.
4. Execute o script SQL disponibilizado no projeto.
5. Verifique se as tabelas e os registros foram criados corretamente.

### 3. Executando o back-end

1. Acesse a pasta do back-end.
2. Configure a conexão com o Oracle no arquivo `application.properties`.
3. Verifique usuário, senha, endereço e serviço do banco de dados.
4. Execute a aplicação Spring Boot pela classe `BmapApplication`.

O servidor será iniciado na porta 8080, caso não exista outra configuração.

### 4. Executando o front-end

1. Acesse a pasta `frontend`.
2. Instale as dependências:

```bash
npm install
```

3. Inicie o Expo:

```bash
npx expo start
```

4. Utilize o aplicativo Expo Go ou um emulador Android para executar a aplicação.

**Importante:** configure o endereço da API no front-end para apontar ao endereço de rede do computador que está executando o back-end, caso utilize um dispositivo físico.

## 📂 Estrutura do projeto

```text
BMap/
│
├── backend/
│   └── src/
│       └── main/
│           └── java/
│               └── br/com/bmap/
│                   ├── bo/
│                   ├── controller/
│                   ├── dao/
│                   ├── dto/
│                   ├── mapper/
│                   ├── model/
│                   └── BmapApplication.java
│
├── frontend/
│   ├── assets/
│   ├── src/
│   ├── app.json
│   └── package.json
│
├── database/
│   └── script.sql
│
└── README.md
```

*A estrutura apresentada é uma referência organizacional; os caminhos devem corresponder à estrutura efetiva do repositório.*

## 👥 Equipe de desenvolvimento

- **Jean Pierre Andrade Feltran** — RM: [566534]
- **Felipe** — RM: [563082]
- **Giovanni** — RM: [564014]

## 🔗 Links

- **Repositório GitHub:** [https://github.com/Jottta-Pe/BMap]

---

## 💜 Nosso propósito

O BMap acredita que a acessibilidade deve ser parte fundamental da mobilidade urbana.

Mais do que encontrar um endereço, queremos ajudar pessoas a encontrarem caminhos, oportunidades e autonomia.

**BMap — Inclusão em Movimento.**
