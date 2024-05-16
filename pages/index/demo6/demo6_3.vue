<template>
	<view>
<!-- 		<navigator url="/pages/index/demo6/demo6_2">跳转到demo6_2</navigator> -->
		
			<button  @click="jumpDemo6_2" size="mini">跳转到demo6_2</button>
			<button  @click="backDemo6_2" size="mini">返回到demo6_2</button>
	</view>
</template>

<script setup>
	function jumpDemo6_2() {
		uni.navigateTo({
			url: "/pages/index/demo6/demo6_2"
		})
	}
	function backDemo6_2() {
		uni.navigateBack({
			url: "/pages/index/demo6/demo6_2"
		})
	}
	onLoad((e)=> {
		console.log("生命周期onLoad")
		console.log(e)
	})
	
	
	
</script>

<style lang="scss" scoped>

</style>
