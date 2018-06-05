import React, { Component } from "react";
import ReactDom from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";

const API_KEY = "AIzaSyBFwF8wZP87EcdMoNb0Vy8a4nHRy1CmV5Y";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: "surf-boards" }, videos => {
      //this.setState({ videos: videos });
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

/*const App = () => {
  return <SearchBar />;
};*/

ReactDom.render(<App />, document.querySelector(".container"));
