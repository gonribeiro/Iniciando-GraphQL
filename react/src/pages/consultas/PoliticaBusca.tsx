import { gql, useQuery } from '@apollo/client';
import { Fragment } from 'react';

//#region Consultas
const INDEX = gql`
    {
        clientes {
            id
            nome
        }
    }
`;
//#endregion

function Index() {
    const { loading, error, data } = useQuery(INDEX, {
        fetchPolicy: "network-only" // consulta diretamente o servidor
    });
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <Fragment>
            Não consulta o cache, consulta somente o servidor. <br/><br/>
            Para melhor entendimento, consulte: <br/>
            https://www.apollographql.com/docs/react/data/queries/#setting-a-fetch-policy <br/><br/>

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

export default Index;