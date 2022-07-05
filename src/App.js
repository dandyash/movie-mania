import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import PageNotFound from './Components/PageNotFound';
import Header from './Components/Header';
import MoviePage from './Components/MoviePage';
import TvPage from './Components/TvPage';
import Footer from './Components/Footer';
import SearchPage from './Components/SearchPage';
import GenrePage from './Components/GenrePage';
import CollectionPage from './Components/CollectionPage';
import AllSeasonsPage from './Components/AllSeasonsPage';
import SeasonPage from './Components/SeasonPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<MoviePage />} />
        <Route path='/tv/:id' element={<TvPage />} />
        <Route path='/genre/:id' element={<GenrePage />} />
        <Route path='/collection/:id' element={<CollectionPage />} />
        <Route path='/tv/:id/seasons' element={<AllSeasonsPage />} />
        <Route path='/tv/:tvId/season/:seasonId' element={<SeasonPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
