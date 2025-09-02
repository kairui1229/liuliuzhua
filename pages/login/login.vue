<template>
	<view class="login-container">
		<!-- 顶部背景 -->
		<view class="login-header">
			<view class="header-content">
				<image class="logo" src="/static/logo.png" mode=""></image>
				<text class="app-name">溜溜爪宠物服务</text>
				<text class="app-slogan">让爱宠生活更美好</text>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.login-container{
	height: 100vh;
	background: linear-gradient(135deg,#ffce2c 0%,#ffb347 100%);
	.login-header{
			height: 500rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			.header-content{
				text-align: center;
				.logo{
					width:120rpx;
					height: 120rpx;
					margin-bottom: 20rpx;
				}
				.app-name{
					display: block;
					font-size: 48rpx;
					font-weight: bold;
					color: #fff;
					margin-bottom: 10rpx;
				}
				.app-slogan{
					font-size: 28rpx;
					color: rgba(255, 255, 255, 0.8);
				}
			}
		}
}
</style>
