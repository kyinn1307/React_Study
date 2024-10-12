import { Route, Router, Routes } from "react-router";
import { MainPage } from "./pages/MainPage";
import { ScrollPage } from "./pages/ScrollPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/scroll" element={<ScrollPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
