<template>
	<view class="layout">
		<view class="header">
			<slot name="header"></slot>
		</view>

		<view class="main">
			<!-- 具名插槽 -->
			<slot name="main"></slot>
		</view>

		<view class="footer">底部区域</view>

	</view>


</template>

<script>

</script>

<style lang="scss" scoped>
	.layout {
		.header {
			height: 100px;
			background: #cfcfcf
		}

		.main {
			height: 120px;

		}

		.footer {
			height: 120px;
			background: #cfcfcf;
		}

	}
</style>