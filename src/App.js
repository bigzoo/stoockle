import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
      </div>
      <div className="search">
      <input type="Text" vname="" className="search-box" maxlength="25"/>
      </div>

	    <div className="btn-search">
	    	Stoockle Search
	    </div>

      </div>
    );
  }
}

export default App;
