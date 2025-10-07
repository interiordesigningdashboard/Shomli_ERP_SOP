<script setup>
import { useRoute, useRouter } from 'vue-router'

// Static list for demo; in real use, put this in a composable/store for add/remove
const sopLinks = [
  { name: 'Factory Purchase SOP', path: '/factory-purchase' },
  { name: 'IBR SOP', path: '/internal-billing-request' },
  { name: 'Site Purchase SOP', path: '/site-purchase' },
  // Add more SOPs here, eg: { name: 'New SOP', path: '/new-sop' }
]

const router = useRouter()
const route = useRoute()

function goTo(path) {
  router.push(path)
}
</script>

<template>
  <aside class="w-64 bg-white shadow-md flex flex-col py-6 px-4">
    <div class="mb-6">
      <div class="font-bold text-lg text-[#773090]">SOPs ({{ sopLinks.length }})</div>
    </div>
    <nav class="flex flex-col space-y-2">
      <button
        v-for="sop in sopLinks"
        :key="sop.path"
        @click="goTo(sop.path)"
        :class="[
          'flex items-center px-3 py-2 rounded-lg font-medium transition',
          route.path === sop.path
            ? 'bg-[#773090]/20 text-[#773090]'
            : 'text-gray-700 hover:bg-[#773090]/10',
        ]"
      >
        {{ sop.name }}
      </button>
    </nav>
    <!-- <div class="mt-auto pt-8 border-t">
      <button
        class="w-full px-4 py-2 rounded-lg bg-[#ea0289] text-white hover:bg-[#773090] transition"
      >
        Logout
      </button>
    </div> -->
  </aside>
</template>
