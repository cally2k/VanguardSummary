import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import {funds} from "../funds";
import Nav from "../components/Nav.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      funds: funds,
      searchField: "",
    };
  }

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => this.setState({ funds: users }));
  // }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { funds, searchField } = this.state;
    const filteredFunds = funds.filter((fund) => {
      return fund.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !funds.length ? (
      <h1 className="tc">Loading...</h1>
    ) : (
      <div>
        <Nav></Nav>
        <h1 className="f1 tc">Vanguard Summary</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList funds={filteredFunds} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
