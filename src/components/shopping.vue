<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="品牌"
        width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="图片"
        width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="商品名称"
        width="180">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column
        label="单价"
        width="180">
        <template slot-scope="scope">
          {{ scope.row.price }}
        </template>
      </el-table-column>
      <el-table-column
        label="数量"
        width="180">
        <template slot-scope="scope">
          <el-input-number :v-model=scope.row.price  @change="handleChange" :min="1" :max="100"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>

<style scoped>

</style>
