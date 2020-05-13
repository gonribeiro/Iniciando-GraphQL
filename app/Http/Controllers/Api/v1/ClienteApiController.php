<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Cliente;
use App\Http\Resources\v1\ClienteResource;

class ClienteApiController extends Controller
{
    /**
     * Retorna um JSON com a lista de clientes.
     *
     * @return json
     */
    public function index()
    {
        // return ClienteResource::collection(Cliente::all());
        return Cliente::all();
    }

    /**
     * Retorna um JSON com as informações de um cliente.
     *
     * @param  \App\Cliente  $cliente
     * @return json
     */
    public function show(Cliente $cliente)
    {
        return new ClienteResource($cliente);
    }

    /**
     * Cria um novo cliente. 
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Cliente $cliente)
    {
        $cliente->make($request->all())->save();
        return response()->json($cliente, 201);
    }

    /**
     * Atualiza as informações do cliente.
     * 
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Cliente             $cliente
     * 
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Cliente $cliente)
    {
        $cliente->update($request->all());
        return response()->json($cliente, 200);
    }

    /**
     * Desabilita (Soft Delete) o cliente.
     * 
     * @param  int $id
     * 
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        $cliente = Cliente::find($id);

        if(!$cliente) {
            return response()->json([
                'message' => 'Cliente não encontrado',
            ], 404);
        }

        $cliente->delete();
        
        return response()->json([
            'message' => 'Cliente desabilitado'
        ], 204);
    }

    /**
     * Restaura cliente desabilitado.
     * 
     * @param  int $id
     * 
     * @return \Illuminate\Http\Response
     */
    public function restore(int $id)
    {
        $cliente = Cliente::withTrashed()->find($id);

        if(!$cliente) {
            return response()->json([
                'message' => 'Cliente não encontrado',
            ], 404);
        }

        $cliente->restore();

        return response()->json([
            'message' => 'Cliente restaurado'
        ], 200);
    }
}
