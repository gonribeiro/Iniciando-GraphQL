import { useMutation, useQuery } from '@apollo/client';
import { TODOS_OS_CLIENTES } from './../../graphql/queries/clientes';
import { ATUALIZAR } from './../../graphql/mutations/clientes';

function Update() {
    const { loading, error, data } = useQuery(TODOS_OS_CLIENTES);

    let input: any;
    const [Add, { loading: mutationLoading }] = useMutation(ATUALIZAR);

    if (loading) return <p>Carregando...</p>;
    if (mutationLoading) return <p>Atualizando...</p>; // Renderiza após atualização do cache
    if (error) return <p>Erro :(</p>;

    return (
        <div>
            Documentação: https://www.apollographql.com/docs/react/data/mutations/#updating-a-single-existing-entity <br/>
            
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