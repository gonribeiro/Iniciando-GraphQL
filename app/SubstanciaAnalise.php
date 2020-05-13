<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SubstanciaAnalise extends Model
{
    public $timestamps = false;

    public function tipoAnalises()
    {
        return $this->hasOne('App\TipoAnalise', 'id');
    }

    public function substancias()
    {
        return $this->hasOne('App\Substancia', 'id');
    }
}
