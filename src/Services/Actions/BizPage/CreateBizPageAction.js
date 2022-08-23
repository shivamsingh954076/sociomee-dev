import axios from 'axios';
import * as types from "../../Constants/BizPage/index";


const bizPageCreate = (bizPage) => ({
    type: types.CREATE_BIZ_PAGE,
    payload: bizPage,
});


// create biz page
export const createBizPage = (page) => {
    let user = JSON.parse(localStorage.getItem('user'));
    return function (dispatch) {
        axios.post(`https://apiserver.msgmee.com/bp/create/businessPage`, page ,{headers: { Authorization: `Bearer ${user.token}`}})
            .then((res) => {
                console.log("create page response :", res);
                dispatch(bizPageCreate(res.data.data))
            })
            .catch((error) => {
                console.log(error);
            })
    };
};

