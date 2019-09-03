<template>
  <div class="w-screen min-h-screen p-10 flex flex-col items-center bg-gray-100 antialiased font-sans">
    <navbar></navbar>
    <router-view class="w-full"/>
  </div>
</template>

<script>
import navbar from '@/components/Navbar'

export default {
  name: 'Food App',
  components: {
    navbar
  }
}
</script>

<style>
</style>
