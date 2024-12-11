import styled from "styled-components";
// import movielist from "../data/movieListData.json";
import { useNavigate } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";

function MovieCard() {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular?language=ko-KR",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzAzMGM2ZmVhNDNiMGQwMmQ3NDg4Nzc0Y2U1M2QxNiIsIm5iZiI6MTczMjg2NzY5OC4xNDcsInN1YiI6IjY3NDk3NjcyYWQ4YWYzMTY1MjAwMzQ0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uZawarxKunsulxbZpmwqxOjNYXo6L4yx7_EXBehjYRY",
    },
  };
  // 데이터 가져오기
  useEffect(() => {
    axios
      .request(options)
      .then((res) => setmovie(res.data.results))
      .catch((err) => console.error(err));
  }, []);

  // 상태관리. [영화 목록 데이터저장, 상태업데이트 함수]
  const [movie, setmovie] = useState([]);
  // 성인영화 필터링. adult속성이 false인 영화 필터링
  const filtermovie = movie.filter((moviecard) => !moviecard.adult);

  // const { results } = movielist;
  // 상세페이지 이동. useNavigate 사용해 상세페이지로 이동
  const navigate = useNavigate();
  return (
    <List>
      {/* 영화 목록 렌더링
      배열 순회하며 영화 데이터 렌더링
      id, title, poster_path, vote_average 추출*/}
      {filtermovie.map((item) => {
        const { id, title, poster_path, vote_average } = item;
        return (
          <>
            <div className="border rounded-[15px] shadow-[0_-1px_7px_0_gray] p-[10px] w-[320px] hover:scale-105 hover:duration-500">
              {/* 영화 포스터 . 클릭시 navigate 사용해 상세페이지로 이동 */}
              <MovieCarditem
                key={id}
                cardsrc={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                onClick={() => navigate(`/detail/${id}`)}
              ></MovieCarditem>
              {/* 영화 타이틀 */}
              <MovieTitle>{title}</MovieTitle>
              {/* 영화 평점 */}
              <MoveieAverage>평점 : {vote_average} </MoveieAverage>
            </div>
          </>
        );
      })}
    </List>
  );
}

// css
// 전체화면
const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;

// 포스터이미지
const MovieCarditem = styled.section`
  width: 300px;
  height: 500px;
  background-image: url(${(porps) => porps.cardsrc});
  background-repeat: no-repeat; // 이미지 반복x
  background-position: center center; // 이미지 가운데 정렬
  background-size: cover; // 사이즈에 맞게 축소 또는 확장하기
  border-radius: 15px;
  /* &:hover {
    transform: scale(1.05, 1.05);
    transition-duration: 0.5s;
  } */
`;

// 영화제목표시
const MovieTitle = styled.span`
  display: flex;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
`;
const MoveieAverage = styled.span`
  font-size: 20px;
  color: gray;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
`;
export default MovieCard;
