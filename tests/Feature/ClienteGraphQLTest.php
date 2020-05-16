<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ClienteGraphQLTest extends TestCase
{    
    use RefreshDatabase;
    use DatabaseMigrations;

    public function test_rota_exibe_todos_os_clientes(): void
    {
        $this->seed(['ClienteSeeder']);

        $response = $this->query('clientes', ['id', 'nome'])
            ->assertSuccessful()
            ->assertJsonFragment([
                'id' => '1'
            ]);
    }

    public function test_rota_exibe_um_cliente(): void
    {
        $this->seed(['ClienteSeeder']);

        $response = $this->query('cliente(id: 1)', ['id', 'nome'])
            ->assertSuccessful()
            ->assertJsonFragment([
                'id' => '1'
            ]);
    }

    public function test_criar_cliente(): void
    {
        $this->seed(['ClienteSeeder']);

        $response = $this->mutation(
            'criarCliente', [
                'nome'          => 'Fulano',
                'nascimento'    => '2020-01-01',
                'documento'     => '0101'
            ], [
                'id', 
                'nome', 
                'nascimento', 
                'documento'
            ]
        );

        $response->assertJsonFragment([
            'nome' => 'Fulano'
        ]);
    }

    public function test_atualizar_cliente(): void
    {
        $this->seed(['ClienteSeeder']);

        $response = $this->mutation(
            'atualizarCliente', [
                'id'            => '1',
                'nome'          => 'Beltrano',
                'nascimento'    => '2020-01-01',
                'documento'     => '0101'
            ], [
                'id',
                'nome', 
                'nascimento', 
                'documento'
            ]
        );

        $response->assertJsonFragment([
            'nome' => 'Beltrano'
        ]);
    }

    public function test_upsert_cliente(): void
    {
        $this->seed(['ClienteSeeder']);

        $response = $this->mutation(
            'upsertCliente', [
                'id'            => '1',
                'nome'          => 'Ciclano',
                'nascimento'    => '2020-01-01',
                'documento'     => '0101'
            ], [
                'id',
                'nome', 
                'nascimento', 
                'documento'
            ]
        );

        $response->assertJsonFragment([
            'nome' => 'Ciclano'
        ]);
    }

    public function test_desabilitar_cliente(): void
    {
        $this->seed(['ClienteSeeder']);

        $response = $this->mutation(
            'desabilitarCliente(id: "1")', [
                'id'
            ]
        )/*->assertJsonFragment([
            'id' => '1'
        ])*/;

        $response = $this->query('cliente(id: 1)', ['id'])
            ->assertJsonMissing([
                'id' => '1'
            ]);
    }

    public function test_restaurar_cliente(): void
    {
        $this->seed(['ClienteSeeder']);

        $response = $this->mutation(
            'desabilitarCliente(id: "1")', [
                'id'
            ]
        )/*->assertJsonFragment([
            'id' => '1'
        ])*/;

        $response = $this->mutation(
            'restaurarCliente(id: "1")', [
                'id'
            ]
        );

        $response = $this->query('cliente(id: 1)', ['id'])
            ->assertJsonFragment([
                'id' => '1'
            ]);
    }

    public function test_apagar_cliente(): void
    {
        $this->seed(['ClienteSeeder']);

        $response = $this->mutation(
            'apagarCliente(id: "1")', [
                'id'
            ]
        )/*->assertJsonFragment([
            'id' => '1'
        ])*/;

        $response = $this->query('cliente(id: 1)', ['id'])
            ->assertJsonMissing([
                'id' => '1'
            ]);
    }
}
