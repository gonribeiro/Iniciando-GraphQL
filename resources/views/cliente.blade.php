{{-- @dd($clientes) --}}

{{-- $clientes->nome --}}

{{ $clientes->count() }}
<br/>
{{ $amostras }}

<br><br>

@foreach ($clientes as $cliente)
    - {{ $cliente->nome }} <br/>
    @foreach ($cliente->amostras as $amostra)
        -- {{ $amostra->tipo_amostra }} <br/>
    @endforeach
    <br/>
@endforeach