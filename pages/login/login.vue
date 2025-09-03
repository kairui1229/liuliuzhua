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
		
		<!-- 登录表单 -->
		<view class="login-form">
			<!-- 小程序登录 -->
			<view class="login-content" v-if="platform==='mp-weixin'">
				<view class="quick-login">
					<text class="login-title">手机号快捷登录</text>
					<text class="login-desc">使用微信授权快捷登录</text>
					<button class="wechat-login-btn">
						<up-icon name="weixin-fill" color="#fff" size="32" style="margin-right: 10rpx;"></up-icon>
						微信获取手机号一键登录
						</button>
				</view>
			</view>
			
			<!-- h5 app登录 -->
			<view v-else>
				<view class="login-content">
					<text class="login-title">手机号登录</text>
					<text class="login-desc">请输入手机号和验证码</text>
					<view class="input-group">
						<view class="input-item">
							<up-input
							    placeholder="请输入手机号"
								prefixIcon="phone"
								border="none"
								prefixIconStyle="font-size: 22px;color: #909399"
							>
							</up-input>
						</view>
						<view class="input-item">
							<up-input
								placeholder="请输入验证码"
								type="number"
								maxlength="6"
								border="none"
								prefixIcon="lock"
								prefixIconStyle="font-size: 22px;color: #909399"
								
							>
							</up-input>
							<view class="code-btn" @click="">
								获取验证码
							</view>
						</view>
						<up-button
							type="primary" 
							:custom-style="{
							backgroundColor:'#ffce2c',
							borderColor:'#ffce2c',
							height:'88rpx',
							fontSize:'32rpx'
						    }"
						    @click=""
						>
						登录
						</up-button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
import { onMounted,ref } from 'vue';

const platform = ref("")
onMounted(()=>{
	// #ifdef MP-WEIXIN
		platform.value="mp-weixin"
	// #endif
	
	// #ifdef WEB
		platform.value="web"
	// #endif
	
	// #ifdef APP-PLUS
		platform.value="app"
	// #endif
})
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
	.login-form{
		background-color: #fff;
		border-radius: 40rpx 40rpx 0 0;
		padding: 60rpx 40rpx;
		margin-top: -40rpx;
		height: calc(100vh - 580rpx);
		.login-content{
			.login-title{
				font-size: 36rpx;
				font-weight: bold;
				color: #333;
				text-align: center;
				display: block;
				margin-bottom: 20rpx;
			}
			.login-desc{
				font-size: 28rpx;
				color: #999;
				text-align: center;
				display: block;
				margin-bottom: 60rpx;
			}
			.wechat-login-btn{
				background-color: #07c160;
				color: #fff;
				border: none;
				border-radius: 16rpx;
				height: 88rpx;
				font-size: 32rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-top: 60rpx;
				width: 100%;
			}
			.input-group{
				margin-bottom: 60rpx;
				.input-item{
					background-color: #f8f8f8;
					border-radius: 16rpx;
					padding: 30rpx 20rpx;
					margin-bottom: 30rpx;
					display: flex;
					align-items: center;
					.code-btn{
						padding:10rpx 20rpx ;
						background-color: #ffce2c;
						color: #fff;
						border-radius: 8rpx;
						font-size: 24rpx;	
					}
				}
			}
		}
	}
}
</style>