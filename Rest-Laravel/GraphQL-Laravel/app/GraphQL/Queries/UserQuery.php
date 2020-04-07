<?php

declare(strict_types=1);

namespace App\GraphQL\Queries;

use Closure;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Query;
use Rebing\GraphQL\Support\SelectFields;
// Learning
use GraphQL;
use App\GraphQL\Types\UserType;
use App\User;

class UserQuery extends Query
{
    protected $attributes = [
        'name' => 'user',
        'description' => 'List of Users'
    ];

    public function type(): Type
    {
        return Type::listOf(GraphQL::type('user'));
        // return GraphQL::type('user');
    }

    public function args(): array
    {
        return [
            'id' => [
                'type' => Type::int(),
                'description' => 'Id do usuário'
            ],
            'paginate' => [
                'type' => Type::int(),
                'description' => 'Quantidade de registros'
            ],
            'page' => [
                'type' => Type::int(),
                'description' => 'Quantidade de registros'
            ],
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $resolveInfo, Closure $getSelectFields)
    {
        if (isset($args['id'])) {
            return User::where('id', $args['id'])->get();
        }

        if (isset($args['paginate'])) {
            $page = 1;
            if (isset($args['page'])) {
                $page = $args['page'];
            }
            // return User::paginate($args['paginate']);
            return User::paginate($args['paginate'], ['*'], 'page', $page);
        }

        return User::all();
        // return User::find(1);
    }
}
