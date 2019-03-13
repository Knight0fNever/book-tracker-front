import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Books from '@/views/Books';
import Authors from '@/views/Authors';
import NewBook from '@/views/NewBook';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/books',
      name: 'Books',
      component: Books
    },
    {
      path: '/authors',
      name: 'Authors',
      component: Authors
    },
    {
      path: '/new-book',
      name: 'NewBook',
      component: NewBook
    }
  ]
});
