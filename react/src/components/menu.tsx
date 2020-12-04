import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <Fragment>
            <Link to="/">Index</Link> - <Link to="/show">Show</Link>
            <br/><br/><br/>
        </Fragment>
    )
};