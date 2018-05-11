<template>
  <div>
    <el-row style="padding-top: 15px">
      <el-carousel height="680px">
        <el-carousel-item v-for="loop in loops" :key="loop">
          <img :src=loop.image style="height: 100%; width: 100%;">
        </el-carousel-item>
      </el-carousel>
    </el-row>

    <el-row :gutter="20" style="margin-top: 15px" class="myRow">
      <el-col :span="6" v-for="option in options0" :key="option">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <img :src=option.image class="image">
          <div style="padding: 14px;">
            <span>{{option.name}}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row class="myRow">
      <div style="text-align: center; margin-top: 35px"><h2>热 卖 单 品 推 荐</h2></div>
    </el-row>

    <el-row :gutter="20" class="myRow">
      <el-col :span="4">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="14">
        <el-tabs :tab-position="tabPosition" style="height: auto">
          <el-tab-pane :label=option.title v-for="option in options" :key="option">
              <el-row :gutter="20" style="padding-top: 10px">
              <el-col :span="6" v-for="o in option.details" :key="o">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                  <img :src=o.image class="image">
                  <div style="padding: 10px;">
                    <span>{{o.name}}</span>
                    <span><b> {{o.desc}}</b></span>
                    <span>¥ {{o.price}}</span>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-tab-pane>

        </el-tabs>
      </el-col>
      <el-col :span="6">
        <div class="grid-content"></div>
      </el-col>
    </el-row>

    <el-row class="myRow" v-for="option in option5" :key="option">
      <el-col :span="24">
        <el-row>
          <el-col :span="2"><div class="grid-content"></div></el-col>
          <el-col :span="22"><div style="text-align: left; margin-left: 35px"><h2>{{option.name}}</h2></div></el-col>
        </el-row>
        <el-row>
          <el-col :span="2"><div class="grid-content"></div></el-col>
          <el-col :span="10">
            <img class="images big-img" :src=option.image0 />
          </el-col>
          <el-col :span="10">
            <el-row>
              <el-col :span="12">
                <img class="images small-img" :src=option.image1 />
              </el-col>
              <el-col :span="12">
                <img class="images small-img" :src=option.image2 />
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <img class="images small-img" :src=option.image3 />
              </el-col>
              <el-col :span="12">
                <img class="images small-img" :src=option.image4 />
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="2"><div class="grid-content"></div></el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
  </template>

  <script>
    export default {
      data() {
        return {
          show: true,
          loops: [{
            image: require('../assets/images/loop0.jpg'),
            path: ''
          },{
            image: require('../assets/images/loop1.jpg'),
            path: ''
          },{
            image: require('../assets/images/loop2.jpg'),
            path: ''
          },{
            image: require('../assets/images/loop3.png'),
            path: ''
          }],

          options0: [{
            image: require('../assets/images/rose.jpg'),
            name: '新品上市',
            path: '/ '
          }, {
            image: require('../assets/images/rose.jpg'),
            name: '经典热卖',
            path: '/ '
          }, {
            image: require('../assets/images/rose.jpg'),
            name: '当月星座',
            path: '/ '
          }, {
            image: require('../assets/images/rose.jpg'),
            name: '明星同款',
            path: '/ '
          }],

          tabPosition: 'left',

          options: [{
            title: '鲜花玫瑰',
            details: [{
              image: require('../assets/images/rose.jpg'),
              name: '鲜花玫瑰',
              desc: '真爱',
              price: '1999.0',
              path: '/ '
            }, {
              image: require('../assets/images/rose.jpg'),
              name: '鲜花玫瑰',
              desc: '纯情',
              price: '1999.0',
              path: '/ '
            }, {
              image: require('../assets/images/rose.jpg'),
              name: '鲜花玫瑰',
              desc: '致美',
              price: '1999.0',
              path: '/ '
            }, {
              image: require('../assets/images/rose.jpg'),
              name: '鲜花玫瑰',
              desc: '浓烈',
              price: '1999.0',
              path: '/ '
            }]
          },{
            title: '永生玫瑰',
            details: [{
              image: require('../assets/images/rose.jpg'),
              name: '永生玫瑰',
              desc: '完美',
              price: '2999.0',
              path: '/ '
            }, {
              image: require('../assets/images/rose.jpg'),
              name: '永生玫瑰',
              desc: '简约',
              price: '2999.0',
              path: '/ '
            }, {
              image: require('../assets/images/rose.jpg'),
              name: '永生玫瑰',
              desc: '向往',
              price: '2999.0',
              path: '/ '
            }, {
              image: require('../assets/images/rose.jpg'),
              name: '永生玫瑰',
              desc: '永恒',
              price: '2999.0',
              path: '/ '
            }]
          },{
            title: '玫瑰珠宝',
            details: [{
              image: require('../assets/images/rose.jpg'),
              name: '玫瑰珠宝',
              desc: '意志',
              price: '3999.0',
              path: '/ '
            }, {
              image: require('../assets/images/rose.jpg'),
              name: '玫瑰珠宝',
              desc: '指引',
              price: '3999.0',
              path: '/ '
            }, {
              image: require('../assets/images/rose.jpg'),
              name: '玫瑰珠宝',
              desc: '远方',
              price: '3999.0',
              path: '/ '
            }, {
              image: require('../assets/images/rose.jpg'),
              name: '玫瑰珠宝',
              desc: '诗意',
              price: '3999.0',
              path: '/ '
            }]
          },{
            title: '玫瑰饰品',
            details: [{
              image: require('../assets/images/rose.jpg'),
              name: '玫瑰饰品',
              desc: '精致',
              price: '4999.0',
              path: '/ '
            }, {
              image: require('../assets/images/rose.jpg'),
              name: '玫瑰饰品',
              desc: '细腻',
              price: '1999.0',
              path: '/ '
            }, {
              image: require('../assets/images/rose.jpg'),
              name: '玫瑰饰品',
              desc: '清新',
              price: '4999.0',
              path: '/ '
            }, {
              image: require('../assets/images/rose.jpg'),
              name: '玫瑰饰品',
              desc: '闪耀',
              price: '4999.0',
              path: '/ '
            }]
          }],

          option5: [{
            name: '鲜花玫瑰 | Fresh Cut Rose',
            image0: require('../assets/images/rose.jpg'),
            image1: require('../assets/images/rose.jpg'),
            image2: require('../assets/images/rose.jpg'),
            image3: require('../assets/images/rose.jpg'),
            image4: require('../assets/images/rose.jpg')
          },{
            name: '永生玫瑰 | Preserved Rose',
            image0: require('../assets/images/rose.jpg'),
            image1: require('../assets/images/rose.jpg'),
            image2: require('../assets/images/rose.jpg'),
            image3: require('../assets/images/rose.jpg'),
            image4: require('../assets/images/rose.jpg')
          },{
            name: '玫瑰珠宝 | Jewelry',
            image0: require('../assets/images/rose.jpg'),
            image1: require('../assets/images/rose.jpg'),
            image2: require('../assets/images/rose.jpg'),
            image3: require('../assets/images/rose.jpg'),
            image4: require('../assets/images/rose.jpg')
          },{
            name: '玫瑰饰品 | Accessories',
            image0: require('../assets/images/rose.jpg'),
            image1: require('../assets/images/rose.jpg'),
            image2: require('../assets/images/rose.jpg'),
            image3: require('../assets/images/rose.jpg'),
            image4: require('../assets/images/rose.jpg')
          }]
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

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }

    .grid-content {
      min-height: 36px;
    }

    .image {
      width: 100%;
      display: block;
    }

    .images {
      height: 100%;
      width: 100%;
    }

    .big-img {
      max-height: 406px;
      max-width: 506px;
    }

    .small-img {
      max-height: 200px;
      max-width: 260px;
    }

    span {
      width: 100%;
      display: inline-block;
    }
  </style>
