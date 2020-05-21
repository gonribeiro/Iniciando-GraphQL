<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Cliente;
use App\Amostra;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Cache;

class ClienteController extends Controller
{
    // https://medium.com/@mateusgalasso/trabalhando-com-cache-do-laravel-usando-observables-a606111f23c3

    /**
     * 
     */
    public function index()
    {
        return view('cliente', [
            'clientes' => Cliente::with('amostras')
                ->get(), 'amostras' => Amostra::count()
            ]
        );
    }

    /**
     * 
     */
    public function setRedis()
    {
        Redis::set('exemplo', json_encode([
                'first_name' => 'Alex', 
                'last_name' => 'Richards'
            ]), 60
        );

        Redis::set('cliente', json_encode(Cliente::with('amostras')->find(1)), 60);
        Redis::set('clientes', json_encode(Cliente::with('amostras')->get()), 60);
    }

    /**
     * 
     */
    public function getRedis()
    {
        return view('Redis', [
            'clientes' => json_decode(Redis::get('clientes')),
            'cliente' => json_decode(Redis::get('cliente'))
        ]);
    }

    /**
     * 
     */
    public function setgetCache()
    {
        $clientes = Cache::rememberForever('clientesCache', function () {
            return Cliente::with('amostras')->get();
        });

        return view('Redis', [
            'clientes' => $clientes
        ]);
    }
}
