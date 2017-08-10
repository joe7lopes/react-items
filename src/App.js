import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Items from './components/Items';
import ItemEditor from './components/ItemEditor';
import NavBar from './components/Navbar';
//import logo from './logo.svg';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      selectedItem: null
    }
  }

  componentDidMount(){

     
  }

  render() {
    const {selectedItem} = this.state;
    const items = [{
            id:1,
            name:"item1",
            address:"address1",
            comments:"comments1"
        },{
            id:2,
            name:"items2",
            address:"address2",
            comments:"comments2"
        }];

    
    return (
      
      <Router>
        <Switch>
          <PropsRoute path='/items' component={Items} items={items} />
          <PropsRoute path='/new-item' component={ItemEditor} />
        </Switch>
      </Router>
      
    );
  }
}

const renderMergedPropsWithHeader = (Component, props) => {
  return (
    <div>
      <NavBar/>
      <Component {... props}/>
   </div>
  );
}

const renderMergedProps = (Component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return renderMergedPropsWithHeader(Component, finalProps) ;
}

const PropsRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(Component, routeProps, rest);
    }}/>
  );
}

export default App;
