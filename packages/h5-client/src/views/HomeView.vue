<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { MButton } from '@monorepo/components'
import { userApi } from '@monorepo/apis'

import { arrayUtils } from '@monorepo/utils'

const form = reactive({
  username: '',
  password: ''
})

onMounted(() => {})

const handleClickToLogin = () => {
  userApi
    .login(form)
    .then((res) => {})
    .catch((error) => {})

  let aaa = ['a', 'b', 'c']

  console.log(arrayUtils.findIndex('c', aaa))
}
</script>

<template>
  <main>
    <div>账号：<input type="text" v-model="form.username" /></div>
    <div>密码：<input type="text" v-model="form.password" /></div>
    <MButton @click="handleClickToLogin" msg="登录"></MButton>
    <!-- <div style="cursor: pointer" @click="handleClickToLogin">登录</div> -->
    <!-- <TheWelcome /> -->
  </main>
</template>
