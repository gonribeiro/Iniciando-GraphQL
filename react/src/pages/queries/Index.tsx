import { useQuery } from '@apollo/client';
import { TODOS_OS_CLIENTES } from '../../graphql/queries/clientes';

function Index() {
    const { loading, error, data } = useQuery(TODOS_OS_CLIENTES);
  
    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro :(</p>;

    return data.clientes.map((item: any) => (
        <div key={item.id}>
            <p>
                {item.id}: {item.nome}
            </p>
        </div>
    ));
}

export default Index;