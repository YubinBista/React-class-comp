import React, { Component } from 'react';

 class SearchBar extends Component {
     
    state = {term: ''};

    
 
     onInputChange = (event)=> {
        this.setState({ term: event.target.value});
     };

     onFormSubmit = event=> {
         event.preventDefault();
     }

    render() {
        return (
          
            <div className="search-bar ui segment">
            <form 
               className="ui form">
                   <div className="field">
                       <label>Video Search</label>
                       <input type="text" 
                       value={this.state.term} 
                       onChange={this.onInputChange} />
                   </div>
               </form>
               <button className="ui button"  onSubmit={this.onFormSubmit}>
              Search
             </button>
            </div>
        )
    }
}

export default SearchBar;