<script setup>
import Topbar from '../components/Topbar.vue'
import Sidebar from '../components/Sidebar.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Topbar />
    <div class="flex flex-1 bg-gray-50">
      <Sidebar />
      <main class="flex-1 p-8 overflow-y-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>
