<template>
  <div class="container">
    <img :src="userInfo.avatarUrl" v-if="isShow" alt="">
    <button v-else open-type="getUserInfo" @getuserinfo="getUserInfo" class="getBtn">获取登录信息</button>
    <p>hello {{userInfo.nickName}}</p>
    <button @tap.stop="goStudy">开启小程序之旅</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {},
      isShow: false
    }
  },
  beforeMount(){
    // 获取登录信息
    this.handleUserInfo()
  },
  methods: {
    // 封装获取登录信息函数
    handleUserInfo(){
      wx.getUserInfo({
        success:(data)=>{
          // console.log(data);
         // 更新res中的数据
          this.userInfo = data.userInfo
          this.isShow = true
        },
        fail: ()=> {
          console.log("获取失败");
        }
      })
    },
    getUserInfo(data){
      console.log(data);
      // 判断用户是否授权 授权了拿用户数据
      if(data.mp.detail.rawData){
        this.handleUserInfo()
      }
    },
    goStudy(){
      wx.navigateTo({
        url: '/pages/home/main',
        success: function(res){
          // success
          console.log("home");
        },
        fail: function() {
          // fail
        }
      })
    }
  }
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
 img {
  width: 200rpx;
  height: 200rpx;
  border-radius: 50%;
}
p{
  margin: 80rpx 0 80rpx 0;
}
button{
  border: 1px solid #fff;
  border-radius: 10rpx;
  color: #000;
  font-size: 18px;
  background-color: transparent;
}
.getBtn{
  width: 235rpx;
  height: 235rpx;
  line-height: 235rpx;
  text-align: center;
  border-radius: 50%;
  color: #000;
  font-size: 14px;
  background-color: transparent;
}
</style>
