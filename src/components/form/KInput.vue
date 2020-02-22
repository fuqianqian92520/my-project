<template>
    <div>
        <!-- 自定义事件双向绑定：:value @input -->
        <!--  -->
        <input :type="type" :value="value" @input="onInput" v-bind="$attrs">
    </div>
</template>

<script>
    export default {
        inheritAttrs: false, // 设置为false避免设置到根元素上
        inject: ['form'],
        props: {
            value: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'text'
            },
        },
        methods: {
            onInput(e) {
                // 派发一个input事件即可
                this.$emit('input', e.target.value)
                // console.log(this.form.model);

                // 通知父级执行校验
                this.$parent.$emit('validate')
                
            }
        },
    }
</script>

<style scoped>

</style>