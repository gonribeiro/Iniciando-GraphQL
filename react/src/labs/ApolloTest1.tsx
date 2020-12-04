import React, { Fragment, useEffect, useState } from 'react';

import { ApolloClient, InMemoryCache, useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
  
const client = new ApolloClient({
  uri: 'https://laravelgraphql.local/graphql',
  cache: new InMemoryCache()
});

// const EXCHANGE_RATES = gql`
//   {
//     clientesPaginate(first: 3) {
//       data {
//         id
//         nome
//       }
//       paginatorInfo {
//         currentPage
//         lastPage
//       }
//     }
//   }
// `;

function App() {
  // const { loading, error, data } = useQuery(EXCHANGE_RATES);
  const [resultado, setResultado] = useState([
    { id: '', nome: '' }
  ]);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  useEffect(() => {
    client
    .query({
      query: gql`
        {
          clientesPaginate(first: 3) {
            data {
              id
              nome
            }
            paginatorInfo {
              currentPage
              lastPage
            }
          }
        }
      `
    })
    .then(result => setResultado(result.data.clientesPaginate.data));
  }, []);

  return (
    <Fragment>
      {resultado.map((item: { id: React.ReactNode; nome: React.ReactNode; }, index: string | number | null | undefined) => {
        return (
          <Fragment key={index}>
            {item.id}: {item.nome} <br/>
          </Fragment>
        )
      })}
    </Fragment>
  );
}

export default App;