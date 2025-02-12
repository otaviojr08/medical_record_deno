# CRUD Deno - Prontuário Médico

Trabalho prático da disciplina de Programação Web da Universidade Federal de Lavras (UFLA).

## Requisitos

#### Com Docker
1. Baixe o Docker na versão mais recente no seu computador.

#### Sem Docker:

1. Instale o Deno na versão mais recente em seu computador. [Link de download](https://deno.com/)

2. Caso use o VSCode, instale a extensão oficial do Deno.

## Executar

#### Com Docker

```sh
docker build -t deno-api:v0 .
```

```sh
docker run -p 8369:8369 deno-api:v0
```

O container estará sendo executado no endereço localhost:8369

#### Sem Docker

1. Clone o repositório 

```sh
git clone https://github.com/otaviojr08/medical_record_deno.git
cd medical_record_deno  
```

2. Execute o comando abaixo:
```sh
deno run -A --watch src/server.ts
```
