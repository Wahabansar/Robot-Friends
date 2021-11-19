import React, { Component } from "react";
import Inputbar from "../components/Inputbar";
import Card from "../components/Card";
import "./App.css";
import Scroll from "../components/Scroll";
class App extends Component {
  constructor() {
    super();
    this.state = {
      CardData: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
      response.json().then((user) => {
        this.setState({ CardData: user });
      });
    });
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { CardData, searchField } = this.state;
    const filterCard = CardData.filter((CardData) => {
      return CardData.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !CardData.length ? (
      <h1>Loading.....</h1>
    ) : (
      <div>
        <Inputbar searchChange={this.onSearchChange} />
        <Scroll>
          <Card CardData={filterCard} />
        </Scroll>
      </div>
    );
  }
}

export default App;
