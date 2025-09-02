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
				  @click="switchCategory(index,item.id)"
				  >
				  {{item.category_name}}
				  </view>
				</scroll-view>
				
				<!-- 右侧商品 -->
				<scroll-view class="category-right" scroll-y>
					<view class="category-title">{{categories[currentCategory].category_name}}</view>
					<view class="product-list">
						<view class="product-item" v-for="item in products" :key="item.id">
							<image :src="item.main_pic" mode="aspectFill" class="product-image"></image>
							<view class="product-info">
								<text class="product-name">{{item.name}}</text>
								<view class="product-row">
									<text class="product-price">¥{{item.price}}</text>
									<view class="add-cart">
										<up-icon name="shopping-cart" color="#fff" size="18"></up-icon>
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
	
	<view class="float-cart" @click=goCart>
		<up-icon name="shopping-cart" color="#ffce2c" size="80rpx"></up-icon>
		<view class="cart-badge" v-if="cartCount > 0">
			{{cartCount}}
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
const switchCategory = (index:number,category_id:number) =>{
	currentCategory.value = index
	products.value = []
	getProducts(1,category_id)
}

//获取右侧商品列表
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
	currentPage.value = page
}

onReachBottom(() => {
	if(currentPage.value < totalPages.value){
		getProducts(currentPage.value+1,categories.value[currentCategory.value].id)
	}
})

//购物车
const cartCount = ref(2)
const goCart = () =>{
	//先判断用户是否登录，如果没有登录就要先跳到登录页面
	const token = uni.getStorageSync("token")
	if(!token){
		uni.navigateTo({
			url:"/pages/login/login"
		})
		return
	}
	uni.navigateTo({
		url:"/pages/cart/cart"
	})
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
			display: flex;
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
			.category-right{
				flex:1;
				height: 100%;
				padding: 20rpx;
				.category-title{
					font-size: 32rpx;
					font-weight: bold;
					margin-bottom: 20rpx;
					padding:0 10rpx;
				}
				.product-list{
					display: flex;
					flex-wrap: wrap;
					.product-item{
						width: calc(50% - 20rpx);
						margin: 10rpx;
						padding: 10rpx;
						box-sizing: border-box;
						border-radius: 12rpx;
						overflow: hidden;
						box-shadow: 0 2rpx 12rpx rgba(0, 0, 0,0.2);
						.product-image{
							width: 100%;
							height: 200rpx;
						}
						.product-info{
							padding: 16rpx;
							.product-name{
								font-size: 24rpx;
								color: #333;
								display: block;
								margin-bottom: 8rpx;
								white-space: nowrap;
								overflow: hidden;
								text-overflow: ellipsis;
								width: 100%;
								line-height: 1.4;
							}
							.product-row{
								display: flex;
								justify-content: space-between;
								align-items: center;
								.product-price{
									font-size: 26rpx;
									color:$uni-color-primary;
									font-weight: bold;
								}
								.add-cart{
									width: 48rpx;
									height: 48rpx;
									background-color: $uni-color-primary;
									border-radius: 50%;
									display: flex;
									align-items: center;
									justify-content: center;
								}
							}
						}
					}
				}
			}
		}
	}
}
.float-cart{
	position: fixed;
	right:30rpx;
	bottom: 100rpx;
	width: 100rpx;
	height: 100rpx;
	border-radius: 50%;
	background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 4rpx 16rpx rgba(0, 0, 0,0.2);
	z-index: 999;
	.cart-badge{
		position: absolute;
		top:-6rpx;
		right: -6rpx;
		background-color: #ff4d4f;
		color: #fff;
		font-size: 24rpx;
		width: 36rpx;
		height: 36rpx;
		line-height: 36rpx;
		border-radius: 50%;
		text-align: center;
		padding: 6rpx;
	}
}
</style>
