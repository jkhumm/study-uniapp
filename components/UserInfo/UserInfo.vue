<template>
	<view class="userinfo">
		<image :src="touxiang" mode="" class="avatar"></image>
		<view class="username">
			{{xingming}}
		</view>
	</view>
</template>

<script setup>
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


</style>