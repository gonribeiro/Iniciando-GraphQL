import { Fragment } from 'react';
import { useQuery, NetworkStatus } from '@apollo/client';
import { TODOS_OS_CLIENTES } from '../../graphql/queries/clientes';

function Cache() {
    const { loading, error, data, refetch, networkStatus } = useQuery(TODOS_OS_CLIENTES, {
        pollInterval: 50000, // Atualiza o cache constantemente no tempo determinado em milessegundos
        notifyOnNetworkStatusChange: true, // Atualiza cache forçadamento quando chamado refetch()
    });
  
    if (networkStatus === NetworkStatus.refetch) return <p>Refetching!</p>; // Status do carregamento
    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro :(</p>;

    return (
        <Fragment>
            Documentação: https://www.apollographql.com/docs/react/data/queries/#caching-query-results <br/>

            {data.clientes.map((item: any) => (
                <div key={item.id}>
                    <p>
                        {item.id}: {item.nome}
                    </p>
                </div>
            ))}

            {/* Atualiza o cache quando houver determinada ação do usuário */}
            <button onClick={() => refetch()}>Atualizar Cache!</button>
        </Fragment>
    );
}

export default Cache;