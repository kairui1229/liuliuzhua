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
	</view>
</template>

<script setup>
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
}
</style>
