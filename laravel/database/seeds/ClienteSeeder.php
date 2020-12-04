<?php

use Illuminate\Database\Seeder;

class ClienteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $cliente = factory(App\Cliente::class, 5)->create();
        // $cliente = factory(App\Cliente::class, 1500)->create();
    }
}
