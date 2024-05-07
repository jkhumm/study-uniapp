<template>
	<view>
		组件
	</view>
</template>

<script setup>
	import {
		onUnmounted
	} from 'vue';

	onUnmounted(() => {
		console.log("组件被卸载")
	})
</script>

<style lang="scss">

</style>