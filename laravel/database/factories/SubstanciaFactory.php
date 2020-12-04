<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Substancia;
use Faker\Generator as Faker;

$factory->define(Substancia::class, function (Faker $faker) {
    return [
        'substancia' => $faker->word
    ];
});
