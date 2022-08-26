import { combineReducers } from 'redux';
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

// bizPage
import bizCategoryReducer from '../BizPage/bizCategoryReducer'
import bizSubCategoryReducer from '../BizPage/bizSubCategoryReducer'
import bizPageReducer from '../BizPage/bizPageReducer'

// USER PROFILE
import getAllInterestsReducer from '../UserProfile/getAllInterestsReducer'
import getAllSportsReducer from '../UserProfile/getAllSportsReducer'
import suggestedUsersReducer from '../UserProfile/suggestedUsersReducer'

// GROUP 
import getAllGroupCategory from '../getAllGroupCategory';
import getAllUserGroups from '../getAllUserGroups'
import getAllGroupsByUserId from '../getAllGroupsByUserId'
import getGroupAdministraterReducer from '../getGroupAdministraterReducer'



const rootReducer = combineReducers({
    getAllUserPostsData : getAllUserPosts,
    getAllPostsByUserIdData : getAllPostsByUserId,
    uploadFileData : uploadFileReducer,
    getAllReactionsData : getAllReactionsReducer,
    getUserProfileByUserIdData : getUserProfileByUserIdReducer,
    getArticleCategoryData : getArticleCategoryReducer,
    postSavedData : postSavedReducer,
    getUserSubModulesData : getUserSubModulesReducer,
    getEventCategoryData : getEventCategoryReducer,
    getAlertData : getAlertDataReducer,

    // Biz Page
    bizCategoryData : bizCategoryReducer,
    bizSubCategoryData : bizSubCategoryReducer,
    bizPageData : bizPageReducer,

    // USER PROFILE
    getAllInterestsData : getAllInterestsReducer,
    getAllSportsData : getAllSportsReducer,
    suggestedUsersData : suggestedUsersReducer,

     // GROUP
     getAllUserGroupsData : getAllUserGroups,
     getAllGroupsByUserData : getAllGroupsByUserId,
     getAllGroupCategoryData : getAllGroupCategory,
     getGroupAdministraterData : getGroupAdministraterReducer,

});

export default rootReducer;