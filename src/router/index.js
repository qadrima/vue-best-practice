import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import AuthRoutes from '@/router/part/auth'

Vue.use(Router)

const router = new Router({
  	mode: 'history',
  	routes: [
	    ...AuthRoutes,
  	]
});

router.beforeEach((to, from, next) => {
  	if (to.matched.some(record => record.meta.requiresAuth))
  	{

  		console.log('auth');
    	next();
  	}
  	else if (to.matched.some(record => record.meta.requiresNonAuth))
  	{
  		console.log(store.state.example.count);
  		console.log('non auth');
    	next();
  	}
  	else
  	{
    	next();
  	}
});

export default router;
