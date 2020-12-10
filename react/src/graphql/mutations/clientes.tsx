import gql from 'graphql-tag';

export const CRIAR = gql`
    mutation Add($nome: String!) {
        criarCliente(
            nome: $nome, 
            nascimento: "2020-01-01",
            documento: "010101"
        ) {
            id
            nome
            nascimento
            documento
        }
    }
`;

export const ATUALIZAR = gql`
    mutation Update($nome: String!) {
        atualizarCliente(
            id: 2,
            nome: $nome, 
            nascimento: "2020-01-01",
            documento: "010101"
        ) {
            id
            nome
            nascimento
            documento
        }
    }
`;

export const ATUALIZAR_COM_ERRO = gql`
    mutation Update($nome: String!) {
        atualizarCliente(
            id: 100000,
            nome: $nome, 
            nascimento: "2020-01-01",
            documento: "010101"
        ) {
            id
            nome
            nascimento
            documento
        }
    }    
`;