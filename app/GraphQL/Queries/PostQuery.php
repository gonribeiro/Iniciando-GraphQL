<?php

declare(strict_types=1);

namespace App\GraphQL\Queries;

use Closure;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Query;
use Rebing\GraphQL\Support\SelectFields;
use GraphQL;
use App\Post;

class PostQuery extends Query
{
    protected $attributes = [
        'name' => 'post',
        'description' => 'A query'
    ];

    public function type(): Type
    {
        return GraphQL::paginate('post');
    }

    public function args(): array
    {
        return [

        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $resolveInfo, Closure $getSelectFields)
    {
        return Post::where('active', true)->paginate();
    }
}
