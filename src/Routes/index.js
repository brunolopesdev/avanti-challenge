import { Route, Switch } from 'react-router-dom';
import { Cart } from "../pages/Cart"
import { Home } from '../pages/Home';

const Routes = () => {

    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cart" exact component={Cart} />
        </Switch>
    )
}

export default Routes