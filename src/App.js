import React, { Component } from 'react';
import  classes from './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
      
    return (    
        <div className="container-fluid">
       
          <div className={classes.App}>      
             <Layout>
              <BurgerBuilder/>
             </Layout>
          </div>
    
        </div>
    );
  }
}

export default App;
