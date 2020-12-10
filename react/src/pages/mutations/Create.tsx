import { useMutation, useQuery } from '@apollo/client';
import { TODOS_OS_CLIENTES } from './../../graphql/queries/clientes';
import { CRIAR } from './../../graphql/mutations/clientes';

function Create() {
    const { loading, error, data, refetch } = useQuery(TODOS_OS_CLIENTES, {
            fetchPolicy: "network-only",
            notifyOnNetworkStatusChange: true,
        }
    );

    let input: any;
    const [Add, { loading: mutationLoading }] = useMutation(CRIAR);

    if (mutationLoading) return <p>Atualizando...</p>;
    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro :(</p>;

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