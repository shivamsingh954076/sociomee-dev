import * as types from '../../Constants/UserProfile/index';
import axios from 'axios';

const getUserProfileByUserId = (userProfileByUserId) => ({
    type: types.GET_PROFILE_BY_USER_ID,
    payload: userProfileByUserId,
});
const getUserSportByUserId = (userSportsByUserId) => ({
    type: types.GET_USERS_SPORTS,
    payload: userSportsByUserId,
});
const getUserHobbieByUserId = (userHobbiesByUserId) => ({
    type: types.GET_USERS_HOBBIES,
    payload: userHobbiesByUserId,
});

// get user profile by user id
export const loadProfileByUserId = (id) => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/user/getUserProfileById`, { userId: user.id }, { headers: { Authorization: `Bearer ${user.token}` } })
                .then((res) => {
                    // console.log("all posts:", res.data.data.successResult);
                    dispatch(getUserProfileByUserId(res.data.data.successResult))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};

// get user profile by user id
export const loadSportsByUserId = (id) => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/user/getSports`, { userId: user.id }, { headers: { Authorization: `Bearer ${user.token}` } })
                .then((res) => {
                    // console.log("all posts:", res.data.data.successResult);
                    dispatch(getUserSportByUserId(res.data.data.successResult))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};

// get user profile by user id
export const loadHobbiesByUserId = (id) => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/user/getHobbies`, { userId: user.id },
                {
                    headers: { Authorization: `Bearer ${user.token}` }
                })
                .then((res) => {
                    // console.log("all posts:", res.data.data.successResult);
                    dispatch(getUserHobbieByUserId(res.data.data.successResult.rows))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};
