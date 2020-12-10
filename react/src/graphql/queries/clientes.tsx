import gql from 'graphql-tag';

export const TODOS_OS_CLIENTES = gql`
    query clientes {
        clientes {
            id
            nome
        }
    }
`;

export const CLIENTE_E_RELACIONAMENTOS = gql`
    query cliente {
        cliente(id: 1) {
            id
            nome
            amostras { # Relacionamento
                tipo_amostra
            }
        }
    }
`;

export const CONSULTA_MANUAL = gql`
    query Cliente ($id: ID!) {
        cliente(id: $id) {
            id
            nome
        }
    }
`;