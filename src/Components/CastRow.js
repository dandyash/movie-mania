import React from 'react'
import { Link } from 'react-router-dom';
import API_LIST from './../API/requestAPIs';

const CastRow = ({ cast }) => {
    return (
        <div className='movie_cast_container'>
            <div className='wrapper'>
                <div className='movie_cast_row'>
                    <h1 className='movie_row_title'>Film's Cast</h1>
                    <div className='movie_cast_flex_container'>
                        {cast.slice(0, 10).map(cast =>
                            cast.profile_path ? <Link to={"/actor/" + cast.id} key={cast.id} className='movie_cast_card'>
                                <img src={API_LIST.fetchPosterImageW185 + cast.profile_path} alt="" />
                                <div className='movie_cast_details'>
                                    <h3>{cast.name}</h3>
                                    <p>{cast.character}</p>
                                </div>
                            </Link> : ""
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CastRow