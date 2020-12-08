import { gql, useQuery } from '@apollo/client';

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

function Index() {
    const { loading, error, data } = useQuery(INDEX);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.clientes.map((item: any) => (
        <div key={item.id}>
            <p>
                {item.id}: {item.nome}
            </p>
        </div>
    ));
}

export default Index;