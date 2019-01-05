import { FETCH_RESULT } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_RESULT:
      return [action.payload.data];
  }
  return state;
}
