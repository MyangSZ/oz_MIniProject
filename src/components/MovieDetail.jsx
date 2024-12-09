import { useParams } from "react-router";
import movieinfo from "../data/movieDetailData.json";
import movielist from "../data/movieListData.json";
import styled from "styled-components";
import { useState } from "react";

function MovieDetail() {
  const { results } = movielist;
  const { movie_id } = useParams();
  const [movie] = useState(movieinfo);

  // const moviedetail = results.find((id) => id.id === Number(movie_id));
  // const { title, average, genres, overview } = moviedetail;
  return (
    <>
      <MovieInfo>
        <img
          className="img"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
        <p className="title">{movie.title}</p>
        <p className="average">{movie.vote_average}</p>
        <div className="genres">
          {movie.genres.map((genre) => (
            <span key={genre.id}>{genre.name}</span>
          ))}
        </div>
        <p className="overview">{movie.overview}</p>
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
    border-bottom: 1px solid gray;
  }

  .title,
  .average {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title {
    grid-area: title;
    font-size: 30px;
  }
  .average {
    grid-area: average;
  }
  .genres {
    grid-area: genres;
    font-size: 30px;
    padding-left: 10px;
  }
  .overview {
    grid-area: overview;
    color: gray;
    font-size: 20px;
    padding: 20px;
  }
`;

export default MovieDetail;
