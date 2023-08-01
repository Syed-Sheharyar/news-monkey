import React from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import Spinner from "./Spinner"
import NewsItem from "./NewsItem"

const AllNews = React.memo((props) => {
  const {
    articles,
    fetchNews,
    hasMore,
    error,
    totalPages,
    setHasMore,
    setPage,
  } = props
  const defaultImg =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+"
  return (
    <InfiniteScroll
      dataLength={articles?.length}
      next={fetchNews}
      hasMore={hasMore}
      loader={
        <div className="text-center">
          <Spinner />
        </div>
      }
      endMessage={
        <div className="text-center">
          {totalPages &&
            Array(totalPages)
              .fill()
              .map((p, i) => (
                <button
                  key={i}
                  className="btn btn-dark m-1"
                  onClick={(e) => {
                    setPage(+e.target.textContent)
                    setHasMore(true)
                  }}
                >
                  {++i}
                </button>
              ))}
        </div>
      }
    >
      <div className="container">
        <div className="text-center">{error.message}</div>
        <div className="row my-2 infinite-scroll-div">
          {articles?.map((news) => (
            <div
              className="col-md-4 my-3"
              key={news.url}
            >
              <NewsItem
                NewsUrl={news.url}
                title={news.title}
                description={news.description}
                ImageUrl={news.urlToImage ? defaultImg : news.urlToImage}
                author={news.author == null ? "Unknown" : news.author}
                date={news.pubishedAt}
                source={news.source.name ? news.source.name : "Unknown"}
              />
            </div>
          ))}
        </div>
      </div>
    </InfiniteScroll>
  )
})

export default AllNews
