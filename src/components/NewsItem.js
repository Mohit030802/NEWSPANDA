import React from "react";

const NewsItem =(props)=> {
  
    let { title, description, imageUrl, newsUrl, author, date } = props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imageUrl ? "https://picsum.photos/seed/picsum/200/140" : imageUrl
            }
            className="card-img-top"
          />

          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-info btn-sm">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
