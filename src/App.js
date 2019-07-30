
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {setCurrentUser} from "./redux/actions/auth/auth";
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './redux/store/combineStore';

import Header from './components/Header';
import Footer from './components/Footer';
import GetAllArticlesView from './components/articles/getAllArticles/container/GetAllArticlesView';
import LoginView from './components/auth/container/LoginView';
import RegistrationView from './components/auth/container/RegistrationView';
import NotFoundPage from './components/NotFoundPage';

// Check for token on every page
if(localStorage.jwtToken){
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded))
}


function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <ToastContainer autoClose={3000}/>
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
