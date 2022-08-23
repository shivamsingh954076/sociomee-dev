import * as types from "../../Constants/BizPage/index";

const initialState = {
  bizPage: {},
  loading: true,
};

const createBizPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_BIZ_PAGE:
      return {
        ...state,
        bizPage: action.payload,
        loading: false, 
      };
    default:
      return state;
  }
};

export default createBizPageReducer;
