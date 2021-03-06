import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios_instance from '../API/axios';
import { API_KEY } from '../API/requestAPIs';
import LoadingSpinner from './LoadingSpinner';
import HeroBackdrop from './HeroBackdrop';
import CastRow from './CastRow';
import TrailerModal from './TrailerModal';
import API_LIST from './../API/requestAPIs';
import { Link } from 'react-router-dom';
import ImagesContainer from './ImagesContainer';
import Recommendations from './Recommendations';

const MoviePage = () => {
    const { id } = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    const API_URL = "/movie/" + id + "?api_key=" + API_KEY + "&append_to_response=videos,images,credits,recommendations,similar";
    const [movie, setMovie] = useState({});
    const [genres, setGenres] = useState([]);
    const [cast, setCast] = useState([]);
    const [showTrailerModal, setShowTrailerModal] = useState(false);
    const [Youtube_ID, setYoutube_ID] = useState("");
    const [recommendations, setRecommendations] = useState([]);
    const [backdrops, setBackdrops] = useState([]);
    const [logos, setLogos] = useState([]);
    const [posters, setPosters] = useState([]);
    const [tab, setTab] = useState("backdrops");


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios_instance.get(API_URL);
            if (response.status) {
                setMovie(response.data);
                setTimeout(() => {
                    setIsLoaded(true);
                }, 800);
                setGenres(response.data.genres);
                setCast(response.data.credits.cast);
                const videoID = response.data.videos.results.filter(video => video.type.toLowerCase() === "trailer");
                setYoutube_ID(videoID[0].key);
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
    }, [API_URL, id]);

    const release_year = movie.release_date ? movie.release_date.substring(0, 4) : "";

    const runtime = parseInt(movie.runtime);
    const runTime = runtime > 60 ? runtime > 120 ? runtime > 180 ? "3h " + (runtime - 180).toString() + "m" : "2h " + (runtime - 120).toString() + "m" : "1h " + (runtime - 60).toString() + "m" : runtime + "m";

    return (
        <>
            {isLoaded ? "" : <LoadingSpinner />}
            <HeroBackdrop data={movie} genres={genres} runTime={runTime} release_year={release_year} setShowTrailerModal={setShowTrailerModal} />
            <CastRow cast={cast} />
            <TrailerModal show={showTrailerModal} setshow={setShowTrailerModal} videoId={Youtube_ID} />
            {movie.belongs_to_collection
                ? <div className='belongs_to_collection_container'>
                    <div className='wrapper'>
                        <div className='collection_info_container' style={{ backgroundImage: `url(${API_LIST.fetchImageOriginal}${movie.belongs_to_collection.backdrop_path})` }}>
                            <div className='collection_gradient'>
                                <h2>Part Of The {movie.belongs_to_collection.name}</h2>
                                <Link to={"/collection/" + movie.belongs_to_collection.id} className="red_btn">View Collection</Link>
                            </div>
                        </div>
                    </div>
                </div>
                : ""
            }
            <ImagesContainer backdrops={backdrops} logos={logos} posters={posters} tab={tab} setTab={setTab} />
            <Recommendations recommendations={recommendations} />
        </>
    )
}

export default MoviePage
