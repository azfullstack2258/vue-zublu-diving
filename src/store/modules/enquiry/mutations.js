import { SET_PACKAGE_GUEST_COUNT, SET_CONTACT_INFO } from "../mutation-types";

export default {
  [SET_PACKAGE_GUEST_COUNT](state, { name, count }) {
    const pkg = state.packages.find(p => p.name === name);
    if (!pkg) {
      return;
    }
    pkg.guests = count;
  },
  [SET_CONTACT_INFO](state, { field, value }) {
    state.details[field] = value;
  }
};
