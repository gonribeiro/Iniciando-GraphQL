import { useQuery } from '@apollo/client';
import { Fragment } from 'react';
import { TODOS_OS_CLIENTES } from '../../graphql/queries/clientes';

function PoliticaBusca() {
    const { loading, error, data } = useQuery(TODOS_OS_CLIENTES, {
        fetchPolicy: "network-only" // consulta diretamente o servidor
    });
  
    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro :(</p>;

    return (
        <Fragment>
            Não consulta o cache, consulta somente o servidor. <br/>
            Documentação: https://www.apollographql.com/docs/react/data/queries/#setting-a-fetch-policy <br/>

            {data.clientes.map((item: any) => (
                <div key={item.id}>
                    <p>
                        {item.id}: {item.nome}
                    </p>
                </div>
            ))}
        </Fragment>
    )
}

export default PoliticaBusca;