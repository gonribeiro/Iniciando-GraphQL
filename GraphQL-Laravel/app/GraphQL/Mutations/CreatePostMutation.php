<?php

declare(strict_types=1);

namespace App\GraphQL\Mutations;

use Closure;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Mutation;
use Rebing\GraphQL\Support\SelectFields;
use App\Post;
use GraphQL;

class CreatePostMutation extends Mutation
{
    protected $attributes = [
        'name' => 'createPost',
        'description' => 'A mutation'
    ];

    public function type(): Type
    {
        return GraphQL::type('post');
    }

    public function args(): array
    {
        return [
            'title' => [
                'type' => Type::nonNull(Type::string()),
            ],
            'active' => [
                'type' => Type::nonNull(Type::boolean()),
            ],
            'user_id' => [
                'type' => Type::nonNull(Type::int()),
            ],
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $resolveInfo, Closure $getSelectFields)
    {
        $post = Post::create([
            'title' => $args['title'],
            'active' => $args['active'],
            'user_id' => $args['user_id'],
        ]);

        return $post;
    }
}
