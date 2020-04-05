<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('products', function(){
    $products = \App\Product::all();
    return \App\Http\Resources\ProductResource::collection($products);
});

Route::get('products/{product}', function(\App\Product $product){
    return new \App\Http\Resources\ProductResource($product);
});