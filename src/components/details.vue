<template>
  <div>
    <el-row :gutter="20" class="myRow">
      <el-col :span="5">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="6" >
        <img src="../assets/images/details.png" style="width: 100%;"/>
          <img src="../assets/images/details.png" class="img-btn"/>
          <img src="../assets/images/details.png" class="img-btn"/>
          <img src="../assets/images/details.png" class="img-btn"/>
          <img src="../assets/images/details.png" class="img-btn"/>
      </el-col>
      <el-col :span="7" style="height: 457px; text-align: left; padding-left: 100px;padding-top: 30px">
        <el-row class="f-info">
          <div style="font-size: 26px">经典永续 - 经典19支许愿 80cm长形</div>
          <small style="color: #7e8c8d;">124123412</small>
        </el-row>
        <el-row class="f-info">
          <hr />
        </el-row>
        <el-row class="f-info">
          <div style="font-size: 22px">价格：￥ 2399.0</div>
        </el-row>
        <el-row class="f-info">
          <hr />
        </el-row>
        <el-row class="f-info">
          <div style="font-size: 22px;">颜色：<img src="../assets/images/details.png" style="height: 30px; border: gray solid 2px;" /></div>
        </el-row>
        <el-row class="f-info">
          <div style="font-size: 22px">
            数量：<el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="100"></el-input-number>
          </div>
        </el-row>
        <el-row class="f-info">
          <el-button type="info" style="width: 40%">立即购买</el-button>
          <el-button style="width: 40%">加入购物车</el-button>
        </el-row>
      </el-col>
      <el-col :span="6">
        <div class="grid-content"></div>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="myRow">
      <el-col :span="5">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="14">
        <el-row><hr /></el-row>
        <el-row><h3>产 品 参 数</h3></el-row>
        <el-row>
          <el-col :span="4" v-for="option in options1" :key="option">
            <el-card style="border: none; margin-top: -18px" shadow="never">
              <div style="margin-bottom: 10px">
                <div style="font-size: 18px">{{option.title}}</div>
              </div>
              <div v-for="o in option.list" :key="o" class="text item">
                <span>{{o.name}}</span>
              </div>
            </el-card>
          </el-col>
        </el-row>

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
        num: 1,

        options1: [{
          title: '适用场景',
          list: [{name: '求婚'}, {name: '纪念日'}, {name: '生日'}]
        }, {
          title: '适用对象',
          list: [{name: '女朋友'}, {name: '爱人'}]
        }, {
          title: '适用节日',
          list: [{name: '情人节'}, {name: '圣诞节'}]
        }, {
          title: '鲜花朵数',
          list: [{name: '19支'}]
        }, {
          title: '颜色分类',
          list: [{name: '许愿'}]
        }, {
          title: '产品规格',
          list: [{name: '81*21*13'}]
        }],

        options2: [
          {image: require('../assets/images/o1.jpg')},
          {image: require('../assets/images/o2.jpg')},
          {image: require('../assets/images/o3.jpg')}
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

  .img-btn {
    width: 50px;
    border: gray solid 2px;
  }

  .f-info {
    margin-top: 30px;
  }

  span {
    display: inline-block;
    text-align: left;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 10px;
  }
</style>
