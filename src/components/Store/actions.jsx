export const actions = {
    SET_LOGIN: "SET_LOGIN",
}

export const setLogin = (login) => ({
    type: actions.SET_LOGIN,
    value: login,
});