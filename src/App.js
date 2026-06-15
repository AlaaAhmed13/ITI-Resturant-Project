import './component/menu.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Gallery from './pages/galleryPage';
import AboutUs from './pages/aboutUs';
import Reservation from './pages/reservation';
import Contact from './pages/ContactForm';
import Error from './component/Error';
import Menu from './pages/menu';
import Layout from './pages/layout';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Gallery" element={<Gallery />} />
            <Route path="AboutUs" element={<AboutUs />} />
            <Route path="Menu" element={<Menu />} />
            <Route path="Reservation" element={<Reservation />} />
            <Route path="Contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
