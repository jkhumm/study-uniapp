<template>
	<view>
		子组件
<!-- 		<button class="button" @click="$emit('customerColor', Math.random())">按钮</button> -->
		
		<button class="button" @click="onClick">按钮</button>
		
		
		<input type="text" @input="onInput" />
		
	</view>
</template>

<script setup>
	
	const emitDemo = defineEmits(['customerColor','customerChange'])
	
	function onClick() {
		emitDemo("customerColor", Math.random())
	}
	
	function onInput(e) {
		emitDemo("customerChange", e.detail.value)
	}
	
</script>

<style lang="scss" scoped>
.button{
	font-size: 12px;
	width: 100px;
	height: 30px;
	background-color: gray;
	margin-left: 0px;
}
input{
	border: 1px solid #cfcfcf;
	height: 40px;
}
</style>