import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { loadAllUserFollowing } from '../../../Services/Actions/Common/getUserFollowingAction';
import Header from '../../Header';
import LeftSidebar from '../../LeftSidebar';
import RightSidebar from '../../RightSidebar';
import ConnectionPlaceMenu from './ConnectionPlaceMenu';

const FollowingScreen = () => {
    const { getUserFollowing } = useSelector(state => state.GetUserFollowingData)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadAllUserFollowing())
    }, [])
    return (
        <>
            <Header></Header>
            <div className="page-body container-fluid profile-page">
                <LeftSidebar></LeftSidebar>
                <div className="page-center">
                    {/* <MarketplaceMenu></MarketplaceMenu> */}
                    <div className="mp-head-blk mp-head-blk-new col-lg-12 d-flex">
                        <h2 className="col-lg-6 p-0">Connection</h2>

                        <div className="col-lg-6">
                            <ul className="mp-right-btns">
                                <li>
                                    <div className="search-box-mp">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon iw-16 icon-light"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                        <input type="text" className="form-control search-type" placeholder="find friends..." />
                                    </div>
                                </li>
                                <li>
                                    <a href="/" className="mp-filter-btn" data-bs-toggle="modal" data-bs-target="#mpfiltermodel">
                                        <img src="/assets/images/icons/sliders.png" alt="slider" className='ml-2' />
                                        Filter
                                    </a>
                                </li>
                                <li>
                                    <NavLink to="/MpSell" className="mp-sell-btn">Setting</NavLink>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <ConnectionPlaceMenu />

                    {/* MAIN */}
                    <div className="mppage-heading">
                        <div className="group-custom-block">
                            <div className="heading-podcast-blk">
                                <h3>Following</h3>
                                <NavLink to="/" className="single-ancor-blk">See All →</NavLink>
                            </div>
                            <div className="row">
                                {
                                    getUserFollowing && getUserFollowing.rows.map((request) => {
                                        return <div className="col-lg-4 col-12 p-1">
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
                                                            <p>Professional Guitarist</p>
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

                </div>

                <RightSidebar></RightSidebar>
            </div>
        </>
    )
}

export default FollowingScreen