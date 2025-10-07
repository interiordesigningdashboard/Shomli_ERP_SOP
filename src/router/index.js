import { createRouter, createWebHistory } from 'vue-router'
import WhatIsSop from '../pages/WhatIsSop.vue'
import FactoryPurchaseSop from '../pages/FactoryPurchaseSop.vue'
import IBRSOP from '../pages/IBRSOP.vue'
import SitePurchaseSOP from '../pages/SitePurchaseSOP.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'WhatIsSop', component: WhatIsSop },
    { path: '/factory-purchase', name: 'FactoryPurchaseSop', component: FactoryPurchaseSop },
    { path: '/internal-billing-request', name: 'IBRSOP', component: IBRSOP },
    { path: '/site-purchase', name: 'SitePurchaseSOP', component: SitePurchaseSOP },
  ],
})

export default router
