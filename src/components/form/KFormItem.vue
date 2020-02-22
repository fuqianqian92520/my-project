<template>
    <div>
        <!-- label -->
        <label v-if="label">{{ label }}</label>

        <slot></slot>

        <!-- 校验信息显示 -->
        <p v-if="error" style="color: red">{{ error }}</p>
    </div>
</template>

<script>
import Schema from 'async-validator'
export default {
    inject: ['form'],
    data() {
        return {
            error: '' // error是空表示校验通过
        }
    },
    props: {
        label: {
            type: String,
            default: ''
        },
        prop: {
            type: String,
            default: ''
        }
    },
    mounted() {
        this.$on('validate', () => {
            this.validate()
        })
    },
    methods: {
        validate() {
            // 规则
            const rules = this.form.rules[this.prop]

            // 当前值
            const value = this.form.model[this.prop]

            // 校验描述对象
            const desc = {[this.prop]: rules}
            
            const schema = new Schema(desc)
            return schema.validate({[this.prop]: value}, errors => {
                if (errors) {
                    console.log(errors)
                    this.error = errors[0].message
                } else {
                    // 校验通过
                    this.error = ''
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
</style>