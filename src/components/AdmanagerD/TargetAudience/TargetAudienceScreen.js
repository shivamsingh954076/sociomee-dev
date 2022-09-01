import React from 'react'
import { Link } from "react-router-dom"
import AdmanagerHeaderR from '../AdmanagerHeaderR/AdmanagerHeaderR'

const TargetAudienceScreen = () => {
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
                            <p>Step 5</p>
                        </div>
                    </div>
                    <div className="step-select-second-upsd">
                        <p>Choose Your Audience</p>
                        <p>Define your target audience details</p>
                    </div>
                </div>


                <div className="brand-image-main-upsd">
                    <div className="brand-aware-text-upsd">
                        <p>Website ( Link) Visits- CPC  /  Single Image Ad  /  Choose your Audience</p>
                    </div>

                    <div>
                        <div className="ad-heading-upsd">
                            <p>Audience Preference </p>
                        </div>

                        <div className="Audience-Preference-input">
                            <select id="inputState" className="form-control" name="bpCategoryId">
                                <option value={''}>Customer</option>
                               
                            </select>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}

export default TargetAudienceScreen