import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import PageNotFound from './Components/PageNotFound';
import Header from './Components/Header';
import MoviePage from './Components/MoviePage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<MoviePage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
