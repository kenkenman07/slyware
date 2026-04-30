import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page1 from "./pages/Page1";
import Start from "./pages/Start";
import Correct from "./pages/Correct";
import Incorrect from "./pages/Incorrect";
import Ad from "./pages/Ad";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/1" element={<Page1 />} />
        <Route path="correct" element={<Correct />} />
        <Route path="in" element={<Incorrect />} />
        <Route path="ad" element={<Ad />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
