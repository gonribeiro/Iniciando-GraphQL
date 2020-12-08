import { gql, useMutation, useQuery, NetworkStatus } from '@apollo/client';

function Create() {
    const { loading, error, data, refetch, networkStatus } = useQuery(
        gql`
            query getClientes {
                clientes {
                    id
                    nome
                }
            }
        `, {
            fetchPolicy: "network-only",
            notifyOnNetworkStatusChange: true,
        }
    );

    let input: any;
    const [Add, { loading: mutationLoading }] = useMutation(
        gql`
            mutation Add($nome: String!) {
                criarCliente(
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

    if (mutationLoading) return <p>Atualizando...</p>;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
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
                <input
                    ref={node => {
                        input = node;
                    }}
                />
                <button type="submit">Criar</button> <br/><br/>
            </form>            
            <button onClick={() => refetch()}>Atualizar</button>
        </div>
    );
}

export default Create;