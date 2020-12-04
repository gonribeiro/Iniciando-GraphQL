<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\SubstanciaAnalise;
use Faker\Generator as Faker;

$factory->define(SubstanciaAnalise::class, function (Faker $faker) {
    return [
        'tipoanalise_id' => $faker->randomElement(App\TipoAnalise::all()),
        'substancia_id' => $faker->randomElement(App\Substancia::all()),
    ];
});
