import React, { Component, useRef, useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import DateTimePicker from "react-datetime-picker";

// Use for snakebar
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../Services/Actions/getAllUserPostsAction';
import { loadProfileByUserId } from '../Services/Actions/UserProfile/getUserProfileByUserIdAction';
import { loadArticleCategory } from '../Services/Actions/getArticleCategoryAction';
import { loadEventCategory } from '../Services/Actions/getEventCategoryAction';
import { loadAlertLevel, loadAlertRange } from '../Services/Actions/getAlertDataAction';
import AddInYourPost from './AddInYourPost';

export default function CreatePost() {
    const [value2, onChange2] = useState(new Date());
    const [value3, onChange3] = useState(new Date());
    // this is used for event post
    const [startTime, startOnChange] = useState(new Date());
    const [endTime, endOnChange] = useState(new Date());

    // Media File Preview of media post
    const [file, setFile] = useState();
    const [postMedia, setPostMedia] = useState('');

    // Media File Preview of event post
    const [eventCoverImage, setEventCoverImage] = useState();
    const [postMedia2, setPostMedia2] = useState('');


    // get all article category
    const { articleCategory } = useSelector(state => state.getArticleCategoryData)
    // get all event category
    const { eventCategory } = useSelector(state => state.getEventCategoryData)



    function handleChange(e, identifier) {
        if (identifier === 'media') {
            console.log(e.target.files);
            setFile(URL.createObjectURL(e.target.files[0]));
            setPostMedia(e.target.files[0]);
        }
        else {
            setEventCoverImage(URL.createObjectURL(e.target.files[0]));
            setPostMedia2(e.target.files[0]);
        }


    }

    const [postData, setPostData] = useState({
        postType: "text",
        caption: "",
        displayLocation: "",
        schedule: "",
        isScheduled: "",
        feelingId: "",
        feelingCategoryId: "",
        allowComments: 0,

        mentionIds: null,
        hashTags: [],
        taggedUserIds: null,

        locationLAT: "",
        locationLONG: "",
        location1: "",
        location2: "",
        location3: ""
    })


    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    // Snackbar Code
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState({ sev: 'success', content: '' });
    const [pollOptions, setPollOptions] = useState({ poll1: { optionText: "", sequence: 0 }, poll2: { optionText: "", sequence: 2 }, poll3: { optionText: "", sequence: 3 }, poll4: { optionText: "", sequence: 4 } })

    // get user profile by user id 
    const { userProfileByUserId } = useSelector(state => state.getUserProfileByUserIdData);
    // get all alert range
    const { alertRange } = useSelector(state => state.getAlertData)
    // get all alert level
    const { alertLevel } = useSelector(state => state.getAlertData)

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProfileByUserId());
    }, [])


    //   Create Post BG 
    const bgNoneRef = useRef(null);
    const bgRef = useRef(null);
    // Create Thought Post 
    const clickGradient = (e) => {
        bgRef.current.classList.add("d-block");
        bgNoneRef.current.classList.add("d-none");
        mediaRef.current.classList.remove("d-block");
        alertRef.current.classList.remove("d-block");
        RecommendationRef.current.classList.remove("d-block");
    };
    const closeBgClick = (e) => {
        bgRef.current.classList.remove("d-block");
        bgNoneRef.current.classList.remove("d-none");
    };

    // Create Media Post 
    const mediaRef = useRef(null);
    const gradientMainBlockRef = useRef(null);
    const clickMedia = (e) => {
        mediaRef.current.classList.add("d-block");
        bgNoneRef.current.classList.add("d-none");
        bgRef.current.classList.remove("d-block");
        alertRef.current.classList.remove("d-block");
        RecommendationRef.current.classList.remove("d-block");
    };
    const closeMediaClick = (e) => {
        mediaRef.current.classList.remove("d-block");
        bgNoneRef.current.classList.remove("d-none");
        setFile("")
    };

    // Create Recommendation Post 
    const RecommendationRef = useRef(null);
    const clickRecommendation = (e) => {
        RecommendationRef.current.classList.add("d-block");
        setPostData({ ...postData, postType: 'recommendation' })
        bgNoneRef.current.classList.add("d-none");
        mediaRef.current.classList.remove("d-block");
        alertRef.current.classList.remove("d-block");
        //gradient Button
        gradientMainBlockRef.current.classList.add("d-none");
        opneGradientRef.current.classList.remove("d-none");
        colorListRef.current.classList.remove("d-block");
        colorToggleRef.current.classList.remove("d-block");
        colorListRef.current.classList.add("d-none");
        colorToggleRef.current.classList.add("d-none");
    };

    // Create Article Post
    const articleRef = useRef(null);
    // const clickArticle = (e) => {
    //     articleRef.current.classList.add("d-block");
    //     bgNoneRef.current.classList.add("d-none");
    //     bgRef.current.classList.remove("d-block");
    //     mediaRef.current.classList.remove("d-block");
    //     eventRef.current.classList.remove("d-block");
    //     pollRef.current.classList.remove("d-block");
    //     alertRef.current.classList.remove("d-block");
    //     dispatch(loadArticleCategory())
    //     setPostData({ postType: 'article' })
    // };



    // Create Alert Post
    const alertRef = useRef(null);
    const clickAlert = (e) => {
        alertRef.current.classList.add("d-block");
        bgNoneRef.current.classList.add("d-none");
        bgRef.current.classList.remove("d-block");
        mediaRef.current.classList.remove("d-block");
        RecommendationRef.current.classList.remove("d-block");
        //gradient Button
        gradientMainBlockRef.current.classList.add("d-none");
        opneGradientRef.current.classList.remove("d-none");
        colorListRef.current.classList.remove("d-block");
        colorToggleRef.current.classList.remove("d-block");
        colorListRef.current.classList.add("d-none");
        colorToggleRef.current.classList.add("d-none");
        setPostData({ postType: 'alert' })
        dispatch(loadAlertLevel())
        dispatch(loadAlertRange())
    };

    // Show Color Plate 
    const colorListRef = useRef(null);
    const colorToggleRef = useRef(null);
    const opneGradientRef = useRef(null);
    const clickColorShow = (e) => {
        colorListRef.current.classList.add("d-block");
        colorToggleRef.current.classList.add("d-block");
        opneGradientRef.current.classList.add("d-none");
        colorListRef.current.classList.remove("d-none");
        colorToggleRef.current.classList.remove("d-none");
    };
    const clickColorHide = (e) => {
        opneGradientRef.current.classList.remove("d-none");
        colorListRef.current.classList.remove("d-block");
        colorToggleRef.current.classList.remove("d-block");
        colorListRef.current.classList.add("d-none");
        colorToggleRef.current.classList.add("d-none");
    };

    //Event Popup Function
    const eventPopup = () => {
        dispatch(loadEventCategory())
        setPostData({ postType: 'event' })
    }
    //Poll Popup Function
    const pollPopup = () => {
        setPostData({ ...postData, postType: 'poll' })
    }

    // create post functionality
    const createPostHandler = (e) => {
        e.preventDefault();
        console.log(postData)
        if (!postData.caption) { setOpen(true); setAlert({ sev: "error", content: "Please Enter Caption !", }); }
        else {
            axios.get('https://api.ipgeolocation.io/ipgeo?apiKey=c1016d597c494a02aa190877148a5688')
                .then((res) => {
                    postData.locationLAT = res.data.latitude;
                    postData.locationLONG = res.data.longitude;
                    postData.location1 = res.data.country_name;
                    postData.location2 = res.data.state_prov;
                    postData.location3 = res.data.city;
                    if (file) {
                        postData.postType = 'media';
                        const formData = new FormData();
                        formData.append('files', postMedia);
                        formData.append('uploadFor', 'postMedia');
                        axios.post(`${process.env.REACT_APP_IPURL}/admin/UploadFile`, formData, { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}` } })
                            .then((res) => {
                                postData.mediaList = [
                                    {
                                        "fileType": "image",
                                        "fileURL": res.data.data.successResult[0],
                                        "caption": "media File Caption",
                                        "sequence": 0
                                    }
                                ];
                                dispatch(addPost(postData));
                                setPostData({
                                    "postType": "text",
                                    "caption": "",
                                    "displayLocation": "",
                                    "schedule": "",
                                    "isScheduled": "",
                                    "feelingId": "",
                                    "feelingCategoryId": "",
                                    "allowComments": 0,

                                    "mentionIds": null,
                                    "hashTags": [],
                                    "taggedUserIds": null,

                                    "locationLAT": "",
                                    "locationLONG": "",
                                    "location1": "",
                                    "location2": "",
                                    "location3": ""
                                })
                                setFile('');
                                setOpen(true);
                                setAlert({ sev: "success", content: "Post Add Successfully !", });
                            })
                            .catch((error) => {
                                console.log(error);
                            })
                    }
                    else if (postData.postType === 'poll') {
                        if (pollOptions.poll1.optionText === '' && pollOptions.poll2.optionText === '' && pollOptions.poll3.optionText === '' && pollOptions.poll4.optionText === '') {
                            setOpen(true); setAlert({ sev: "error", content: "Please Enter Poll Options !", });
                        }
                        else {
                            let polOpt = [];
                            for (let key in pollOptions) {
                                if (pollOptions[key].optionText !== '') {
                                    polOpt.push(pollOptions[key])
                                }
                            }
                            postData.pollOptions = polOpt;
                            postData.pollStartTime = value2;

                            postData.pollEndTime = value3;
                            dispatch(addPost(postData));
                            // pollRef.current.classList.remove("d-block");
                            bgNoneRef.current.classList.remove("d-none");

                            setPostData({
                                "postType": "text",
                                "caption": "",
                                "displayLocation": "",
                                "schedule": "",
                                "isScheduled": "",
                                "feelingId": "",
                                "feelingCategoryId": "",
                                "allowComments": 0,
                                "pollOptions": [],

                                "mentionIds": null,
                                "hashTags": [],
                                "taggedUserIds": null,

                                "locationLAT": "",
                                "locationLONG": "",
                                "location1": "",
                                "location2": "",
                                "location3": ""
                            })
                            setPollOptions({ poll1: { optionText: "", sequence: 0 }, poll2: { optionText: "", sequence: 2 }, poll3: { optionText: "", sequence: 3 }, poll4: { optionText: "", sequence: 4 } })
                            document.getElementById('popupclose3').click();
                            setOpen(true);
                            setAlert({ sev: "success", content: "Post Add Successfully !", });
                            console.log(document.getElementById('popupclose3'))
                        }
                    }
                    else if (postData.postType === 'event') {
                        postData.eventStartTime = startTime;
                        postData.eventEndTime = endTime;
                        if (postData.caption === '' || postData?.eventCategoryId === '' || eventCoverImage === '' || postData.eventStartTime === '' || postData.eventEndTime === '' || !postData?.eventDescription || postData.eventDescription === '' || !postData?.eventAddress || postData.eventAddress === '') {
                            setOpen(true); setAlert({ sev: "error", content: "Please Fill All Data !", });
                        }
                        else {
                            console.log(postData)
                            const formData = new FormData();
                            formData.append('files', postMedia2);
                            formData.append('uploadFor', 'postMedia');
                            axios.post(`${process.env.REACT_APP_IPURL}/admin/UploadFile`, formData, { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).token}` } })
                                .then(res => {
                                    postData.eventCoverImageURL = res.data.data.successResult[0];
                                    dispatch(addPost(postData));
                                    // eventRef.current.classList.remove("d-block");
                                    bgNoneRef.current.classList.remove("d-none");
                                    document.getElementById('popupclose').click();
                                    setPostData({
                                        "postType": "text",
                                        "caption": "",
                                        "displayLocation": "",
                                        "schedule": "",
                                        "isScheduled": "",
                                        "feelingId": "",
                                        "feelingCategoryId": "",
                                        "allowComments": 0,
                                        "pollOptions": [],

                                        "mentionIds": null,
                                        "hashTags": [],
                                        "taggedUserIds": null,

                                        "locationLAT": "",
                                        "locationLONG": "",
                                        "location1": "",
                                        "location2": "",
                                        "location3": ""
                                    })
                                    setOpen(true);
                                    setAlert({ sev: "success", content: "Post Add Successfully !", });

                                })
                                .catch(err => {
                                    console.log(err)
                                })

                        }
                    }
                    else if (postData.postType === 'alert') {
                        if (!postData?.alertLevelId || !postData?.alertRangeMeter) {
                            setOpen(true); setAlert({ sev: "error", content: "Please Fill All Data !", });
                        }
                        else {

                            dispatch(addPost(postData));
                            alertRef.current.classList.remove("d-block");
                            bgNoneRef.current.classList.remove("d-none");
                            setPostData({
                                "postType": "text",
                                "caption": "",
                                "displayLocation": "",
                                "schedule": "",
                                "isScheduled": "",
                                "feelingId": "",
                                "feelingCategoryId": "",
                                "allowComments": 0,
                                "pollOptions": [],

                                "mentionIds": null,
                                "hashTags": [],
                                "taggedUserIds": null,

                                "locationLAT": "",
                                "locationLONG": "",
                                "location1": "",
                                "location2": "",
                                "location3": ""
                            })
                            setOpen(true);
                            setAlert({ sev: "success", content: "Post Add Successfully !", });

                        }
                    }
                    else {

                        dispatch(addPost(postData));
                        setPostData({
                            "postType": "text",
                            "caption": "",
                            "displayLocation": "",
                            "schedule": "",
                            "isScheduled": "",
                            "feelingId": "",
                            "feelingCategoryId": "",
                            "allowComments": 0,

                            "mentionIds": null,
                            "hashTags": [],
                            "taggedUserIds": null,

                            "locationLAT": "",
                            "locationLONG": "",
                            "location1": "",
                            "location2": "",
                            "location3": ""
                        })
                        setOpen(true);
                        setAlert({ sev: "success", content: "Post Add Successfully !", });
                    }

                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }


    // Cancel Snackbar
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <>
            <div className="create-post">
                <div className="static-section">
                    <div className="card-title create-port-title">
                        <div className="createpost-blk">
                            <h3>create post</h3>
                            <div className="setting-dropdown">
                                <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                    <h5 data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 14 14" fill="none" className="iw-14 globe-svg"> <path fillRule="evenodd" clipRule="evenodd" d="M7.00004 0.583344C3.44171 0.583344 0.583374 3.44168 0.583374 7.00001C0.583374 10.5583 3.44171 13.4167 7.00004 13.4167C10.5584 13.4167 13.4167 10.5583 13.4167 7.00001C13.4167 3.44168 10.5584 0.583344 7.00004 0.583344ZM12.1917 6.41668H9.85837C9.74171 4.78334 9.21671 3.26668 8.28337 1.92501C10.3834 2.45001 11.9584 4.25834 12.1917 6.41668ZM8.75004 7.58334H5.30837C5.42504 9.15834 6.00837 10.675 7.05837 11.9C7.99171 10.675 8.57504 9.15834 8.75004 7.58334ZM5.30837 6.41668C5.48337 4.84168 6.06671 3.32501 7.00004 2.10001C7.99171 3.38334 8.57504 4.90001 8.69171 6.41668H5.30837ZM4.14171 6.41668C4.25837 4.78334 4.78337 3.26668 5.65837 1.92501C3.61671 2.45001 2.04171 4.25834 1.80837 6.41668H4.14171ZM1.80837 7.58334H4.14171C4.25837 9.21668 4.78337 10.7333 5.71671 12.075C3.61671 11.55 2.04171 9.74168 1.80837 7.58334ZM9.91671 7.58334C9.74171 9.21668 9.21671 10.7333 8.34171 12.075C10.3834 11.55 11.9584 9.74168 12.25 7.58334H9.91671Z" fill="#647589" /></svg> public <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-14"><polyline points="6 9 12 15 18 9"></polyline></svg></h5>
                                    <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                        <ul>
                                            <li>
                                                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> public</a>
                                            </li>
                                            <li>
                                                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>friends</a>
                                            </li>
                                            <li>
                                                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>friends
                                                    except</a>
                                            </li>
                                            <li>
                                                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>specific friends</a>
                                            </li>
                                            <li>
                                                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>only me</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="golive-more-blk">
                            <div className="create-btn-livetrad">
                                <a className="btntrad">
                                    <img src="/assets/images/hotspot_pulse-1.svg" />Go Live
                                </a>
                            </div>
                            <div className="settings more-settings-blk">
                                <div className="setting-btn ms-2 setting-dropdown no-bg">
                                    <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                        <div role="button" data-bs-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false" className="morebtn-cust"> More
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-14"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                        </div>
                                        <div className="dropdown-menu dropdown-menu-right custom-dropdown more-post-type-dropdown">
                                            <ul>
                                                <li>
                                                    <a onClick={clickMedia}><img src="/assets/images/Media.png" /> Media</a>
                                                </li>
                                                <li>
                                                    <a onClick={clickGradient}><img src="/assets/images/Thought.png" /> Thought</a>
                                                </li>
                                                <li>
                                                    <a ><img src="/assets/images/Go_live.png" /> Go Live</a>
                                                </li>
                                                <li>
                                                    <a data-bs-toggle="modal" data-bs-target="#createPostEvent" onClick={eventPopup}><img src="assets/images/Event.png" /> Event</a>
                                                </li>
                                                <li>
                                                    <a data-bs-toggle="modal" data-bs-target="#createPostPodcast"><img src="assets/images/Audio.png" /> Podcsat</a>
                                                </li>
                                                <li>
                                                    <a data-bs-toggle="modal" data-bs-target="#createPostArticle"><img src="assets/images/Blog.png" /> Articles</a>
                                                </li>
                                                <li>
                                                    <a onClick={clickRecommendation}><img src="/assets/images/Recommendation.png" /> Recommendation</a>
                                                </li>
                                                <li>
                                                    <a data-bs-toggle="modal" data-bs-target="#createPostPoll" onClick={pollPopup}><img src="/assets/images/Poll.png" /> Poll</a>
                                                </li>
                                                <li>
                                                    <a onClick={clickAlert}><img src="/assets/images/Threat.png" /> Alert</a>
                                                </li>
                                                <li>
                                                    <a data-bs-toggle="modal" data-bs-target="#createPostSell"><img src="assets/images/Sell.png" /> Sell</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gradiant Section */}
                    <div className="search-input input-style icon-right" ref={bgNoneRef}>
                        <div className="creatpost-profile-blk">
                            <img src={userProfileByUserId.profileImage || 'assets/images/my-profile.jpg'} className="img-fluid" alt="profile" />
                        </div>
                        <textarea name="message" className="form-control enable" cols="30" rows="10" placeholder="What’s  going on? #Hashtag... @Mention." spellCheck="false" value={postData.caption} onChange={(e) => { setPostData({ ...postData, caption: e.target.value }) }}></textarea>
                        {/* <input type="text" className="form-control enable" placeholder="write something here.."/> */}
                        <a className="pen-icon-creatpost">
                            <img src={userProfileByUserId.profileImage || 'assets/images/my-profile.jpg'} className="img-fluid icon" alt="pen" />
                        </a>
                    </div>

                    {/* Media Section */}
                    <div className="media-create-post-block" ref={mediaRef}>
                        <div className="search-input input-style icon-right">
                            <div className="creatpost-profile-blk">
                                <img src={userProfileByUserId.profileImage || 'assets/images/my-profile.jpg'} className="img-fluid" alt="profile" />
                            </div>
                            <textarea name="message" className="form-control enable" cols="30" rows="10" placeholder="What’s  going on? #Hashtag... @Mention." spellCheck="false" value={postData.caption} onChange={(e) => { setPostData({ ...postData, caption: e.target.value }) }}></textarea>
                            <a className="pen-icon-creatpost">
                                <img src="/assets/images/pen-solid-2.png" className="img-fluid icon" alt="pen" />
                            </a>
                        </div>
                        <div className="images-videos-block">
                            <a className="media-img-vid-close" onClick={closeMediaClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-20 ih-20"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </a>
                            <input className="choose-file" type="file" onChange={(e) => handleChange(e, 'media')} />
                            <img src={file ? file : "assets/images/image-preview.jpg"} />
                        </div>
                    </div>

                    {/* Recomendation Section */}
                    <div className="search-input input-style icon-right recommendation-block" ref={RecommendationRef}>
                        <div className="creatpost-profile-blk">
                            <img src={userProfileByUserId.profileImage || 'assets/images/my-profile.jpg'} className="img-fluid" alt="profile" />
                        </div>
                        <textarea name="message" className="form-control enable" cols="30" rows="10" placeholder="I am seeking recommendation for " spellCheck="false" onChange={(e) => setPostData({ ...postData, caption: e.target.value })}></textarea>
                        {/* <input type="text" className="form-control enable" placeholder="write something here.."/> */}
                        <a className="pen-icon-creatpost">
                            <img src="assets/images/pen-solid-2.png" className="img-fluid icon" alt="pen" />
                        </a>
                    </div>

                    {/* Alert Section */}
                    <div className="alert-create-post-block" ref={alertRef}>
                        <div className="user-profile-cp">
                            <img src={userProfileByUserId.profileImage || 'assets/images/my-profile.jpg'} className="img-fluid" alt="profile" />
                            <h4>{userProfileByUserId.fullName}</h4>
                        </div>
                        <div className="custom-fixed-height-blk">
                            <form className="theme-form form-sm">
                                <div className="row  g-3">
                                    <div className="form-group col-md-12">
                                        <h4 className="create-alert-head">#creatalert</h4>
                                        {/* <label>Description</label> */}
                                        <div className="create-alert-textarea">
                                            <textarea rows="5" className="form-control" placeholder="Define the threat..." onChange={(e) => setPostData({ ...postData, caption: e.target.value })}></textarea>
                                            <p className="input-hints">Max 320 Characters</p>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label><svg viewBox="0 0 24 24" width="12" height="12" stroke="#FF822E" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> Alert Level</label>
                                        <select id="inputState" className="form-control" onChange={(e) => setPostData({ ...postData, alertLevelId: e.target.value })}>
                                            <option value="">Select...</option>
                                            {
                                                alertLevel && alertLevel.map((lev) => {
                                                    return <option value={lev.id} key={lev.id}>{lev.name}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label><svg viewBox="0 0 24 24" width="12" height="12" stroke="#16C31E" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Post Alert within</label>
                                        <select id="inputState" className="form-control" onChange={(e) => setPostData({ ...postData, alertRangeMeter: e.target.value })}>
                                            <option value="">Select...</option>
                                            {
                                                alertRange && alertRange.map((ran, i) => {
                                                    return <option value={ran.distance} key={i}>{`${ran.distance} ${ran.unit}`}</option>
                                                })
                                            }

                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="create-bg">
                        <div className="bg-post gr-1" ref={bgRef} id="bg-post">
                            <div className="input-sec">
                                <input type="text" className="form-control enable"
                                    placeholder="What's going on" />
                                <div className="close-icon" onClick={closeBgClick}>
                                    <a>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-20 ih-20"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-bg-block" ref={gradientMainBlockRef}>
                            <img className="opengradient-box" ref={opneGradientRef} onClick={clickColorShow} src="assets/images/colorgroupbtn.png" />
                            <ul className="gradient-bg d-none" ref={colorListRef}>
                                <li className="closearrow-btn" onClick={clickColorHide}></li>
                                <li onClick={clickGradient} className="gr-1"></li>
                                <li onClick={clickGradient} className="gr-2"></li>
                                <li onClick={clickGradient} className="gr-3"></li>
                                <li onClick={clickGradient} className="gr-4"></li>
                                <li onClick={clickGradient} className="gr-5"></li>
                                <li onClick={clickGradient} className="gr-6"></li>
                                <li onClick={clickGradient} className="gr-7"></li>
                                <li onClick={clickGradient} className="gr-8"></li>
                                <li onClick={clickGradient} className="gr-9"></li>
                                <li onClick={clickGradient} className="gr-10"></li>
                                <li onClick={clickGradient} className="gr-11"></li>
                                <li onClick={clickGradient} className="gr-12"></li>
                                <li onClick={clickGradient} className="gr-13"></li>
                                <li onClick={clickGradient} className="gr-14"></li>
                                <li onClick={clickGradient} className="gr-15"></li>
                            </ul>
                            <a className="bg-color-btn d-none" ref={colorToggleRef} data-bs-toggle="modal" data-bs-target="#bgColorModel"><img src="assets/images/bg-color.png" /></a>
                        </div>
                    </div>
                </div>

                <AddInYourPost createPostHandler={createPostHandler} postData={postData} setPostData={setPostData} clickMedia={clickMedia} />

                {/* <ul className="create-btm-option">
            <li>
                <input className="choose-file" type="file"/>
                <h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-14"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>album</h5>
            </li>
            <li id="feeling-btn" onClick={onfeelingClick}>
                <h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-15"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>feelings & acitivity</h5>
            </li>
            <li id="checkin-btn" onClick={onplaceClick}>
                <h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-15"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>check in</h5>
            </li>
            <li id="friends-btn" onClick={onfriendClick}>
                <h5><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-15"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>tag friends</h5>
            </li>
        </ul> */}


            </div>

            {/* Event Model Block */}
            <div className="modal fade" id="createPostEvent" tabIndex="-1" role="dialog" aria-labelledby="createPostEventTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered create-post-model-block" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <a data-bs-dismiss="modal" aria-label="Close" className="popupclose-button" id="popupclose"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                            <div className="create-post">
                                <div className="static-section">
                                    <div className="card-title create-port-title">
                                        <div className="createpost-blk">
                                            <h3>create post</h3>
                                        </div>
                                        <div className="setting-dropdown">
                                            <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                                <h5 data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 14 14" fill="none" className="iw-14 globe-svg"> <path fillRule="evenodd" clipRule="evenodd" d="M7.00004 0.583344C3.44171 0.583344 0.583374 3.44168 0.583374 7.00001C0.583374 10.5583 3.44171 13.4167 7.00004 13.4167C10.5584 13.4167 13.4167 10.5583 13.4167 7.00001C13.4167 3.44168 10.5584 0.583344 7.00004 0.583344ZM12.1917 6.41668H9.85837C9.74171 4.78334 9.21671 3.26668 8.28337 1.92501C10.3834 2.45001 11.9584 4.25834 12.1917 6.41668ZM8.75004 7.58334H5.30837C5.42504 9.15834 6.00837 10.675 7.05837 11.9C7.99171 10.675 8.57504 9.15834 8.75004 7.58334ZM5.30837 6.41668C5.48337 4.84168 6.06671 3.32501 7.00004 2.10001C7.99171 3.38334 8.57504 4.90001 8.69171 6.41668H5.30837ZM4.14171 6.41668C4.25837 4.78334 4.78337 3.26668 5.65837 1.92501C3.61671 2.45001 2.04171 4.25834 1.80837 6.41668H4.14171ZM1.80837 7.58334H4.14171C4.25837 9.21668 4.78337 10.7333 5.71671 12.075C3.61671 11.55 2.04171 9.74168 1.80837 7.58334ZM9.91671 7.58334C9.74171 9.21668 9.21671 10.7333 8.34171 12.075C10.3834 11.55 11.9584 9.74168 12.25 7.58334H9.91671Z" fill="#647589" /></svg> public <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-14"><polyline points="6 9 12 15 18 9"></polyline></svg></h5>
                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                                    <ul>
                                                        <li>
                                                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> public</a>
                                                        </li>
                                                        <li>
                                                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>friends</a>
                                                        </li>
                                                        <li>
                                                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>friends
                                                                except</a>
                                                        </li>
                                                        <li>
                                                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>specific friends</a>
                                                        </li>
                                                        <li>
                                                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>only me</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="event-create-post-block">
                                        <div className="user-profile-cp">
                                            <img src={userProfileByUserId.profileImage || 'assets/images/my-profile.jpg'} className="img-fluid" alt="profile" />
                                            <h4>{userProfileByUserId.fullName}</h4>
                                        </div>
                                        <form className="theme-form form-sm">
                                            <div className="row  g-3">
                                                <div className="form-group col-12">
                                                    <label>Event Category</label>
                                                    <select id="inputState" className="form-control" onChange={(e) => setPostData({ ...postData, eventCategoryId: e.target.value })}>
                                                        <option value="">Select...</option>
                                                        {
                                                            eventCategory && eventCategory.map((event) => {
                                                                return <option value={event.id} key={event.id}>{event.name}</option>
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label>Event Title*</label>
                                                    <input type="text" className="form-control" required onChange={(e) => setPostData({ ...postData, caption: e.target.value })} />
                                                    <p className="input-hints">Max 64 Characters</p>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label>Upload Event Cover Photo</label>
                                                    <div className="upload-image-blk">
                                                        <input type="file" onChange={(e) => handleChange(e, 'event')} />
                                                        <img src={eventCoverImage} className="event-img-prev" />
                                                    </div>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label>Description</label>
                                                    <textarea rows="3" className="form-control" onChange={(e) => setPostData({ ...postData, eventDescription: e.target.value })}></textarea>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label>Event Start Date</label>
                                                    <DateTimePicker className="form-control" placeholder="dd-mm-yyyy" onChange={startOnChange} value={startTime} />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label>Event End Date</label>
                                                    <DateTimePicker className="form-control" placeholder="dd-mm-yyyy" onChange={endOnChange} value={endTime} />
                                                </div>

                                                <div className="form-group col-md-12">
                                                    <label>Address or Link to event</label>
                                                    <input type="text" className="form-control" required onChange={(e) => setPostData({ ...postData, eventAddress: e.target.value })} />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <AddInYourPost createPostHandler={createPostHandler} postData={postData} setPostData={setPostData} clickMedia={clickMedia} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*Article Model Block  */}
            <div className="modal fade" id="createPostArticle" tabIndex="-1" role="dialog" aria-labelledby="createPostArticleTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered create-post-model-block" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <a data-bs-dismiss="modal" aria-label="Close" className="popupclose-button" id="popupclose2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                            <div className="create-post">
                                <div className="static-section">
                                    <div className="card-title create-port-title">
                                        <div className="createpost-blk">
                                            <h3>create post</h3>
                                        </div>
                                        <div className="setting-dropdown">
                                            <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                                <h5 data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 14 14" fill="none" className="iw-14 globe-svg"> <path fillRule="evenodd" clipRule="evenodd" d="M7.00004 0.583344C3.44171 0.583344 0.583374 3.44168 0.583374 7.00001C0.583374 10.5583 3.44171 13.4167 7.00004 13.4167C10.5584 13.4167 13.4167 10.5583 13.4167 7.00001C13.4167 3.44168 10.5584 0.583344 7.00004 0.583344ZM12.1917 6.41668H9.85837C9.74171 4.78334 9.21671 3.26668 8.28337 1.92501C10.3834 2.45001 11.9584 4.25834 12.1917 6.41668ZM8.75004 7.58334H5.30837C5.42504 9.15834 6.00837 10.675 7.05837 11.9C7.99171 10.675 8.57504 9.15834 8.75004 7.58334ZM5.30837 6.41668C5.48337 4.84168 6.06671 3.32501 7.00004 2.10001C7.99171 3.38334 8.57504 4.90001 8.69171 6.41668H5.30837ZM4.14171 6.41668C4.25837 4.78334 4.78337 3.26668 5.65837 1.92501C3.61671 2.45001 2.04171 4.25834 1.80837 6.41668H4.14171ZM1.80837 7.58334H4.14171C4.25837 9.21668 4.78337 10.7333 5.71671 12.075C3.61671 11.55 2.04171 9.74168 1.80837 7.58334ZM9.91671 7.58334C9.74171 9.21668 9.21671 10.7333 8.34171 12.075C10.3834 11.55 11.9584 9.74168 12.25 7.58334H9.91671Z" fill="#647589" /></svg> public <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-14"><polyline points="6 9 12 15 18 9"></polyline></svg></h5>
                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                                    <ul>
                                                        <li>
                                                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> public</a>
                                                        </li>
                                                        <li>
                                                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>friends</a>
                                                        </li>
                                                        <li>
                                                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>friends
                                                                except</a>
                                                        </li>
                                                        <li>
                                                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>specific friends</a>
                                                        </li>
                                                        <li>
                                                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>only me</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="article-create-post-block">
                                        <div className="user-profile-cp">
                                            <img src={userProfileByUserId.profileImage || 'assets/images/my-profile.jpg'} className="img-fluid" alt="profile" />
                                            <h4>{userProfileByUserId.fullName}</h4>
                                        </div>
                                        <form className="theme-form form-sm">
                                            <div className="row  g-3">
                                                <div className="form-group col-12">
                                                    <label>Article Catagory</label>
                                                    <select id="inputState" className="form-control">
                                                        <option value="">Select...</option>
                                                        {
                                                            articleCategory && articleCategory.map((art) => {
                                                                return <option value={art.id} key={art.id}>{art.name}</option>
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label>Article Title*</label>
                                                    <input type="text" className="form-control" required />
                                                    <p className="input-hints">Min 3 and Max 16 Characters</p>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label>Upload banner Image</label>
                                                    <div className="upload-image-blk">
                                                        <input type="file" onChange={handleChange} />
                                                        <img src={file} className="event-img-prev" />
                                                    </div>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label>Description</label>
                                                    <textarea rows="3" className="form-control"></textarea>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label>Add tags</label>
                                                    <input type="text" className="form-control" />
                                                    <p className="input-hints">Min 3 and Max 16 Characters</p>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <AddInYourPost createPostHandler={createPostHandler} postData={postData} setPostData={setPostData} clickMedia={clickMedia} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Poll Model Block */}
            <div className="modal fade" id="createPostPoll" tabIndex="-1" role="dialog" aria-labelledby="createPostPollTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered create-post-model-block" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <a data-bs-dismiss="modal" aria-label="Close" className="popupclose-button" id="popupclose3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                            <div className="create-post">
                                <div className="static-section">
                                    <div className="card-title create-port-title">
                                        <div className="createpost-blk">
                                            <h3>create post</h3>
                                        </div>
                                        <div className="setting-dropdown">
                                            <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                                <h5 data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 14 14" fill="none" className="iw-14 globe-svg"> <path fillRule="evenodd" clipRule="evenodd" d="M7.00004 0.583344C3.44171 0.583344 0.583374 3.44168 0.583374 7.00001C0.583374 10.5583 3.44171 13.4167 7.00004 13.4167C10.5584 13.4167 13.4167 10.5583 13.4167 7.00001C13.4167 3.44168 10.5584 0.583344 7.00004 0.583344ZM12.1917 6.41668H9.85837C9.74171 4.78334 9.21671 3.26668 8.28337 1.92501C10.3834 2.45001 11.9584 4.25834 12.1917 6.41668ZM8.75004 7.58334H5.30837C5.42504 9.15834 6.00837 10.675 7.05837 11.9C7.99171 10.675 8.57504 9.15834 8.75004 7.58334ZM5.30837 6.41668C5.48337 4.84168 6.06671 3.32501 7.00004 2.10001C7.99171 3.38334 8.57504 4.90001 8.69171 6.41668H5.30837ZM4.14171 6.41668C4.25837 4.78334 4.78337 3.26668 5.65837 1.92501C3.61671 2.45001 2.04171 4.25834 1.80837 6.41668H4.14171ZM1.80837 7.58334H4.14171C4.25837 9.21668 4.78337 10.7333 5.71671 12.075C3.61671 11.55 2.04171 9.74168 1.80837 7.58334ZM9.91671 7.58334C9.74171 9.21668 9.21671 10.7333 8.34171 12.075C10.3834 11.55 11.9584 9.74168 12.25 7.58334H9.91671Z" fill="#647589" /></svg> public <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-14"><polyline points="6 9 12 15 18 9"></polyline></svg></h5>
                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                                    <ul>
                                                        <li>
                                                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> public</a>
                                                        </li>
                                                        <li>
                                                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>friends</a>
                                                        </li>
                                                        <li>
                                                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>friends
                                                                except</a>
                                                        </li>
                                                        <li>
                                                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>specific friends</a>
                                                        </li>
                                                        <li>
                                                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>only me</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="poll-create-post-block">
                                        <div className="user-profile-cp">
                                            <img src={userProfileByUserId.profileImage || 'assets/images/my-profile.jpg'} className="img-fluid" alt="profile" />
                                            <h4>{userProfileByUserId.fullName}</h4>
                                        </div>
                                        <form className="theme-form form-sm">
                                            <div className="row  g-3">
                                                <div className="form-group col-12">
                                                    <label>Poll Question</label>
                                                    <input type="text" className="form-control" required onChange={(e) => { postData.postType === 'poll' ? setPostData({ ...postData, caption: e.target.value }) : setPostData({ ...postData, postType: "media" }) }} />
                                                </div>
                                                <div className="poll-option-blk">
                                                    <div className="form-group col-md-12">
                                                        <label>Option 1</label>
                                                        <input type="text" className="form-control" required value={pollOptions.poll1.optionText} onChange={(e) => { setPollOptions({ ...pollOptions, poll1: { optionText: e.target.value, sequence: 0 } }) }} />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label>Option 2</label>
                                                        <input type="text" className="form-control" required value={pollOptions.poll2.optionText} onChange={(e) => { setPollOptions({ ...pollOptions, poll2: { optionText: e.target.value, sequence: 1 } }) }} />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label>Option 3</label>
                                                        <input type="text" className="form-control" required value={pollOptions.poll3.optionText} onChange={(e) => { setPollOptions({ ...pollOptions, poll3: { optionText: e.target.value, sequence: 2 } }) }} />
                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label>Option 4</label>
                                                        <input type="text" className="form-control" required value={pollOptions.poll4.optionText} onChange={(e) => { setPollOptions({ ...pollOptions, poll4: { optionText: e.target.value, sequence: 3 } }) }} />
                                                    </div>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label>Poll Duration</label>
                                                    <p className="poll-duration-cont">This poll will be automatically disabled after the selected time duration</p>
                                                    <div className="row">
                                                        <div className="col-md-12 search-input schedule-input"><DateTimePicker className="form-control" placeholder="dd-mm-yyyy" onChange={onChange2} value={value2} /></div>
                                                        <div className="col-md-12 search-input schedule-input mt-3"><DateTimePicker className="form-control" placeholder="dd-mm-yyyy" onChange={onChange3} value={value3} /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <AddInYourPost createPostHandler={createPostHandler} postData={postData} setPostData={setPostData} clickMedia={clickMedia} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Podcast Model Block */}
            <div className="modal fade" id="createPostPodcast" tabIndex="-1" role="dialog" aria-labelledby="createPostPodcastTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered create-post-model-block" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <a data-bs-dismiss="modal" aria-label="Close" className="popupclose-button" id="popupclose"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                            <div className="create-post">
                                <div className="static-section">
                                    <div className="card-title create-port-title">
                                        <div className="createpost-blk">
                                            <h3>create post</h3>
                                        </div>
                                        <div className="setting-dropdown">
                                            <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                                <h5 data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 14 14" fill="none" className="iw-14 globe-svg"> <path fillRule="evenodd" clipRule="evenodd" d="M7.00004 0.583344C3.44171 0.583344 0.583374 3.44168 0.583374 7.00001C0.583374 10.5583 3.44171 13.4167 7.00004 13.4167C10.5584 13.4167 13.4167 10.5583 13.4167 7.00001C13.4167 3.44168 10.5584 0.583344 7.00004 0.583344ZM12.1917 6.41668H9.85837C9.74171 4.78334 9.21671 3.26668 8.28337 1.92501C10.3834 2.45001 11.9584 4.25834 12.1917 6.41668ZM8.75004 7.58334H5.30837C5.42504 9.15834 6.00837 10.675 7.05837 11.9C7.99171 10.675 8.57504 9.15834 8.75004 7.58334ZM5.30837 6.41668C5.48337 4.84168 6.06671 3.32501 7.00004 2.10001C7.99171 3.38334 8.57504 4.90001 8.69171 6.41668H5.30837ZM4.14171 6.41668C4.25837 4.78334 4.78337 3.26668 5.65837 1.92501C3.61671 2.45001 2.04171 4.25834 1.80837 6.41668H4.14171ZM1.80837 7.58334H4.14171C4.25837 9.21668 4.78337 10.7333 5.71671 12.075C3.61671 11.55 2.04171 9.74168 1.80837 7.58334ZM9.91671 7.58334C9.74171 9.21668 9.21671 10.7333 8.34171 12.075C10.3834 11.55 11.9584 9.74168 12.25 7.58334H9.91671Z" fill="#647589" /></svg> public <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-14"><polyline points="6 9 12 15 18 9"></polyline></svg></h5>
                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                                    <ul>
                                                        <li>
                                                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> public</a>
                                                        </li>
                                                        <li>
                                                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>friends</a>
                                                        </li>
                                                        <li>
                                                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>friends
                                                                except</a>
                                                        </li>
                                                        <li>
                                                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>specific friends</a>
                                                        </li>
                                                        <li>
                                                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>only me</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="article-create-post-block">
                                        <div className="user-profile-cp">
                                            <img src={userProfileByUserId.profileImage || 'assets/images/my-profile.jpg'} className="img-fluid" alt="profile" />
                                            <h4>{userProfileByUserId.fullName}</h4>
                                        </div>
                                        <form className="theme-form form-sm">
                                            <div className="row  g-3">
                                                <div className="form-group col-12">
                                                    <label>Podcast Type</label>
                                                    <select id="inputState" className="form-control">
                                                        <option>Live Podcast</option>
                                                        <option>Upload Recorded Poadcast</option>
                                                        <option>Create New Poadcast Series</option>
                                                    </select>
                                                </div>
                                                <div className="form-group col-12">
                                                    <label>Podcast Category</label>
                                                    <select id="inputState" className="form-control">
                                                        <option>Education</option>
                                                        <option>Politics & Crupption</option>
                                                        <option>Food</option>
                                                        <option>Science</option>
                                                        <option>Geogrophy</option>
                                                        <option>Social Work & Management</option>
                                                        <option>Internationa Economy Management system</option>
                                                        <option>Sports</option>
                                                        <option>Tour & Travels</option>
                                                        <option>Party</option>
                                                        <option>Art & Craft</option>
                                                        <option>Journey</option>
                                                        <option>Birds & Aminals</option>
                                                        <option>Business</option>
                                                        <option>Software Development</option>
                                                        <option>Infrastructure Development</option>
                                                        <option>Astrology</option>
                                                        <option>Medical & Health</option>
                                                    </select>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label>Podcast Title</label>
                                                    <input type="text" className="form-control" required />
                                                    <p className="input-hints">Max 120 Characters</p>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label>Upload podcast cover Image</label>
                                                    <div className="upload-image-blk">
                                                        <input type="file" onChange={handleChange} />
                                                        <img src={file} className="event-img-prev" />
                                                    </div>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label>Upload Voice</label>
                                                    <div className="upload-image-blk">
                                                        <input type="file" />
                                                        <div className="audio-preview-blk">
                                                            <audio controls controlsList="nodownload noplaybackrate">
                                                                <source src="assets/images/audio/audio-file.mp3" type="audio/mpeg" />
                                                            </audio>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label>Paid (Optional)</label>
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <select id="inputState" className="form-control">
                                                                <option>$</option>
                                                                <option>€</option>
                                                                <option>₹</option>
                                                                <option>£</option>
                                                                <option>¥</option>
                                                                <option>J$</option>
                                                                <option>₩</option>
                                                                <option>₮</option>
                                                                <option>ƒ</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-9">
                                                            <input type="text" className="form-control" placeholder="Enter amount..." />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label>About Podcast</label>
                                                    <textarea rows="3" className="form-control"></textarea>
                                                    <p className="input-hints">Max 1200 Characters</p>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <AddInYourPost createPostHandler={createPostHandler} postData={postData} setPostData={setPostData} clickMedia={clickMedia} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sell Model Post */}
            <div className="modal fade" id="createPostSell" tabIndex="-1" role="dialog" aria-labelledby="createPostSellTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered create-post-model-block" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <a data-bs-dismiss="modal" aria-label="Close" className="popupclose-button" id="popupclose"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-dark close-btn"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
                            <div className="create-post">
                                <div className="static-section">
                                    <div className="card-title create-port-title">
                                        <div className="createpost-blk">
                                            <h3>create post</h3>
                                        </div>
                                        <div className="setting-dropdown">
                                            <div className="btn-group custom-dropdown arrow-none dropdown-sm">
                                                <h5 data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 14 14" fill="none" className="iw-14 globe-svg"> <path fillRule="evenodd" clipRule="evenodd" d="M7.00004 0.583344C3.44171 0.583344 0.583374 3.44168 0.583374 7.00001C0.583374 10.5583 3.44171 13.4167 7.00004 13.4167C10.5584 13.4167 13.4167 10.5583 13.4167 7.00001C13.4167 3.44168 10.5584 0.583344 7.00004 0.583344ZM12.1917 6.41668H9.85837C9.74171 4.78334 9.21671 3.26668 8.28337 1.92501C10.3834 2.45001 11.9584 4.25834 12.1917 6.41668ZM8.75004 7.58334H5.30837C5.42504 9.15834 6.00837 10.675 7.05837 11.9C7.99171 10.675 8.57504 9.15834 8.75004 7.58334ZM5.30837 6.41668C5.48337 4.84168 6.06671 3.32501 7.00004 2.10001C7.99171 3.38334 8.57504 4.90001 8.69171 6.41668H5.30837ZM4.14171 6.41668C4.25837 4.78334 4.78337 3.26668 5.65837 1.92501C3.61671 2.45001 2.04171 4.25834 1.80837 6.41668H4.14171ZM1.80837 7.58334H4.14171C4.25837 9.21668 4.78337 10.7333 5.71671 12.075C3.61671 11.55 2.04171 9.74168 1.80837 7.58334ZM9.91671 7.58334C9.74171 9.21668 9.21671 10.7333 8.34171 12.075C10.3834 11.55 11.9584 9.74168 12.25 7.58334H9.91671Z" fill="#647589" /></svg> public <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="iw-14"><polyline points="6 9 12 15 18 9"></polyline></svg></h5>
                                                <div className="dropdown-menu dropdown-menu-right custom-dropdown">
                                                    <ul>
                                                        <li>
                                                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> public</a>
                                                        </li>
                                                        <li>
                                                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>friends</a>
                                                        </li>
                                                        <li>
                                                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>friends
                                                                except</a>
                                                        </li>
                                                        <li>
                                                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>specific friends</a>
                                                        </li>
                                                        <li>
                                                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>only me</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="event-create-post-block">
                                        <div className="user-profile-cp">
                                            <img src="assets/images/my-profile.jpg" className="img-fluid" alt="profile" />
                                            <h4>Kelin jasen</h4>
                                        </div>
                                        <form className="theme-form form-sm">
                                            <div className="row  g-3">
                                                <div className="form-group col-12">
                                                    <label>Product Category</label>
                                                    <select id="inputState" className="form-control">
                                                        <option>Electronic</option>
                                                        <option>Furniture</option>
                                                        <option>Toy & Baby</option>
                                                        <option>Grocery</option>
                                                        <option>Fashin</option>
                                                        <option>Appliances</option>
                                                    </select>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label>Product Title*</label>
                                                    <input type="text" className="form-control" placeholder="Enter your product title..." required />
                                                    <p className="input-hints">Max 84 Characters</p>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label>Upload Product Image</label>
                                                    <div className="upload-image-blk">
                                                        <input type="file" onChange={handleChange} />
                                                        <img src={file} className="event-img-prev" />
                                                    </div>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label>Price</label>
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <select id="inputState" className="form-control">
                                                                <option>$</option>
                                                                <option>€</option>
                                                                <option>₹</option>
                                                                <option>£</option>
                                                                <option>¥</option>
                                                                <option>J$</option>
                                                                <option>₩</option>
                                                                <option>₮</option>
                                                                <option>ƒ</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-9">
                                                            <input type="text" className="form-control" placeholder="Enter amount..." required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label>Product Description</label>
                                                    <textarea rows="3" className="form-control" placeholder="Enter product description here..."></textarea>
                                                    <p className="input-hints">Max 600 Characters</p>
                                                </div>
                                                <div className="form-group col-md-12">
                                                    <label>Product Location</label>
                                                    <div className="icon-input-block">
                                                        <input type="text" className="form-control" placeholder="Enter your product Location..." required />
                                                        <span className="form-iconbox-blk"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className="iw-18 ih-18"><path d="M9.875 2.34316V2.55471L10.0836 2.58972C12.8052 3.04635 14.955 5.19502 15.4085 7.9161L15.4433 8.125H15.6551H16.875C17.3592 8.125 17.75 8.51581 17.75 9C17.75 9.48419 17.3592 9.875 16.875 9.875H15.6551H15.4433L15.4085 10.0839C14.9549 12.8051 12.8051 14.9549 10.0839 15.4085L9.875 15.4433V15.6551V16.875C9.875 17.3592 9.48419 17.75 9 17.75C8.51581 17.75 8.125 17.3592 8.125 16.875V15.6551V15.4433L7.9161 15.4085C5.19502 14.955 3.04635 12.8052 2.58972 10.0836L2.55471 9.875H2.34316H1.125C0.641708 9.875 0.25 9.48404 0.25 9C0.25 8.51596 0.641708 8.125 1.125 8.125H2.34316H2.55471L2.58972 7.91637C3.04633 5.19496 5.19496 3.04633 7.91637 2.58972L8.125 2.55471V2.34316V1.125C8.125 0.641708 8.51596 0.25 9 0.25C9.48404 0.25 9.875 0.641708 9.875 1.125V2.34316ZM6.4375 9C6.4375 7.58416 7.58416 6.4375 9 6.4375C10.4158 6.4375 11.5625 7.58416 11.5625 9C11.5625 10.4158 10.4158 11.5625 9 11.5625C7.58416 11.5625 6.4375 10.4158 6.4375 9ZM4.25 9C4.25 11.6236 6.37638 13.75 9 13.75C11.6236 13.75 13.75 11.6236 13.75 9C13.75 6.37638 11.6236 4.25 9 4.25C6.37638 4.25 4.25 6.37638 4.25 9Z" fill="#B9B9B9" stroke="white" strokeWidth="0.5" /></svg></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <AddInYourPost createPostHandler={createPostHandler} postData={postData} setPostData={setPostData} clickMedia={clickMedia} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Stack spacing={2} sx={{ width: '100%' }} id="stack">
                {/* Snackbar */}
                <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={1500} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={alert.sev} sx={{ width: '100%' }}>
                        {alert.content}
                    </Alert>
                </Snackbar>
            </Stack>
        </>
    );
} 
