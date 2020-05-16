<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Enums\TipoAmostraEnum;

class CreateAmostrasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('amostras', function (Blueprint $table) {
            $table->increments('id');
            $table->foreignId('cliente_id');
            $table->enum('tipo_amostra', TipoAmostraEnum::getValues());
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('amostras');
    }
}
