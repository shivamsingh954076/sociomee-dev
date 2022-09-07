import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadAllTrendingHashtag } from '../../Services/Actions/Common/trandingHashtagAction';
import './style.css';

const TrendingHashtags = () => {
    let dispatch = useDispatch();

    const { trandingHashtags } = useSelector(state => state.TrendingHashtagData);
    console.log('this is hastahgs', trandingHashtags)
    useEffect(() => {
        dispatch(loadAllTrendingHashtag());
    }, []);
    return (
        <>
            <div className="event-box section-b-space ratio2_3">
                <div className="column p-2">
                    <div className="hashtags-heading pb-3 pt-2">
                        <h3>Trending Tags</h3>
                    </div>

                    {
                        trandingHashtags.slice(0, 5).map((Hashtag) => {
                            return (
                                <div className="all-hashtags pl-2 pb-1">
                                    <div className="hashtag-icob">
                                        <img src="/assets/images/adIcon/Frame 1113.png" alt="icon" />
                                    </div>
                                    <div className="hashtag-stat pl-2">
                                        <h4 >#{Hashtag.name}</h4>
                                        <h5 >{Hashtag.count} Posts</h5>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                    <div className="more-hags">
                        <Link to="#" className='more-tags-inn'>
                            See all Tags
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default TrendingHashtags