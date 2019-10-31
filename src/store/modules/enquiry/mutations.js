import { SET_PACKAGE_GUEST_COUNT } from "../mutation-types";

export default {
  [SET_PACKAGE_GUEST_COUNT](state, { name, count }) {
    const pkg = state.packages.find(p => p.name === name);
    if (!pkg) {
      return;
    }
    pkg.guests = count;
  }
};
