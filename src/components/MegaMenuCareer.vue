<template>
  <div
    class="relative"
    @mouseover="showMenu"
    @mouseleave="hideMenu"
  >
    <a
      href="/career"
      class="text-copy-primary hover:text-gray-600"
      @focus="showMenu"
      @keydown.shift.tab="hideMenu"
      @keydown.esc.exact="hideMenu"
      @keydown.up.exact.prevent="startArrowKeys"
      @keydown.down.exact.prevent="startArrowKeys"
    >
      <router-link :to="`/${$i18n.locale}/career`" class="text-copy-primary hover:text-gray-600">{{ $t('nav.career')}}</router-link>
    </a>

    

    <div class="absolute w-full">&nbsp;</div>
    <transition name="mega-menu-fade">
      <div v-show="isVisible" class="mega-menu absolute normal-case font-normal bg-white shadow-md rounded-lg overflow-hidden border mt-4 w-full lg:w-160 z-30 lg:z-10 left-0 lg:-left-16">
        <div class="flex flex-col lg:flex-row px-8 py-6 border-b -mx-4">
          <ul class="w-full lg:w-1/2 px-4">
            <li class="mb-8">
								<router-link :to="`/${$i18n.locale}/r-d-center`" class="flex group" @keydown.esc.exact="hideMenu"
                @keydown.tab.exact="focusNext(false)"
                @keydown.down.exact.prevent="focusNext(true)"
                @keydown.up.exact.prevent="">
<!--                <svg fill="currentColor" class="text-blue-500 group-hover:text-blue-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path class="heroicon-ui" d="M20 22H4a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h4V8c0-1.1.9-2 2-2h4V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2zM14 8h-4v12h4V8zm-6 4H4v8h4v-8zm8-8v16h4V4h-4z"/></svg>-->
                <span class="ml-2">
                  <span class="block font-bold text-blue-800 group-hover:text-blue-800 flex items-center">
                    <span>R&amp;D Center</span>
<!--                    <span class="ml-2 bg-yellow-500 text-yellow-800 px-2 py-1 rounded-full uppercase font-bold text-xxs">New</span>-->
                  </span>
                  <span class="block text-sm text-gray-600 group-hover:text-blue-800"> &#8226;Research Scientist</span>
                </span>
									</router-link>
            </li>
            <li class="mb-8">
              <router-link :to="`/${$i18n.locale}/eng-manu`" class="flex group" @keydown.esc.exact="hideMenu"
                @keydown.tab.exact="focusNext(false)"
                @keydown.down.exact.prevent="focusNext(true)"
                @keydown.up.exact.prevent="">
                <span class="ml-2">
                  <span class="block font-bold text-blue-800 group-hover:text-blue-800">Engineering &amp; Manufacturing</span>
                  <span class="block text-sm text-gray-600 group-hover:text-blue-800"> &#8226;Product Design Engineer</span>
									<span class="block text-sm text-gray-600 group-hover:text-blue-800"> &#8226;Process Development Engineer</span>
									<span class="block text-sm text-gray-600 group-hover:text-blue-800"> &#8226;Process Sustaining Engineer</span>
									<span class="block text-sm text-gray-600 group-hover:text-blue-800"> &#8226;Equipment Engineer</span>
                </span>
								</router-link>
            </li>
          </ul>
          <ul class="w-full lg:w-1/2 px-4">
            <li class="mb-8">
              
							<router-link :to="`/${$i18n.locale}/sales-market`" class="flex group" 		@keydown.esc.exact="hideMenu"
                @keydown.tab.exact="focusNext(false)"
                @keydown.down.exact.prevent="focusNext(true)"
                @keydown.up.exact.prevent="">
                <span class="ml-2">
                  <span class="block font-bold text-blue-800 group-hover:text-blue-800">Sales &amp; Marketing</span>
                  <span class="block text-sm text-gray-600 group-hover:text-blue-800"> &#8226;Product Marketing</span>
									<span class="block text-sm text-gray-600 group-hover:text-blue-800"> &#8226;Sales analyst and support</span>
									<span class="block text-sm text-gray-600 group-hover:text-blue-800"> &#8226;Product Sales</span>
                </span>
              </router-link>
            </li>
            <li class="mb-8">
              <router-link :to="`/${$i18n.locale}/company-services`" class="flex group" 		@keydown.esc.exact="hideMenu"
                @keydown.tab.exact="focusNext(false)"
                @keydown.down.exact.prevent="focusNext(true)"
                @keydown.up.exact.prevent="">
                <span class="ml-2">
                  <span class="block font-bold text-blue-800 group-hover:text-blue-800">Company Services</span>
                  <span class="block text-sm text-gray-600 group-hover:text-blue-800"> &#8226;Executive Assistant to the CEO/CTO</span>
                </span>
              </router-link>
            </li>
<!--
            <li class="">
              <a
                href="#"
                class="flex group"
                @keydown.esc.exact="hideMenu"
                @keydown.tab.exact="focusNext(false)"
                @keydown.shift.tab="focusPrevious(false)"
                @keydown.up.exact.prevent="focusPrevious(true)"
                @keydown.down.exact.prevent="focusNext(true)"
              >
                <svg fill="currentColor" class="text-blue-500 group-hover:text-blue-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path class="heroicon-ui" d="M20 15a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1h-8a1 1 0 0 0 0 2h5.59L13 13.59l-3.3-3.3a1 1 0 0 0-1.4 0l-6 6a1 1 0 0 0 1.4 1.42L9 12.4l3.3 3.3a1 1 0 0 0 1.4 0L20 9.4V15z"/></svg>
                <span class="ml-2">
                  <span class="block font-bold text-blue-800 group-hover:text-blue-800">Advanced Reports</span>
                  <span class="block text-sm text-gray-600 group-hover:text-blue-800">Keep track of your growth</span>
                </span>
              </a>
            </li>
-->
          </ul>
        </div>
<!--
        <ul class="bg-gray-100 px-8 py-8">
          <li class="mb-6">
            <a
              href="#"
              class="flex lg:items-center group"
              @keydown.esc.exact="hideMenu"
              @keydown.tab.exact="focusNext(false)"
              @keydown.shift.tab="focusPrevious(false)"
              @keydown.up.exact.prevent="focusPrevious(true)"
              @keydown.down.exact.prevent="focusNext(true)"
            >
              <svg fill="currentColor" class="text-blue-500 group-hover:text-blue-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path class="heroicon-ui" d="M18 21H7a4 4 0 0 1-4-4V5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2h2a2 2 0 0 1 2 2v11a3 3 0 0 1-3 3zm-3-3V5H5v12c0 1.1.9 2 2 2h8.17a3 3 0 0 1-.17-1zm-7-3h4a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm0-4h4a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm0-4h4a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zm9 11a1 1 0 0 0 2 0V7h-2v11z"/></svg>

              <span class="flex flex-col lg:flex-row lg:items-center">
                <span class="block ml-2 font-bold text-blue-800 group-hover:text-blue-800">Documentation</span>
                <span class="block ml-2 lg:ml-4 text-sm text-gray-600 group-hover:text-blue-800">Start integrating products and tools</span>
              </span>
            </a>
          </li>
          <li class="mb-6">
            <a
              href="#"
              class="flex lg:items-center group"
              @keydown.esc.exact="hideMenu"
              @keydown.tab.exact="focusNext(false)"
              @keydown.shift.tab="focusPrevious(false)"
              @keydown.up.exact.prevent="focusPrevious(true)"
              @keydown.down.exact.prevent="focusNext(true)"
            >
              <svg fill="currentColor" class="text-blue-500 group-hover:text-blue-800" width="24" height="24"><path class="heroicon-ui" d="M17 22a2 2 0 0 1-2-2v-1a1 1 0 0 0-1-1 1 1 0 0 0-1 1v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-3H5a3 3 0 1 1 0-6h1V8a2 2 0 0 1 2-2h3V5a3 3 0 1 1 6 0v1h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1a1 1 0 0 0-1 1 1 1 0 0 0 1 1h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3zm3-2v-3h-1a3 3 0 1 1 0-6h1V8h-3a2 2 0 0 1-2-2V5a1 1 0 0 0-1-1 1 1 0 0 0-1 1v1a2 2 0 0 1-2 2H8v3a2 2 0 0 1-2 2H5a1 1 0 0 0-1 1 1 1 0 0 0 1 1h1a2 2 0 0 1 2 2v3h3v-1a3 3 0 1 1 6 0v1h3z"/></svg>
              <span class="flex flex-col lg:flex-row lg:items-center">
                <span class="block ml-2 font-bold text-blue-800 group-hover:text-blue-800">Full API Reference</span>
                <span class="block ml-2 lg:ml-4 text-sm text-gray-600 group-hover:text-blue-800">Official libraries for our API</span>
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex lg:items-center group"
              @keydown.esc.exact="hideMenu"
              @keydown.tab.exact="hideMenu"
              @keydown.shift.tab="focusPrevious(false)"
              @keydown.up.exact.prevent="focusPrevious(true)"
              @keydown.down.exact.prevent=""
            >
              <svg fill="currentColor" class="text-blue-500 group-hover:text-blue-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path class="heroicon-ui" d="M20.59 12l-3.3-3.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4l3.3-3.3zM3.4 12l3.3 3.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4A1 1 0 0 1 6.7 8.7L3.4 12zm7.56 8.24a1 1 0 0 1-1.94-.48l4-16a1 1 0 1 1 1.94.48l-4 16z"/></svg>

              <span class="flex flex-col lg:flex-row lg:items-center">
                <span class="block ml-2 font-bold text-blue-800 group-hover:text-blue-800">Open Source</span>
                <span class="block ml-2 lg:ml-4 text-sm text-gray-600 group-hover:text-blue-800">Giving back to the community</span>
              </span>
            </a>
          </li>
        </ul>
-->
      </div>
    </transition>
  </div>
</template>

<script>

// import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

export default {

  components: {
    // LanguageSwitcher
  },
  mounted() {
    this.menuItems = document.querySelectorAll('.mega-menu a')
  },
  data() {
    return {
      isVisible: false,
      menuItems: null,
      focusedIndex: 0,
    }
  },
  methods: {
    showMenu() {
      this.isVisible = true
    },
    hideMenu() {
      this.isVisible = false
      this.focusedIndex = 0
    },
    startArrowKeys() {
      this.menuItems[0].focus()
    },
    focusPrevious(isArrowKey) {
      this.focusedIndex = this.focusedIndex - 1

      if (isArrowKey) {
        this.focusItem()
      }
    },
    focusNext(isArrowKey) {
      this.focusedIndex = this.focusedIndex + 1

      if (isArrowKey) {
        this.focusItem()
      }
    },
    focusItem() {
      this.menuItems[this.focusedIndex].focus()
    }
  }
}
</script>

<style scoped>
  .mega-menu-fade-enter-active, .mega-menu-fade-leave-active {
    transition: all .1s ease-in-out;
  }
  .mega-menu-fade-enter, .mega-menu-fade-leave-to {
    opacity: 0;
    transform: translateY(-12px);
  }
</style>
