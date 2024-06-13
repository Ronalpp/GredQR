import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home.jsx";
import Donation from './Pages/Donation.jsx';
import Generate from './Pages/Generate.jsx';
import NotFound from "./Pages/Notfound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
