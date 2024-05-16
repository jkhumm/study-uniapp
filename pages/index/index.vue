<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<button @click="updateMsg">触发定时</button>
		<div v-bind:class="youColor">颜色</div>
		<p>{{1==1 ? 'yes' : 'no'}}三元</p>
		{{ "vue".split('').reverse().join('') }}
		<h1 v-if="awesome">Vue is awesome!</h1>
		<h1 v-else>Oh no 😢</h1>

		<uni-data-select v-model="selectValue" :localdata="range" @change="change">请选择</uni-data-select>

		<uni-load-more status="noMore" :content-text="contentTextStr"></uni-load-more>
		<navigator url="/pages/index/demo1/demo1">跳转到demo1</navigator>
		<navigator open-type="reLaunch" url="/pages/index/demo4/demo4?name=jack&age=12">跳转到demo4</navigator>
		
		<button @click="stopDownPullRefresh">停止下拉刷新</button>

	</view>



</template>

<script>
	export default {
		// 在实例初始化之后，观测数据（data observer和 event/watcher）之前 被调用
		beforeCreate() {
			//console.log("beforeCreate")
		},
		// 在实例创建之后被调用，这一步实例已经完成了一下配置，数据观测、属性方法的运算，watch/event事件回调，然而挂载阶段还没开始
		created() {
			//console.log('created')
		},
		onLoad() {
			//console.log('on load')
		},
		// 在挂载开始之前被调用：相关的渲染函数首次被调用
		beforeMount() {
			//console.log('beforeMount')
		},
		// 被新创建的vm.$el 替换，挂载成功
		mounted() {
			//console.log('mounted')
		},
		// 前面	5个按顺序执行
		// 数据更新时调用
		beforeUpdate() {
			//console.log('beforUpdate')
		},
		// 组件DOM 已经更新
		updated() {
			//console.log('update')
		},
		data() {
			return {
				title: 'Hello uniapp',
				youColor: 'divColorClass',
				awesome: false,
				items: [{
					message: 'Foo'
				}, {
					message: 'Bar'
				}],
				selectValue: -1,
				range: [{
						value: 0,
						text: "篮球"
					},
					{
						value: 1,
						text: "足球"
					},
					{
						value: 2,
						text: "游泳"
					},
				],
				contentTextStr: {
					contentdown: '自定义-查看更多',
					contentrefresh: '自定义-加载中',
					contentnomore: '自定义-没有更多'
				}


			}
		},
		methods: {
			updateMsg() {
				setTimeout(() => {
					if (this.title === 'change') {
						this.title = 'Hello uniapp'
					} else {
						this.title = 'change'
					}

				}, 100)
			},
			change(e) {
				alert(e)
			},
			stopDownPullRefresh(){
				uni.stopPullDownRefresh()
			}
		}
	}
</script>

<style>
	.divColorClass {
		color: red;
		font-size: 30px;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>