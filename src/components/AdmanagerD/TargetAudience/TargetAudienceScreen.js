import React, { useState } from 'react'
import { Link } from "react-router-dom"
import AdmanagerHeaderR from '../AdmanagerHeaderR/AdmanagerHeaderR'

const TargetAudienceScreen = () => {
    let interestes = [
        "Photography",
        "Videography",
        "Watching",
        "Video Making",
        "World Tour",
        "New Movies",
        "Reading Books",
        "Travelling ",
        "Song",
        "Games",
        "Technology",
    ]

    const [searchValue, setSearchValue] = useState("")
    return (
        <>
            <AdmanagerHeaderR />
            <div className="main-section-upsd">

                <div className="sidebar-main-sp">

                    <div className="desh-icon-main">
                        <div className="desh-icon">
                            <img src="/assets/images/adIcon/grid.png" alt="" />
                            <p className='ml-2'>User Dashboard</p>
                        </div>
                        <div className="desh-second">
                            <i className="fa fa-ellipsis-h"></i>
                        </div>
                    </div>

                    <div className="create-add-main-no-backbround Configure-one">
                        <div className="create-add">
                            <div className="create-add-one">
                                <img src="/assets/images/adIcon/folder.png" alt="" />
                                <p className='ml-2'>Create Ad</p>
                            </div>
                            <div className="create-add-second">
                                <i className="fa fa-ellipsis-h"></i>
                            </div>
                        </div>
                    </div>

                    <div className="create-add-main-no-backbround Configure-ad">
                        <div className="create-add">
                            <div className="create-add-one">
                                <img src="/assets/images/adIcon/folder.png" alt="" />
                                <p className='ml-2'>Brand Awareness- CPV</p>
                            </div>
                            <div className="create-add-second">
                                <i className="fa fa-ellipsis-h"></i>
                            </div>
                        </div>
                    </div>

                    <div className="create-add-main-no-backbround Configure-ad">
                        <div className="create-add">
                            <div className="create-add-one">
                                <img src="/assets/images/adIcon/folder.png" alt="" />
                                <p className='ml-2'>Full Screen Video Ad </p>
                            </div>
                            <div className="create-add-second">
                                <i className="fa fa-ellipsis-h"></i>
                            </div>
                        </div>
                    </div>

                    <div className="create-add-main-third-sp">
                        <div className="create-add-sp" >
                            <div className="create-add-one-sp mr-5">
                                <img src="/assets/images/adIcon/folder.png" alt="" />
                                <p className='ml-2'>Choose Your Audience</p>
                            </div>
                            <div className="create-add-second-sp">
                                <i className="fa fa-ellipsis-h"></i>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="step-select-main-upsd"></div>
                <div className="step-select-upsd">
                    <div className="step-select-one-upsd">
                        <div className="step-select-child-upsd">
                            <button>4</button>
                            <p>Step 4</p>
                        </div>
                    </div>
                    <div className="step-select-second-upsd">
                        <p>Choose Your Audience</p>
                        <p>Define your target audience details</p>
                    </div>
                </div>


                <div className="brand-image-main-upsd brand-image-main-upsd-new">
                    <div className="brand-aware-text-upsd-title">
                        <p>Website ( Link) Visits- CPC  /  Single Image Ad  /  Choose your Audience</p>
                    </div>

                    <div>
                        <div className="ad-heading-upsd-title-input">
                            <p>Audience Preference </p>
                        </div>

                        <div className="Audience-Preference-input">
                            <select id="inputState" className="form-control" name="bpCategoryId" data-bs-toggle="modal" data-bs-target="#interestesModel" placeholder='Customer'>
                                Audience Preference
                            </select>
                        </div>

                        <div className="ad-heading-upsd-title-input">
                            <p>Target Gender</p>
                        </div>

                        <div className="ad-heading-upsd-title-input">
                            <p>Target Age Range</p>
                        </div>
                        <hr />
                        <div className="ad-heading-upsd-title-input">
                            <p>Targeted Profession</p>
                        </div>
                        <div className="Audience-Preference-input">
                            <select id="inputState" className="form-control" name="bpCategoryId" data-bs-toggle="modal" data-bs-target="#interestesModel" placeholder='Customer'>
                                Targeted Profession
                            </select>

                            <div className="pt-4 card-block-box">
                                <ul className="aboutlist-blk">
                                    <li>
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12">
                                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z">
                                            </path>
                                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z">
                                            </path>
                                        </svg>
                                        Hobbie
                                    </li>
                                    <li>
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12">
                                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z">
                                            </path>
                                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z">
                                            </path>
                                        </svg>
                                        Hobbie 1
                                    </li>
                                    <li>
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12">
                                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z">
                                            </path>
                                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z">
                                            </path>
                                        </svg>
                                        Hobbie 2
                                    </li>
                                    <li>
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12">
                                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z">
                                            </path>
                                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z">
                                            </path>
                                        </svg>
                                        Hobbie 3
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <div className="ad-heading-upsd-title-input">
                            <p>Targeted Interests</p>
                        </div>
                        <div className="Audience-Preference-input">
                            <select id="inputState" className="form-control" name="bpCategoryId" data-bs-toggle="modal" data-bs-target="#interestesModel" placeholder='Customer'>
                                Targeted Interests
                            </select>
                            <div className="pt-4 card-block-box">
                                <ul className="aboutlist-blk">
                                    <li>
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12">
                                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z">
                                            </path>
                                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z">
                                            </path>
                                        </svg>
                                        Hobbie
                                    </li>
                                    <li>
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12">
                                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z">
                                            </path>
                                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z">
                                            </path>
                                        </svg>
                                        Hobbie 1
                                    </li>
                                    <li>
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12">
                                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z">
                                            </path>
                                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z">
                                            </path>
                                        </svg>
                                        Hobbie 2
                                    </li>
                                    <li>
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12">
                                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z">
                                            </path>
                                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z">
                                            </path>
                                        </svg>
                                        Hobbie 3
                                    </li>
                                    <li>
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12">
                                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z">
                                            </path>
                                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z">
                                            </path>
                                        </svg>
                                        Hobbie 3
                                    </li>
                                    <li>
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12">
                                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z">
                                            </path>
                                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z">
                                            </path>
                                        </svg>
                                        Hobbie 3
                                    </li>
                                    <li>
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12">
                                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z">
                                            </path>
                                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z">
                                            </path>
                                        </svg>
                                        Hobbie 3
                                    </li>
                                    <li>
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12">
                                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z">
                                            </path>
                                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z">
                                            </path>
                                        </svg>
                                        Hobbie 3
                                    </li>
                                    <li>
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12">
                                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z">
                                            </path>
                                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z">
                                            </path>
                                        </svg>
                                        Hobbie 3
                                    </li>
                                    <li>
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12">
                                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z">
                                            </path>
                                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z">
                                            </path>
                                        </svg>
                                        Hobbie 3
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <div className="ad-heading-upsd-title-input">
                            <p>Targeted Location</p>
                        </div>
                        <div className="Audience-Preference-input">
                            <select id="inputState" className="form-control" name="bpCategoryId" data-bs-toggle="modal" data-bs-target="#interestesModel" placeholder='Customer'>
                                Targeted Location
                            </select>
                            <div className="pt-4 card-block-box">
                                <ul className="aboutlist-blk">
                                    <li>
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-12 ih-12">
                                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z">
                                            </path>
                                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z">
                                            </path>
                                        </svg>
                                        Hobbie
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="ad-heading-upsd-title-input d-flex">
                            <input type="checkbox" />
                            <p>Save this Audience Preference for future.</p>
                        </div>
                    </div>
                </div>

                {/* MODEL 1 */}
                <div className="modal fade" id="interestesModel" tabIndex="-1" role="dialog" aria-labelledby="interestesModelTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Interestes</h5>
                                <a href="#" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                            </div>
                            <div className="modal-body">
                                <div className="searchfilter-blk">
                                    <div className="input-search-blk">
                                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="search-svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                        <input type="text" className="form-control" name="search" placeholder="Find Interest..." value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                                    </div>
                                    <ul className="searchfiler-list">
                                        {interestes
                                            .filter(interestes => interestes.match(new RegExp(searchValue, "i")))
                                            .map(interestes => {
                                                return <li key={interestes}><div className="form-check checkbox_animated"><input type="checkbox" className="form-check-input" id={interestes} /><label className="form-check-label" htmlFor={interestes}>{interestes}</label></div></li>
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


            </div>
        </>
    )
}

export default TargetAudienceScreen