import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from 'components/SharedLayout';

const About = lazy(() => import('../../pages/About'));
const Gallery = lazy(() => import('../../pages/Gallery'));
const Contacts = lazy(() => import('../../pages/Contacts'));
// const Cast = lazy(() => import('components/Cast'));
// const Reviews = lazy(() => import('components/Reviews'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contacts" element={<Contacts />} />
        {/* <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route> */}
        <Route path="*" element={<About />} />
      </Route>
    </Routes>
  );
}
