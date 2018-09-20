import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

// Components
import Header from './Components/HeaderComponent/Header';
import Footer from './Components/FooterComponent/Footer';
import Homepage from './Components/Pages/HomePage';
import BucketList from './Components/Pages/BucketList';

// style sheets
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      
        <Header />

          <Route exact path='/' component={Homepage} />
          <Route exact path='/BucketList' component={BucketList} />

        <Footer />

      </div>
      </Router>
    );
  }
}

export default App;
