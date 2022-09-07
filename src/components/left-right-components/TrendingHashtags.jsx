import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadAllTrendingHashtag } from '../../Services/Actions/Common/trandingHashtagAction';

const TrendingHashtags = () => {
    let dispatch = useDispatch();

    const { trandingHashtags } = useSelector(state => state.TrendingHashtagData);
    console.log('this is hastahgs', trandingHashtags)
    useEffect(() => {
        dispatch(loadAllTrendingHashtag());
    }, []);
    return (
        <>
            hi there this is trending haashtaags
        </>
    )
}

export default TrendingHashtags