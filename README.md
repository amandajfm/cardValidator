# Validador de cartão de crédito v.1.0.0

**Esta biblioteca se destina à validação de números de cartões de crédito.**
A versão atual é capaz de validar números de cartão de crédito de 16 dígitos, sendo possível inserir números sem espaço, com espaço ou com caracteres especiais, como ponto e traço.

## Como instalar:

```shell

$  npm install cardvalidator-am

```

## Como utilizar:

```node

> const validator = require("cardvalidator-am");
> validator.cardValidator("4539.4648.1428.2158")
> // returns "true"

```

## Roadmap oficial do projeto

#### versões 1.0.1 a 1.0.3
- Correções ortográficas e pequenas mudanças de nomes.

#### versão 1.0.0 (released)
- Funcionalidades: Validação de sequência numérica de cartão de crédito, incluindo ou não espaços e caracteres especiais como ponto e traço.