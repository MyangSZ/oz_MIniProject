import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import MovieCard from "./components/MovieCard";
import MovieDetail from "./components/MovieDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MovieCard />}></Route>
          <Route path="/detail/:movie_id" element={<MovieDetail />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
