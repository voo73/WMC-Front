import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '@/views/account/SignUpView.vue'
import SignInView from '@/views/account/SignInView.vue'
import ProductRegisterPage from '@/views/product/ProductRegisterPage.vue'
import ProductListPage from '@/views/product/ProductListPage.vue'

import MainProductListPage from '@/views/product/MainProductListPage.vue'
import NoticeListPage from '@/views/csCenter/notice/NoticeListPage.vue'
import NoticeRegisterPage from '@/views/csCenter/notice/NoticeRegisterPage.vue'
import NoticeReadPage from '@/views/csCenter/notice/NoticeListPage.vue'

import QuestionBoardListPage from "@/views/questionBoard/QuestionBoardListPage.vue"
import CartView from "@/views/order/CartView";
import QuestionBoardRegisterPage from "@/views/questionBoard/QuestionBoardRegisterPage.vue"
import ProductDetailPage from '@/views/product/ProductDetailPage.vue'
//import ProductListByCategoryPage from '@/views/product/ProductListByCategoryPage.vue'

import MyPage from '@/views/mypage/MyPageView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sign-up',
    name: 'SignUpView',
    component: SignUpView
  },
  {
    path: '/sign-in',
    name: 'SignInView',
    component: SignInView
  },
  {
    path: '/cart',
    name: 'CartView',
    component: CartView
  },
  {
    path: '/product-register-page',
    name: 'ProductRegisterPage',
    component: ProductRegisterPage
  },
  {
    path: '/product-list-page',
    name: 'ProductListPage',
    component: ProductListPage
  },
 
  {
    path: '/main-product-list-page',
    name: 'MainProductListPage',
    component: MainProductListPage
  },
  {
    path: '/notice-list',
    name: 'NoticeListPage',
    component: NoticeListPage
  },
  {
    path: '/notice-register',
    name: 'NoticeRegisterPage',
    component: NoticeRegisterPage
  },
  {
    path: '/notice-read',
    name: 'NoticeReadPage',
    component: {
      default: NoticeReadPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/question-board',
    name: 'QuestionBoardListPage',
    component: QuestionBoardListPage
  },
  {
    path: '/question-register',
    name: 'QuestionBoardRegisterPage',
    component: QuestionBoardRegisterPage
  },
  {
    path: '/product/detail/:productId',
    name: 'ProductDetailPage',
    component: ProductDetailPage
  },
  {
    path: '/product/listByCategory/:categoryId',
    name: 'ProductListByCategoryPage',
    component: () => import('@/views/product/ProductListByCategoryPage.vue'),
    props: true
  },
  
  

  {
    path: '/mypage',
    name: 'MyPage',
    components: {
      default: MyPage
    }
  },
]

const router = new VueRouter({
  routes
})

export default router