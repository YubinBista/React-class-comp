import React, {Component} from 'react';
import SearchBar from './components/SearchBar';
import youtube from './apis/youtube';
import './App.css';

class App extends Component  {
  onTermSubmit =(term)=> {
   youtube.get('/search', {
     params: {
       q: term
     }
   });
  };

  render(){
  return (
    <div className="ui container">
      <SearchBar onFormSubmit={this.onTermSubmit} />
    </div>
  )
  }
}
   

export default App;
