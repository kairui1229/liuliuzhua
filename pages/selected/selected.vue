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
				  <view 
				  v-for="(item,index) in categories" 
				  :key="item.id" 
				  class="category-item"
				  :class="{active:currentCategory === index}"
				  @click="switchCategory(index)"
				  >
				  {{item.category_name}}
				  </view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
import {onLoad,onReachBottom} from "@dcloudio/uni-app"
import {ref,computed} from "vue"
import {get} from "@/utils/http"

onLoad(() =>{
	getCategories()
})

//获取左侧菜单分类
const categories:any = ref([])
const currentPage= ref(1)
const getCategories = async () =>{
	const data:any = await get("/sel/tag")
	categories.value = data.tag
	getProducts(currentPage.value,categories.value[0].id)
	//console.log(categories.value,123)
}

//设置高亮效果
const currentCategory = ref(0)
const switchCategory = (index:number) =>{
	currentCategory.value = index
}

//获取右侧商品菜单
const products = ref([])
const totalPages = ref(0)
const getProducts = async (page:number,category_id:number) =>{
	const data:any = await get("/sel/products",{page,category_id})
	console.log("商品数据",data)
	if(page === 1){
		products.value = data.list
	}else{
		products.value = [...products.value,...data.list]
	}
	totalPages.value = data.pagination.totalPages
	currentPage.value = data.pagination.current
}

onReachBottom(() => {
	if(currentPage.value < totalPages.value){
		//getProducts(currentPage.value+1,category_id)
	}
})
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
					position: relative;
					height: 100rpx;
					line-height: 100rpx;
					text-align: center;
					font-size: 28rpx;
					color: $uni-text-color;
					border-bottom: 1px solid #eee;
					&.active{
						background-color: #fff;
						color:$uni-color-primary;
						font-weight: bold;
						&::before{
							content: "";
							position: absolute;
							width: 6rpx;
							height: 30rpx;
							left: 0;
							top: 50%;
							transform: translateY(-50%);
							background-color: $uni-color-primary;
							border-radius: 0 4rpx 4rpx 0;
						}
					}
				}
			}
		}
	}
}
</style>
