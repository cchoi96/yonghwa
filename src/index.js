import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';
import Flick from './Flick';
import Movie from './containers/Movie/Movie';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
    render () {
        console.log('Made by Chris Choi');
        return (
            <BrowserRouter>
                <Switch>
                    <Route path={'/movie/:id'} component={Movie} />
                    <Route path={'/'} component={Flick} />
                </Switch>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
