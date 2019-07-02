import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/Movie'
    },
    
    {
      path: '/Movie',
      name: 'Movie',
      component: ()=>import('components/movie/movie'),
      children:[
        {
          path:'city',
          component:()=>import('base/city/city')
        },{
          path:'nowPlaying',
          component:()=>import('base/now-playing/now-playing')
        },{
          path:'comingSoon',
          component:()=>import('base/coming-soon/coming-soon')
        },{
          path:'search',
          component:()=>import('base/search/search')
        },
        {
          path:'/Movie',
          redirect:'/Movie/nowPlaying'
        },
      ]
    },{
      path: '/Cinema',
      name: 'Cinema',
      component: ()=>import('components/cinema/cinema')
    },{
      path: '/My',
      name: 'My',
      component: ()=>import('components/my/my')
    },

  ]
})
