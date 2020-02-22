import Vue from "vue";

function create(Component, props) {
    // 组件的构造函数如何获取呢？
    // 1.Vue.extend()

    // 2.render
    // 创建vue实例
    const vm = new Vue({
        // h是createElement, 返回虚拟dom VNode
        // 需要挂载才能变成真实的dom
        render: h => h(Component, { props })
    }).$mount() // 不指定宿主元素, 则会创建真实dom, 但是不会追加操作
    // 获取真实dom
    document.body.appendChild(vm.$el)
    const comp = vm.$children[0]
    // 删除
    comp.remove = function () {
        document.body.removeChild(vm.$el)
        vm.$destroy()
    }
    return comp
}

export default create