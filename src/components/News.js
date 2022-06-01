import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "../components/News.css"

export class News extends Component {
  render() {
    return (
      <div className="main">
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="cards">
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </div>
      </div>
    );
  }
}

export default News;
