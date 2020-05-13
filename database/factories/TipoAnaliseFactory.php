<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\TipoAnalise;
use Faker\Generator as Faker;

$factory->define(TipoAnalise::class, function (Faker $faker) {
    return [
        'nome' => $faker->name,
        'preco' => $faker->randomNumber(2),
    ];
});
