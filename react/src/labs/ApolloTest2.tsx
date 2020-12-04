import React, { Fragment, useEffect, useState } from 'react';

import { gql } from '@apollo/client';

import client from './../services/api'

function App() {
  const [resultado, setResultado] = useState([
    { id: '', nome: '' }
  ]);

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
        {resultado.map((item: any, index: any) => {
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