<template>
	<view class="container">
		<view class="header">
			<view class="nav-content">
				<uni-search-bar
				 radius="100" 
				 placeholder="猫粮狗粮、宠物零食" 
				 clearButton="none" 
				 cancelButton="none"
				 style="width: 100%"
				>
				</uni-search-bar>
			</view>
		</view>
		<view class="content">
			<view class="category-section">
				<!-- 左侧分类 -->
				<scroll-view class="category-left" scroll-y>
				  <view v-for="item in categories" :key="item.id" class="category-item">{{item.category_name}}</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
import {onLoad} from "@dcloudio/uni-app"
import {ref,computed} from "vue"
import {get} from "@/utils/http"

onLoad(() =>{
	getCategories()
})

//获取左侧菜单分类
const categories:any = ref([])
const getCategories = async () =>{
	const data:any = await get("/sel/tag")
	categories.value = data.tag
	console.log(categories.value,123)
}
</script>

<style lang="scss" scoped>
.container{
	background-color: #f7f7f7;
	.header{
		background-color: $uni-color-primary;
		width: 100%;
		.nav-content{
			height: 88rpx;
			display: flex;
			align-items: center;
			padding: 20rpx 50rpx;
		}
	}
	.content{
		.category-section{
			background-color: #fff;
			border-radius: 16rpx;
			height: calc(100vh - 150rpx);
			.category-left{
				width: 180rpx;
				height: 100%;
				background-color: #f7f7f7;
				.category-item{
					height: 100rpx;
					line-height: 100rpx;
					text-align: center;
					font-size: 28rpx;
					color: $uni-text-color;
					border-bottom: 1px solid #eee;
				}
			}
		}
	}
}
</style>
