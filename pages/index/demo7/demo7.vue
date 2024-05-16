<template>
	<view>
		<button size="mini" @click="removeLocalStorage">removeLocalStorage</button>
		<button size="mini" @click="clearAllLocalStorage">clearAllLocalStorage</button>
	</view>
</template>

<script setup>
	// 会放到local storage 时间很久，不会随着网页关闭。缓存消失  seesion storage 会消失存临时的
	uni.setStorageSync("account", "admin")
	uni.setStorageSync("age", "12")
	uni.setStorageSync("array", [1, 2, 3])

	console.log(uni.getStorageSync("account"))
	// 同步获取当前 storage 的相关信息。拿到所有的key
	//console.log(uni.getStorageInfoSync("account"))


	function removeLocalStorage() {
		uni.removeStorageSync("account")
	}


	function clearAllLocalStorage() {
		uni.showModal({
			title: '提示',
			content: '清除所有缓存？',
			success: function(res) {
				if (res.confirm) {
					uni.clearStorageSync()
				} else if (res.cancel) {
					console.log('用户点击取消');
				}
			}
		});


	}
</script>

<style scoped lang="scss">

</style>