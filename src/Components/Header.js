import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    const [isNavDark, setIsNavDark] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 100) {
                setIsNavDark(true);
            } else {
                setIsNavDark(false);
            }
        })

        return () => {
            window.removeEventListener("scroll", () => {
                return true;
            });
        }
    }, [])

    const searchfunc = (e) => {
        e.preventDefault();
        setShowSearch(false);
        setIsNavDark(false);
        navigate('/search?query=' + searchQuery);
    };

    return (
        <header className={isNavDark ? "header_dark" : "header_light"}>
            <div className='wrapper'>
                <div className='search_container' style={{ height: showSearch ? '75px' : '0px' }}>
                    <form onSubmit={searchfunc}>
                        <input type="text" value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value) }} />
                        <input type="submit" value="Search" />
                    </form>
                </div>
                <div className='header_flex_container'>
                    <Link to="/" className='logo_container'><img src="/images/Logo without background or margins.png" alt="" /></Link>
                    <div className='top_nav'>
                        <ul>
                            <li>
                                <button className='search_btn' onClick={() => {
                                    if (showSearch) {
                                        setShowSearch(false);
                                    } else {
                                        setShowSearch(true);
                                    }
                                    if (!isNavDark) {
                                        setIsNavDark(true);
                                    }
                                }}>
                                    <svg width="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <ellipse cx="10.5992" cy="10.6532" rx="8.59922" ry="8.65324" stroke='currentcolor' strokeWidth="2"></ellipse>
                                        <path opacity="0.5" d="M20.6745 21.9553C20.3405 21.9445 20.0228 21.807 19.7853 21.5705L17.7488 19.1902C17.3122 18.7909 17.2765 18.1123 17.6688 17.6689C17.8524 17.4831 18.102 17.3787 18.3624 17.3787C18.6228 17.3787 18.8725 17.4831 19.0561 17.6689L21.6172 19.7181C21.9861 20.0957 22.0999 20.6563 21.9078 21.1492C21.7157 21.6422 21.2535 21.9754 20.7279 22L20.6745 21.9553Z" fill="currentColor"></path>
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header