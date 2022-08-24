import React, { Component, useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { loadAllHobbies } from '../../../Services/Actions/UserProfile/getUsersSubModulesAction';
import { loadHobbiesByUserId } from '../../../Services/Actions/UserProfile/getUserProfileByUserIdAction';

const MyProfileHobbies = () => {
    let dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState("")

    //  ALL HOBBIES
    const { userHobbies } = useSelector(state => state.getUserSubModulesData);
    useEffect(() => {
        dispatch(loadAllHobbies());
    }, [])

    // HOBBIES VIA USER ID
    const { userHobbiesByUserId } = useSelector(state => state.getUserProfileByUserIdData);
    useEffect(() => {
        dispatch(loadHobbiesByUserId());
    }, [])
    return (
        <>
            <div className="about-profile-box-blk">
                <div className="card-title">
                    <h3>Hobbies</h3>
                    <div className="settings">
                        <div className="setting-btn">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#hobbiesModel">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-dark strokeWidth-3 iw-11 ih-11"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card-block-box">
                    <ul className="aboutlist-blk">
                        {
                            userHobbiesByUserId.length !== 0 ? userHobbiesByUserId.map((hobbie) => {
                                return (<li>
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12">
                                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z">
                                        </path>
                                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z">
                                        </path>
                                    </svg>
                                    {hobbie.name}
                                </li>
                                )
                            })
                                : <div id="load-more" className="text-center mb-3">
                                    <div className="no-more-text">
                                        <h2>No Data Found</h2>
                                    </div>
                                </div>
                        }
                    </ul>
                </div>
            </div>

            {/* // MODEL FOR HOBBIES */}
            <div className="modal fade" id="hobbiesModel" tabIndex="-1" role="dialog" aria-labelledby="hobbiesModelTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Hobbies</h5>
                            <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                        </div>
                        <div className="modal-body">
                            <div className="searchfilter-blk">
                                <div className="input-search-blk">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="search-svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                    <input type="text" className="form-control" name="search" placeholder="Find Hobbies..." value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                                </div>
                                <ul className="searchfiler-list">
                                    {userHobbies?.rows
                                        ?.filter(hobbies => hobbies.name.match(new RegExp(searchValue, "i")))
                                        .map(hobbies => {
                                            return <li key={hobbies.id}><div className="form-check checkbox_animated"><input type="checkbox" className="form-check-input" id={hobbies.id} /><label className="form-check-label" htmlFor={hobbies.name}>{hobbies.name}</label></div></li>
                                        })}
                                </ul>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-solid">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyProfileHobbies