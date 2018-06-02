<template>
  <div>
    <h2 class="sub-header">编辑英雄</h2>
    <form>
      <div class="form-group">
        <label for="name">英雄名称</label>
        <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="英雄名称" value="xxx">
      </div>
      <div class="form-group">
        <label for="gender">英雄性别</label>
        <input v-model="formData.gender" type="text" class="form-control" id="gender" placeholder="英雄性别" value="xxx">
      </div>
      <button @click.prevent="handleEdit" type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        name: '',
        gender: ''
      },
      id: -1
    };
  },
  created() {
    // 获取url上id参数
    this.id = this.$route.params.id;
    // 加载数据
    this.loadData();
  },
  methods: {
    loadData() {
      // 发送请求，获取当前要编辑的英雄对象
      axios.get(`http://localhost:3000/heroes/${this.id}`)
        .then((res) => {
          if (res.status === 200) {
            this.formData = res.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleEdit() {
      axios.patch(`http://localhost:3000/heroes/${this.id}`, this.formData)
        .then((res) => {
          if (res.status === 200) {
            // 修改成功
            this.$router.push({
              name: 'heroes'
            });
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
