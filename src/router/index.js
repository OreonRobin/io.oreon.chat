import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Chat from '@/components/Chat'

Vue.use(Router);

const beforeEnterChat = (to, from, next) => {
  if (to.params.name) {
    next();
  } else {
    next({
      name: Welcome.name
    });
  }
};

export default new Router({
  routes: [
    {
      path: '/',
      name: Welcome.name,
      component: Welcome
    },
    {
      path: '/chat',
      name: Chat.name,
      component: Chat,
      props: true,
      beforeEnter: beforeEnterChat
    }
  ],
  mode: 'history'
})