import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Landing from "./Layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import { Provider } from "react-redux";
import Store from "./store";
class App extends Component {
    render() {
        return (
            <Provider store={Store}>
                <Router>
                    <div className="App">
                        <Navbar />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                    </div>
                </Router>
            </Provider>
        );
    }
}
export default App;
