<template>
	<view>
		姓名：{{stu.name}}
		年龄：{{stu.age}}
	</view>
	
	<scroll-view scroll-y="true" ref="sc" >
		<view></view>
	</scroll-view>
	

	<navigator url="/pages/index/demo1/demo1">跳转到demo1</navigator>

	
</template>

<script setup>
	
	import {onLoad,onReady,onShow,onHide} from "@dcloudio/uni-app"
import { ref } from "vue";
	
	let stu = ref({name:"aa",age:0})
	const sc = ref(null)
	
	// 需要引入对应的uniap的包,onLoad一般是用于接受上一个页面的参数会用到他，组件还没挂载所以拿不到组件的ref信息
	onLoad((e)=>{
		console.log("onLoad")
		stu.value['name']=e.name
		stu.value['age']=e.age
	})
	
	onReady(()=>{

		// dom没渲染在onLoad不会打印  只有onReady可以拿到dom节点
		//console.log(sc.value)
		console.log("onReady")
	})
	
	onShow(()=>{
		// onShow会触发，新页面跳转进来触发onShow 
		console.log("onshow")
	})
	
	onHide(()=>{
		// onHide会触发，页面消失触发onHide
		console.log("onHide")
	})

</script>

<style lang="scss" scoped>

</style>
