import {
  SET_DATA,
  SET_DIVER_COUNT,
  SET_NON_DIVER_COUNT
} from "../mutation-types";

export default {
  [SET_DATA](state, { key, value }) {
    state[key] = value;
  },
  [SET_DIVER_COUNT](state, count) {
    state.diverCount = count;
  },
  [SET_NON_DIVER_COUNT](state, count) {
    state.nonDiverCount = count;
  }
};
