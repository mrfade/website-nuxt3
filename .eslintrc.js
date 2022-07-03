module.exports = {
  root: true,
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue/vue3-recommended',
    'eslint:recommended'
  ],
  plugins: ['vue'],
  globals: {
    definePageMeta: 'readonly',
    defineNuxtPlugin: 'readonly',
    onMounted: 'readonly',
    onUnmounted: 'readonly',
    onBeforeMount: 'readonly',
    onBeforeUnmount: 'readonly',
    onUpdated: 'readonly',
    ref: 'readonly',
    useFetch: 'readonly',
    useHead: 'readonly',
    useRuntimeConfig: 'readonly',
    $fetch: 'readonly'
  },
  env: {
    'vue/setup-compiler-macros': true
  },
  rules: {
    semi: [2, 'never'],
    quotes: [2, 'single', 'avoid-escape'],
    curly: ['error', 'multi', 'consistent'],
    'vue/multi-word-component-names': 'off',
    'vue/html-self-closing': 'off',
    'vue/singleline-html-element-content-newline': 'off'
  }
}
