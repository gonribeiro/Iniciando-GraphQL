import { useQuery } from '@apollo/client';
import { Fragment } from 'react';
import { CLIENTE_E_RELACIONAMENTOS } from '../../graphql/queries/clientes';

function Show() {
    const { loading, error, data } = useQuery(CLIENTE_E_RELACIONAMENTOS);
  
    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro :(</p>;

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

export default Show;