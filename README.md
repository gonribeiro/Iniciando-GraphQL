# Instalação
```
$ composer create-project --prefer-dist laravel/laravel . "6.8.*"
$ php artisan migrate
$ php artisan make:seed UsersTableSeeder
$ composer dump
Em UsersTableSeeder.php > dentro da função run > factory('App\User', 100)->create();
Descomentei $this->call(UsersTableSeeder::class); em DatabaseSeeder.php
$ php artisan db:seed
$ composer require rebing/graphql-laravel (https://github.com/rebing/graphql-laravel)
$ php artisan vendor:publish ---> 8 (Provider: Rebing\GraphQL\GraphQLServiceProvider)
```

# Iniciando
```
$ php artisan make:graphql:query UserQuery
$ php artisan make:graphql:type UserType
$ php artisan make:model -m Post
$ php artisan make:graphql:mutation CreatePostMutation
```

# Comandos e infos úteis
```
# Instalar extensão ChromeQl
$ php artisan serve
$ tinker

App\Post::create([
    'title' => 'Artigo 1',
    'active' => true,
    'user_id' => 1
]);
App\Post::create([
    'title' => 'Artigo 2',
    'active' => false,
    'user_id' => 2
]);
App\Post::create([
    'title' => 'Artigo 3',
    'active' => true,
    'user_id' => 3
]);
App\Post::create([
    'title' => 'Artigo 4',
    'active' => false,
    'user_id' => 4
]);
```

# Testes
```
A view bem vindo do laravel possui uma simulação do front trabalhando com o GraphQL.

Utilizei a extensão do Chrome para demais testes: 
ChromeiQL

Comandos durante os testes:

mutation insertPost($title: String!, $active: Boolean!, $user_id: Int!) {
  createPost(title: $title, active: $active, user_id: $user_id) {
    id
  }
}

#mutation insertPost {
#  createPost(title: "Artigo 5", active: true, user_id: 5) {
#    id
#  }
#}

#{
#	user_paginated(page: 1) {
#    current_page,
#    data {
#    	name,
#    	email,
#      posts {
#        title,
#        active
#      }
#    },
#    total,
#    per_page
#  },
#  posts {
#    data {
#      title,
#      active
#    }
#  }
#}

#{
#	users(paginate: 5, page: 2) {
#    id,
#    name,
#    email
#  }
#}

#{
#	users(paginate: 5) {
#    id,
#    name,
#    email
#  }
#}

#{
#	users(id: 5) {
#    id,
#    name,
#    email
#  }
#}

#{
#	users {
#    id,
#    name,
#    email
#  }
#}
```