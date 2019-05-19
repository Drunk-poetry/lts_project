<template>
  <div id="app" class="flyout">
    <tool-list/>
    <div class="main-menu">
      <transition name="fade" mode="out-in"><router-view></router-view></transition>
    </div>
    <WorkContainer />
  </div>
</template>

<script>
import ToolList from './Pages/ToolList.vue';
import WorkContainer from './Pages/WorkContainer.vue';
import { mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbNavbarBrand, mdbFooter } from 'mdbvue';

export default {
  name: 'app',
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbNavbarBrand,
    mdbFooter,
    ToolList,
    WorkContainer
  }
};

</script>

<style lang="less">
h1 {
  color:#fff;
}
* {
  margin: 0;
  padding: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.main-menu {
  background: #2e2e2e;
  min-height: 110px;
  transition: all .3s;
}
</style>
