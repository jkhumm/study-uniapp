<template>
	<view>
	<!-- 	<navigator url="/pages/index/demo6/demo6_3">跳转到demo6_3</navigator> -->
	<button  @click="jumpDemo6_3" size="mini">跳转到demo6_3</button>
	
	<button  @click="jumpIndex" size="mini">跳转到首页</button>
	</view>
</template>

<script setup>
	function jumpDemo6_3() {
		uni.navigateTo({
			url: "/pages/index/demo6/demo6_3?name=jack&age=12"
		})
	}
	function jumpIndex() {
		uni.reLaunch({
			url: "/pages/index/index" // tarbar页面只能用reLaunch
		})
	}
	
	
</script>

<style lang="scss" scoped>

</style>
