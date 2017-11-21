import React, { Component } from 'react';
import './App.css';
const { createApolloFetch } = require('apollo-fetch');

class App extends Component {
  doSearch(){
    var q = document.getElementById('Q').value;
    const fetch = createApolloFetch({
      uri: 'https://staackle.herokuapp.com/api/v1',
    });

    fetch({
      query: `
        search(query: `+q+`) {
          title,link,tags,score
        }`,

    }).then(res => {
      console.log(res.data);
    });
      };
//   {
//   search(query: "ubuntu") {
//     title,link,tags,score
//   }
// }
  render() {
    return (
      <div className="App">
      <div id="word">
      <span className="spang">S</span>
      <span className="spang">t</span>
      <span className="spano">o</span>
      <span className="spano2">o</span>
      <span className="spang2">c</span>
      <span className="spang2">k</span>
      <span className="spanl">l</span>
      <span className="spane">e</span>
      <span className="sorry">
      (Wasnt able to get this to work yet. Will work on it later.
      Backend Api is working well though.)
      </span>
      </div>
      <div className="search">
      <input type="Text" id='Q' className="search-box" maxLength="25"/>
      </div>

	    <div className="btn-search" onClick={this.doSearch}>
	    	Stoockle Search
	    </div>

      </div>
    );
  }
}

export default App;
