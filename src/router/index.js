import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  
  routes: [
    {
      path: '/',
      redirect: '/movie'
    },

    {
      path: '/movie',
      name: 'movie',
      component: () => import('components/movie/movie'),
      children: [
        {
          path: 'city',
          component: () => import('base/city/city')
        }, {
          path: 'nowPlaying',
          component: () => import('base/now-playing/now-playing')
        }, {
          path: 'comingSoon',
          component: () => import('base/coming-soon/coming-soon')
        }, {
          path: 'search',
          component: () => import('base/search/search')
        }, {
          //命名视图
          path: 'detail/1/:id',
          components: {
            default: () => import('base/now-playing/now-playing'),
            detail: () => import('components/detail/detail')
          },
          props: {
            detail: true
          }
        },{
          //命名视图
          path: 'detail/2/:id',
          components: {
            default: () => import('base/coming-soon/coming-soon'),
            detail: () => import('components/detail/detail')
          },
          props: {
            detail: true
          }
        }, {
          path: '/movie',
          redirect: '/movie/nowPlaying'
        },
      ]
    }, {
      path: '/cinema',
      name: 'cinema',
      component: () => import('components/cinema/cinema')
    }, {
      path: '/my',
      name: 'my',
      component: () => import('components/my/my')
    },

  ]
})
