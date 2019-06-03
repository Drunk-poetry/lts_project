<template>
  <div>
    <!-- 消息提示 -->
    <!-- simple login modal -->
    <mdb-modal :show="login" @close="closeLogin" color="grey darken-1">
      <mdb-modal-header class="text-center" color="grey darken-1">
        <mdb-modal-title tag="h4" bold class="w-100">用户登录</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body class="mx-3 grey-text" color="grey darken-1">
        <mdb-input label="用户名：" icon="user" class="mb-5"/>
        <mdb-input label="密码：" icon="lock" type="password" class="mb-5"/>
      </mdb-modal-body>
      <mdb-modal-footer center color="grey darken-1">
        <mdb-btn @click="closeLogin" color="indigo" iconClass="ml-1">登录</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </div>
</template>

<script>
import {
  mdbInput,
  mdbBtn,
  mdbModal,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter
} from "mdbvue";
import { mapState, mapActions } from "vuex";
export default {
  name: "MyModal",
  components: {
    mdbInput,
    mdbBtn,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter
  },
  props: ["login"],
  data() {
    return {};
  },
  methods: {
    closeLogin: function() {
      this.$emit("isLogin", false);
    }
  }
};
</script>

<style lang="less" scoped>

</style>
