const state = {
    token   : localStorage.getItem('token'),
    user    : {}
};
const getters = {};
const actions = {
    SUBMIT_SIGNIN({commit, state}) {
        console.log(this.state.auth.token);
    }
};
const mutations = {};
export default {state, actions, mutations, getters};