import React from 'react'
import API_LIST from '../API/requestAPIs';

const ImagesContainer = ({ backdrops, logos, posters, tab, setTab }) => {

    return (
        <div className='images_container'>
            <div className='wrapper'>
                <div className='images_flex_container'>
                    <div className='images_container_header'>
                        <h1 className="movie_row_title">Images</h1>
                        <div className='images_tab'>
                            <button className={tab === "backdrops" ? 'active' : ''} onClick={() => { setTab("backdrops") }}>Backdrops</button>
                            <button className={tab === "posters" ? 'active' : ''} onClick={() => { setTab("posters") }}>Posters</button>
                            <button className={tab === "logos" ? 'active' : ''} onClick={() => { setTab("logos") }}>Logos</button>
                        </div>
                    </div>
                    <div className='images_tab_container'>
                        <div className='images_body' style={{ display: tab === "backdrops" ? 'flex' : 'none' }}>
                            {backdrops.slice(0, 9).map(image => <img key={image.file_path} src={API_LIST.fetchImageOriginal + image.file_path} className="resized_img" alt="" />)}
                        </div>
                        <div className='images_body' style={{ display: tab === "posters" ? 'flex' : 'none' }}>
                            {posters.slice(0, 9).map(image => <img key={image.file_path} src={API_LIST.fetchBackdrop_LogoImageW300 + image.file_path} alt="" />)}
                        </div>
                        <div className='images_body' style={{ display: tab === "logos" ? 'flex' : 'none' }}>
                            {logos.slice(0, 9).map(image => <img key={image.file_path} src={API_LIST.fetchImageOriginal + image.file_path} className="resized_img" alt="" />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImagesContainer