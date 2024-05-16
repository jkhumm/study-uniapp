<template>

	<button size="mini" @click="sendRequrst">sendRequrst</button>
	<button size="mini" @click="sendRequrst2">sendRequrst2</button>
	<view class="layout">
		<view class="row" v-for="item in arrays" :key="item.id">

			<view class="title">{{item.title}}</view>
			<view class="content">{{item.body}}</view>
		</view>

	</view>

	<view class="">
		{{arrays}}
	</view>

</template>



<script setup>
	import {
		ref
	} from 'vue';
	let arrays = ref([])

	function sendRequrst() {
		// uni.request({
		// 	url: "https://jsonplaceholder.typicode.com/posts",
		// 	success(res) {
		// 		arrays.value = res.data
		// 	}
		// })
		// 也支持promise方式
		uni.request({
			url: "https://jsonplaceholder.typicode.com/posts"
		}).then((res) => {
			arrays.value = res.data
		})
	}

	// 异步处理同步化 async+await 连用 单独使用await会报错
	async function sendRequrst2() {
		let res = await uni.request({
			url: "https://jsonplaceholder.typicode.com/posts"
		})
		arrays.value = res.data
	}
</script>

<style scoped lang="scss">
	.layout {
		padding: 30rpx;

		.row {
			border-bottom: 1rpx solid #cfcfcf;
			padding: 20rpx 0;

			.title {
				font-size: 36rpx;
				margin-bottom: 10rpx;
			}

			.content {
				font-size: 22rpx;
				color: grey;
			}
		}
	}
</style>