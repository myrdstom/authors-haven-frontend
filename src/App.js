import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/combineStore'

import Header from './containers/Header';
import Footer from './components/Footer';
import GetAllArticlesView from './containers/GetAllArticlesView';
import LoginView from './containers/auth/LoginView';
import RegistrationView from './containers/auth/RegistrationView';

import NotFoundPage from './components/NotFoundPage';


function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={GetAllArticlesView} />
                    <Route exact path="/login" component={LoginView} />
                    <Route
                        exact
                        path="/register"
                        component={RegistrationView}
                    />
                    <Route component={NotFoundPage} />
                </Switch>
                <Footer />
            </Router>
        </Provider>
    );
}
export default App;
