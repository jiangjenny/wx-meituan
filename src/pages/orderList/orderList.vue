<template>
  <div class="order-container">
    <div class="list-c">
      <div class="item" v-for="(item,index) in orderList" :key="index">
        <div class="shop-info" @click="headerClick">
          <img :src="item.poi_pic" alt="">
          <span class="name">{{item.poi_name}}</span>
          <i class="icon mt-arrow-right-o"></i>
          <span class="order-status">{{item.status_description}}</span>
        </div>
        <div class="goods-c" @click="orderDetail">
          <div class="goods" v-for="(itm,ids) in item.product_list" :key="ids">
            <span class="s-l">{{itm.product_name}}</span>
            <span class="s-r">x{{itm.product_count}}</span>
          </div>
          <div class="price">
            <span class="count">共{{item.product_list.length}}件商品，实付</span>
            <span class="amount">￥{{item.total}}</span>
          </div>
        </div>
        <div class="bottom-c" @click="headerClick">
          <div class="btn">
            <span>再来一单</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {orderList} from './data'
export default {
  data() {
    return {
      orderList: []
    }
  },
  methods: {
    headerClick(){
      wx.navigateTo({
        url: '/pages/shoppingCart/main'
      })
    },
    orderDetail(){
      wx.navigateTo({
        url: '/pages/orderDetail/main'
      })
    }
  },
  mounted() {
    console.log(orderList.data.digestlist);
    this.orderList = orderList.data.digestlist
  },
}
</script>
<style scoped>
.order-container{
}
.list-c{
  display: flex;
  flex-direction: column;
  background-color: #eee;
}
.list-c .item{
  display: flex;
  flex-direction: column;
  margin-top: 20rpx;
  background-color: #fff;
}
.item .shop-info{
  display: flex;
  height: 120rpx;
  align-items: center;
  border-bottom: 2rpx solid #ccc;
  margin: 0 0 20rpx 30rpx;
}
.shop-info img{
  display: flex;
  width: 80rpx;
  height: 80rpx;
}
.shop-info .name{
  margin-left: 10rpx;
  font-size: 32rpx;
  color: #000;
  align-items: center;
  font-weight: 700;
}
.shop-info i{
  font-size: 28rpx;
  margin-left: 10rpx;
  color: gray;
  flex: 1
}
.shop-info .order-status{
  margin-right: 20rpx;
  font-size: 28rpx;
  color: #333;
  display: flex;
}
.goods-c{
  display: flex;
  flex-direction: column;
  border-bottom: 2rpx solid #ccc;
  margin-left: 30rpx;
}
.goods{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 120rpx;
  margin-right: 20rpx;
}
.goods .s-l,
.goods  .s-r{
  font-size: 28rpx;
  color: #666;
  padding: 10rpx 0;
}
.price{
  display: flex;
  justify-content: flex-end;
  margin: 20rpx 20rpx 20rpx 0;
}
.price .count{
  font-size: 28rpx;
}
.price .amount{
  font-size: 30rpx;
  color: #000;
  font-weight: 700;
}
.bottom-c{
  display: flex;
  justify-content: flex-end;
  margin: 20rpx 20rpx 20rpx 0;
}
.btn{
  border-radius: 5rpx;
  border: 2rpx solid #ccc;
  align-items: center;
  justify-content: center;
  display: felx;
}
.btn span{
  display: flex;
  font-size: 28rpx;
  color: #000;
  margin: 16rpx 24rpx;
}
</style>
