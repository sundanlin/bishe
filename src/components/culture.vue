<template>
  <div>
    <el-row :gutter="20" class="myRow">
      <el-col :span="5">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="14">
        <el-row v-for="o in options2" :key="o">
          <img :src=o.image style="width: 100%"/>
        </el-row>
      </el-col>
      <el-col :span="5">
        <div class="grid-content"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options2: [
          {image: require('../assets/images/us.png')},
          {image: require('../assets/images/us.png')},
          {image: require('../assets/images/us.png')},
          {image: require('../assets/images/us.png')}
        ]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .myRow {
    padding-top: 25px;
  }

  .grid-content {
    min-height: 36px;
  }
</style>
