import React from 'react'
import API_LIST from '../API/requestAPIs';
import { Link } from 'react-router-dom';

const HeroBackdrop = ({ data, runTime, release_year, genres, setShowTrailerModal }) => {
    return (
        <div className='movie_hero_backdrop_container' style={{ backgroundImage: `url(${API_LIST.fetchImageOriginal}${data.backdrop_path})` }}>
            <div className='movie_hero_backdrop_data'>
                <div className='wrapper'>
                    <div className='movie_hero_backdrop_flex'>
                        <div className='movie_poster_section'>
                            <img src={API_LIST.fetchBackdrop_LogoImageW300 + data.poster_path} alt="" />
                        </div>
                        <div className='movie_detailes_flex'>
                            <div className='movie_title_flex'>
                                <h1 className='movie_title'>{data.title ? data.title : data.name} {release_year ? <span>( {release_year} )</span> : ""}</h1>
                                <h4 className='movie_tagline'>"{data.tagline ? data.tagline : "N/A"}"</h4>
                                {runTime ? <div className='runtime_flex'>
                                    <h4>Runtime:</h4>
                                    <p>{runTime}</p>
                                </div> : ""}
                            </div>
                            {genres ? <div className='genre_container'>
                                <p>Genres:</p>
                                {genres.slice(0, 5).map(genre => <Link className='genre' to={"/genre/" + genre.id + "-" + genre.name} key={genre.id}>{genre.name}</Link>)}
                            </div> : ""}
                            <div className='movie_overview_flex'>
                                <h4>Overview:</h4>
                                <p>{data.overview}</p>
                            </div>
                            {setShowTrailerModal ? <div className='movie_buttons_flex'>
                                <button className='red_btn' onClick={() => { setShowTrailerModal(true) }}>
                                    <svg width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" stroke="currentcolor" strokeWidth="2" d="M3,22.0000002 L21,12 L3,2 L3,22.0000002 Z M5,19 L17.5999998,11.9999999 L5,5 L5,19 Z M7,16 L14.1999999,12 L7,8 L7,16 Z M9,13 L10.8,12 L9,11 L9,13 Z" />
                                    </svg>
                                    Play Trailer
                                </button>
                            </div> : ""}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBackdrop