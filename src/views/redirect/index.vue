<script>
	/*
		// 手动重定向页面到 '/redirect' 页面
		const { fullPath } = this.$route
		this.$router.replace({
		  path: '/redirect' + fullPath
		})
	*/
export default {
  created() {
    const { params, query } = this.$route
    const { path } = params
    // this.$router.replace({ path: '/' + path, query })
	this.$routerUtil.toPath(path,query)
  },
  render: function(h) {
    return h() // avoid warning message
  }
}
</script>
