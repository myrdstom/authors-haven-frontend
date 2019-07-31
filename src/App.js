import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/combineStore'

import Header from './components/Header';
import Footer from './components/Footer';
import DashboardView from './components/articles/dashboard/container/DashboardView';
import LoginView from './components/auth/container/LoginView';
import RegistrationView from './components/auth/container/RegistrationView';

import NotFoundPage from './components/NotFoundPage';


function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={DashboardView} />
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
