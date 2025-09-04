<template>
	<view class="address-page">
		<!--地址列表-->
		<view class="address-list" v-if="addressList.length">
			<view class="address-item" v-for="item in addressList" :key="item.id" @click="">
				<view class="address-info">
					<view class="contact-info">
						<text class="name">{{item.name}}</text>
						<text class="phone">{{item.phone}}</text>
						<text class="default-tag" v-if="item.is_default">默认</text>
					</view>
					<view class="address-detail">
						{{item.province}}{{item.city}}{{item.district}}{{item.detail}}
					</view>
				</view>
				<view class="address-actions">
					<view class="action-btn" @click="">
						<up-icon name="edit-pen" size="20" color="#666" ></up-icon>
					</view>
					<view class="action-btn" @click="deleteAddress(item.id)">
						<up-icon name="trash" size="20" color="#666"></up-icon>
					</view>
				</view>
			</view>
		</view>
		<!--空状态-->
		<view class="empty-state" v-else>
			<up-icon name="map" size="60" color="#ccc"></up-icon>
			<text class="empty-text">您还未添加收货地址哦~</text>
		</view>
		
		<!-- 底部新增收货地址 -->
		<view class="add-btn" @click="">
			<up-icon name="plus" size="20" color="#fff"></up-icon>
			<text>新增收货地址</text>
		</view>
		
		<!--地址编辑弹窗-->
		<up-popup :show="false" closeable class="wrap">
			<view class="address-form">
				<view class="form-title">新增地址</view>
				<view class="form-item">
					<text class="label">收货人</text>
					<input placeholder="请输入收货人姓名" class="input"/>
				</view>
				<view class="form-item">
					<text class="label">手机号</text>
					<input  placeholder="请输入手机号" type="number" maxlength="11" class="input"/>
				</view>
				<view class="form-item" @click="">
					<text class="label">所在地区</text>
					<view class="region-display">
						<text >请选择所在地区</text>
						<up-icon name="arrow-right" size="16" color="#999" class="right"></up-icon>
					</view>
				</view>
				<view class="form-item">
					<text class="label">详细地址</text>
					<textarea placeholder="请输入详细地址" class="textarea"/>
				</view>
				<view class="form-item">
					<text class="def">设为默认地址</text>
					<switch color="#ffce2c" @change=""></switch>
				</view>
				<view class="form-actions">
					<view class="cancel-btn" @click="">取消</view>
					<view class="save-btn" @click="">保存</view>
				</view>
			</view>
		</up-popup>
	</view>
</template>

<script lang="ts" setup>
import { ref,reactive } from "vue"
import {get,post} from "../../utils/http"
import {onLoad} from "@dcloudio/uni-app"

onLoad((options)=>{
	getAddressList()
})

//地址列表
const addressList=ref([])
const getAddressList=async()=>{
	try {
		const result:any=await get("/cart/address");
		addressList.value=result
		console.log("地址列表",addressList.value)
	} catch (error) {
		console.log(error)
	}
}

//删除地址
const deleteAddress=(id:number)=>{
	uni.showModal({
		title:"提示",
		content:"确认要删除这个地址吗？",
		success:async(res)=> {
			if(res.confirm){
				try {
					await post("/cart/deleteAddress",{id});
					uni.showToast({
						title:"删除成功",
						icon:"success"
					})
					getAddressList()
				} catch (error) {
					console.log(error)
				}
			}
		}
	})
}
</script>

<style lang="scss" scoped>
	.address-page{
		min-height: 100vh;
		background-color: #f5f5f5;
		padding-bottom: 120rpx;
		.address-list{
			.address-item{
				background-color: #fff;
				margin-bottom: 20rpx;
				padding: 30rpx;
				display: flex;
				align-items: center;
				.address-info{
					flex: 1;
					.contact-info{
						margin-bottom: 10rpx;
						.name{
							font-size: 32rpx;
							font-weight: bold;
							color: #333;
							margin-right: 20rpx;
						}
						.phone{
							font-size: 28rpx;
							color: #666;
							margin-right: 20rpx;
						}
						.default-tag{
							background-color: #ffce2c;
							color: #fff;
							font-size: 24rpx;
							padding: 4rpx 12rpx;
							border-radius: 6rpx;
						}
					}
					.address-detail{
						font-size: 28rpx;
						color: #666;
						line-height: 1.4;
					}
				}
				
				.address-actions{
					display: flex;
					.action-btn{
						width: 60rpx;
						height: 60rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						background-color: #f5f5f5;
						border-radius: 50%;
						margin-right: 16rpx;
					}
				}
			}
		}
		.empty-state{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 100rpx 0;
			.empty-text{
				margin-top: 20rpx;
				font-size: 28rpx;
				color: #999;
			}
		}
		.add-btn{
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			height: 120rpx;
			background-color: #ffce2c;
			color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 32rpx;
			font-weight: bold;
			text{margin-left: 16rpx;}
		}

	}
	.address-form{

		.form-title{
			font-size: 36rpx;
			font-weight: bold;
			color: #333;
			text-align: center;
			margin-bottom: 40rpx;
			margin-top: 20rpx;
		}
		.form-item{
			display: flex;
			align-items: center;
			padding: 30rpx 0;
			border-bottom: 1rpx solid #eee;
			.label{
				width: 160rpx;
				font-size: 28rpx;
				color: #333;
				margin-left: 20rpx;
			}
			.input{
				flex: 1;
				font-size: 28rpx;
				color: #333;
			}
			.def{margin: 0 20rpx;}
			.textarea{
				flex: 1;
				height: 120rpx;
				font-size: 28rpx;
				color: #333;
			}
			.region-display{
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 28rpx;
				color: #333;
				text{
					color: #666
				}
				.right{
					margin-right: 20rpx;
				}
			}
		}
		.form-actions{
			display: flex;
			margin-top:40rpx;
			.cancel-btn,.save-btn{
				flex: 1;
				height: 80rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 32rpx;
				font-weight: bold;
				border-radius: 40rpx;
				margin-right: 16rpx;
			}
			.cancel-btn{
				background-color: #f5f5f5;
				color: #666;
			}
			.save-btn{
				background-color: #ffce2c;
				color: #fff;
			}
		}
	}
</style>
