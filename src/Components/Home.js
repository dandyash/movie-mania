import React, { useEffect } from 'react'
import MovieCarousel from './MovieCarousel';
import MoviesRow from './MoviesRow'
import API_LIST from '../API/requestAPIs';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <MovieCarousel fetchAPI={API_LIST.fetchAllTrending} />
            <MoviesRow title="Trending Now" fetchAPI={API_LIST.fetchAllTrending} />
            <MoviesRow title="Popular Movies" fetchAPI={API_LIST.fetchPopularMovies} />
            <MoviesRow title="Top Rated Movies" fetchAPI={API_LIST.fetchTopRatedMovies} />
            <MoviesRow title="Popular Series" fetchAPI={API_LIST.fetchPopularTV} />
            <MoviesRow title="Top Rated Series" fetchAPI={API_LIST.fetchTopRatedTV} />
            <MoviesRow title="Upcoming Movies" fetchAPI={API_LIST.fetchUpcomingMovies} />
        </>
    )
}

export default Home