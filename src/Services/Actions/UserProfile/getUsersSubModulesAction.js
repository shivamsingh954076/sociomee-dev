import * as types from '../../Constants/UserProfile/index';
import axios from 'axios';

const getAllUserSports = (userSports) => ({
    type: types.GET_USERS_SPORTS,
    payload: userSports,
});

const getAllUserMovies = (userMovies) => ({
    type: types.GET_USERS_MOVIES,
    payload: userMovies,
});

const getAllUserMusics = (userMusics) => ({
    type: types.GET_USERS_MUSICS,
    payload: userMusics,
});

const getAllUserEducations = (userEducations) => ({
    type: types.GET_USERS_EDUCATIONS,
    payload: userEducations,
});

const getAllHobies = (userHobbies) => ({
    type: types.GET_ALL_HOBBIES,
    payload: userHobbies,
});


// get all user's sports
export const loadAllUserSports = () => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('user'));
        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        };
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/user/getSports`, {}, config)
                .then((res) => {
                    dispatch(getAllUserSports(res.data.data.successResult))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};

// get all user's Music
export const loadAllUserMusics = () => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('user'));
        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        };
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/user/getMusic`, {}, config)
                .then((res) => {
                    dispatch(getAllUserMusics(res.data.data.successResult))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};

// get all user's Movies
export const loadAllUserMovies = () => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('user'));
        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        };
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/user/getMovies`, {}, config)
                .then((res) => {
                    dispatch(getAllUserMovies(res.data.data.successResult))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};

// get all user's Music
export const loadAllUserEducations = () => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('user'));
        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        };
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/user/getUserEducation`, {}, config)
                .then((res) => {
                    dispatch(getAllUserEducations(res.data.data.successResult))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};

// get all user's Music
export const loadAllHobbies = () => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('user'));
        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        };
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/admin/getAllHobbies`, {}, config)
                .then((res) => {
                    dispatch(getAllHobies(res.data.data.successResult))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};
