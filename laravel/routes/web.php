<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/myip', function () {
    return dd(Request::ip());
});

Route::get('/cliente', 'ClienteController@index');

Route::get('/setRedis', 'ClienteController@setRedis');

Route::get('/getRedis', 'ClienteController@getRedis');

Route::get('/setgetCache', 'ClienteController@setgetCache');