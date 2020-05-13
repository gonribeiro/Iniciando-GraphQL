<?php

use Illuminate\Database\Seeder;

class AmostraSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $amostra = factory(App\Amostra::class, 10)->create();
    }
}
