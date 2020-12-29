import { Dispatch } from 'redux';

export const GET_HOME_LISTS = 'RapFarsi/Home/GET_HOME_LISTS';
export const GET_HOME_LISTS_SUCCESS = 'RapFarsi/Home/GET_HOME_LISTS_SUCCESS';
export const GET_HOME_LISTS_FAIL = 'RapFarsi/Home/GET_HOME_LISTS_FAIL';

const initialState = {
  getHomeListsLoading: false,
  homeListsData: [],
  getHomeListsError: null
};

export default (state: any = initialState, action: any = {}) => {
  switch (action.type) {
    case GET_HOME_LISTS:
      return {
        ...state,
        getHomeListsLoading: true
      };
    case GET_HOME_LISTS_SUCCESS:
      return {
        ...state,
        getHomeListsLoading: false,
        homeListsData: action.data
      };
    case GET_HOME_LISTS_FAIL:
      return {
        ...state,
        getHomeListsLoading: false,
        getHomeListsError: action.data
      };
    default:
      return state;
  }
};

export const getHomeLists = () => (dispatch: Dispatch) => dispatch({ type: GET_HOME_LISTS });
