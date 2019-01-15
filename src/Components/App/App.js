import React, { Component } from 'react'
import Navigation from '../Navigation/Navigation'
import Jumbo from '../Jumbo/Jumbo'
import Footer from '../Footer/Footer'

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Route exact path="/" component={Jumbo} />
          <Footer />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
