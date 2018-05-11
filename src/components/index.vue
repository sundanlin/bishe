<template>
  <div>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="12" style="text-align: left; padding-left: 150px">
            <h1>YOROROOM' 幽然小亭</h1>
          </el-col>
          <el-col :span="6">
            <div class="grid-content"></div>
          </el-col>
          <el-col :span="6">
            <p></p>
            <el-button type="text" @click="loginFormVisible = true">登录</el-button>
            <el-button type="text" @click="addFormVisible = true">注册</el-button>
            <el-button type="text" icon="el-icon-goods">{{goodsCount}}</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-menu style="padding-left: 150px"
                     :default-active="activeIndex"
                     class="el-menu-demo"
                     mode="horizontal"
                     @select="handleSelect"
                     background-color="#545c64"
                     text-color="#fff"
                     active-text-color="#ffd04b"
                     router="true">
              <el-menu-item index="/room">幽然小亭</el-menu-item>
              <el-submenu index="2">
                <template slot="title">新品推荐</template>
                <el-submenu index="2-1">
                  <template slot="title">类型</template>
                  <el-menu-item index="/list0">玫瑰长盒</el-menu-item>
                  <el-menu-item index="2-1-2">玫瑰手捧</el-menu-item>
                  <el-menu-item index="2-1-3">玫瑰花篮</el-menu-item>
                  <el-menu-item index="2-1-4">玫瑰水晶花盒</el-menu-item>
                </el-submenu>
                <el-submenu index="2-2">
                  <template slot="title">系列</template>
                  <el-menu-item index="2-2-1">经典永续</el-menu-item>
                  <el-menu-item index="2-2-2">恒久真爱</el-menu-item>
                  <el-menu-item index="2-2-3">爱在满怀</el-menu-item>
                  <el-menu-item index="2-2-4">全世爱</el-menu-item>
                  <el-menu-item index="2-2-5">for all love </el-menu-item>
                </el-submenu>
                <el-submenu index="2-3">
                  <template slot="title">规格</template>
                  <el-menu-item index="2-3-2">19支80cm</el-menu-item>
                  <el-menu-item index="2-3-1">11支80cm</el-menu-item>
                  <el-menu-item index="2-3-3">19支40cm</el-menu-item>
                  <el-menu-item index="2-3-4">11支40cm</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="/list1">鲜花玫瑰</el-menu-item>
              <el-menu-item index="/list2">永生花</el-menu-item>
              <el-menu-item index="/list3">特别定制</el-menu-item>
              <el-menu-item index="/culture">品牌文化</el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <transition name="el-zoom-in-top">
          <router-view v-show="true"></router-view>
          <!--<div v-show="show2" class="transition-box">.el-zoom-in-top</div>-->
        </transition>
      </el-main>
      <el-footer>
        <el-row :gutter="20" class="myRow">
          <el-col :span="2">
            <div class="grid-content"></div>
          </el-col>
          <el-col :span="20">
            <div class="line"></div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content"></div>
          </el-col>
        </el-row>

        <el-row :gutter="20" class="">
          <el-col :span="2">
            <div class="grid-content"></div>
          </el-col>
          <el-col :span="5" v-for="option in options0" :key="option">
            <div style="height: 50px; width: 100%;">
              <div style="height: 50px; width: 40%; float:left;">
                <img :src=option.image style="height: 50px; width: 50px">
              </div>
              <div style="height: 50px; width: 60%; float:left;">
                <div style="text-align: left; font-size: larger">{{option.title}}</div>
                <div style="text-align: left; font-size: small">{{option.desc}}</div>
              </div>
            </div>
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
            <div class="line"></div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content"></div>
          </el-col>
        </el-row>

        <el-row :gutter="10">
          <el-col :span="2">
            <div class="grid-content"></div>
          </el-col>

          <el-col :span="4">
            <div>
              <div style="height: 78px; margin-top: 15px; text-align: center; font-size: 30px">
                <span>YOROROOM'</span>
                <span style="font-size: large">幽然小亭</span>
              </div>
              <div style="height: 78px; text-align: center">

                <el-popover
                  width="200"
                  trigger="hover">
                  <img src="../assets/images/erweima.png" style="height: 200px; width: 200px">
                  <el-button type="text" slot="reference"><img src="../assets/images/weixin.png"
                                                               style="height: 30px; width: 30px"></el-button>
                </el-popover>

              </div>
            </div>
          </el-col>

          <el-col :span="4" v-for="option in options1" :key="option">

            <el-card style="border: none; margin-top: -18px" shadow="never">
              <div style="margin-bottom: 10px">
                <h3>{{option.title}}</h3>
              </div>
              <div v-for="o in option.list" :key="o" class="text item">
                <span>{{o.name}}</span>
              </div>
            </el-card>

          </el-col>

          <el-col :span="2">
            <div class="grid-content"></div>
          </el-col>
        </el-row>

      </el-footer>
    </el-container>

    <el-dialog title="用户注册" :visible.sync="addFormVisible" width="30%" center>
      <el-form :model="userVO" ref="addUserForm" class="demo-form-inline" label-width="100px" style="width: 90%">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="userVO.name" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="userVO.password" clearable></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="resetForm('addUserForm')">重 置</el-button>
        <el-button type="info" @click="addUser">提 交</el-button>
      </div>
    </el-dialog>

    <el-dialog title="用户登录" :visible.sync="loginFormVisible" width="30%" center>
      <el-form :model="loginVO" ref="loginForm" class="demo-form-inline" label-width="100px" style="width: 90%">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="loginVO.name" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginVO.password" clearable></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="info" @click="addUser">登 录</el-button>
      </div>
    </el-dialog>

  </div>
</template>


<script>
  export default {
    data() {
      return {
        addFormVisible: false,
        loginFormVisible: false,
        userVO: {
          name: '',
          password: ''
        },

        loginVO: {
          name: '',
          password: ''
        },

        goodsCount: 3,

        options0: [{
          image: require('../assets/images/box.png'),
          title: '全场包邮',
          desc: '特殊商品除外'
        }, {
          image: require('../assets/images/express.png'),
          title: '同城速递',
          desc: '支持当日送达'
        }, {
          image: require('../assets/images/edit.png'),
          title: '爱的留言',
          desc: '支持文字，随时查阅'
        }, {
          image: require('../assets/images/flower.png'),
          title: '保养物语',
          desc: '恒久保存爱意'
        }],

        options1: [{
          title: '新手指南',
          list: [{name: '购物流程'}, {name: '会员尊享'}, {name: '常见问题'}, {name: '指圈测量'}]
        }, {
          title: '售后服务',
          list: [{name: '退款说明'}, {name: '保养物语'}]
        }, {
          title: '物流配送',
          list: [{name: '配送方式'}, {name: '配送服务'}]
        }, {
          title: '关于我们',
          list: [{name: '品牌介绍'}, {name: '渠道销售'}, {name: '联系我们'}, {name: '加入我们'}]
        }]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },

      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
  .el-header {
    height: 105px !important;
  }

  /*.el-row .el-col {*/
  /*height: 60px;*/
  /*}*/

  .grid-content {
    min-height: 36px;
  }

  .el-footer {
    height: auto !important;
  }

  span {
    display: inline-block;
    text-align: left;
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: #7e8c8d;
  }

  .myRow {
    padding-top: 25px;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }
</style>
