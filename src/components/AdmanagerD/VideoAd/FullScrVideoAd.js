import React from 'react'
import "./video2.css"
import { Link } from "react-router-dom"
import AdmanagerHeaderR from '../AdmanagerHeaderR/AdmanagerHeaderR'

const FullScrVideoAd = () => {
  const videoUpload = () => {
    document.getElementById('input_file').click();
  }
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

          <div className="create-add-main-third-sp">
            <div className="create-add-sp" >
              <div className="create-add-one-sp mr-5">
                <img src="/assets/images/adIcon/folder.png" alt="" />
                <p className='ml-2'>Full Screen Video Ad</p>
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
              <button>3</button>
              <p>Step 3</p>
            </div>
          </div>
          <div className="step-select-second-upsd">
            <p>Set-up Your Ad</p>
            <p>Let’s start by selecting your objective which suits best for our goals.</p>
          </div>
        </div>


        <div className="brand-image-main-upsd">
          <div className="brand-aware-text-upsd">
            <p>Brand Awareness- CPV / Full Screen Video Ad</p>
          </div>

          <div>
            <div className="ad-heading-upsd">
              <p>Add Heading</p>

            </div>



            <div className="ad-sale-upsd">
              {/* <p>Enter your ad heading here...</p> */}
              <input type="text" className='form-control p-2' placeholder='Enter your ad heading here...' />


            </div>
            <p className="max-char-upsd">Max 42 Characters</p>

            <div className="ad-heading-second-upsd">
              <p>Add Sub-Heading</p>

            </div>
            <div className="ad-sale-second-upsd">
              {/* <p>Enter your ad sub-heading here...</p> */}
              <input type="text" className='form-control p-2' placeholder='Enter your ad sub-heading here...' />

            </div>
            <p className="max-char-second-upsd">Max 60 Characters</p>


            <div className="ad-heading-third-upsd">
              <p>Add Description</p>
            </div>
            <div className="ad-sale-third-upsd">
              {/* <p>Enter your ad description here...</p> */}
              <textarea name='message' className='form-control' rows='8' placeholder='Enter your ad description here...'> </textarea>

            </div>
            <p className="max-char-third-upsd">Max 300 Characters</p>


            <div className="upload-main-upsd">
              <p>Add your Video</p>

              <button onClick={videoUpload}>Upload video</button>
              <input type="file" name="" id='input_file' hidden />
              {/* <button>Upload Video</button> */}
            </div>
          </div>

          <div className="two-bumain-upsd">
            <button>Cancel</button>
          </div>
          <div className="two-bumain-upsdr">
            < Link to="/TargetAudience" >

              <button>Next</button>
            </Link>
          </div>

        </div>





      </div>


    </>
  )
}

export default FullScrVideoAd