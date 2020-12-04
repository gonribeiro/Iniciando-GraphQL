<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Amostra extends Model
{
    use SoftDeletes;

    protected $table = 'amostras';

    protected $fillable = ['cliente_id'];
    
    public function cliente()
    {
        return $this->belongsTo('App\Cliente');
    }

    public function analiseAmostras()
    {
        return $this->hasMany('App\AnaliseAmostra');
    }
}
