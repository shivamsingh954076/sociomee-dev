import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

// Use for snakebar
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import axios from 'axios';

const SignupDetail = () => {

    const user = JSON.parse(localStorage.getItem('user'))
    const [detail, setDetail] = useState({ dob: "", gender: "", "addressBy": "" });

    // Snackbar Code
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState({ sev: 'success', content: '' });
    const [flag,setFlag]=useState(false);

    let navigate = useNavigate();


    //  Snackbar Alert Function
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    // Detail Input Handler
    const detailHandler = (ev) => {
        let { name, value } = ev.target;
        setDetail({ ...detail, [name]: value })
    }
    console.log(detail.gender)
    //Detail Submit Function
    const detailSubmit = (e) => {
        e.preventDefault();
        if (!detail.dob) { setOpen(true); setAlert({ sev: "error", content: "Please Enter Date of birth" }); }
        else if (!detail.gender || detail.gender==='special') { setOpen(true); setAlert({ sev: "error", content: "Please Select Gender" }); }
        else {
            const config = {
                headers: { Authorization: `Bearer ${user.token}` }
            };
            axios.post(`${process.env.REACT_APP_IPURL}/user/update`, detail, config)
                .then((respo) => {
                    console.log(respo.data.data?.successResult)
                    if (respo.data.data?.successResult === "Updated User") {
                        setOpen(true);
                        setAlert({ sev: "success", content: "Updated Successfully" });
                    }
                    else {
                        setOpen(true);
                        setAlert({ sev: "error", content: "Something Went Wrong" });
                    }
                })
                .catch((err) => {
                    setOpen(true);
                    setAlert({ sev: "error", content: `${err} !`, });
                })
        }

    }

    // Cancel Snackbar
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        if (alert.sev === 'success') { navigate('/SignupInterest') }
    };

    useEffect(()=>{
        if(detail.dob && detail.gender){
            if(detail.gender==='other' && !detail.addressBy)
            {
                setFlag(false)
            }
            else{
                setFlag(true)
            }
        } 
    },[detail])



    return (
        <>
            <section className="login-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12 m-auto">
                            <div className="login-header-section">
                                <div className="logo-sec"><Link className="" to="/"><img src="/assets/images/logo.png" alt="logo" className="img-fluid" /></Link></div>
                            </div>
                            <div className="login-form">
                                <div className="signup-progress-bar">
                                    <div className="su-progress active"></div>
                                    <div className="su-progress active"></div>
                                    <div className="su-progress active"></div>
                                    <div className="su-progress active"></div>
                                    <div className="su-progress"></div>
                                </div>
                                <div>
                                    <div className="login-title">
                                        <h2>Enter DOB</h2>
                                    </div>
                                    <div className="login-discription">
                                        <h4>Please enter your details below.</h4>
                                    </div>
                                    <div className="form-sec">
                                        <div>
                                            <form className="theme-form">
                                                <div className="form-group">
                                                    <label>Enter DOB</label>
                                                    <input type="date" className="form-control" placeholder="DD-MM-YYYY" name="dob" value={detail.dob} onChange={detailHandler} />
                                                    {/* <p className="instruction-msg">Max 64 Characters</p> */}
                                                </div>

                                                <div class="form-group">
                                                    <h3 class="choose-gender-blk">Choose Gender</h3>
                                                    <div class="form-check custom-form-check-login">
                                                        <label class="form-check-label font-weight-normal" htmlFor="male">
                                                            <p>Male</p>
                                                            <input class="form-check-input radio_animated"
                                                                type="radio"
                                                                name="gender"
                                                                id="male"
                                                                value="male"
                                                                onChange={detailHandler} />
                                                        </label>
                                                    </div>
                                                    <div class="form-check custom-form-check-login">
                                                        <label class="form-check-label font-weight-normal" htmlFor="female">
                                                            <p>Female</p>
                                                            <input class="form-check-input radio_animated"
                                                                type="radio"
                                                                name="gender"
                                                                id="female"
                                                                value="female"
                                                                onChange={detailHandler} />
                                                        </label>
                                                    </div>
                                                    <div class="form-check custom-form-check-login">
                                                        <label class="form-check-label font-weight-normal" htmlFor="special">
                                                            <p>I am Special</p>
                                                            <input class="form-check-input radio_animated"
                                                                type="radio"
                                                                name="gender"
                                                                id="special"
                                                                value="other"
                                                                onChange={detailHandler} />
                                                        </label>
                                                    </div>
                                                    {
                                                        detail.gender === 'other' && (
                                                            <div class="specialgender">
                                                                <h3>How should we address you</h3>
                                                                <div class="form-check custom-form-check-login">
                                                                    <label class="form-check-label font-weight-normal" htmlFor="he">
                                                                        <p>He</p>
                                                                        <input class="form-check-input radio_animated" type="radio" name="addressBy" id="he" value="he" onChange={detailHandler}/>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check custom-form-check-login">
                                                                    <label class="form-check-label font-weight-normal" htmlFor="she">
                                                                        <p>She</p>
                                                                        <input class="form-check-input radio_animated" type="radio" name="addressBy" id="she" value="she" onChange={detailHandler}/>
                                                                    </label>
                                                                </div>
                                                                <div class="form-check custom-form-check-login">
                                                                    <label class="form-check-label font-weight-normal" htmlFor="notspecify">
                                                                        <p>Rather not specify</p>
                                                                        <input class="form-check-input radio_animated" type="radio" name="addressBy" id="notspecify" value="none" onChange={detailHandler}/>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        )
                                                    }

                                                </div>
                                                <div className="btn-section">
                                                    <Stack spacing={2} sx={{ width: '100%' }} id="stack">
                                                        <button className="btn btn-solid btn-lg" onClick={detailSubmit} disabled={!flag}>CONTINUE</button>
                                                        {/* Snackbar */}
                                                        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={1500} onClose={handleClose}>
                                                            <Alert onClose={handleClose} severity={alert.sev} sx={{ width: '100%' }}>
                                                                {alert.content}
                                                            </Alert>
                                                        </Snackbar>
                                                    </Stack>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignupDetail
