
Rest+TDD, Eloquent, Tinker, Factory, Migration, Seed,

- Criar projeto na última versão do Laravel no repositório local:

``` 
$ composer create-project laravel/laravel . --prefer-dist 
```

- Alterações no config/app.php 

``` 
// Altere para o bom funcionamento da migração

'timezone' => 'America/Sao_Paulo',
'locale' => 'pt_br',
'fallback_locale' => 'pt_BR',
'faker_locale' => 'pt_BR',
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

- Criar e executar testes

```
// Criar teste
$ php artisan make:test ClienteTest

// Executar teste
$ artisan test
```

- Modelagem do Banco de Dados: https://dbdiagram.io/d

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
  nome varchar(50)
  preco decimal
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