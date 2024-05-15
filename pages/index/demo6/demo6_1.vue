<template>
	<view>

	</view>
</template>

<script setup>
	// 动态设置当前页面的标题
	uni.setNavigationBarTitle({
		title: '动态标题'
	});

	// 设置页面导航条颜色。如果需要进入页面就设置颜色，请延迟执行，防止被框架内设置颜色逻辑覆盖
	uni.setNavigationBarColor({
		frontColor: '#ffffff',
		backgroundColor: '#ff0000',
		animation: {
			duration: 400,
			timingFunc: 'easeIn'
		}
	})

	// 在当前页面显示导航条加载动画
	uni.showNavigationBarLoading()

	setTimeout(function() {
		console.log("接口返回结果关闭加载")
		uni.hideNavigationBarLoading()
	}, 2000)

	// 隐藏返回首页按钮  放在非tarbar页面，就没有回到主页（左上方图标）
	uni.hideHomeButton()
</script>

<style scoped lang="scss">

</style>