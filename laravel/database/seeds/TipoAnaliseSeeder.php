<?php

use Illuminate\Database\Seeder;

class TipoAnaliseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tipoAnalise = factory(App\TipoAnalise::class, 25)->create();
    }
}
