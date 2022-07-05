import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import API_LIST, { API_KEY } from '../API/requestAPIs';
import axios_instance from './../API/axios';
import HeroBackdrop from './HeroBackdrop';
import LoadingSpinner from './LoadingSpinner';

const AllSeasonsPage = () => {
    const { id } = useParams();
    const API_URL = "/tv/" + id + "?api_key=" + API_KEY;
    const [isLoaded, setIsLoaded] = useState(false);
    const [tv, setTv] = useState({});
    const [genres, setGenres] = useState([]);
    const [seasons, setSeasons] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios_instance.get(API_URL);
            if (response.status) {
                setTv(response.data);
                setTimeout(() => {
                    setIsLoaded(true);
                }, 800);
                setGenres(response.data.genres);
                setSeasons(response.data.seasons);
            }
        };
        setIsLoaded(false);
        window.scrollTo(0, 0);
        fetchData();
    }, [API_URL]);
    const release_year = tv.first_air_date ? tv.first_air_date.substring(0, 4) : "";
    const runtime = parseInt(tv.episode_run_time);
    const runTime = runtime > 60 ? runtime > 120 ? runtime > 180 ? "3h " + (runtime - 180).toString() + "m" : "2h " + (runtime - 120).toString() + "m" : "1h " + (runtime - 60).toString() + "m" : runtime + "m";

    return (
        <>
            {isLoaded ? "" : <LoadingSpinner />}
            <HeroBackdrop data={tv} genres={genres} runTime={runTime} release_year={release_year} />
            {seasons.map(data => <div className='current_season_container'>
                <div className='wrapper'>
                    <div className='current_season_flex'>
                        <div className='current_season'>
                            <img src={API_LIST.fetchPosterImageW185 + data.poster_path} alt="" />
                            <div className='current_season_info'>
                                <h2>{data.name}</h2>
                                <p>{data.air_date + " | " + data.episode_count + " Episodes"}</p>
                                <div className='movie_overview_flex'>
                                    <h4>Overview:</h4>
                                    <p>{data.overview.length <= 200 ? data.overview : data.overview.slice(0, 200) + "..."}</p>
                                </div>
                                <Link to={"/tv/" + id + "/season/" + data.season_number} className='red_btn'>View Detailed Info</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
        </>
    )
}

export default AllSeasonsPage