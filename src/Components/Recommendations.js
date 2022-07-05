import React from 'react'
import MovieCard from './MovieCard';

const Recommendations = ({ recommendations }) => {
    return (
        <div className='movie_row_main_container'>
            <div className='wrapper'>
                <div className='movie_row_container'>
                    <h1 className='movie_row_title'>Recommendations</h1>
                    <div className='movie_row_flex_container'>
                        {
                            recommendations.map(movie => <MovieCard data={movie} key={movie.id} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recommendations