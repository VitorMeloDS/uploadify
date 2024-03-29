<template>
  <div>
    <HomeView v-if="isAuth" />
    <LoginView v-else />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { usePrimeVue } from 'primevue/config'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'

const isAuth = computed(() => !!window.localStorage.token)

const isLoading = ref<boolean>(false)

const changeToPortuguese = () => {
  const primevue: any = usePrimeVue()
  primevue.config.locale.apply = 'Aplicar'
  primevue.config.locale.clear = 'Limpar'
  primevue.config.locale.addRule = 'Adicionar Regra'
  primevue.config.locale.startsWith = 'Começa com'
  primevue.config.locale.contains = 'Contém'
  primevue.config.locale.notContains = 'Não contém'
  primevue.config.locale.endWith = 'Termina com'
  primevue.config.locale.equals = 'Igual'
  primevue.config.locale.notEquals = 'Diferente'
  primevue.config.locale.noFilter = 'Sem filtro'
  primevue.config.locale.lt = 'Menor que'
  primevue.config.locale.matchAll = 'Corresponde a todos'
  primevue.config.locale.matchAny = 'Corresponde a qualquer'
  primevue.config.locale.removeRule = 'Remover Regra'
}

onMounted(async () => {
  changeToPortuguese()
  // if (!userStore.token && document.cookie.includes('refreshToken')) {
  //   try {
  //     isLoading.value = true
  //     const token = await api.UserAuth.refreshToken()
  //     if (token) {
  //       userStore.token = token
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   } finally {
  //     isLoading.value = false
  //   }
  // }
})
</script>

<style scoped></style>
