import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page1 from "./pages/Page1";
import Start from "./pages/Start";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/1" element={<Page1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
