<template>
	<view>

	</view>
</template>

<script setup>
	uni.showToast({
		title: "操作成功",
		image: "../../static/logo.png",
		duration: 2000,
		success: (res) => {
			console.log("ok")
		}
	})

	uni.showLoading({
		title: "加载中",
		fail: (res) => {
			console.log("失败回调" + res)
			uni.hideLoading();
		}
	})

	setTimeout(function() {
		uni.hideLoading();
	}, 5000);

	uni.showModal({
		title: '提示',
		content: '这是一个模态弹窗',
		success: function(res) {
			if (res.confirm) {
				console.log('用户点击确定');
			} else if (res.cancel) {
				console.log('用户点击取消');
			}
		}
	});

	const educationList = ['高中', '大专', '本科', '硕士']
	// 从底部向上弹出操作菜单
	uni.showActionSheet({
		itemList: educationList,
		success: function(res) {
			console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
			console.log("选择的是：" + educationList[res.tapIndex])
		},
		fail: function(res) {
			console.log(res.errMsg);
		}
	});
</script>

<style scoped lang="scss">

</style>