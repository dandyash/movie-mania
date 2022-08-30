/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import axios_instance from '../API/axios';
import API_LIST from './../API/requestAPIs';
import SearchResultCard from './SearchResultCard';
import LoadingSpinner from './LoadingSpinner';


const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get("query");
    const [isLoaded, setIsLoaded] = useState(false);
    const [page, setPage] = useState(1);
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios_instance.get(API_LIST.searchQuery + searchQuery + "&page=" + page);
            if (response.status) {
                const finalresults = response.data.results.filter(data => data.media_type !== "person")
                setSearchResult(finalresults);
                setTimeout(() => {
                    setIsLoaded(true);
                }, 800);
            }
        };
        setIsLoaded(false);
        window.scrollTo(0, 0);
        fetchData();
    }, [searchQuery, page])


    return (
        <>
            {isLoaded ? "" : <LoadingSpinner />}
            <div div className='search_section' >
                <div className='wrapper'>
                    <h1 className='movie_row_title'>Search Results</h1>
                    <div className='search_container_flex'>
                        {searchResult.map(data => <SearchResultCard data={data} key={data.id} />)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchPage