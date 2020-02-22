<template>
    <div>
        <k-form :model="userInfo" :rules="rules" ref="loginForm">
            <!-- 用户名 -->
            <k-form-item label="用户名" prop="username">
                <k-input
                    v-model="userInfo.username"
                    placeholder="请输入用户名"
                ></k-input>
            </k-form-item>
            <!-- 密码 -->
            <k-form-item label="密码" prop="password">
                <k-input
                    type="password"
                    v-model="userInfo.password"
                    placeholder="请输入密码"
                ></k-input>
            </k-form-item>
            <k-form-item>
                <button @click="login">登录</button>
            </k-form-item>
        </k-form>
    </div>
</template>

<script>
import KInput from '@/components/form/KInput'
import KFormItem from '@/components/form/KFormItem'
import KForm from '@/components/form/KForm'
import Notice from '@/components/Notice'
export default {
    components: {
        KInput,
        KFormItem,
        KForm
    },
    data() {
        return {
            userInfo: {
                username: 'tom',
                password: ''
            },
            rules: {
                username: [{ required: true, message: '请输入用户名称' }],
                password: [{ required: true, message: '请输入密码' }]
            }
        }
    },
    methods: {
        login() {
            this.$refs['loginForm'].validate(valid => {
                console.log(valid)
                const notice = this.$create(Notice, {
                    title: '社会你杨哥喊你来搬砖',
                    message: valid ? '请求登录!' : '校验失败!',
                    duration: 1000
                })
                notice.show()
                // if (valid) {
                //     alert('submit!!!')
                // } else {
                //     console.log('Error submit!!!')
                //     return false
                // }
            })
            this.$refs['loginForm'].test()
        }
    }
}
</script>

<style lang="scss" scoped>
</style>