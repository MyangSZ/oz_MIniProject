import { Link } from "react-router";
import styled from "styled-components";

function NavBar() {
  return (
    <>
      <Nav>
        <Logo>Logo</Logo>
        <Link to="/"></Link>
        <Input type="text" value="🔍" className="text-end pr-[20px]" />
        <Button>로그인</Button>
        <Button>회원가입</Button>
      </Nav>
    </>
  );
}

// 상단바 전체
const Nav = styled.div`
  width: 100vw;
  height: 80px;
  padding: 20px;
  background-color: black;
  color: white;
  display: flex;
  font-size: 20px;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 30px;
`;

// logo
const Logo = styled.section`
  font-size: 30px;
  padding-left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 검색 입력창
const Input = styled.input`
  width: 800px;
  height: 35px;
  border-radius: 50px;
  margin-top: 5px;
`;

const Button = styled.button`
  width: 80px;
  background-color: #ffe9ed;
  border-radius: 10px;
  color: black;
  font-size: 15px;
  font-weight: 700;
`;
export default NavBar;
