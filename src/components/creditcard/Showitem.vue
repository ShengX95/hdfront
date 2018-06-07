<template>
	<div>
		<panel :header="$t('List of content with image')" :footer="footer" :list="list" :type="type" @on-img-error="onImgError"></panel>
	</div>
</template>
<script>
export default {
  props: ['item'],
  methods: {
    to (url) {
      console.log('to')
      window.location = url
    }
  }
}
</script>
<style>
</style>