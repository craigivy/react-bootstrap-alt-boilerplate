import React, {PropTypes, Component} from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import Home from './components/Home'
import Products from './components/Products'
import Projects from './components/Projects'

import App from './App';

export default class Root extends Component {
    static propTypes = {history: PropTypes.object.isRequired};

    render() {
        const { history } = this.props;

        return (
            <Router history={history}>
                <div className = 'container-fluid'>
                    <Route name='index' path='/' component={App}>
                        <IndexRoute component={Home} />
                        <Route name='home' path='home' component={Home} />
                        <Route name='products' path='products' component={Products} />
                        <Route name='projects' path='projects' component={Projects} />
                    </Route>
                </div>
            </Router>

        );
    }
}