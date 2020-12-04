<?php

namespace App\Http\Resources\v1;

use Illuminate\Http\Resources\Json\JsonResource;

class ClienteResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'            => $this->id,
            'nome'          => $this->nome,
            'documento'     => $this->documento,
            'amostras'      => AmostraResource::collection($this->amostras),
            'created_at'    => $this->created_at,
            'update_at'     => $this->update_at
        ];
    }
}
