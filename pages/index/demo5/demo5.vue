<template>
	<view v-for="(item,index) in 100" :key="index">
		{{item}}
	</view>
</template>

<script setup>
	import {onReachBottom} from "@dcloudio/uni-app"


onReachBottom((e)=>{
	console.log("到底了" + e)
})
	
</script>

<style lang="scss" scoped>

</style>
