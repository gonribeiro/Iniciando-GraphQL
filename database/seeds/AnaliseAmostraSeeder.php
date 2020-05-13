<?php

use Illuminate\Database\Seeder;

class AnaliseAmostraSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $analiseAmostra = factory(App\AnaliseAmostra::class, 20)->create();
    }
}
