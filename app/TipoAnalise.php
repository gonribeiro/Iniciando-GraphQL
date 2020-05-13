<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TipoAnalise extends Model
{
    use SoftDeletes;
    
    public function analiseAmostras()
    {
        return $this->belongsTo('App\AnaliseAmostra');
    }
}
