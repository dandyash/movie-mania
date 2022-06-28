import React from 'react'
import API_LIST from './../API/requestAPIs';
import { Link } from 'react-router-dom';

const CarouselItem = ({ movie }) => {
    return (
        <div>
            <div className='carousel_movie_backdrop'>
                <img src={API_LIST.fetchImageOriginal + movie.backdrop_path} alt="" />
                <div className="gradient">
                    <img src={API_LIST.fetchPosterImageW154 + movie.poster_path} alt="" />
                    <h2>{movie.title ? movie.title : movie.name}</h2>
                    <p>{
                        movie.overview.length <= 150 ? movie.overview : movie.overview.slice(0, 150) + "..."
                    }</p>
                    {movie.title ? <Link to={"/movie/" + movie.id}>View Detailed Info</Link> : <Link to={"/tv/" + movie.id}>View Detailed Info</Link>}
                </div>
            </div>
        </div>
    )
}

export default CarouselItem