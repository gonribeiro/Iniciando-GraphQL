<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AnaliseAmostra extends Model
{
    use SoftDeletes;
    
    public function amostras()
    {
        return $this->hasOne('App\Amostra', 'id');
    }
    
    public function tipoAnalises()
    {
        return $this->hasOne('App\TipoAnalise', 'id');
    }
}
