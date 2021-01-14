import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        sidebarCollapsed: false,
    },
    mutations: {
        updateSidebarStatus(state, collapseStatus) {
            state.sidebarCollapsed = collapseStatus;
        },
    },
    actions: {},
    modules: {},
});
