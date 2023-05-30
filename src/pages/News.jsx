import React, { useState, useEffect } from "react";
import AllNews from "../components/AllNews";

const News = ({ category, country }) => {
	const [articles, setArticles] = useState([]);
	const [page, setPage] = useState(1);
	const [error, setError] = useState("");
	const [hasMore, setHasMore] = useState(true);
	const [totalResults, setTotalResults] = useState(0);
	const [totalPages, setTotalPages] = useState();
	const [search, setSearch] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [searchIn, setSearchIn] = useState("");
	const [sortBy, setSortBy] = useState("popularity");

	const apikey = import.meta.env.VITE_NEWS_API_KEY;
	let pagesize = 22;

	const fetchNews = async (url) => {
		let res = await fetch(url, {
			headers: {
				"X-Api-Key": apikey,
			},
			mode: "no-cors"
		}).catch((err) => setError(err));

		let data = res && (await res.json());
		data?.message ? setError(data.message) : null;
		data && setTotalPages(Math.ceil(data.totalResults / pagesize));
		//* Filter out the same news articles
		let parsedData = data?.articles.filter((data, i, self) => {
			return self.findIndex((news) => news.url === data.url);
		});

		if (!search) {
			parsedData &&
				setArticles((prev) => {
					//* Again filter out if previous and new articles are same
					return prev.length
						? prev.filter((data, i) => {
								return parsedData.findIndex((news) => news.url === data.url) === i;
						  })
						: [...parsedData];
				});
		} else setArticles(parsedData);

		data && setTotalResults(data.totalResults);
		hasMore && setHasMore(false);
	};

	useEffect(() => {
		//* Fetching News
		fetchNews(
			`https://newsapi.org/v2/top-headlines?country=${country}&category=${category.toLowerCase()}&page=${page}&pageSize=${pagesize}`
		);
	}, [hasMore]);

	useEffect(() => {
		if (search) {
			pagesize = 100;
			//* Fetching Searched News
			fetchNews(
				`https://newsapi.org/v2/everything?q=${searchTerm}&searchIn=${
					searchIn === "Search In" ? "" : searchIn
				}&sortBy=${
					sortBy === "Sort By" ? "" : sortBy
				}&page=${page}&pageSize=${pagesize}&language=en`
			);
			setSearch(false);
		}
	}, [search]);

	//* If country changes fetch news again related to the selected country
	useEffect(() => {
		setHasMore(true);
	}, [country]);
	return (
		<>
			<div className="container pt-2 mb-5 pb-5">
				<h2 className="text-center main-heading mb-3 mt-5" style={{ marginTop: "8rem" }}>
					News Monkey - Top Headlines of {category}
				</h2>

				<div className="input-group flex-nowrap mb-2">
					<button
						className="input-group-text btn btn-outline-danger"
						id="addon-wrapping"
						onClick={() => setSearch(true)}>
						<svg fill="#dc3545" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg>
					</button>
					<input
						type="text"
						className="form-control"
						placeholder="Search through thousands of articles"
						aria-label="Search"
						aria-describedby="addon-wrapping"
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<select
						className="form-select ms-2"
						aria-label="Sort By"
						value={searchIn}
						onChange={(e) => setSearchIn(e.target.value)}>
						<option>Search In</option>
						<option value="title">Title</option>
						<option value="description">Description</option>
						<option value="content">Content</option>
					</select>
					<select
						className="form-select ms-2"
						aria-label="Sort By"
						value={sortBy}
						onChange={(e) => setSortBy(e.target.value)}>
						<option defaultValue="popularity">Sort By</option>
						<option value="popularity">Popularity</option>
						<option value="publishedAt">PublishedAt</option>
						<option value="relevancy">Relevancy</option>
					</select>
				</div>
				<h6 className="text-end mb-5">Total Articles: {totalResults}</h6>
				<AllNews
					articles={articles}
					totalPages={totalPages}
					error={error}
					fetchNews={fetchNews}
					hasMore={hasMore}
					setHasMore={setHasMore}
					setPage={setPage}
				/>
			</div>
		</>
	);
};

export default News;
