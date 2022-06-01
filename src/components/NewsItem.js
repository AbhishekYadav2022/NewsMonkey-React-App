import React, { Component } from "react";
import "../components/NewsItem.css";

export class NewsItem extends Component {
  render() {
    return (
      <>
        <div className="newsItem">
          <div className="photo">Photo</div>
          <h2>This is the heading of the news.</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit, numquam, soluta aperiam enim autem officia et
            facere.
          </p>
          <a href="/"className="readMore">Read More</a>
        </div>
      </>
    );
  }
}

export default NewsItem;
