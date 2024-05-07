<template>
	<view class="layout">
		<scroll-view scroll-y="true" class="scroll" ref="scroll">
			<view></view>
		</scroll-view>

		<life-components v-if="show"></life-components>


	</view>
</template>

<script setup>
	import {
		onMounted,
		ref
	} from 'vue';

	const show = ref(true)
	const scroll = ref(null)

	// 挂载生命周期
	onMounted(() => {
		console.log(scroll.value)
	})

	setTimeout(() => {
		show.value = false
	}, 2000)
</script>

<style lang="scss" scoped>

</style>