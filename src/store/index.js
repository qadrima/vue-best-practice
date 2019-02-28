import Vue from "vue";
import Vuex from "vuex";
import camelCase from "lodash/camelCase";

Vue.use(Vuex);

const requireModule = require.context("./modules", false, /\.js$/);
const modules = {};

requireModule.keys().forEach(fileName => {
	const moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g, ""));
	modules[moduleName] = requireModule(fileName).default;
});

const store = new Vuex.Store({modules});
export default store;
