import * as types from '../../Constants/Common/index';
import axios from 'axios';

const getAllTrendingHashtag = (trandingHashtags) => ({
    type: types.GET_TRENDING_HASHTAG,
    payload: trandingHashtags,
});
// get all biz category
export const loadAllTrendingHashtag = () => {
    
    let user = JSON.parse(localStorage.getItem('user'));
    const config = {
        headers: { Authorization: `Bearer ${user.token}` }
    };
    return function (dispatch) {
        if (user) {
            axios.post(`${process.env.REACT_APP_IPURL}/hashtag/getTrending`,{},config)
                .then((res) => {
                    console.log("reponse hashtags:", res);
                    dispatch(getAllTrendingHashtag(res.data.data.successResult.rows))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };
};
