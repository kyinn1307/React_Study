import { Route, Router, Routes } from "react-router";
import { MainPage } from "./pages/MainPage";
import { ScrollPage } from "./pages/ScrollPage";
import { WeatherPage } from "./pages/WeatherPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/scroll" element={<ScrollPage />}></Route>
        <Route path="/weather" element={<WeatherPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
