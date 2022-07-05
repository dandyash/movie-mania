import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className='wrapper'>
                <div className='footer_container'>
                    <div className='footer_flex'>
                        <div className='footer_left_section'>
                            <img src="/images/Logo without background or margins.png" alt="" />
                        </div>
                        <div className='footer_right_section'>
                            <h2>About</h2>
                            <p>
                                Movie-Mania is a React based Website that displays various Movies & Series along with their data like cast, runtime, trailer, images and also gives recommendations based on the selected one.
                            </p>
                            <p>It fetches and displays data using the API provided by TMDB (The Movie Database)</p>
                        </div>
                    </div>
                    <p className='copyright'>Copyright © {new Date().getFullYear()} <Link to="/">Movie-Mania</Link></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer