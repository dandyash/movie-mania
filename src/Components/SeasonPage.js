import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API_LIST, { API_KEY } from '../API/requestAPIs';
import axios_instance from './../API/axios';
import HeroBackdrop from './HeroBackdrop';
import LoadingSpinner from './LoadingSpinner';
import TrailerModal from './TrailerModal';

const SeasonPage = () => {
    const { tvId, seasonId } = useParams();
    const API_URL = "/tv/" + tvId + "/season/" + seasonId + "?api_key=" + API_KEY + "&append_to_response=videos";
    const [isLoaded, setIsLoaded] = useState(false);
    const [tv, setTv] = useState({});
    const [showTrailerModal, setShowTrailerModal] = useState(false);
    const [Youtube_ID, setYoutube_ID] = useState("");
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios_instance.get(API_URL);
            if (response.status) {
                setTv(response.data);
                setTimeout(() => {
                    setIsLoaded(true);
                }, 800);
                setEpisodes(response.data.episodes);
                const videoID = response.data.videos.results.filter(video => video.type.toLowerCase() === "trailer");
                setYoutube_ID(videoID[0].key);
            }
        };
        setIsLoaded(false);
        window.scrollTo(0, 0);
        fetchData();
    }, [API_URL]);

    const release_year = tv.air_date ? tv.air_date.substring(0, 4) : "";
    const runtime = parseInt(tv.episodes ? tv.episodes[0].runtime : null);
    const runTime = runtime > 60 ? runtime > 120 ? runtime > 180 ? "3h " + (runtime - 180).toString() + "m" : "2h " + (runtime - 120).toString() + "m" : "1h " + (runtime - 60).toString() + "m" : runtime + "m";


    return (
        <>
            {isLoaded ? "" : <LoadingSpinner />}
            <HeroBackdrop data={tv} runTime={runTime} release_year={release_year} setShowTrailerModal={setShowTrailerModal} />
            <TrailerModal show={showTrailerModal} setshow={setShowTrailerModal} videoId={Youtube_ID} />
            <div className='episodes_container'>
                <div className='wrapper'>
                    <div className='current_season_flex'>
                        <h1 className='movie_row_title'>Episodes List</h1>
                        {episodes.map(data =>
                            <div className='current_season'>
                                <img src={API_LIST.fetchPosterImageW342 + data.still_path} alt="" />
                                <div className='current_season_info'>
                                    <h2>{data.name}</h2>
                                    <div className='movie_overview_flex'>
                                        <h4>Overview:</h4>
                                        <p>{data.overview.length <= 200 ? data.overview : data.overview.slice(0, 200) + "..."}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SeasonPage