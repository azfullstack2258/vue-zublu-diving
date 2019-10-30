import {
  SET_DATE,
  SET_DIVER_COUNT,
  SET_NON_DIVER_COUNT
} from "../mutation-types";

export default {
  [SET_DATE](state, date) {
    state.date = date;
  },
  [SET_DIVER_COUNT](state, count) {
    state.diverCount = count;
  },
  [SET_NON_DIVER_COUNT](state, count) {
    state.nonDiverCount = count;
  }
};
