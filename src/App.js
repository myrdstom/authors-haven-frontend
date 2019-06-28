import React from 'react';
import Header from './components/Header';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage';

function App() {
    return (
        <div>

            <Router>
                <Header />
                <Switch>
                    <Route component={NotFoundPage} />
                </Switch>
            </Router>
        </div>
    );
}
export default App;
