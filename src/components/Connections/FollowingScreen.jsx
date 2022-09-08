import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { loadAllUserFollowing } from '../../Services/Actions/Common/getUserFollowingAction';
import './Style.css'

const FollowingScreen = () => {
    const { getUserFollowing } = useSelector(state => state.GetUserFollowingData)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadAllUserFollowing())
    }, [])
    return (
        <>
            <div className="mppage-heading">
                <div className="group-custom-block">
                    <div className="heading-podcast-blk">
                        <h3>Following</h3>
                        <NavLink to="/" className="single-ancor-blk">See All →</NavLink>
                    </div>
                    <div className="row">
                        {
                            getUserFollowing && getUserFollowing.rows?.slice(0, 8).map((request) => {
                                return <div className="col-lg-3 col-12 p-1">
                                    <div className="mp-releted-pro-blk content-mp-block d-flex justify-content-between">
                                        <div className="media-body d-none d-md-block">
                                            <div class="media media-new d-none d-sm-flex">
                                                <div class="user-img">
                                                    <img src={request.profileImage || 'https://sociomee-dev.s3.ap-south-1.amazonaws.com/userProfileDp/LhXHReJcWmnBW.jpg'} className="img-fluid bg-img connection-profile connection-profile-new" alt="shivam singh" />
                                                    <span class="available-stats online"></span>
                                                </div>
                                                <div class="media-body d-none d-md-block pl-2">
                                                    <h4 className='m-0'>{request.fullName || 'name'}</h4>
                                                    <span>{request.userName || 'userName'}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                        {
                            getUserFollowing.length <= 0 && <h3 className='text-center'>No Followers Found</h3>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default FollowingScreen