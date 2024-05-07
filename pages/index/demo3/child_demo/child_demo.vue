<template>
	<view>
		<xxm-child @customerColor="changeColor" @customerChange="writeInput"></xxm-child>
		<view class="box" :style="{background:color}"></view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
	
	const num = ref(0)
	const color = ref("#ccc")
	function changeColor(e){
		num.value = e;
		color.value = "#" + String(e).substring(3,6)
		console.log(color.value)
	}
	
	function writeInput(e){
		console.log(e)
	}
	
	
</script>

<style lang="scss">
.box{
	width: 200px;
	height: 200px;
	
}

</style>
