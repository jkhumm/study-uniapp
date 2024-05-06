<template>
	<view>
		<input type="text" v-model="person.name" />
	</view>
	{{person}}


	<view>
		<UserInfo v-for="(item,index) in userInfoObj" :obj="item" :key="item.xingming"></UserInfo>


	</view>

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

	// 定义组件传值的类型
	const userInfoObj = ref(
		[{
			touxiang: "https://www.xfh2022.com/api/admin/file/download?id=24",
			xingming: "张三"
		}, {
			touxiang: "https://www.xfh2022.com/api/admin/file/download?id=25",
			xingming: "李四"
		}, {
			touxiang: "https://www.xfh2022.com/api/admin/file/download?id=26",
			// xingming: "11"
		}]
	)


	// 默认浅层监听，比如绑定的是input的字符串的值 
	//	watch(person, (newValue, oldValue) => {
	// console.log(newValue)
	// console.log(oldValue)
	// })

	// 如果是对象需要使用箭头函数
	// watch(() => person.value.name, (newValue, oldValue) => {
	// console.log(newValue)
	// console.log(oldValue)
	// })

	// 深度监听
	watch(person, (newValue) => {
		// console.log(newValue)
	}, {
		deep: true,
		immediate: true
	})
</script>

<style>

</style>