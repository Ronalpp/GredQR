import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home.jsx"
import Contact from './Pages/Contact.jsx';
import Donation from './Pages/Donation.jsx';
import Generate from './Pages/Generate.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/donation' element={<Donation />} />
        <Route path='/generate' element={<Generate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
