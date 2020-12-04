<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            ClienteSeeder::class,
            AmostraSeeder::class,
            SubstanciaSeeder::class,
            TipoAnaliseSeeder::class,
            SubstanciaAnaliseSeeder::class,
            AnaliseAmostraSeeder::class,
        ]);
    }
}
