<template>
    <div class="flex flex-row justify-between items-center w-full h-12 text-gray-900">
        <div class="flex justify-center items-center text-gray-900 rounded-full w-12 h-12 pr-2 pt-2 pb-2">
            <svg class="w-full h-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
        </div>
        <router-link to="/">
            <span class="text-xl">Food App</span>
        </router-link>
        <div class="relative">
            <div @click="toggleVisibility" class="flex justify-center items-center relative text-white bg-red-500 rounded-full w-12 h-12 p-4 shadow-md cursor-pointer">
                <svg class="w-full h-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
                </svg>
                <div class="absolute top-0 right-0 flex justify-center items-center bg-white rounded-full text-red-500 text-xs w-4 h-4 shadow-md">
                    <span>1</span>
                </div>
            </div>
            <div v-if="isVisible" class="absolute w-64 top-0 right-0 mt-16 flex flex-col bg-white rounded-lg text-base text-gray-900 p-6 shadow-lg">
                <span class="text-lg font-bold text-gray-900 text-center mb-4">Shopping cart</span>
                <div class="flex flex-row justify-between items-center">
                    <img class="w-16 self-center" src="@/assets/burger.png" alt="">
                    <div class="flex flex-col text-right">
                        <span class="text-base font-medium text-gray-900">Angry Whopper</span>
                        <span class="text-xs font-medium text-gray-500">Large x1</span>
                        <span class="text-sm font-medium text-gray-900">$6.50</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      isVisible: false
    }
  },
  methods: {
    toggleVisibility () {
      this.isVisible = !this.isVisible
    }
  }
}
</script>

<style scoped>

</style>
