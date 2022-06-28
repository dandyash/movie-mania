import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios_instance from '../API/axios';
import API_LIST, { API_KEY } from '../API/requestAPIs';
import LoadingSpinner from './LoadingSpinner';
import { Link } from 'react-router-dom';
// import YouTube from 'react-youtube';

const MoviePage = () => {
    const { id } = useParams();

    const [isLoaded, setIsLoaded] = useState(false);

    const API_URL = "/movie/" + id + "?api_key=" + API_KEY + "&append_to_response=videos,images";

    const [movie, setMovie] = useState({});

    const [genres, setGenres] = useState([]);

    // const [Youtube_ID, setYoutube_ID] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios_instance.get(API_URL);
            if (response.status) {
                setTimeout(() => {
                    setIsLoaded(true);
                }, 800);
                setMovie(response.data);
                setGenres(response.data.genres);
                // console.log(movie)
                // setYoutube_ID(response.data.videos.results[response.data.videos.results.length - 1].key);
                // console.log(Youtube_ID);
            }
        }

        fetchData();
    }, [API_URL]);

    const release_year = movie.release_date ? movie.release_date.substring(0, 4) : "";

    return (
        <>
            {isLoaded ? "" : <LoadingSpinner />}
            <div className='movie_hero_backdrop_container' style={{ backgroundImage: `url(${API_LIST.fetchImageOriginal}${movie.backdrop_path})` }}>
                <div className='movie_hero_backdrop_data'>
                    <div className='wrapper'>
                        <div className='movie_hero_backdrop_flex'>
                            <div className='movie_poster_section'>
                                <img src={API_LIST.fetchBackdrop_LogoImageW300 + movie.poster_path} alt="" />
                            </div>
                            <div className='movie_detailes_flex'>
                                <h1 className='movie_title'>{movie.title} <span>( {release_year} )</span></h1>
                                <div className='genre_container'>
                                    {genres.slice(0, 5).map(genre => <Link className='genre' to="/" key={genre.id}>{genre.name}</Link>)}
                                </div>
                                {/* <p>{movie.overview}</p>
                                <Link to={"/movie/" + movie.id}>View Detailed Info</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <YouTube videoId={Youtube_ID} iframeClassName="youtube_container" /> */}
        </>
    )
}

export default MoviePage
