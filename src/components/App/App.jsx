import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from 'components/SharedLayout';

const About = lazy(() => import('../../pages/About'));
const Products = lazy(() => import('../../pages/Products'));
const Contacts = lazy(() => import('../../pages/Contacts'));

export default function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout screenWidth={screenWidth} />}>
        <Route index element={<About />} />
        <Route
          path="products"
          element={<Products screenWidth={screenWidth} />}
        />
        <Route
          path="contacts"
          element={<Contacts screenWidth={screenWidth} />}
        />
        <Route path="*" element={<About />} />
      </Route>
    </Routes>
  );
}
