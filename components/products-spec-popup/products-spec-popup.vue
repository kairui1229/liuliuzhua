<template>
	<up-popup :show="show" closeable @close="handleClose">
		<view class="spec-popup">
			<view class="popup-header">
				<image class="product-img" :src="product.main_pic" mode="aspectFill"></image>
				<view class="product-info">
					<view class="price">¥{{product.price}}</view>
					<view class="selected">请选择规格</view>
				</view>
			</view>
			<view class="spec-content">
				<view class="spec-group">
					<view class="group-title">重量</view>
					<view class="spec-items">
						<view class="spec-item">2kg</view>
						<view class="spec-item">5kg</view>
					</view>
				</view>
			</view>
			<view class="popup-footer">
				<view class="quantity">
					<text>数量</text>
					<view class="quantity-control">
						<view class="minus" @click="">-</view>
						<view class="count">1</view>
						<view class="plus" @click="">+</view>
					</view>
				</view>
				<view class="confirm-ok" @click="">确定</view>
				<view class="confirm-btn" @click="">加购</view>
			</view>
		</view>
	</up-popup>
</template>

<script setup lang="ts">
const props = defineProps<{show:boolean, product:any}>()
const emit = defineEmits(["close"])
const handleClose = () =>{
	emit('close')
}
</script>

<style lang="scss" scoped>
	.spec-popup {
		padding: 30rpx;

		.popup-header {
			display: flex;
			align-items: center;
			margin-bottom: 30rpx;

			.product-img {
				width: 160rpx;
				height: 160rpx;
				border-radius: 12rpx;
				margin-right: 20rpx;
			}

			.product-info {
				flex: 1;

				.price {
					color: #ff4d4f;
					font-size: 36rpx;
					font-weight: bold;
					margin-bottom: 10rpx;
				}

				.selected {
					color: #666;
					font-size: 28rpx;
				}
			}

		}

		.spec-content {
			max-height: 600rpx;
			overflow-y: auto;

			.spec-group {
				margin-bottom: 30rpx;

				.group-title {
					font-size: 28rpx;
					color: #333;
					margin-bottom: 20rpx;
				}

				.spec-items {
					display: flex;
					flex-wrap: wrap;
					gap: 20rpx;

					.spec-item {
						padding: 10rpx 30rpx;
						border: 2rpx solid #ddd;
						border-radius: 30rpx;
						font-size: 26rpx;
						color: #666;

						&.active {
							color: #ffce2c;
							border-color: $uni-color-primary;
							background-color: rgba(255, 206, 44, 0.1);
						}
					}
				}
			}
		}

		.popup-footer {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 30rpx;
			padding-top: 30rpx;
			border-top: 2rpx solid #eee;

			.quantity {
				display: flex;
				align-items: center;

				text {
					margin-right: 20rpx;
					font-size: 28rpx;
					color: #333;
				}

				.quantity-control {
					display: flex;
					align-items: center;

					.minus,
					.plus {
						width: 60rpx;
						height: 60rpx;
						border: 2rpx solid #ddd;
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 32rpx;
					}

					.count {
						width: 80rpx;
						height: 60rpx;
						text-align: center;
						border-top: 2rpx solid #ddd;
						border-bottom: 2rpx solid #ddd;
						line-height: 60rpx;
					}
				}
			}

			.confirm-btn {
				width: 220rpx;
				height: 80rpx;
				background-color: $uni-color-primary;
				color: #fff;
				border-radius: 40rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 28rpx;
			}
			.confirm-ok{
				width: 140rpx;
				height: 80rpx;
				border: $uni-color-primary 1px solid;
				color: $uni-color-primary;
				border-radius: 80rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 28rpx;
			}
		}
	}
</style>