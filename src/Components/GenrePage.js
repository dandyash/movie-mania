import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios_instance from '../API/axios';
import API_LIST from './../API/requestAPIs';
import LoadingSpinner from './LoadingSpinner';
import MovieCard from './MovieCard';

const GenrePage = () => {
    const { id } = useParams();
    const genre = id.split("-");
    const genre_id = genre[0];
    const genre_name = genre[1];
    const [movies, setMovies] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [page, setPage] = useState(1);
    // const [totalPages, setTotalPages] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios_instance.get(API_LIST.fetchMovieByGenre + genre_id + "&page=" + page);
            if (response.status) {
                setMovies(response.data.results)
                // setTotalPages(response.data.total_pages);
                setTimeout(() => {
                    setIsLoaded(true);
                }, 800);
            }
        };
        setIsLoaded(false);
        window.scrollTo(0, 0);
        fetchData();
    }, [genre_id, page])
    return (
        <>
            {isLoaded ? "" : <LoadingSpinner />}
            <div div className='search_section' >
                <div className='wrapper'>
                    <h1 className='movie_row_title'>{genre_name ? genre_name : ""}</h1>
                    <div className='search_container_flex'>
                        {movies.map(data => <MovieCard data={data} key={data.id} />)}
                    </div>
                </div>
            </div>
            <div className='pagination_container'>
                <div className='wrapper'>
                    <div className='pagination_flex'>
                        <button onClick={() => { setPage(page - 1) }} className='red_btn' disabled={page === 1 ? true : false}>Prev</button>
                        <button onClick={() => { setPage(page + 1) }} className='red_btn'>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GenrePage