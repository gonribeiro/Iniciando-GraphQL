<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\AnaliseAmostra;
use Faker\Generator as Faker;

$factory->define(AnaliseAmostra::class, function (Faker $faker) {
    return [
        'amostra_id' => $faker->randomElement(App\Amostra::all()),
        'tipoanalise_id' => $faker->randomElement(App\TipoAnalise::all()),
        'resultado' => $faker->boolean,
    ];
});
