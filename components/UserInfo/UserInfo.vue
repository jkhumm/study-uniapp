<template>
	<view class="userinfo">
<<<<<<< HEAD
		<image :src="obj.touxiang" mode="" class="avatar"></image>
		<view class="username">
			{{obj.xingming}}
=======
		<image :src="touxiang" mode="" class="avatar"></image>
		<view class="username">
			{{xingming}}
>>>>>>> a01c89af711bd3e1b5dce3790eed83967196ecff
		</view>
	</view>
</template>

<script setup>
<<<<<<< HEAD
	import {
		computed
	} from 'vue';
	// 写法一
	// const prop = defineProps(['touxiang', 'xingming'])
	// 写法二
	// const prop = defineProps({
	// 	touxiang: String,
	// 	xingming: {
	// 		type: String,
	// 		default: "胡明明"
	// 	}
	// })
	// 写法三
	defineProps({
		obj: {
			type: Object,
			// 如果默认值是数组或者对象，要写一个函数
			default () {
				return {
					touxiang: "https://www.xfh2022.com/api/admin/file/download?id=24",
					xingming: "胡明明设置的默认值"
				}
			}
		}
	})

	// console.log(prop.xingming) 因为父传到子组件是只读的，单向数据流

	// const myName = computed(()=> prop.xingming + "@xxx")
	// console.log(myName.value)
</script>

// scoped css仅限在组建内部使用，防止污染其它组件
<style lang="scss" scoped>
	.userinfo {
		width: 100%;
		height: 100%;
		background: #ccc;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		image {
			width: 100px;
			height: 100px;
			border-radius: 50%;
		}

		.username {
			padding: 10px 0;
			font-size: 20px;
		}
	}
=======
import { computed } from 'vue';
const prop =defineProps(['touxiang','xingming'])
// console.log(prop.xingming) 因为父传到子组件是只读的，单向数据流

// const myName = computed(()=> prop.xingming + "@xxx")
// console.log(myName.value)

</script>

// scoped css仅限在组建内部使用，防止污染其它组件
<style lang="scss" scoped> 
.userinfo{
	width: 100%;
	height: 100%;
	background: #ccc;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	image{
		width: 100px;
		height: 100px;
		border-radius: 50%;
	}
	.username{
		padding: 10px 0;
		font-size: 20px;
	}
}


>>>>>>> a01c89af711bd3e1b5dce3790eed83967196ecff
</style>