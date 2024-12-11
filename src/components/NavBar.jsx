import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import styled from "styled-components";

function NavBar() {
  //axios API요청 옵션
  //   const options = {
  //     method: "GET",
  //     url: "https://api.themoviedb.org/3/search/movie?include_adult=false&language=ko-KR&page=1",
  //     headers: {
  //       accept: "application/json",
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzAzMGM2ZmVhNDNiMGQwMmQ3NDg4Nzc0Y2U1M2QxNiIsIm5iZiI6MTczMjg2NzY5OC4xNDcsInN1YiI6IjY3NDk3NjcyYWQ4YWYzMTY1MjAwMzQ0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uZawarxKunsulxbZpmwqxOjNYXo6L4yx7_EXBehjYRY",
  //     },
  //   };
  //   // 데이터 가져오기
  //   useEffect(() => {
  //     axios
  //       .request(options)
  //       .then((res) => console.log(res.data.results))
  //       .catch((err) => console.error(err));
  //   }, []);

  const [InputSearch, setInputSearch] = useState();

  const fetchMovies = async (query) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie`,
        {
          params: {
            api_key: import.meta.env.VITE_API_KEY, // TMDB API 키 입력
            query: query, // 템플릿 리터럴을 사용하여 query
            include_adult: false,
            language: "en-US",
            page: 1,
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchMovies(InputSearch);

  return (
    <>
      <Nav>
        <Logo>Logo</Logo>
        <Link to="/"></Link>
        <div className="flex w-[800px] justify-center">
          <Input
            onChange={(e) => setInputSearch(e.target.value)}
            type="text"
            value={InputSearch}
            placeholder="검.색.하.소"
            className="text-center"
          />
          <buttom className="mt-[5px] bg-[white] text-black rounded-[0_50px_50px_0] w-[100px] text-center ml-[1px] pt-[3px]">
            검색 🔍
          </buttom>
        </div>
        <div className="flex justify-center items-center gap-[10px] mr-[20px]">
          <Button>로그인</Button>
          <Button>회원가입</Button>
        </div>
      </Nav>
    </>
  );
}

// 상단바 전체
const Nav = styled.div`
  width: 100vw;
  height: 90px;
  padding: 20px;
  background-color: black;
  color: white;
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 30px;
`;

// logo
const Logo = styled.section`
  font-size: 30px;
  display: flex;
  justify-content: flex-start;
  padding-left: 30px;
  align-items: center;
`;

// 검색 입력창
const Input = styled.input`
  width: 500px;
  height: 45px;
  border-radius: 50px 0 0 50px;
  margin-top: 5px;

  &::placeholder {
    color: rgb(255, 0, 0, 0.5);
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 1em;
    text-align: center;
  }
`;

const Button = styled.button`
  width: 80px;
  height: 40px;
  background-color: #ffe9ed;
  border-radius: 10px;
  color: black;
  font-size: 15px;
  font-weight: 700;
`;

export default NavBar;
