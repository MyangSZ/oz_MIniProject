import styled from "styled-components";
import movielist from "../data/movieListData.json";

function MovieCard() {
  const { results } = movielist;
  return (
    <List>
      {results.map((item) => {
        const { id, title, poster_path, vote_average } = item;
        return (
          <>
            <div>
              <MovieCarditem
                key={id}
                cardsrc={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              ></MovieCarditem>
              <MovieTitle>{title}</MovieTitle>
              <MoveieAverage>{vote_average} </MoveieAverage>
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
`;

// 포스터이미지
const MovieCarditem = styled.section`
  width: 300px;
  height: 500px;
  background-image: url(${(porps) => porps.cardsrc});
  background-repeat: no-repeat; // 이미지 반복x
  background-position: center center; // 이미지 가운데 정렬
  background-size: cover; // 사이즈에 맞게 축소 또는 확장하기
`;

// 영화제목표시
const MovieTitle = styled.span`
  display: flex;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  font-size: 28px;
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
