<template>
	<view class="out">
		<input type="text" v-model="firstName" placeholder="请输入名" />
		<input type="text" v-model="lastName" placeholder="请输入姓氏" />
		<!-- 		<view>全称：{{firstName + "-" + lastName}}</view> -->
		<view>全称：{{fullName}}</view>
		<!-- <view>全称：{{fullName()}}</view> -->
	</view>
</template>

<script setup>
	import {
		computed,
		ref
	} from 'vue';
	const firstName = ref("")
	const lastName = ref("")

	// 也可以定义一个计算函数 写法是()=> {return a+b} 一行时可以缩写 ()=>a+b
	//  第二种写法：有缓存，当存在多个一样的view时，只会计算一次，性能好
	const fullName = computed(() => firstName.value + "-" + lastName.value)

	// 第三种写法：函数方式，但是每次计算式都会被调用
	// 	const fullName = () => firstName.value + "-" + lastName.value
</script>

<style lang="scss" scoped>
	.out {
		padding: 20px;

		input {
			border: 1px solid #eee;
			height: 40px;
			margin: 10px 0; // 上下10 左右0
		}
	}
</style>