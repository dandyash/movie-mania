import React, { useEffect, useState } from 'react'
import axios_instance from '../API/axios';
import Slider from 'react-slick';
import CarouselItem from './CarouselItem';
import usePageLoader from './../Hooks/usePageLoader';

const MovieCarousel = ({ fetchAPI }) => {

    const [movies, setMovies] = useState([]);
    const [loader, showLoader, hideLoader] = usePageLoader();

    useEffect(() => {
        const fetchData = async () => {
            showLoader();
            await axios_instance.get(fetchAPI)
                .then(response => {
                    setMovies(response.data.results);
                    hideLoader();
                }
                );
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
        <>
            {loader}
            <div className='movie_carousel' >
                <Slider {...settings}>
                    {
                        movies.map(movie => <CarouselItem movie={movie} key={movie.id} />)
                    }
                </Slider>
            </div>
        </>
    )
}

export default MovieCarousel