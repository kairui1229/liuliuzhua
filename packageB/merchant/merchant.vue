<template>
	<view class="merchant-page">
		<view class="search-header">
			<up-search placeholder="搜索商家"></up-search>
		</view>
		<view class="merchant">
			<view class="custom-dropdown">
				<view class="dropdown-header">
					<view class="dropdown-item" @click="changeSort(0)">
						<text class="dropdown-text">距离</text>
						<up-icon name="arrow-down" size="16" color="#999"></up-icon>
					</view>
					<view class="dropdown-item" @click="changeSort(1)">
						<text class="dropdown-text">好评</text>
						<up-icon name="arrow-down" size="16" color="#999"></up-icon>
					</view>
					<view class="dropdown-item" @click="changeSort(2)">
						<text class="dropdown-text">价格</text>
						<up-icon name="arrow-down" size="16" color="#999"></up-icon>
					</view>
				</view>
			</view>
		</view>
		<view class="tabs">
			<up-tabs :list="list1"></up-tabs>
		</view>
		<view class="service-card" v-for="item in merchanList" :key="item.merchant_id" @click="goDetail(item)">
			<image class="service-img" mode="aspectFill" :src="item.pic"></image>
			<view class="service-info">
				<text class="service-name">{{item.merchant_name}}</text>
				<view class="rate-area">
					<up-rate v-model="item.rating" readonly  inactive-color="#b2b2b2" active-color="#ffce2c"></up-rate>
					<text class="rate-text">{{item.rating}}</text>
				</view>
				<text class="service-detail">{{item.address}}</text>
				<view class="tag-area">
					<view class="tag-item" v-for="tag in item.service.split(',')" :key="tag">{{tag}}</view>
				</view>
				<view class="price-area">
					<view>惠</view>【新客福利】<text>￥19.9</text>代金券可领
				</view>
			</view>
		</view>
		<up-divider text="我是有底线的"></up-divider>
	</view>
</template>

<script lang="ts" setup>
import { reactive,ref } from 'vue';  
import { get } from '../../utils/http';
import {onReachBottom,onLoad} from "@dcloudio/uni-app"

const list1 = reactive([  
	{ name: '推荐' },  
	{ name: '寄养' },  
	{ name: '摄影' },  
	{ name: '美容' },  
	{ name: '洗澡' },  
	{ name: '接送' },  
	{ name: '疫苗' },  
	{ name: '训练' }  
]); 

onLoad((options)=>{
	getMerchanList(1)
})

//商家列表
const merchanList=ref([])
	const currentPage=ref<number>(1)
	const totalPages=ref<number>(0)
	const getMerchanList=async (page:number)=>{
		try {
			const data:any=await get("/home/merchants",{page});
			if(page===1){
				merchanList.value=data.list
			}else{
				merchanList.value=[...merchanList.value,...data.list]
			}
			totalPages.value=data.pagination.totalPages
			currentPage.value=data.pagination.current
		} catch (error) {
			console.error("获取失败")
		}	
	}
onReachBottom(()=>{
	if(currentPage.value<totalPages.value){
		getMerchanList(currentPage.value+1)
	}
})
</script>

<style lang="scss" scoped>
	.merchant-page{
		min-height: 100vh;
		background-color: #f5f5f5;
		.search-header{
			background-color: #fff;
			padding: 30rpx;
		}
		.merchant{
			width: 100%;
			.custom-dropdown{
				background-color: #fff;
				.dropdown-header{
					display: flex;
					align-items: center;
					border-bottom: 1rpx solid #f0f0f0;
				}
				.dropdown-item{
					flex: 1;
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 30rpx 20rpx;
					.dropdown-text{
						font-size: 28rpx;
						color: #333;
						margin-right: 10rpx;
					}
				}
			}
		}
		.tabs{
			background-color: #fff;
			padding: 30rpx;
		}
	}
	
	.service-card{
		display: flex;
		background-color: #fff;
		border-radius: 16rpx;
		margin: 10rpx 0 10rpx 0;
		padding: 20rpx;
		.service-img{
			width: 160rpx;
			height: 160rpx;
			background-color: #ddd;
			border-radius: 8rpx;
			margin-right: 20rpx;
			margin-top: 8rpx;
		}
		.service-info{
			flex: 1;
			.service-name{
				font-size: 32rpx;
				font-weight: bold;
				color: #000;
				line-height:44rpx;
				display: block;
				margin-bottom: 8rpx;
			}
			.rate-area{
				display: flex;
				align-items: center;
				margin-bottom: 8rpx;
				.rate-text{
					color: $uni-color-primary;
					font-size: 28rpx;
					margin-left: 10rpx;
				}
				
			}
			.service-detail{
				font-size: 24rpx;
				color: #999;
				line-height: 34rpx;
				display: block;
				margin-bottom: 20rpx;
			}
			.tag-area{
				display:flex;
				align-items: center;
				margin: 12rpx 0;
				.tag-item{
					font-size: 18rpx;
					padding: 4rpx 14rpx;
					border-radius: 20rpx;
					margin-right: 16rpx;
					border:1px solid;
					&:nth-child(1){
						color: #ff6b81;
						border-color: #ff6b81;
						background-color: rgba(255, 107, 129, 0.1);
					}
					&:nth-child(2){
						color: #ffce2c;
						border-color: #ffce2c;
						background-color: rgba(255, 206, 44, 0.1);
					}
					&:nth-child(3){
						color: #19be6b;
						border-color: #19be6b;
						background-color: rgba(25, 190, 107, 0.1);
					}
					&:nth-child(4){
						color: #ff9900;
						border-color: #ff9900;
						background-color: rgba(255, 153, 0, 0.1);
					}
					&:last-child{
						margin-right: 0;
					}
				}
			}
			.price-area{
				display: flex;
				align-items: center;
				margin-top: 16rpx;
				font-size: 24rpx;
				color:#666;
				view{
					background-color: $uni-color-primary;
					color: #fff;
					font-size: 20rpx;
					padding: 2rpx 8rpx;
					border-radius: 4rpx;
					margin-right: 8rpx;
				}
				text{
					color: #ff6b81;
					font-size: 24rpx;
					margin: 0 4rpx;
				}
			}
			
		}
	}
</style>
