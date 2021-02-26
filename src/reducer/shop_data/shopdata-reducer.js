import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED } from "./shopdata-types";
const initial_state = {
  shopitems: null,
  loading: false,
  error_msg: undefined
}
const shopdataReducer = (state = initial_state, action) => {
  switch (action.type) {
    case (FETCH_DATA_START):
      return (
        {
          ...state,
          loading: true

        }
      )
    case (FETCH_DATA_SUCCESS):
      return (
        {
          ...state,
          loading: false,
          shopitems: action.payload
        }
      )
    case (FETCH_DATA_FAILED):
      return (
        {
          ...state,
          error_msg: action.payload
        }
      )
    default:
      return state
  }
}
export default shopdataReducer