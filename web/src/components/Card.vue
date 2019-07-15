<template>
  <div class="card bg-white mt-3 p-3">
    <div class="card-header d-flex ai-center">
      <i class="iconfont icon-menu"></i>
      <div class="fs-xl flex-1 px-2">{{title}}</div>
      <i class="iconfont icon-menu1"></i>
    </div>
    <div class="card-body pt-3"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true },

  }
};
</script>

