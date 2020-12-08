import { gql, useMutation, useQuery, NetworkStatus } from '@apollo/client';

function RetornandoErros() {
    // Listar
    const { loading: queryLoading, error: queryError, data, refetch, networkStatus } = useQuery(
        gql`
            query getClientes {
                clientes {
                    id
                    nome
                }
            }
        `, {
            notifyOnNetworkStatusChange: true,
        }
    );

    // Criar
    let input: any;
    const [Add, { loading: mutationLoading, error: mutationError }] = useMutation(
        gql`
            mutation Update($nome: String!) {
                atualizarCliente(
                    id: 100000,
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

    if (networkStatus === NetworkStatus.refetch) return <p>Atualizando</p>; // Status do carregamento
    if (queryLoading) return <p>Loading...</p>;
    if (queryError) return <p>Error :(</p>;

    return (
        <div>
            Para mais informações, consulte: <br/>
            https://www.apollographql.com/docs/react/data/mutations/#tracking-loading-and-error-states
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
                Id 100000 (que não existe): 
                <input
                    required
                    ref={node => {
                        input = node;
                    }}
                /> 
                <button type="submit">Atualizar nome</button> <br/><br/>

                {mutationLoading && <p>Loading...</p>}
                {mutationError && <p>Error :( Please try again</p>}
            </form>            
            <button onClick={() => refetch()}>Atualizar</button>
        </div>
    );
}

export default RetornandoErros;