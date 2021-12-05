import React, { Component } from "react";
import Inputbar from "../components/Inputbar";
import Card from "../components/Card";
import "./App.css";
import Scroll from "../components/Scroll";
import { connect } from "react-redux";
import setSearchField from "../Action";

const mapStateToProps = (state) => {
  return { searchField: state.searchField };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

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

  render() {
    console.log("");

    const { CardData } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filterCard = CardData.filter((CardData) => {
      return CardData.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !CardData.length ? (
      <h1>Loading.....</h1>
    ) : (
      <div>
        <Inputbar searchChange={onSearchChange} />
        <Scroll>
          <Card CardData={filterCard} />
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
