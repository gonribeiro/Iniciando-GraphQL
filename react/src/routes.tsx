import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Menu from './components/menu';
import Index from './pages/Index';
import Show from './pages/Show';
// import ApolloTest from './labs/App';

function Routes() {
    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/show" exact component={Show} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;