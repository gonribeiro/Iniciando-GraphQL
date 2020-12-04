<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Amostra;
use Faker\Generator as Faker;

$factory->define(Amostra::class, function (Faker $faker) {
    return [
        'cliente_id' => $faker->randomElement(App\Cliente::all()),
        'tipo_amostra' => \App\Enums\TipoAmostraEnum::getRandomValue(),
    ];
});
