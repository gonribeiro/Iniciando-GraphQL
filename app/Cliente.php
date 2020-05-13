<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cliente extends Model
{
    use SoftDeletes;

    protected $table = 'clientes';

    protected $fillable = ['nome', 'documento', 'nascimento'];

    public function amostras()
    {
        return $this->hasMany('App\Amostra');
    }
}
