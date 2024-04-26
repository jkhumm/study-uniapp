<template>
	<view>
		<!-- vertical="true" 纵向滚动 -->
		<swiper :indicator-dots="true" indicator-color="yellow" indicator-active-color="white" circular="true">
			<swiper-item>
				<view class="itemC">1111</view>
			</swiper-item>
			<swiper-item>
				<view class="itemC">2222</view>
			</swiper-item>
			<swiper-item>
				<view class="itemC">3333</view>
			</swiper-item>
			<swiper-item>
				<view class="itemC">4444</view>
			</swiper-item>
		</swiper>
	</view>

	<image src="../../../static/logo.png" class="pic1" mode=""></image>
	<image src="../../../static/msk.jpg" class="pic2" mode="aspectFill"></image>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.itemC {
		// vw 视图的宽度 100vw就是百分百宽度 vh是屏幕的可视区域
		width: 100vw;
		height: 200px;
		border: 1px solid green;
		background-color: green;
	}

	.pic1 {
		width: 150px;
		height: 150px;
	}

	.pic2 {
		width: 250px;
		height: 150px;
	}
</style>