import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';
import YonghwaHome from './YonghwaHome';
import Movie from './containers/Movie/Movie';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
    render () {
        console.log('Made by Chris Choi');
        return (
            <BrowserRouter>
                <Switch>
                    <Route path={'/movie/:id'} component={Movie} />
                    <Route path={'/'} component={YonghwaHome} />
                </Switch>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
