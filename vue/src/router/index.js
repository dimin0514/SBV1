import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Join from '@/components/member/Join.vue'
import Login from '@/components/member/Login.vue'

Vue.use(Router)

export default new Router({
	mode:'history',
	routes: [
		{path: '/', name: 'home', component: Home},
		{path: '/join', name: 'join', component: Join},
		{path: '/login', name: 'login', component: Login}
	]
})