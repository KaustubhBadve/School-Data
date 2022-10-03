import {
  STUDENT_GET_DATA,
  STUDENT_QUERY_GET_DATA,
  STUDENT_SEARCH_GET_DATA,
  TEST_ADD_DATA,
  TEST_GET_DATA,
} from "./Action";

const InitialState = {
  student: [],
  test: [],
};

export const ReducerStudent = (state = InitialState, { type, payload }) => {
  switch (type) {
    case STUDENT_GET_DATA: {
      return {
        ...state,
        student: payload,
      };
    }
    case STUDENT_SEARCH_GET_DATA: {
      console.log("Reducer ", state.student, "payload", payload);
      return {
        ...state,
        student: payload,
      };
    }
    case TEST_GET_DATA: {
      return {
        ...state,
        test: payload,
      };
    }
    case STUDENT_QUERY_GET_DATA: {
      return {
        ...state,
        student: payload,
      };
    }
    default: {
      return state;
    }
  }
};
