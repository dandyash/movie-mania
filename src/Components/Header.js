import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {

    const [isNavDark, setIsNavDark] = useState(false);

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


    return (
        <header className={isNavDark ? "header_dark" : "header_light"}>
            <div className='wrapper'>
                <div className='header_flex_container'>
                    <Link to="/" className='logo_container'><img src="/images/Logo without background or margins.png" alt="" /></Link>
                    <div className='top_nav'>
                        <ul>
                            <li><Link to="/">home</Link></li>
                            <li><Link to="/">all movies</Link></li>
                            <li><Link to="/">all series</Link></li>
                            {/* <li><Link to="/"></Link></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header