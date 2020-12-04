<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Amostra;
use App\Http\Resources\v1\AmostraResource;

class AmostraApiController extends Controller
{
    /**
     * Retorna um JSON com as informações de uma amostra.
     *
     * @param  \App\Amostra  $amostra
     * @return json
     */
    public function show(Amostra $amostra)
    {
        return new AmostraResource($amostra);
    }

    /**
     * Cria uma nova amostra. 
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Amostra $amostra)
    {
        $amostra->make($request->all())->save();
        return response()->json($amostra, 200);
    }

    /**
     * Atualiza as informações da amostra.
     * 
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Amostra             $amostra
     * 
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Amostra $amostra)
    {
        $amostra->update($request->all());
        return response()->json($amostra, 200);
    }

    /**
     * Desabilita (Soft Delete) a amostra.
     * 
     * @param  int $id
     * 
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        $amostra = Amostra::find($id);

        if(!$amostra) {
            return response()->json([
                'message' => 'Amostra não encontrado',
            ], 404);
        }

        $amostra->delete();
        return response()->json([
            'message' => 'Amostra desabilitado'
        ], 200);
    }
}
