import React from "react";
import "./App.css";
import News from "./News";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      keywords: "",
      news: []
    };
    this.handleKeyword = this.handleKeyword.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  handleKeyword(e) {
    this.setState({ keywords: e.target.value, isLoading: true });
    this.getEverythingNews(this.state.keywords).then(data =>this.setState({
      ...this.state,
      news: [...data.articles],
      isLoading: false
    })
      
    );
  }

  // api function
  getEverythingNews(keyword) {
    return fetch(
      `${process.env.API_PATH}/everything?q=${keyword}&apikey=${process.env.API_KEY}`
    )
      .then(res => res.json())
      .then(data => data);
  }

  componentDidMount() {
    this.getEverythingNews("cricket").then(data =>
      this.setState({
        ...this.state,
        news: [...data.articles],
        isLoading: false
      })
    );
  }

  handleForm(e) {
    this.setState({ ...this.state, isLoading: true });
    e.preventDefault();
  }

  renderNews() {
    const { news } = this.state;
    if (news.length) {
      return (
       <News  news={this.state.news}/>
          )    }
    return <p>No News Found!</p>;
  }

  render() {
    const { keywords, isLoading } = this.state;

    return (
      <div className="App-component">
        <div className="news-form">
          <h1>News Master</h1>

          <input
            type="search"
            value={keywords}
            onChange={this.handleKeyword}
            className="search-field"
          />
        </div>
        {isLoading ? <div className="lds-dual-ring"></div> : this.renderNews()}
      </div>
    );
  }
}

export default App;