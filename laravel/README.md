# Documentação:
- https://laravel.com/docs/
- https://lighthouse-php.com/master/getting-started/installation.html

# Comandos e alterações realizadas para a criação desse projeto de testes:
- Criar projeto na última versão do Laravel no repositório local:

``` 
$ composer create-project laravel/laravel . --prefer-dist 

$ composer require barryvdh/laravel-debugbar --dev
```

- Alterações no config/app.php 

``` 
// Altere para o bom funcionamento da migração

'timezone' => 'America/Sao_Paulo',
'locale' => 'pt_br',
'fallback_locale' => 'pt_BR',
'faker_locale' => 'pt_BR',
```

- Pacote de Enum para Laravel: https://github.com/BenSampo/laravel-enum

```
$ php artisan make:enum AmostraType
```

- Criar modelo com "migração (-m), fábrica (-f) e semeador (-s)":

``` 
$ php artisan make:model Cliente -m -f -s 
```

- Reconstrói e semeia o banco de dados: 

``` 
$ php artisan migrate:refresh --seed 
```

- Criar Resource API: 

``` 
$ php artisan make:resource v1/ClienteResource
```

- Criar Controller API: 

``` 
$ php artisan make:controller v1\ClienteApiController 
```

# Eloquent e Tinker

- Exemplo de consultas no Eloquent: 

``` 
$ php artisan tinker

// Este exemplo retorna as amostras que possuem o cliente 4
$ Cliente::find(4)->amostras;

// Este exemplo retorna o cliente que possui a amostra 4
$ Amostra::find(1)->cliente;

// Este exemplo retorna todos os clientes com todas as suas amostras
$ Cliente::with('amostras')->get()
```

# Teste Rest

- Criar e executar testes

```
// Criar teste
$ php artisan make:test ClienteRestTest // Já criados nesse projeto 

// Executar teste
$ artisan test
```

# GraphQL

- Pacote GraphQL para Laravel: https://lighthouse-php.com/
- Exemplo de consultas: Use graphql-playground, exemplo:
  - http://seu_host/graphql-playground
  - https://localhost/iniciando_laravel/graphql-playground

```
# Exemplos funcionais nesse projeto (lembre-se de ter feito a migração e preenchido o banco de dados)

# GET

{
  # Paginado
  clientesPaginate(first: 3) {
    data {
      id
      nome
    }
    paginatorInfo {
      currentPage
      lastPage
    }
  }
  # Show
  cliente(id: 1) {
    nome
    # Relacionamento
    amostras {
      cliente_id
      tipo_amostra
    }
  }
  # Index
  clientes {
    id
    nome
    nascimento
    documento
    updated_at
    amostras {
      cliente_id
      tipo_amostra
      created_at
    }
  }
  # Retorna todos incluindo excluídos (Soft Delete)
  { 
    clientes(trashed: WITH) {
      id
      nome
    }
  }
}
```

```
# POST

mutation {
  criarCliente(
    nome: "Fulano", 
    nascimento: "2020-01-01",
    documento: "010101"
  ) {
    id
    nome
    nascimento
    documento
  }
}
```

```
# UPDATE

mutation {
  atualizarCliente(
    id: "2", 
    nome: "Beltrano", 
    nascimento: "2020-02-02",
    documento: "020202"
  ) {
    id
    nome
    nascimento
    documento
  }
}
```

```
# Upsert - *atualize ou crie (se ele não existir)

mutation {
  upsertCliente(
    id: "10", 
    nome: "Beltrano", 
    nascimento: "2020-02-02",
    documento: "020202"
  ) {
    id
    nome
    nascimento
    documento
  }
}
```

```
# SOFT DELETE

mutation {
  desabilitarCliente(id: "1") {
    nome # Retorna o objeto excluído para última chance de examiná-lo
  }
}
```

```
# RESTORE SOFT DELETE

mutation {
  restaurarCliente(
    id: 1
  ) {
    id
    nome
  }
}
```

```
# FORCE DELETE

mutation {
  apagarCliente(id: 1) {
    id
    nome
  }
}
```

# Teste GraphQL

- Pacote de teste para GraphQL: https://github.com/marvinrabe/laravel-graphql-test

# Redis

```
$ composer require predis/predis // Já instalado neste projeto

.env:
CACHE_DRIVER=redis
SESSION_DRIVER=redis
```

```
Alguns comandos Redis:

$ redis-cli
$ keys *
$ mget [key]
$ flushall
```

# Banco de dados

- Modelagem: Para visualizar, use https://dbdiagram.io/d copiando e colando o código abaixo.

```
table cliente {
  id id [pk, not null]
  nome id [not null]
  documento id [not null]
  created_at timestamp
  update_at timestamp
  delete_at timestamp
}

table amostra {
  id id [pk, not null]
  cliente_id id [not null]
  tipo_amostra int [not null, enum: urina, sangue]
  created_at timestamp
  update_at timestamp
  delete_at timestamp
}

table analise_amostra {
  id id [pk, not null]
  amostra_id id [not null]
  tipoanalise_id id [not null]
  resultado boolean
  created_at timestamp
  update_at timestamp
  delete_at timestamp
}

table tipo_analise {
  id id [pk, not null]
  nome varchar(50) [not null]
  preco decimal [not null]
  created_at timestamp
  delete_at timestamp
}

table substancia {
  id id [pk, not null]
  Substancia varchar(255) [not null]
  created_at timestamp
  update_at timestamp
  delete_at timestamp
}

table substancia_analise {
  id id [pk, not null]
  tipoanalise_id id [not null]
  substancia_id id
}

Ref: "analise_amostra"."amostra_id" > "amostra"."id"

Ref: "amostra"."cliente_id" > "cliente"."id"

Ref: "tipo_analise"."id" - "analise_amostra"."tipoanalise_id"

Ref: "tipo_analise"."id" < "substancia_analise"."tipoanalise_id"

Ref: "substancia_analise"."substancia_id" - "substancia"."id"
```