<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <router-link tag="li" to="/heroes" active-class="active">
        <a>英雄管理</a>
      </router-link>
      <router-link tag="li" to="/weapons" active-class="active">
        <a>武器管理</a>
      </router-link>
      <router-link tag="li" to="/equips" active-class="active">
        <a>装备管理</a>
      </router-link>

      <!-- <li class="active"><a href="#">英雄管理</a></li>
      <li><a href="#">武器管理</a></li>
      <li><a href="#">装备管理</a></li> -->
    </ul>
  </div>
</template>

<script>
export default {
};
</script>

<style>

</style>
