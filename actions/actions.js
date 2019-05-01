import constants from "../constants";

export function addGuitar(guitar) {
  return {
    type: constants.addGuitar,
    payload: guitar
  };
}

export function editGuitar(guitar) {
  return {
    type: constants.editGuitar,
    payload: guitar
  };
}

export function showNotifications(show) {
  return {
    type: constants.showNotifications,
    payload: show
  };
}
