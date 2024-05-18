<template>
	<view class="container">
		<view class="menu">
			<uni-segmented-control :current=currentIndex :values=allPetType @clickItem="onClickItem" styleType="button"
				activeColor="#4cd964"></uni-segmented-control>

		</view>

		<view class="layout">
			<view class="box" v-for="(item,index) in picData" :key="item._id">
				<view class="pic">
					<image :src=item.url mode="widthFix" @click="previewPic(index)" lazy-load></image>
					<view class="text">{{item.content}}</view>
					<view class="author">{{item.content}}</view>
				</view>
			</view>
		</view>

		<view class="float">
			<view class="item" @click="top">
				<uni-icons type="arrow-up" size="26" color="#888"></uni-icons>
			</view>
			<view class="item" @click="refresh">
				<uni-icons type="refresh" size="26" color="#888"></uni-icons>
			</view>

		</view>

		<view class="load-more">
			<uni-load-more status="loading"></uni-load-more>
		</view>

	</view>

</template>

<script setup>
	import {
		computed,
		ref
	} from 'vue';
	import {
		onReachBottom,
		onPullDownRefresh
	} from "@dcloudio/uni-app";

	// 网站地址：https://api.qingnian8.com/apis/tools/petShow.html
	const url = "https://api.thecatapi.com/v1/images/search"; // 国外测试接口不稳定
	const url2 = "https://tea.qingnian8.com/tools/petShow";
	const url3 = "https://tea.qingnian8.com/tools/taoShow";
	let picData = ref([])
	const petTypeArray = [{
		key: "all",
		value: "全部"
	}, {
		key: "cat",
		value: "猫咪	"
	}, {
		key: "dog",
		value: "狗子"
	}]
	const allPetType = computed(() => petTypeArray.map(item => item.value))

	let currentIndex = ref(0)
	/**
	 * 发送接口请求
	 */
	function sendRequest() {
		uni.showNavigationBarLoading()
		uni.request({
			url: url2,
			method: "GET",
			header: {
				//"access-key": "556688aa"
			},
			data: {
				"size": 5,
				"type": petTypeArray[currentIndex.value]['key']
			}
		}).then(res => {
			if (res.data.errCode === 0) {
				// 将结果追加到数组中
				picData.value = [...picData.value, ...res.data.data]
				console.log(picData.value)
			} else if (res.data.errCode === 400) {
				uni.showToast({
					title: res.data.errMsg,
					icon: 'none',
					duration: 3000
				})
			}
		}).catch(err => {
			uni.showToast({
				title: "接口有误，请重新刷新",
				icon: 'none'
			})
		}).finally(() => {
			uni.hideNavigationBarLoading()
			uni.stopPullDownRefresh()
		})
	}

	/**
	 * 预览多张图片
	 */
	function previewPic(index) {
		let urlAry = picData.value.map(item => item.url)
		uni.previewImage({
			current: index,
			urls: urlAry
		})
	}

	// 下拉触底加载更多
	onReachBottom((e) => {
		sendRequest()
	})

	// 下拉刷新
	onPullDownRefresh(() => {
		picData.value = []
		// 下拉刷新时重新切换到全部
		currentIndex.value = 0
		sendRequest()
	})

	// 点击刷新
	function refresh() {
		uni.startPullDownRefresh()
	}

	// 返回顶部
	function top() {
		uni.pageScrollTo({
			scrollTop: 0,
			duration: 100 // 快速回到顶部
		})
	}

	function onClickItem(e) {
		currentIndex.value = e.currentIndex
		// 切换数据时，先把数组元素清空
		picData.value = []
		//console.log(petTypeArray[currentIndex.value]['key'])
		sendRequest()
	}
</script>

<style scoped lang="scss">
	.container {
		.menu {
			padding: 30rpx 30rpx;
		}

		.layout {
			padding: 50rpx;

			.box {
				margin-bottom: 60rpx;
				// 向y轴增加10像素  模糊值30 透明度阴影0.08
				box-shadow: 0 10rpx 30rpx rgba(0, 0, 0, 0.08);
				border-radius: 15rpx;

				.pic {
					image {
						width: 100%;
					}

					.text {
						padding: 15rpx;
						color: #333;
						font-size: 30rpx;
					}

					.author {
						padding: 0 30rpx 30rpx;
						text-align: right;
						color: #888;
						font-size: 20rpx;
					}
				}
			}
		}

		.float {
			position: fixed;
			right: 30rpx;
			bottom: 80rpx;
			padding-bottom: env(safe-area-inset-bottom);

			.item {
				width: 90rpx;
				height: 90rpx;
				background-color: rgba(255, 255, 255, 0.9); // 半透明
				border-radius: 50%;
				margin-bottom: 20rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				border: 1rpx solid #888;
			}
		}

		.load-more {
			padding-bottom: calc(env(safe-area-inset-bottom) + 50rpx);
		}
	}
</style>