import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Menu from './components/menu';
import Index from './pages/queries/Index';
import Show from './pages/queries/Show';
import Cache from './pages/queries/Cache';
import ConsultaManual from './pages/queries/ConsultaManual';
import PoliticaBusca from './pages/queries/PoliticaBusca';
import Create from './pages/mutations/Create';
import Update from './pages/mutations/Update';
import Erros from './pages/mutations/Erros';
// import ApolloTest from './labs/App';

function Routes() {
    return (
        <pre>
            <BrowserRouter>
                <Menu />
                <Switch>
                    <Route path="/" exact component={Index} />
                    <Route path="/show" exact component={Show} />
                    <Route path="/cache" exact component={Cache} />
                    <Route path="/consulta_manual" exact component={ConsultaManual} />
                    <Route path="/politica_busca" exact component={PoliticaBusca} />
                    <Route path="/create" exact component={Create} />
                    <Route path="/update" exact component={Update} />
                    <Route path="/erros" exact component={Erros} />
                </Switch>
            </BrowserRouter>
        </pre>
    );
}

export default Routes;