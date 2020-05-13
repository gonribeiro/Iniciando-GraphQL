<?php

use Illuminate\Database\Seeder;

class SubstanciaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $substancia = factory(App\Substancia::class, 100)->create();
    }
}
