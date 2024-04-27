<template>
	<view>
		<!-- vertical="true" 纵向滚动 -->
		<swiper :indicator-dots="true" indicator-color="yellow" indicator-active-color="white" interval="3000"
			autoplay="true" duration="3000" circular="true" class="itemC">

			<swiper-item>
				<image src="https://www.xfh2022.com/api/admin/file/download?id=22" mode="aspectFill" class="pic1"></image>
			</swiper-item>

			<swiper-item>
				<image src="https://www.xfh2022.com/api/admin/file/download?id=23" mode="aspectFill" class="pic1"></image>
			</swiper-item>

			<swiper-item>
				<image src="https://www.xfh2022.com/api/admin/file/download?id=24" mode="aspectFill" class="pic1"></image>
			</swiper-item>

			<swiper-item>
				<image src="https://www.xfh2022.com/api/admin/file/download?id=26" mode="heightFix" class="pic1"></image>
			</swiper-item>

		</swiper>
	</view>



	<view class="">
		<!-- 保留当前页面，跳转到应用内的某个页面 -->
		<navigator url="/pages/index/index" open-type="navigateBack"> <text selectable="true">跳转到index</text></navigator>
		<!-- 返回箭头没了 -->
		<navigator url="/pages/index/index" open-type="reLaunch">reLaunch</navigator>

		<!-- 		<navigator url="/pages/index/index"> -->
		<a href="https://www.baidu.com">
			<image src="../../../static/msk.jpg"></image>
		</a>
		<!-- </navigator> -->


		<button size="mini">按钮</button>
		<button size="default" plain="true" disabled>按钮</button>
		<input type="number" placeholder="请输入" placeholder-style="color:red" />
	</view>



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
		width: 100%;
		height: 100%;
	}
</style>