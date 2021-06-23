import React, { Component } from "react";
import "./App.css";
import { Cardlist } from "./Component/Card-list/card-list.component";
import { SearchBox } from "./Component/searchbox/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Manga: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((users) => this.setState({ Manga: users }));
  }

  handleChange = (e) => {
    this.setState({ searchfield: e.target.value });
  };

  render() {
    const { Manga, searchfield } = this.state;
    const filteredcats = Manga.filter((manga) =>
      manga.name.toLowerCase().includes(searchfield.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Catto Boxuu</h1>
        <SearchBox
          placeholder="search catto"
          handleChange={this.handleChange}
        />
        <Cardlist Manga={filteredcats} />
      </div>
    );
  }
}

export default App;
