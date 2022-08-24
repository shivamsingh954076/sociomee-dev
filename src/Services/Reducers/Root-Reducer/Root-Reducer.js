import { combineReducers } from 'redux';
import getAllGroupCategory from '../getAllGroupCategory';
import getAllUserPosts from '../getAllUserPosts'
import getAllPostsByUserId from '../getAllPostsByUserId'
import uploadFileReducer from '../uploadFileReducer'
import getAllReactionsReducer from '../getAllReactionsReducer'
import getUserProfileByUserIdReducer from '../UserProfile/getUserProfileByUserIdReducer'
import getArticleCategoryReducer from '../getArticleCategoryReducer'
import postSavedReducer from '../postSavedReducer'
import getUserSubModulesReducer from '../UserProfile/getUsersSubModulesReducer'
import getEventCategoryReducer from '../getEventCategoryReducer'
import getAlertDataReducer from '../getAlertDataReducer'
import getAllInterestsReducer from '../UserProfile/getAllInterestsReducer'
// Biz Page
import bizCategoryReducer from '../BizPage/bizCategoryReducer'
import bizSubCategoryReducer from '../BizPage/bizSubCategoryReducer'
import createBizPageReducer from '../BizPage/bizPageReducer'

const rootReducer = combineReducers({
    getAllGroupCategoryData: getAllGroupCategory,
    getAllUserPostsData: getAllUserPosts,
    getAllPostsByUserIdData: getAllPostsByUserId,
    uploadFileData: uploadFileReducer,
    getAllReactionsData: getAllReactionsReducer,
    getUserProfileByUserIdData: getUserProfileByUserIdReducer,
    getArticleCategoryData: getArticleCategoryReducer,
    postSavedData: postSavedReducer,
    getUserSubModulesData: getUserSubModulesReducer,
    getEventCategoryData: getEventCategoryReducer,
    getAlertData: getAlertDataReducer,
    getAllInterestsData: getAllInterestsReducer,
    // Biz Page
    bizCategoryData: bizCategoryReducer,
    bizSubCategoryData: bizSubCategoryReducer,
    bizPageData: createBizPageReducer,

});

export default rootReducer;