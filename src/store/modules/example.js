const state = {
    data: 'example',
    count: 1
};
const getters = {};
const actions = {
    increment(context, payload)
    {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                context.commit('incrementExample', payload);

                // success
                resolve('success');

                // fail
                // reject('fail');
            }, 1000);
        })
    }
};
const mutations = {
	incrementExample(state, payload) {
      	state.count += payload.amount;
    }
};
export default {state, actions, mutations, getters};
