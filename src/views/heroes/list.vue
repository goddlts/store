<template>
  <div>
    <h2 class="sub-header">英雄列表</h2>
    <!-- <a class="btn btn-success" href="add.html">Add</a> -->
    <router-link class="btn btn-success" :to="{name: 'heroesadd'}">Add</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in list" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.gender }}</td>
            <td>
              <!-- <a href="edit.html">edit</a> -->
              <!-- <router-link :to="'/heroes/edit/' + item.id"></router-link> -->
              <router-link :to="{name: 'heroesedit', params: {id: item.id}}">edit</router-link>
              &nbsp;&nbsp;
              <a href="javascript:void(0)" @click.prevent="handleDelete(item.id)">delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    // 加载列表
    this.loadData();
  },
  methods: {
    loadData() {
      // 发送请求
      this.$http.get('/heroes')
        .then((res) => {
          if (res.status === 200) {
            this.list = res.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleDelete(id) {
      // 删除提示
      if (!confirm('是否确认删除数据')) {
        return;
      }
      // 发送请求，删除数据
      this.$http.delete(`/heroes/${id}`)
        .then((res) => {
          if (res.status === 200) {
            // 删除成功
            this.loadData();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
};
</script>

<style>

</style>
