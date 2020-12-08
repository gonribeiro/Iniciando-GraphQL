/**
 * https://www.apollographql.com/docs/react/data/queries/#executing-queries-manually
 */

import { Fragment } from 'react';
import { gql, useLazyQuery } from '@apollo/client';

function ConsultaManual() {
    const [Cliente, { loading, data }] = useLazyQuery(gql`
        query Cliente ($id: ID!) {
            cliente(id: $id) {
                id
                nome
            }
        }
    `);
  
    if (loading) return <p>Loading...</p>;

    console.log(data);

    return (
        <Fragment>
            Para melhor entendimento, consulte: <br/>
            https://www.apollographql.com/docs/react/data/queries/#executing-queries-manually <br/><br/>

            <button onClick={() => Cliente({ variables: { id: '1' } })}>
                Click me!
            </button>

            <br/><br/> {data ? data.cliente.id : ''}: {data ? data.cliente.nome: ''}
        </Fragment>
    );
}

export default ConsultaManual;