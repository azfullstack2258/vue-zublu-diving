export function getDivers(state) {
  return state.packages
    .filter(p => p.for === "diver")
    .reduce((p, c) => p + c.guests, 0);
}

export function getNonDivers(state) {
  return state.packages
    .filter(p => p.for === "non-diver")
    .reduce((p, c) => p + c.guests, 0);
}

export function diverPackages(state) {
  return state.packages.filter(p => p.for === "diver");
}

export function nonDiverPackages(state) {
  return state.packages.filter(p => p.for === "non-diver");
}
