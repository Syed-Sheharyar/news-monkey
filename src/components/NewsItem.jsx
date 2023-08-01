import React from "react"
import { Link } from "react-router-dom"

const NewsItem = (props) => {
  const { title, description, ImageUrl, NewsUrl, author, date, source } = props
  return (
    <div className="card">
      <small className="position-absolute top-0 end-0 translate-middle rounded bg-danger text-light form-control-sm shadow">
        {source}
      </small>
      <img
        src={ImageUrl}
        className="card-img-top"
        alt={title}
        style={{ height: "12rem" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <p className="card-text">
          <small className="text-muted">
            By {author} on {date}
          </small>
        </p>
        <Link
          to={NewsUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-danger btn-sm"
        >
          Read More...
        </Link>
      </div>
    </div>
  )
}

export default NewsItem
