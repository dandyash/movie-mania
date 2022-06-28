import React, { useEffect, useState } from 'react'
import axios_instance from '../API/axios';
import Slider from 'react-slick';
import CarouselItem from './CarouselItem';
import LoadingSpinner from './LoadingSpinner';

const MovieCarousel = ({ fetchAPI }) => {

    const [isLoaded, setIsLoaded] = useState(false);

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios_instance.get(fetchAPI);
            if (response.status) {
                setTimeout(() => {
                    setIsLoaded(true);
                }, 800);
                setMovies(response.data.results);
            }
        }
        fetchData();
    }, [fetchAPI]);

    var settings = {
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
    };

    return (
        <div className='movie_carousel'>
            {isLoaded ? "" : <LoadingSpinner />}
            <Slider {...settings}>
                {
                    movies.map(movie => <CarouselItem movie={movie} key={movie.id} />)
                }
            </Slider>
        </div>
    )
}

export default MovieCarousel