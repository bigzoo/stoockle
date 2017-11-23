import React, {Component} from 'react';
import './App.css';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';
// import { ApolloClient } from 'apollo-client';
// import { HttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import gql from 'graphql-tag';

// const client = new ApolloClient({
//   link: new HttpLink({ uri: 'https://staackle.herokuapp.com/api/v1' }),
//   cache: new InMemoryCache()
// });
class App extends Component {
    doSearch() {
      var queryString = document.getElementById('Q').value;
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.open("POST", "https://staackle.herokuapp.com/api/v1");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onload = function () {
        var data = xhr.response.data.search;
        console.log(data);
        var element = $("#results");
        element.empty();
        for (var i=1; i < data.length; i++) {
            console.log(data[i]);
            $("<div />").html("<a target='_blank' href='"+data[i].link+"'>"+data[i].title+"</a><br>").appendTo(element);
        };
      }
      const query = `{
        search(query: "`+queryString+`")
          {
            id,
            title,
            tags,
            link,
            answer_count,
            last_activity_date,
            creation_date,
            score,
            owner_id,
            view_count
          }
      }`;
      xhr.send(JSON.stringify({
        query: query,
        variables: { queryString: queryString },
      }));
      // const result = client.query({ query: gql`
      //   {
      //     search(query: "ruby")
      //       {
      //         id,
      //         title,
      //         tags,
      //         link,
      //         answer_count,
      //         last_activity_date,
      //         creation_date,
      //         score,
      //         owner_id,
      //         view_count
      //       }
      //   }`,
      //   variables: {
      //     queryString: q
      //   }
      // })
      // .then(
      //   console.log
      // );
      // console.log(result)
    };
    handleKeyPress(e) {
      if (e.charCode == 13) {
        alert('Enter... (KeyPress, use charCode)');
      }
      if (e.keyCode == 13) {
        alert('Enter... (KeyDown, use keyCode)');
      }
    }
    render(){
      return (
        <div className = "App">
        <div id = "word">
        <span className = "spang"> S </span>
        <span className = "spang" > t </span>
        <span className = "spano" > o </span>
        <span className = "spano2" > o </span>
        <span className = "spang2" > c </span>
        <span className = "spang2" > k </span>
        <span className = "spanl" > l </span>
        <span className = "spane" > e </span>
        </div>
        <div className = "search">
        <input type = "Text" id = 'Q' className = "search-box" maxLength = "25"/>
        </div>
        <div className = "btn-search" onKeyPress={this.handleKeyPress} onClick = { this.doSearch } >Stoockle Search </div>
        <div id = "results">
        </div>
        </div>
      );
    }
  }
export default App;
