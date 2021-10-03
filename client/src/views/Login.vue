<template>
  <div class="login">
    <el-card>
      <h2>Login</h2>
      <el-form
        :model=form
      >
      <el-form-item>
        <el-input
          v-model="form.login"
          placeholder="Login"
          prefix-icon="fas fa-user"
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="form.password"
          placeholder="Password"
          prefix-icon="fas fa-lock"
          show-password
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="login"
        >
          Login
        </el-button>
      </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import login from '@/api/auth';
import { IAuth } from '@/api/types/auth';

export default defineComponent({
  name: 'Login',
  data() {
    return {
      form: {
        login: '',
        password: '',
      } as IAuth,
    };
  },
  methods: {
    async login(): Promise<void> {
      try {
        await login(this.form);
      } catch (err) {
        console.error(err);
      }
    },
  },
});
</script>
<style lang="scss">
  .login {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
