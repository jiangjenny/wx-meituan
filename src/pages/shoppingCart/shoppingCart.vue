<template>
  <div class="shopping-container">
    <div class="header-c">
      <div class="herder-t">
        <div class="h-l"><img :src="shopinfo.pic_url" alt="" class="shop-logo"></div>
        <div class="h-r">
          <div class="r-t">
            <span class="t-l">{{shopinfo.min_price_tip}}</span>
            <div class="s-l"></div>
            <span class="t-m">{{shopinfo.delivery_time_tip}}</span>
            <div class="s-l"></div>
            <span class="t-r">{{shopinfo.distance}}</span>
          </div>
          <div class="r-m">公告：{{shopinfo.bulletin}}</div>
          <div class="r-b">
            <span class="b-l">减</span>
            <span class="b-r">{{discounts.info}}</span>
            <i class="icon mt-arrow-right-o"></i>
          </div>
        </div>
      </div>
      <div class="cate-c">
        <span class="c-l" :style="{'font-weight': pageIndex ==0 ? '700': null}">菜单</span>
        <span class="c-m" :style="{'font-weight': pageIndex ==1 ? '700': null}">评价</span>
        <span class="c-r" :style="{'font-weight': pageIndex ==2 ? '700': null}">商家</span>
        <div class="line"></div>
      </div>
    </div>
    <div class="list-c">
      <scroll-view class="list-l" :scroll-y="true">
        <div class="l-item" v-for="(item,index) in foods" :key="index">
          <img :src="item.icon" alt="" v-if="item.icon != ''">
          <span>{{item.name}}</span>
          <text class="count" v-if="item.count > 0">{{item.count}}</text>
        </div>
      </scroll-view>
      <scroll-view class="list-r" :scroll-y="true">
        <div class="item-list" v-for="(item,index) in foods" :key="index">
          <div class="section">
            <span class="s-title">{{item.name}}</span>
          </div>
          <div class="item" v-for="(its,ids) in item.spus" :key="ids">
            <div class="item-l"><img :src="its.picture" alt=""></div>
            <div class="item-r">
              <span class="r-title">{{its.name}}</span>
              <span class="sub-title">{{its.description}}</span>
              <span class="sale-num">{{its.month_saled_content}} {{its.praise_content}}</span>
              <div class="r-t">
                <span class="r-price">￥{{its.min_price}}</span>
                <div class="sku" v-if="its.attrs.length">
                  <span>选规格</span>
                  <span class="count" v-if="its.sequence >0">{{its.sequence}}</span>
                </div>
                <div class="add-item" v-else>
                  <div class="add-l" v-if="its.sequence>0" >
                    <i class="icon mt-reduce-o"></i>
                    <span>{{its.sequence}}</span>
                  </div>
                  <div class="add-r">
                    <i class="icon mt-add-o"></i>
                  </div>
                </div>
              </div>
              <div class="tags-c">
                <img class="tags" :src="itm.picture_url" v-for="(itm, idx) in its.product_label_picture_list" :key="idx">
              </div>
            </div>
          </div>
        </div>
      </scroll-view>
    </div>

    <div class="footer-c">
      <div class="c-t"><span>{{reduceTip}}</span></div>

    </div>
  </div>
</template>
<script>
import {shoppingCart} from './data'
export default {
  data(){
    return {
      shopinfo: {},
      discounts: {},
      foods: [],
    }
  },
  mounted(){
    // console.log(shoppingCart.menuData);
    this.shopinfo = shoppingCart.menuData.data.poi_info
    console.log(this.shopinfo);
    this.discounts = this.shopinfo.discounts2[0]
    this.foods = shoppingCart.menuData.data.food_spu_tags
    console.log(this.foods);
  },
  computed: {
  },
  methods: {
   
  }
}
</script>
<style scoped>
.shopping-container{
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0;
  left: 0;
}
.header-c{
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
}
.herder-t{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20rpx;
  box-sizing: border-box;
  background-color: #000;
  height: 150rpx;
}
.herder-t .h-l{
  width: 120rpx;
  height: 120rpx;
  display: flex;
}
.herder-t .h-l img{
  width: 100%;
  height: 100%;
  border-radius: 8rpx;
}
.herder-t .h-r{
  display: flex;
  flex-direction: column;
  margin: 0 30rpx 0 20rpx;
  font-size: 20rpx;
  color: #fff;
}
.herder-t .h-r .r-t,
.herder-t .h-r .r-m,
.herder-t .h-r .r-b{
  display: flex;
  align-items: center;
}
.r-t .s-l{
  margin: 0 20rpx;
  width: 2rpx;
  height: 30rpx;
  background-color: #fff;
}
.herder-t .h-r .r-m{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 10rpx 0;
  width: 575rpx;
}
.r-b .b-l{
  width: 30rpx;
  height: 30rpx;
  background-color: #FF616D;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  font-size: 20rpx;
}
.r-b  .b-r{
  margin-left: 10rpx;
}
.r-b .icon{
  font-size: 20rpx;
  color: white;
  margin-left: 240rpx;
}
.cate-c {
  display: flex;
  height: 70rpx;
  align-items: center;
  position: relative;
  transition: all 0.2s;
  background-color: #eee;
}
.cate-c .c-l,.cate-c .c-m,.cate-c .c-r {
  font-size: 32rpx;
  color: #000;
  margin-left: 40rpx;
}
.cate-c .line {
  position: absolute;
  width: 60rpx;
  height: 4rpx;
  background-color: orange;
  left: 40rpx;
  bottom: 0rpx;
  transition: left 0.2s;
}
.list-c {
  display: flex;
  position: fixed;
  top: 220rpx;
  bottom: 200rpx;
 }
.list-c .list-l {
  display: flex;
  flex-direction: column;
  width: 160rpx;
  background-color: #eee; 
}
.list-l .l-item{
  display: flex;
  width: 160rpx;
  align-items: center;
  justify-content: center;
  padding: 20rpx;
  box-sizing: border-box;
  position: relative;
  top: 0;
  left: 0;
}
.list-l .l-item img{
  width: 30rpx;
  height: 30rpx;
  border-radius: 50%;
}
.list-l .l-item span{
  font-size: 24rpx;
  color: #333;
  margin-left: 10rpx;
}
.list-l .l-item .count {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  width: 30rpx;
  height: 30rpx;
  border-radius: 15rpx;
  right: 0;
  top: 6rpx;
  position: absolute;
  font-size: 20rpx;
  color: white;
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}
::-webkit-scrollbar {
  display: none;
}
.list-r{
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: white;
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}
::-webkit-scrollbar {
  display: none;
}
.section {
  display: flex;
  height: 70rpx;
  align-items: center;
  margin-left: 20rpx;
}
.section .s-title {
  font-size: 28rpx;
  color: #000;
}
.item-list .item{
  display: flex;
  margin: 0 20rpx 30rpx;
}
.item .item-l{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.item-l img{
  width: 160rpx;
  height: 160rpx;
  display: flex;
}
.item .item-r {
  display: flex;
  flex-direction: column;
  margin-left: 20rpx;
  justify-content: space-between;
  flex: 1;
}
.item .item-r .r-title {
  font-size: 28rpx;
  color: #000;
  font-weight: bold;
  overflow: hidden;
  line-height: 30rpx;
  height: 30rpx;
}
.sub-title {
  font-size: 20rpx;
  color: #333;
  line-height: 30rpx;
  overflow: hidden;
  height: 30rpx;
  margin-top: 10rpx;
}
.sale-num {
  font-size: 20rpx;
  color: #333;
  margin-top: 10rpx;
}
.item-r .r-t{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.r-t .r-price{
  font-size: 32rpx;
  color: red;
  font-weight: 700;
}
.r-t .sku{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: orange;
  padding: 8rpx 12rpx;
  border-radius: 25rpx;
  position: relative;
}
.sku span {
  font-size: 20rpx;
  color:#000
}
.sku .count {
  width: 30rpx;
  height: 30rpx;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  color: white;
  font-size: 20rpx;
  right: 0;
  top: -14rpx;
  border-radius: 15rpx;
}
.add-item{
  display: flex;
  align-items: center
}
.add-l {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.add-l i{
  font-size: 36rpx;
  color: gray;
}
.add-l span {
  font-size: 24rpx;
  color: #000;
  margin: 0 20rpx;
}
.add-r i {
   color: orange;
   font-size: 40rpx;
}
.tags-c{
  display: flex;
  align-items: center;
  margin-top: 10rpx;
}
.tags-c img{
  width: 60rpx;
  height:30rpx;
}
</style>
