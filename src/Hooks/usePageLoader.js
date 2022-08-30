import React, { useState } from 'react'
import LoadingSpinner from '../Components/LoadingSpinner';

const usePageLoader = () => {

    const [loading, setLoading] = useState(false);

    return [
        loading ? <LoadingSpinner /> : null,
        () => setLoading(true),
        () => setLoading(false)
    ];
}

export default usePageLoader;