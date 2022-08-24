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
import bizCategoryReducer from '../bizCategoryReducer'
import bizSubCategoryReducer from '../bizSubCategoryReducer'

// USER PROFILE
import getAllInterestsReducer from '../UserProfile/getAllInterestsReducer'
import getAllSportsReducer from '../UserProfile/getAllSportsReducer'

// GROUP 
import getAllGroupCategory from '../getAllGroupCategory';
import getAllUserGroups from '../getAllUserGroups'
import getAllGroupsByUserId from '../getAllGroupsByUserId'
import getGroupAdministraterReducer from '../getGroupAdministraterReducer'



const rootReducer = combineReducers({
    getAllGroupCategoryData : getAllGroupCategory,
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
    bizCategoryData : bizCategoryReducer,
    bizSubCategoryData : bizSubCategoryReducer,

    // USER PROFILE
    getAllInterestsData : getAllInterestsReducer,
    getAllSportsData : getAllSportsReducer,

     // GROUP
     getAllUserGroupsData : getAllUserGroups,
     getAllGroupsByUserData : getAllGroupsByUserId,
     getAllGroupCategoryData : getAllGroupCategory,
     getGroupAdministraterData : getGroupAdministraterReducer,

});

export default rootReducer;