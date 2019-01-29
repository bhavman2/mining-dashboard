import React, { Component } from 'react'
import Navigation from '../Navigation/Navigation'
import Jumbo from '../Jumbo/Jumbo'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
import Auth from '../Auth/Auth';
import Callback from '../Callback/Callback';

import {
  Route
} from 'react-router-dom';

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

class App extends Component {

  componentDidMount() {
    const { renewSession } = auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    return (
      <div>
        <Route path="/" render={(props) => <Navigation auth={auth} {...props} />} />
        <Route path="/" component={Footer} />
        <Route exact path="/" component={Jumbo} />
        <Route exact path="/login" render={(props) => <Login auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} />
        }} />
      </div>

    );
  }
}

export default App;
