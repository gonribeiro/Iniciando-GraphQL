<?php

declare(strict_types=1);

namespace App\GraphQL\Queries;

use Closure;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Query;
use Rebing\GraphQL\Support\SelectFields;
use GraphQL;
use App\GraphQL\Types\UserType;
use App\User;

class UserPaginationQuery extends Query
{
    protected $attributes = [
        'name' => 'userPagination',
        'description' => 'Paginated List of Users'
    ];

    public function type(): Type
    {
        return GraphQL::paginate('user');
    }

    public function args(): array
    {
        return [
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

    public function resolve($root, $args, $context, SelectFields $fields, ResolveInfo $resolveInfo, Closure $getSelectFields)
    {
        $paginate = 15;
        if (isset($args['paginate'])) {
            $paginate = $args['paginate'];            
        }
        
        $page = 1;
        if (isset($args['page'])) {
            $page = $args['page'];
        }

        $with = $fields->getRelations();

        return User::with($with)->paginate($paginate, ['*'], 'page', $page);
        // return User::paginate();
    }
}
