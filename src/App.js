import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {lat: null};

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
      this.setState({
        lat: position.coords.latitude });
      },
        err =>console.log(err)
    );
  }
  render(){
    return(
    <div> latitude: {this.state.lat} </div>
    )
  };
};
  

export default App;
