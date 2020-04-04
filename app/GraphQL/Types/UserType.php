<?php

declare(strict_types=1);

// Learning
namespace App\GraphQL\Types;
use GraphQL\Type\Definition\Type;
use GraphQL;
use App\User;

use Rebing\GraphQL\Support\Type as GraphQLType;

class UserType extends GraphQLType
{
    protected $attributes = [
        'name' => 'UserType',
        'description' => 'A type for Users',
        'model' => User::class
    ];

    public function fields(): array
    {
        return [
            'id' => [
                // 'type' => Type::int(),
                'type' => Type::nonNull(Type::int()),
                'description' => 'Id do usuário'
            ],
            'name' => [
                'type' => Type::string(),
                'description' => 'Nome do usuário'
            ],
            'email' => [
                'type' => Type::string(),
                'description' => 'Email do usuário'
            ],
            'posts' => [
                'type' => Type::listOf(GraphQL::type('post')),
                'description' => 'Lista de posts do usuario',
                'query' => function (array $args, $query) {
                    return $query->where('posts.active', true);
                }
            ],
        ];
    }
}
