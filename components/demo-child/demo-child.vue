<template>
	<view class="out">
		子组件count值 {{count}}
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';


	const count = ref(100)

	const updateCount = function() {
		count.value++;
	}

	// 导出count到父页面
	defineExpose({
		youObj: count,
		name: "明哥",
		age: 11,
		updateCount
	})
</script>

<style lang="scss" scoped>
	.out {
		padding: 20px;
		background: #eee;
	}
</style>