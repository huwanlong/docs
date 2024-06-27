<template>
  <div class="theme-container">
    <div class="theme-default-content">
      <h1>404</h1>

      <blockquote>{{ getMsg() }}，指南页面找找？</blockquote>

      <RouterLink to="/"> 返回首页 </RouterLink> 或 <RouterLink to="/guide"> 返回指南 </RouterLink>
    </div>
  </div>
</template>

<script>
const msgs = [`当前页面空无一物`, `地址可能已修改`, `页面可能被修改链接`]

export default {
  methods: {
    getMsg() {
      return msgs[Math.floor(Math.random() * msgs.length)]
    },
  },
}
</script>
