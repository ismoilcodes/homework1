import About from "./Components/About";
import Home from "./Components/Home";
import Amaliyot2 from "./Components/Amaliyot2";
// import Todoapp from "./Components/Todoapp";
// import Uyishi1 from "./components/Uyishi1";
// import Amaliyot from "./components/Uyishi1";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>

        <nav>
          <Link to="/" className="text-blue-500">Bosh sahifa</Link>
          <Link to="/about" className="text-blue-500">Biz haqimizda</Link>
          <Link to="/amaliyot2" className="text-blue-500">Amaliyot2</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/amaliyot2" element={<Amaliyot2 />} />
          <Route path="*" element={<h1>404 - adashib ketdingiz</h1>} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}
// function App() {
//   return (
//     // <Uyishi1 />
//     // <Todoapp />
//     <About />,
//     <Home />
{/* <Amaliyot2 /> */ }

//   );
// }

export default App;