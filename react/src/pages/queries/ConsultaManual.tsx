import { Fragment } from 'react';
import { useLazyQuery } from '@apollo/client';
import { CONSULTA_MANUAL } from '../../graphql/queries/clientes';

function ConsultaManual() {
    const [Cliente, { loading, data }] = useLazyQuery(CONSULTA_MANUAL);
  
    if (loading) return <p>Loading...</p>;

    return (
        <Fragment>
            Documentação: https://www.apollographql.com/docs/react/data/queries/#executing-queries-manually <br/><br/>

            <button onClick={() => Cliente({ variables: { id: '1' } })}>
                Pesquisar usuário ID 1
            </button>

            <br/><br/> {data ? data.cliente.id : ''}: {data ? data.cliente.nome: ''}
        </Fragment>
    );
}

export default ConsultaManual;