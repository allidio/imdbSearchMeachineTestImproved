import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const param = useParams();
  const [detail, setDetail] = React.useState();
  React.useEffect(() => {
    axios.get(`https://www.omdbapi.com/?apikey=33b27cf1&i=${param.id}`).then(
      (response) => {
        setDetail(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <>
      {detail ? (
        <div id="movie_detail">
          <img
            src={detail.Poster}
            alt="poster"
            style={{
              width: "30%",
              height: "50%",
              marginRight: "15px"
            }}
          />
          <table>
            <tbody>
              <tr>
                <td>Title</td>
                <td>{detail.Title}</td>
              </tr>
              <tr>
                <td>Year</td>
                <td>{detail.Year}</td>
              </tr>
              <tr>
                <td>Rated</td>
                <td>{detail.Rated}</td>
              </tr>
              <tr>
                <td>Released</td>
                <td>{detail.Released}</td>
              </tr>
              <tr>
                <td>Runtime</td>
                <td>{detail.Runtime}</td>
              </tr>
              <tr>
                <td>Genre</td>
                <td>{detail.Genre}</td>
              </tr>
              <tr>
                <td>Director</td>
                <td>{detail.Director}</td>
              </tr>
              <tr>
                <td>Writer</td>
                <td>{detail.Writer}</td>
              </tr>
              <tr>
                <td>Actors</td>
                <td>{detail.Actors}</td>
              </tr>
              <tr>
                <td>Plot</td>
                <td>{detail.Plot}</td>
              </tr>
              <tr>
                <td>Language</td>
                <td>{detail.Language}</td>
              </tr>
              <tr>
                <td>Country</td>
                <td>{detail.Country}</td>
              </tr>
              <tr>
                <td>Awards</td>
                <td>{detail.Awards}</td>
              </tr>
              <tr>
                <td>Rating</td>
                <td>{detail.Ratings[0].Value}</td>
              </tr>
              <tr>
                <td>Source</td>
                <td>{detail.Ratings[0].Soucre}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <>...</>
      )}
    </>
  );
}
