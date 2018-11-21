/**
 * Deals with Single-Page Application functions using
 * the Vue.js javascript framework
 */

const Foo = { template : myFunction() }

const routes = [
    { path : '/foo', component : Foo }
]

const router = new VueRouter({
    routes
})

function myFunction() {
    return '<div>awe</div>'
}

var app = new Vue({
    router
}).$mount('#app')