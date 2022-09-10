import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { loadProfileByUserId } from '../../../Services/Actions/UserProfile/getUserProfileByUserIdAction';

const ConnectionPlaceMenu = () => {
    // get user profile by user id 
    const { userProfileByUserId } = useSelector(state => state.getUserProfileByUserIdData);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadProfileByUserId());
    }, [])

    return (
        <>
            <div className="marketplace-menu">
                <div className="row">
                    <div className="col-col-12">
                        <ul className="mp-left-menu">
                            <li>
                                <NavLink to="/Connection">All</NavLink>
                            </li>
                            <li>
                                <NavLink to="/FollowRequests">Follow Request ({ })</NavLink>
                            </li>
                            <li>
                                <NavLink to="/FollowingScreen">Following ({userProfileByUserId.followingCount})</NavLink>
                            </li>
                            <li>
                                <NavLink to="/FollowersScreen">Followers ({userProfileByUserId.followersCount})</NavLink>
                            </li>
                            <li>
                                <NavLink to="/#">SocioMates (100)</NavLink>
                            </li>
                            <li>
                                <NavLink to="/#">Categries</NavLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ConnectionPlaceMenu