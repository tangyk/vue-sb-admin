<template>
    <div id="app">
        <div class="sb-nav-fixed" :class="{ 'sb-sidenav-toggled': $store.state.sidebarCollapsed }">
            <nav-bar />
            <side-bar />
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/layout/NavBar.vue';
import SideBar from '@/components/layout/SideBar.vue';

export default {
    components: {
        NavBar,
        SideBar,
    },
};
</script>
<style lang="scss">
#app {
}
</style>
