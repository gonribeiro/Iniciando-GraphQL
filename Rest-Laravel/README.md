# Instalação
```
$ composer create-project laravel/laravel . --prefer-dist
$ php artisan make:model Product -m -f (migration e factory)
$ php artisan migrate 
$ php artisan make:seeder ProductsTableSeeder
$ php arisan db:seed
$ php artisan make:resource ProductResource
$ composer require tymon/jwt-auth:dev-develop#d4cf9fd2b98790712d3e6cd1094e5ff018431f19 - preferencialmente foi instalado o ultimo commit do jwt https://github.com/tymondesigns/jwt-auth
- config > auth > driver > 'jwt'
$ php artisan jwt:secret
$ php artisan make:seeder UsersTableSeeder
$ php artisan migrate:refresh --seed
- Model Users > class User extends Authenticatable implements JWTSubject
-- public function getJWTIdentifier() e public function getJWTCustomClaims()
```

# Teste
```
get localhost:8000/api/products
get localhost:8000/api/products/1
post localhost:8000/api/login

```