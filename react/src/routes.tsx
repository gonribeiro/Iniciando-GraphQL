import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Menu from './components/menu';
import Index from './pages/consultas/Index';
import Show from './pages/consultas/Show';
import Cache from './pages/consultas/Cache';
import ConsultaManual from './pages/consultas/ConsultaManual';
import PoliticaBusca from './pages/consultas/PoliticaBusca';
import Create from './pages/mutacoes/Create';
import Update from './pages/mutacoes/Update';
import RetornandoErros from './pages/mutacoes/RetornandoErros';
// import ApolloTest from './labs/App';

function Routes() {
    return (
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
                <Route path="/retornando_erros" exact component={RetornandoErros} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;