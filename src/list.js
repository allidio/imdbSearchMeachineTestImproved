import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import searchIcon from "./resources/icons/searchicon.png";
export default function List() {
  const [movies, setMovies] = React.useState(null);
  const [search, setSearch] = React.useState();
  const [page, setPage] = React.useState(1);
  const [totalResults, settotalResults] = React.useState(0);
  const [disabled, setDisabled] = React.useState(false);
  React.useEffect(() => {
    if (search) {
      console.log(page);
      setDisabled(true);
      axios
        .get(
          `https://www.omdbapi.com/?apikey=33b27cf1&s=${search}&page=${page}`
        )
        .then(
          (response) => {
            settotalResults(response.data.totalResults);
            setMovies(response.data.Search);
            setDisabled(false);
          },
          (error) => {
            console.log(error);
            setDisabled(false);
            setMovies(null);
          }
        );
    }
  }, [search, page]);

  const handleSearchChange = (e) => {
    setPage(1);
    setSearch(e.target.value);
  };

  const handlePrev = (e) => {
    setPage(page - 1);
  };

  const handleNext = (e) => {
    setPage(page + 1);
  };
  return (
    <div>
      <input
        type="text"
        id="search_input"
        onChange={handleSearchChange}
        placeholder="Search for movies.."
        style={{ backgroundImage: "url(" + searchIcon + ")" }}
      />
      {movies && (
        <ul id="movie_list">
          {movies.map((movie) => (
            <>
              <li key={movie.imdbID}>
                <Link to={`/detail/${movie.imdbID}`}>
                  <strong>{movie.Title}</strong>({movie.Year})
                </Link>
              </li>
            </>
          ))}
        </ul>
      )}
      <div className="page_buttons">
        {page > 1 && (
          <button
            disabled={disabled}
            onClick={handlePrev}
            className="previous round"
          >
            &#8249;
          </button>
        )}
        {page * 10 < totalResults && (
          <button
            disabled={disabled}
            onClick={handleNext}
            className="next round"
          >
            &#8250;
          </button>
        )}
      </div>
    </div>
  );
}
