/**
 * Entenda cache no apollo
 * https://www.apollographql.com/docs/react/data/queries/#caching-query-results
 */

import { Fragment } from 'react';
import { gql, useQuery, NetworkStatus } from '@apollo/client';

//#region Consultas
const INDEX = gql`
    {
        clientes {
            id
            nome
            nascimento
            documento
            updated_at
            amostras {
                cliente_id
                tipo_amostra
                created_at
            }
        }
    }
`;
//#endregion

function Cache() {
    const { loading, error, data, refetch, networkStatus } = useQuery(INDEX, {
        pollInterval: 50000, // Atualiza o cache constantemente no tempo determinado em milessegundos
        notifyOnNetworkStatusChange: true, // Atualiza cache forçadamento quando chamado refetch()
    });
  
    if (networkStatus === NetworkStatus.refetch) return <p>Refetching!</p>; // Status do carregamento
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <Fragment>
            Para melhor entendimento, consulte: <br/>
            https://www.apollographql.com/docs/react/data/queries/#caching-query-results <br/><br/>

            {data.clientes.map((item: any) => (
                <div key={item.id}>
                    <p>
                        {item.id}: {item.nome}
                    </p>
                </div>
            ))}

            {/* Atualiza o cache quando houver determinada ação do usuário */}
            <button onClick={() => refetch()}>Refetch!</button>
        </Fragment>
    );
}

export default Cache;