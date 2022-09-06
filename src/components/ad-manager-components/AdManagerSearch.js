import React, { Component, useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";


export default function AdManagerSearch() {

    return (
        <>
            <div className="profile-menu section-t-space adserch-menu">
                <ul>
                    <li>
                        <NavLink to="/CreateAd" className='btn btn-solid adserch-btn'>
                             +  Create new Ad
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <h6>History</h6> 
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <h6>Preview</h6>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <h6>Reports</h6>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <h6>Ad Stop</h6>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <h6>More..</h6>
                        </NavLink>
                    </li>
                    <li>
                    <input type="text" className="form-control search-type" placeholder="Search"/>
                    </li>
                </ul>
            </div>
        </>
    );
} 