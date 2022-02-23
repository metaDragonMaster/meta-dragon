<template>
	<el-dialog class="dialog-dom" :visible.sync="dialogHandleValue" center width="90%" append-to-body :close-on-click-modal="false" :close-on-press-escape="false" >
		<ul class="language-list" >
            <li class="theme-type" v-for="item in languageList" :key="item.id" @click="changeLanguage(item.id)">
                {{item.title}}
            </li>
		</ul>
	</el-dialog>
</template>
<script>
export default {
	data: () => ({
		dialogHandleValue: false,
        languageList :[
            {
                id:'en',
                title:'English'
            },
            {
                id:'zh',
                title:'中文'
            }
        ]
	}),
	components: {
	},
	mounted() {
	},
	methods: {
        open() {
            console.log("batchDialog");
            this.dialogHandleValue = true;
        },
        changeLanguage(type) {
			this.$i18n.locale = type;
			this.dialogHandleValue = false;
            this.$emit('closeDialog');
		},
	}
};
</script>
<style lang="scss" scoped="scoped">
::v-deep .el-dialog--center {
	background-color: #292945;
	padding-bottom: 20px;
}
.language-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    li {
        padding: 10px 15px;
        border-radius: 12px;
        &:not(:last-child) {
            margin-right: 10px;
        }
    }
}
@media screen and (max-width: 750px) {
	::v-deep .el-dialog__body {
		padding: 0;
	}
}
</style>
