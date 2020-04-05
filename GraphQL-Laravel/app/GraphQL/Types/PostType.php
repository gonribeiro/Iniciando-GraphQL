<?php

declare(strict_types=1);

namespace App\GraphQL\Types;

use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class PostType extends GraphQLType
{
    protected $attributes = [
        'name' => 'Post',
        'description' => 'Representa um Post'
    ];

    public function fields(): array
    {
        return [
            'id' => [
                'type' => Type::int(),
                'description' => 'Id do artigo'
            ],
            'title' => [
                'type' => Type::string(),
                'description' => 'Título do artigo'
            ],
            'active' => [
                'type' => Type::boolean(),
                'description' => 'O status ativado/desativado do artigo'
            ],
        ];
    }
}
