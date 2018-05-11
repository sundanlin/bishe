<template>
  <div>
    <el-row :gutter="20" class="myRow">
      <el-col :span="2">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="20">
        <img src="../assets/images/h.jpg" style="width: 100%"/>
      </el-col>
      <el-col :span="2">
        <div class="grid-content"></div>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="myRow">
      <el-col :span="2">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="20">
        <div style="border-top: solid 2px #DCDFE6;">
          <el-tabs v-model="activeName">
            <el-tab-pane label="综合" name="first"></el-tab-pane>
            <el-tab-pane label="销量" name="second"></el-tab-pane>
            <el-tab-pane label="最新" name="third"></el-tab-pane>
            <el-tab-pane label="价格" name="fourth"></el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content"></div>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="myRow" v-for="(option, index) in options" v-if="index >= (currentPage-1)*(pageSize/4-1) && index<(currentPage)*(pageSize/4)" :key="option">
      <el-col :span="2">
        <div class="grid-content"></div>
      </el-col>

      <el-col :span="5" v-for="o in option.option" :key="o">
        <a @click="handleSelect" href="#">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <img :src=o.image class="image">
          <div style="padding: 10px;">
            <span>{{o.name}}</span>
            <span><b> {{o.desc}}</b></span>
            <span>¥ {{o.price}}</span>
          </div>
        </el-card>
        </a>
      </el-col>
      <el-col :span="2">
        <div class="grid-content"></div>
      </el-col>
    </el-row>

    <el-pagination class="myRow"
                   background
                   @current-change="handleCurrentChange"
                   :page-size="pageSize"
                   :current-page="currentPage"
                   layout="prev, pager, next, total"
                   :total="total">
    </el-pagination>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first',

        pageSize: 16,
        currentPage: 1,

        total: 0,

        options: [{
          option: [{
            image: require('../assets/images/ff.png'),
            name: '鲜花玫瑰',
            desc: '真爱',
            price: '1999.0',
            path: '/ '
          }, {
            image: require('../assets/images/ff.png'),
            name: '鲜花玫瑰',
            desc: '纯情',
            price: '1999.0',
            path: '/ '
          }, {
            image: require('../assets/images/ff.png'),
            name: '鲜花玫瑰',
            desc: '致美',
            price: '1999.0',
            path: '/ '
          }, {
            image: require('../assets/images/ff.png'),
            name: '鲜花玫瑰',
            desc: '浓烈',
            price: '1999.0',
            path: '/ '
          }]
        }, {
          option: [{
            image: require('../assets/images/ff.png'),
            name: '鲜花玫瑰',
            desc: '真爱',
            price: '1999.0',
            path: '/ '
          }, {
            image: require('../assets/images/ff.png'),
            name: '鲜花玫瑰',
            desc: '纯情',
            price: '1999.0',
            path: '/ '
          }, {
            image: require('../assets/images/ff.png'),
            name: '鲜花玫瑰',
            desc: '致美',
            price: '1999.0',
            path: '/ '
          }, {
            image: require('../assets/images/ff.png'),
            name: '鲜花玫瑰',
            desc: '浓烈',
            price: '1999.0',
            path: '/ '
          }]
        }, {
          option: [{
            image: require('../assets/images/ff.png'),
            name: '鲜花玫瑰',
            desc: '真爱',
            price: '1999.0',
            path: '/ '
          }, {
            image: require('../assets/images/ff.png'),
            name: '鲜花玫瑰',
            desc: '纯情',
            price: '1999.0',
            path: '/ '
          }, {
            image: require('../assets/images/ff.png'),
            name: '鲜花玫瑰',
            desc: '致美',
            price: '1999.0',
            path: '/ '
          }, {
            image: require('../assets/images/ff.png'),
            name: '鲜花玫瑰',
            desc: '浓烈',
            price: '1999.0',
            path: '/ '
          }]
        }, {
          option: [{
            image: require('../assets/images/ff.png'),
            name: '鲜花玫瑰',
            desc: '真爱',
            price: '1999.0',
            path: '/ '
          }, {
            image: require('../assets/images/ff.png'),
            name: '鲜花玫瑰',
            desc: '纯情',
            price: '1999.0',
            path: '/ '
          }, {
            image: require('../assets/images/ff.png'),
            name: '鲜花玫瑰',
            desc: '致美',
            price: '1999.0',
            path: '/ '
          }, {
            image: require('../assets/images/ff.png'),
            name: '鲜花玫瑰',
            desc: '浓烈',
            price: '1999.0',
            path: '/ '
          }]
        },{
          option: [{
            image: require('../assets/images/ff.png'),
            name: '鲜花玫瑰',
            desc: '真爱',
            price: '1999.0',
            path: '/ '
          }, {
            image: require('../assets/images/ff.png'),
            name: '鲜花玫瑰',
            desc: '纯情',
            price: '1999.0',
            path: '/ '
          }, {
            image: require('../assets/images/ff.png'),
            name: '鲜花玫瑰',
            desc: '致美',
            price: '1999.0',
            path: '/ '
          }]
        }]
      };
    },

    created: function() {
      this.getGoodsCount();
    },
    methods: {
      handleSelect() {
        alert(123);
      },
      handleCurrentChange(currentPage) {
        this.currentPage = currentPage;
        console.log(`当前页: ${val}`);
      },
      getGoodsCount() {
        var n = 0;
        for (let i = 0; i < this.options.length; i++) {
          n += this.options[i].option.length;
        }
        this.total = n;
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

  .image {
    width: 100%;
    display: block;
  }

  span {
    width: 100%;
    display: inline-block;
  }
</style>
