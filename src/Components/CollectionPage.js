import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import API_LIST, { API_KEY } from '../API/requestAPIs';
import axios_instance from './../API/axios';
import LoadingSpinner from './LoadingSpinner';

const CollectionPage = () => {
    const { id } = useParams();
    const API_URL = "/collection/" + id + "?api_key=" + API_KEY;
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState({});
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios_instance.get(API_URL);
            if (response.status) {
                setData(response.data);
                setMovies(response.data.parts);
                setTimeout(() => {
                    setIsLoaded(true);
                }, 800);
            }
        };
        setIsLoaded(false);
        window.scrollTo(0, 0);
        fetchData();
    }, [API_URL]);

    return (
        <>
            {isLoaded ? "" : <LoadingSpinner />}
            <div className='movie_hero_backdrop_container' style={{ backgroundImage: `url(${API_LIST.fetchImageOriginal}${data.backdrop_path})` }}>
                <div className='movie_hero_backdrop_data'>
                    <div className='wrapper'>
                        <div className='movie_hero_backdrop_flex'>
                            <div className='movie_poster_section'>
                                <img src={API_LIST.fetchBackdrop_LogoImageW300 + data.poster_path} alt="" />
                            </div>
                            <div className='movie_detailes_flex'>
                                <div className='movie_title_flex'>
                                    <h1 className='movie_title'>{data.title ? data.title : data.name}</h1>
                                </div>
                                <div className='movie_overview_flex'>
                                    <h4>Overview:</h4>
                                    <p>{data.overview}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {movies.map(data => <div className='current_season_container'>
                <div className='wrapper'>
                    <div className='current_season_flex'>
                        <div className='current_season'>
                            <img src={API_LIST.fetchPosterImageW185 + data.poster_path} alt="" />
                            <div className='current_season_info'>
                                <h2>{data.title}</h2>
                                <div className='movie_overview_flex'>
                                    <h4>Overview:</h4>
                                    <p>{data.overview.length <= 200 ? data.overview : data.overview.slice(0, 200) + "..."}</p>
                                </div>
                                <Link to={"/movie/" + data.id} className='red_btn'>View Detailed Info</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
        </>
    )
}

export default CollectionPage