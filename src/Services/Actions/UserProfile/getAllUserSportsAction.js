import * as types from '../../Constants/UserProfile/index';
import axios from 'axios';
import { loadProfileByUserId } from './getUserProfileByUserIdAction';

const getAllSports = (allSports) => ({
    type: types.LOAD_ALL_SPORTS,
    payload: allSports,
});


// get all interest 
export const loadAllSports = () => {
    return function (dispatch) {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            axios.post(`https://apiserver.msgmee.com/user/getAllSports`, {}, {
                headers: { Authorization: `Bearer ${user.token}` }
            })
                .then((res) => {
                    dispatch(getAllSports(res.data.data.successResult))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};

// add interests
export const addSports = (sport) => {
    let user = JSON.parse(localStorage.getItem('user'));
    return function (dispatch) {
        user && axios.post(`https://apiserver.msgmee.com/user/addInterests/`, { sportIds: sport }, { headers: { Authorization: `Bearer ${user.token}` } })
            .then((res) => {
                console.log(res)
                dispatch(loadProfileByUserId())
            })
            .catch((error) => {
                console.log(error);
            })
    };
};

