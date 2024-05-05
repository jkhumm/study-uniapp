<template>
	<view>
		<input type="text" v-model="person.name" />

	</view>
	{{person}}
</template>

<script setup>
	import {
		ref,
		watch
	} from 'vue';
	const person = ref({
		name: '张三',
		age: 10
	})

	// 默认浅层监听，比如绑定的是input的字符串的值
	// watch(person, (newValue, oldValue) => {
	// 	console.log(newValue)
	// 	console.log(oldValue)
	// })

	// 如果是对象需要使用箭头函数
	// watch(() => person.value.name, (newValue, oldValue) => {
	// 	console.log(newValue)
	// 	console.log(oldValue)
	// })

	// 深度监听
	watch(person, (newValue) => {
		console.log(newValue)
	}, {
		deep: true,
		immediate: true
	})
</script>

<style>

</style>