<template>
	<view class="container">
		<view class="header" :style="headerStyle">
			<view class="status-bar"></view>
			<view class="nav-content" :style="navStyle">
				<view class="location" @click="startLocation">
					<uni-icons type="location" size="28" color="#fff"></uni-icons>
					<text class="city">{{ cityName }}</text>
				</view>
				<view class="search-box">
					<uni-search-bar 
					 radius="100" 
					 placeholder="搜索宠物服务" 
					 clearButton="none" 
					 cancelButton="none"
					 style="width: 100%"
					>
					</uni-search-bar>
				</view>
			</view>
		</view>
		<view class="content">
			<swiper 
			 class="banner-swiper"
			 indicator-dots
			 autoplay
			 circular
			 indicator-color="rgb(255,255,255,0.6)"
			 indicator-active-color="#fff"
			>
			 <swiper-item v-for="item in bannerList" :key="item.title">
				<view class="swiper-item-content">
					<image :src="item.url" mode="aspectFill"></image>
				</view>
			 </swiper-item>
			</swiper>
			
			<view class="part">
				<up-scroll-list indicatorColor="#fff0f0" indicatorActiveColor="#ffce2c">
					<view class="scroll-item" v-for="item in partList" :key="item.title">
						<image class="scroll-image" :src="item.url"></image>
						<text class="item-title">{{item.title}}</text>
					</view>
				</up-scroll-list>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
import {onLoad} from "@dcloudio/uni-app"
import {ref,computed} from "vue"
import {reverseCode} from "@/utils/geocode"
import {get} from "@/utils/http"

const menuButtonInfo  = ref(null)

onLoad(() =>{
	// #ifdef MP-WEIXIN
	menuButtonInfo.value = uni.getMenuButtonBoundingClientRect()	
	// #endif
	
	// #ifdef 	WEB || APP-PLUS
	menuButtonInfo.value= {
		top:0,
		height:44
	}
	// #endif

	startLocation()
	getBannerList()
	getPartList()
})

//自适应高度
const headerStyle = computed(() => {
	let style = {
		height:"200px"
	}
	// #ifdef MP-WEIXIN
	if(menuButtonInfo.value){
		style={
			height:`${menuButtonInfo.value.top+menuButtonInfo.value.height+20}px`,
		}
	}
	// #endif

	// #ifdef 	WEB || APP-PLUS
	style = {
		height:"90px"
	}
	// #endif
	return style
})
const navStyle = computed(() => {
	let style = {
		top:"0px",
		height:"44px"
	}
	// #ifdef MP-WEIXIN
	if(menuButtonInfo.value){
		style={
			top:`${menuButtonInfo.value.top}px`,
			height:`${menuButtonInfo.value.height}px`,
		}
	}
	// #endif

	// #ifdef 	WEB || APP-PLUS
	style = {
		top:"20px",
		height:"50px"
	}
	// #endif
	return style
})

//地理信息定位
const cityName = ref('')
const startLocation = () =>{
	uni.getLocation({
		type:"wgs84",
		geocode:true,
		success: (res) => {
			console.log("经度", res.longitude);
			console.log("纬度", res.latitude);
			reverseCode(res.longitude,res.latitude).then((res) => {
				cityName.value = res
            }).catch((err) => {
				cityName.value = "无法定位"
            })
		},
		fail: (err) => {
			cityName.value = "无法获取位置"
			uni.showModal({
			    title:"提示",
				content:"需要获取您的位置信息，是否去设置开启定位权限？",
                success:(res)=>{
					if(res.confirm){

						//#ifdef MP-WEIXIN
						uni.openSetting({
							success:(res)=>{
								if(res.authSetting["scope.userLocation"]){
									startLocation()
								}
							}
					    })
					    //#endif

						//#ifdef APP-PLUS
						uni.showModal({
						    title:"提示",
							content:"请在系统设置中开启定位权限并重新定位",
							showCancel:false
						})
						//#endif

						//#ifdef WEB
						setTimeout(()=>{
						    uni.showModal({
						    title:"提示",
							content:"请在浏览器中开启定位权限并重新定位",
							showCancel:false
						 })
						},300)
						//#endif				
				   }
			    }
			})
		}
	})
}

//banner获取
const bannerList = ref([])
const getBannerList= async ()=>{ 
	try{
		const data:any = await get("/home/banner")
		bannerList.value = data.banner
		console.log("bannerList",bannerList);
	}catch(err){
		console.error(err)
	}
}

//功能列表获取
const partList = ref([])
const getPartList = async ()=>{
    try{
    	const data:any = await get("/home/part")
    	partList.value = data.part
    	console.log("partList",partList);
    }catch(err){
    	console.error(err)
    }
  }
</script>

<style lang="scss" scoped>
.container{
	background-color: #f7f7f7;
	.header{
		background-color: $uni-color-primary;
		.status-bar{
			width:100%;
			height: var(--status-bar-height);
		}
		.nav-content{
			display: flex;
			align-items: center;
			padding: 0 30rpx;
			position: fixed;
			left:0;
			right:0;
			.location{
				display: flex;
				align-items: center;
				margin-right: 10rpx;
				.city{
					color:#fff;
					font-size: 28rpx;
					width:120rpx;
					white-space: normal;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			}
			.search-box{
				width:360rpx;
			}
		}
	}
	.content{
		padding:0 20rpx;
		.banner-swiper{
          width: 100%;
		  height: 350rpx;
		  margin-top: 20rpx;
		  .swiper-item-content{
			width: 100%;
			height: 100%;
			image{
				width: 100%;
				height: 100%;
                border-radius: 16rpx;
			}
		  }
		}
		.part{
		   background-color: #fff;
		   margin-top: 20rpx;
		   margin-bottom: 24rpx;
		   border-radius: 16rpx;
		   padding: 30rpx;
		   .scroll-item{
			   text-align: center;
			   .scroll-image{
				   width: 90rpx;
				   height: 90rpx;
				   box-sizing: border-box;
				   margin: 0 20rpx;
			   }
			   .item-title{
				   font-size: 24rpx;
				   color: #333;
				   white-space: nowrap;
				   overflow: hidden;
				   text-overflow: ellipsis;
			   }
		   }
		}
	}
}
</style>
