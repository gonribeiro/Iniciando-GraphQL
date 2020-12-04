import { gql, useQuery } from '@apollo/client';
import { Fragment } from 'react';

//#region Consultas
const SHOW_CLIENTE = gql`
    {
        cliente(id: 1) {
            id
            nome
            amostras { # Relacionamento
                cliente_id
                tipo_amostra
            }
        }
    }
`;
//#endregion

function Index() {
    const { loading, error, data } = useQuery(SHOW_CLIENTE);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <Fragment>
            {data.cliente.id}: {data.cliente.nome}

            {data.cliente.amostras.map((item: any) => (
                <div key={item.tipo_amostra}>
                    <p>
                        Tipo amostra: {item.tipo_amostra}
                    </p>
                </div>
            ))}
        </Fragment>
    ) 
}

export default Index;