import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <Fragment>
            Consultas: <br/>
            <Link to="/">Index</Link> - <Link to="/show">Show</Link> - <Link to="/cache">Cache</Link> - <Link to="/consulta_manual">Consulta Manual</Link> - <Link to="/politica_busca">Politica de Busca</Link>

            <br/><br/> Mutações <br/>
            <Link to="/create">Create</Link> - <Link to="/update">Update</Link> - <Link to="/retornando_erros">Retornando Erros</Link>

            <br/><br/> Veja também: <a href="https://www.apollographql.com/docs/react/data/subscriptions/" target="_blank" rel="noreferrer">Assinaturas</a> - <a href="https://www.apollographql.com/docs/react/data/fragments/" target="_blank" rel="noreferrer"> Fragmentos</a>
            <br/><br/><br/>
        </Fragment>
    )
};