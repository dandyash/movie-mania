import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import axios_instance from '../API/axios';

const MoviesRow = ({ title, fetchAPI }) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            await axios_instance.get(fetchAPI)
                .then(response => {
                    setMovies(response.data.results);
                });
        }
        fetchData();
    }, [fetchAPI]);

    return (
        <div className='movie_row_main_container'>
            <div className='wrapper'>
                <div className='movie_row_container'>
                    <h1 className='movie_row_title'>{title}</h1>
                    <div className='movie_row_flex_container'>
                        {
                            movies.map(movie => <MovieCard data={movie} key={movie.id} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoviesRow