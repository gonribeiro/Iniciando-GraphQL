import { gql, useMutation, useQuery } from '@apollo/client';

function Update() {
    const { loading, error, data } = useQuery(
        gql`
            query getClientes {
                clientes {
                    id
                    nome
                }
            }
        `
    );

    let input: any;
    const [Add, { loading: mutationLoading }] = useMutation(
        gql`
            mutation Update($nome: String!) {
                atualizarCliente(
                    id: 2,
                    nome: $nome, 
                    nascimento: "2020-01-01",
                    documento: "010101"
                ) {
                    id
                    nome
                    nascimento
                    documento
                }
            }
        `
    );

    if (loading) return <p>Loading...</p>;
    if (mutationLoading) return <p>Atualizando...</p>; // Renderiza após atualização do cache
    if (error) return <p>Error :(</p>;

    return (
        <div>
            Para mais informações, consulte: <br/>
            https://www.apollographql.com/docs/react/data/mutations/#updating-a-single-existing-entity
            <br/><br/>
            {data.clientes.map((item: any) => (
                <div key={item.id}>
                    <p>
                        {item.id}: {item.nome}
                    </p>
                </div>
            ))}

            <form
                onSubmit={e => {
                    e.preventDefault();
                    Add({ variables: { nome: input.value } }); // Adiciona valor
                    input.value = ''; // Zera o campo
                }}
            >
                Id 2 : 
                <input
                    required
                    ref={node => {
                        input = node;
                    }}
                /> 
                <button type="submit">Atualizar nome</button> <br/><br/>
            </form>            
        </div>
    );
}

export default Update;