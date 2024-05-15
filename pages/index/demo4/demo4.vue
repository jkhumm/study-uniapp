<template>
	<view class="box">
		姓名：{{stu.name}}
		年龄：{{stu.age}}
	</view>

	<scroll-view scroll-y="true" ref="sc">
		<view></view>
	</scroll-view>


	<navigator url="/pages/index/demo1/demo1">跳转到demo1</navigator>

	<navigator url="/pages/index/demo2/re_geng" open-type="reLaunch">跳转到re_geng</navigator>

	<view v-for="(item,index) in 50" :key="index">{{item}}</view>

	<view class="fixed" v-if="flag">
		^
		|
	</view>


</template>

<script setup>
	let stu = ref({
		name: "aa",
		age: 0
	})
	const sc = ref(null)
	const pageScrollValue = ref(0)
	const flag = ref(false)

	// 需要引入对应的uniap的包,onLoad一般是用于接受上一个页面的参数会用到他，组件还没挂载所以拿不到组件的ref信息
	onLoad((e) => {
		console.log("onLoad")
		stu.value['name'] = e.name
		stu.value['age'] = e.age
	})

	onReady(() => {
		// dom没渲染在onLoad不会打印
		console.log("onReady")
	})

	onShow(() => {
		// onShow会触发，新页面跳转进来触发onShow 
		console.log("onshow")
	})

	onHide(() => {
		// onHide会触发，页面消失触发onHide
		console.log("onHide")
	})

	onUnload(() => {
		console.log("页面卸载")
	})

	onPageScroll((e) => {
		console.log(e.scrollTop)
		flag.value = e.scrollTop > 100

	})
</script>

<style lang="scss" scoped>
	.fixed {
		width: 100px;
		height: 20px;
		background-color: orange;
		position: fixed;
		right: 30px;
		bottom: 30px;
	}

	.box {
		background-color: $hmm-color;
	}

	@import "@/common/css/style.css"
</style>