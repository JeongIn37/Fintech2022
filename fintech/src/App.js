import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListComponent from "./components/ListComponent";
import Welcome from "./components/Welcome";
<<<<<<< HEAD
import AxiosTest from "./pages/AxiosTest";
=======
import AuthPage from "./pages/AuthPage";
import AuthResult from "./pages/AuthResult";
import AxiosTest from "./pages/AxiosTest";
import BalancePage from "./pages/BalancePage";
import MainPage from "./pages/MainPage";
import NewsApiPage from "./pages/NewsApiPage";
>>>>>>> 177c1848c52b1a56124aa85556d947b45d292e5c

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<ListComponent />}></Route>
      </Routes>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Welcome />}></Route>
      </Routes>
      <Routes>
        <Route path="/axiosTest" element={<AxiosTest />}></Route>
=======
        <Route path="/axiosTest" element={<AxiosTest />}></Route>
      </Routes>
      <Routes>
        <Route path="/news" element={<NewsApiPage />}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<AuthPage />}></Route>
      </Routes>
      <Routes>
        <Route path="/authResult" element={<AuthResult />}></Route>
      </Routes>
      <Routes>
        <Route path="/main" element={<MainPage />}></Route>
      </Routes>
      <Routes>
        <Route path="/balance" element={<BalancePage />}></Route>
>>>>>>> 177c1848c52b1a56124aa85556d947b45d292e5c
      </Routes>
    </BrowserRouter>
  );
}

export default App;