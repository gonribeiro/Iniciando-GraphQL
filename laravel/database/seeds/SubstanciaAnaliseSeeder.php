<?php

use Illuminate\Database\Seeder;

class SubstanciaAnaliseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $substanciaAnalise = factory(App\SubstanciaAnalise::class, 20)->create();
    }
}
