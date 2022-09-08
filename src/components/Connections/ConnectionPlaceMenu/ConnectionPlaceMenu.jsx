import React from 'react'
import { NavLink } from 'react-router-dom'

const ConnectionPlaceMenu = () => {
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
                                <NavLink to="/FollowRequests">Follow Request (132)</NavLink>
                            </li>
                            <li>
                                <NavLink to="/FollowingScreen">Following (2.6k)</NavLink>
                            </li>
                            <li>
                                <NavLink to="/MpSold">Followers (4.6k)</NavLink>
                            </li>
                            <li>
                                <NavLink to="/MpSold">SocioMates (100)</NavLink>
                            </li>
                            <li>
                                <NavLink to="/MpSold">Categries</NavLink>
                            </li>
                        </ul>
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default ConnectionPlaceMenu