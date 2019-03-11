import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./actions/authAction";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";
import Landing from "./component/layout/Landing";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import Dashboard from "./component/dashboard/Dashboard";
import CreateProfile from "./component/create-profile/CreateProfile";
import PrivateRoute from "./component/common/PrivateRoute";
import EditProfile from "./component/edit-profile/EditProfile";
import AddExperience from "./component/add-experience/AddExperience";
import AddEducations from "./component/add-education/AddEducations";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
  const decoded = jwt_decode(localStorage.token);
  store.dispatch(setCurrentUser(decoded));
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/create-profile"
                  component={CreateProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/edit-profile"
                  component={EditProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/add-experience"
                  component={AddExperience}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/add-education"
                  component={AddEducations}
                />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
