import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios_instance from '../API/axios';
import API_LIST, { API_KEY } from '../API/requestAPIs';
import LoadingSpinner from './LoadingSpinner';
import HeroBackdrop from './HeroBackdrop';
import CastRow from './CastRow';
import TrailerModal from './TrailerModal';
import ImagesContainer from './ImagesContainer';
import Recommendations from './Recommendations';

const TvPage = () => {

    const { id } = useParams();
    const API_URL = "/tv/" + id + "?api_key=" + API_KEY + "&append_to_response=videos,images,credits,recommendations,similar";
    const [isLoaded, setIsLoaded] = useState(false);
    const [tv, setTv] = useState({});
    const [genres, setGenres] = useState([]);
    const [cast, setCast] = useState([]);
    const [showTrailerModal, setShowTrailerModal] = useState(false);
    const [Youtube_ID, setYoutube_ID] = useState("");
    const [recommendations, setRecommendations] = useState([]);
    const [backdrops, setBackdrops] = useState([]);
    const [logos, setLogos] = useState([]);
    const [posters, setPosters] = useState([]);
    const [tab, setTab] = useState("backdrops");
    const [latestSeason, setLatestSeason] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios_instance.get(API_URL);
            if (response.status) {
                setTv(response.data);
                setTimeout(() => {
                    setIsLoaded(true);
                }, 800);
                setGenres(response.data.genres);
                setCast(response.data.credits.cast);
                const videoID = response.data.videos.results.filter(video => video.type.toLowerCase() === "trailer");
                setYoutube_ID(videoID[0].key);
                setLatestSeason(response.data.seasons[response.data.seasons.length - 1]);
                setRecommendations(response.data.recommendations.results.length > 1 ? response.data.recommendations.results : response.data.similar.results);
                setBackdrops(response.data.images.backdrops);
                setLogos(response.data.images.logos);
                setPosters(response.data.images.posters);
            }
        }
        setIsLoaded(false);
        window.scrollTo(0, 0);
        setTab("backdrops");
        fetchData();
    }, [API_URL]);

    const release_year = tv.first_air_date ? tv.first_air_date.substring(0, 4) : "";
    const runtime = parseInt(tv.episode_run_time);
    const runTime = runtime > 60 ? runtime > 120 ? runtime > 180 ? "3h " + (runtime - 180).toString() + "m" : "2h " + (runtime - 120).toString() + "m" : "1h " + (runtime - 60).toString() + "m" : runtime + "m";

    return (
        <>
            {isLoaded ? "" : <LoadingSpinner />}
            <HeroBackdrop data={tv} genres={genres} runTime={runTime} release_year={release_year} setShowTrailerModal={setShowTrailerModal} />
            <CastRow cast={cast} />
            <TrailerModal show={showTrailerModal} setshow={setShowTrailerModal} videoId={Youtube_ID} />
            <div className='current_season_container'>
                <div className='wrapper'>
                    <div className='current_season_flex'>
                        <h1 className='movie_row_title'>Latest Season</h1>
                        <div className='current_season'>
                            <img src={API_LIST.fetchPosterImageW185 + latestSeason.poster_path} alt="" />
                            <div className='current_season_info'>
                                <h2>{latestSeason.name}</h2>
                                <p>{latestSeason.air_date + " | " + latestSeason.episode_count + " Episodes"}</p>
                                <div className='movie_overview_flex'>
                                    <h4>Overview:</h4>
                                    <p>{latestSeason.overview ? latestSeason.overview : tv.overview}</p>
                                </div>
                            </div>
                        </div>
                        {latestSeason.season_number > 1 ? <Link to={"/tv/" + id + "/seasons"} className='red_btn'>View All Seasons</Link> : ""}
                    </div>
                </div>
            </div>
            <ImagesContainer backdrops={backdrops} logos={logos} posters={posters} tab={tab} setTab={setTab} />
            <Recommendations recommendations={recommendations} />
        </>
    )
}

export default TvPage