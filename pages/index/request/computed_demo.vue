<template>
	<view>
		<button @click="bianli" size="mini">遍历</button>
		<button @click="map" size="mini">map</button>
		<button @click="fliter" size="mini">fliter</button>
		<button @click="reduce" size="mini">reduce</button>
	</view>
</template>

<script setup>
	const goods = ref([{
			id: "11",
			name: "小米",
			price: 4999,
			checked: false
		},
		{
			id: "22",
			name: "华为",
			price: 6899,
			checked: false
		},
		{
			id: "33",
			name: "oppo",
			price: 2988,
			checked: false
		},
		{
			id: "44",
			name: "苹果",
			price: 9888,
			checked: false
		},
	])

	let arrs = [1, 2, 3]
	let datas = []

	function bianli() {
		// 不支持break continue,支持retur，性能不如forEach，不支持异步同步化并不会阻塞
		goods.value.forEach(async item => {
			console.log(item.name)
			// 是否支持异步处理同步化，发起网络请求将结果push到数组中
			const {
				result
			} = await uni.request({
				url: "https://jsonplaceholder.typicode.com/posts/" + item.id
			})
			datas.push(result)
			console.log(datas)
		})
		// fori支持
		for (let i = 0; i < goods.value.length; i++) {
			console.log(goods.value[i].id)
		}



	}

	function map() {
		arrs.map(item => {
			return item * 2;
		})
		//case1: 只想要名称
		const names = goods.value.map(item => item.name)
		console.log(names)
		// case2：添加属性和改变熟悉
		const newGoods = goods.value.map(item => {
			// 展开符 ... 相当于把item的属性展开，然后重新组装成新的对象，这样就可以保留item的所有属性，后面的属性就是新增的属性,如果属性有相同则会重置之前的属性值
			return {
				...item,
				price: item.price * 2 + "元",
				number: 888
			}
		})
		// 也可以简写成
		// goods.value.map(item=> ({...item,price:item.price*2 + "元",number: 888}))
		console.log(newGoods)
		// case3: 解构成你想要的格式
		const newGoods2 = goods.value.map(({
			id,
			name
		}) => {
			return {
				_name: name,
				_id: id
			}
		})
		console.log(newGoods2)

		// case4: 同时多个请求，结果合并
		// 三个promise对象
		let datas = goods.value.map(async item => {
			const res = await uni.request({
				url: "https://jsonplaceholder.typicode.com/posts/" + item.id
			})
			return res;
		})
		// 发出请求
		Promise.all(datas).then(res => {
			console.log(res)
			res.map(item => console.log(item.data)) // 打印结果
		})
	}

	function fliter() {
		// 过滤出价格大于4000的手机
		const newGoods = goods.value.filter(item => item.price > 4000)
		console.log(newGoods)
	}

	function reduce() {
		// 求和 回调函数（上一个结果，当前，索引值）
		const total = goods.value.reduce((previous, current, index) => {
			// 对商品价格求和
			return previous + current.price;
		}, 0) // 0是初始值，不放的话就是一个对象然后和它求和
		console.log(total)

		let arrray = [1, 3, 4, 1]
		const max = arrray.reduce((previous, current) => {
			return Math.max(previous, current)
		})
		console.log("最大值" + max)
		const avg = arrray.reduce((previous, current, index) => {
			previous += current
			if (arrray.length - 1 === index) {
				return previous / arrray.length
			} else {
				return previous
			}
		})
		console.log("平均值" + avg)
	}
</script>



<style lang="scss" scoped>

</style>