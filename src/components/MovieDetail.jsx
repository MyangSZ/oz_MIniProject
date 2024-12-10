import { useParams } from "react-router";
// import movieinfo from "../data/movieDetailData.json";
// import movielist from "../data/movieListData.json";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

function MovieDetail() {
  // axios
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzAzMGM2ZmVhNDNiMGQwMmQ3NDg4Nzc0Y2U1M2QxNiIsIm5iZiI6MTczMjg2NzY5OC4xNDcsInN1YiI6IjY3NDk3NjcyYWQ4YWYzMTY1MjAwMzQ0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uZawarxKunsulxbZpmwqxOjNYXo6L4yx7_EXBehjYRY",
    },
  };
  useEffect(() => {
    axios
      .request(options)
      .then((res) => setmovie(res.data.results))
      .catch((err) => console.error(err));
  }, []);

  // const { results } = movielist;
  const { movie_id } = useParams();
  const [movie, setmovie] = useState();

  const moviedetail = movie?.find((id) => id.id === Number(movie_id));
  // const { title, average, genres, overview } = moviedetail;
  return (
    <>
      <MovieInfo>
        <img
          className="img"
          src={`https://image.tmdb.org/t/p/w500${moviedetail?.poster_path}`}
        />
        <p className="title">{moviedetail?.title}</p>
        <p className="average">{moviedetail?.vote_average}</p>
        <div className="genres">
          {moviedetail?.genre_ids.map((genres) => (
            <span key={genres.id}>{genres}</span>
          ))}
        </div>
        <p className="overview">{moviedetail?.overview}</p>
      </MovieInfo>
    </>
  );
}

const MovieInfo = styled.div`
  width: 1000px;
  place-self: center;
  display: grid;
  grid-template-columns: 5fr 4fr 1fr;
  grid-template-rows: 1fr 1fr 3fr;
  grid-template-areas:
    "img title average"
    "img genres genres"
    "img overview overview";
  grid-gap: 1rem;
  grid-row-gap: 0.5rem;
  .img {
    grid-area: img;
    border-radius: 15px;
    margin: 20px;
    box-shadow: inset 0 -10px gray;
  }
  .title,
  .average {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title {
    grid-area: title;
    font-size: 40px;
    font-weight: 900;
    border-bottom: 1px solid gray;
  }
  .average {
    grid-area: average;
  }
  .genres {
    grid-area: genres;
    font-size: 30px;
    padding-left: 10px;
    place-self: center;
  }
  .overview {
    grid-area: overview;
    color: gray;
    font-size: 20px;
    padding: 20px;
  }
`;

export default MovieDetail;
