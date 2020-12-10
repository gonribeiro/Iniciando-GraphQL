import { useMutation, useQuery } from '@apollo/client';
import { TODOS_OS_CLIENTES } from './../../graphql/queries/clientes';
import { ATUALIZAR_COM_ERRO } from './../../graphql/mutations/clientes';

function RetornandoErros() {
    const { loading: queryLoading, data } = useQuery(TODOS_OS_CLIENTES);

    let input: any;
    const [Add, { loading: mutationLoading, error: mutationError }] = useMutation(ATUALIZAR_COM_ERRO,
        { errorPolicy: 'all' } // Exibir todos os erros
    );

    if (queryLoading) return <p>Carregando...</p>;

    return (
        <div>
            Documentação: https://www.apollographql.com/docs/react/data/mutations/#tracking-loading-and-error-states
            <br/>e https://www.apollographql.com/docs/react/data/error-handling/ <br/>

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

                {mutationLoading && <p>Carregando...</p>}
                {mutationError && <p>Erro :( Please try again</p>}
                <pre>
                    {mutationError?.graphQLErrors.map(({ message }, i) => (
                        <span key={i}>{message} - Veja console.log</span>
                    ))}
                </pre>
                {console.log(mutationError?.graphQLErrors)}
            </form>            
        </div>
    );
}

export default RetornandoErros;