import React from 'react'
import API_LIST from '../API/requestAPIs'
import { Link } from 'react-router-dom'

const SearchResultCard = ({ data }) => {
    var rating = data.vote_average * 10;

    return (
        <div className='movie_card'>
            {/* <h2>{data.title}</h2> */}
            <img src={API_LIST.fetchPosterImageW185 + data.poster_path} alt="" />
            <div className='movie_info'>
                <div className='votes_container'>
                    <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='#ff4057'>
                        <path d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z" />
                    </svg>
                    <p>{rating.toFixed(2)}%</p>
                </div>
                {data.title ? <Link to={"/movie/" + data.id}>View Details</Link> : <Link to={"/tv/" + data.id}>View Details</Link>}
            </div>
        </div>
    )
}

export default SearchResultCard