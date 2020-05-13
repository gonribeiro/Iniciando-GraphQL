<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Substancia extends Model
{
    use SoftDeletes;
    
    public function substancias()
    {
        return $this->belongsTo('App\Substancia');
    }
}
