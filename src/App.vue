<template>
  <div id="app" class="font-sans text-gray-800">
    <header class="border-t-4 border-blue-100 bg-white z-10 absolute w-full shadow-md">
      <nav class="container mx-auto px-2 flex flex-wrap justify-between items-center py-1">
        <div class="mb-0 lg:mb-6 xl:mb-0 pt-0"> 
          <router-link :to="`/${$i18n.locale}`" class="font-bold text-xl flex items-end">
            <img src="@/assets/SemilandLOGO.jpg" alt="logo" class="w-16">
            <!-- <span>Semiland</span> -->
          </router-link>
        </div>
        <div class="block lg:hidden">
          <button @click="toggleMenu" class="flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-600 hover:border-gray-600">
            <svg class="current-color h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="gray" /></svg>
          </button>
        </div>
        <ul
          class="uppercase tracking-wide font-bold w-full block flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
          :class="menuOpen ? 'block': 'hidden'"
        >
          <!-- <li class="mr-12 mb-6 lg:mb-0 pt-10">
            <search-component />
          </li> -->
<!--
          <li class="mr-8 mb-6 lg:mb-0">
             <mega-menu /> 
          </li>
-->
<!--
          <li class="mr-8 mb-6 lg:mb-0">
             <mega-menu /> 
            <router-link :to="`/${$i18n.locale}/home`" class="text-copy-primary hover:text-gray-600">{{ $t('nav.home')}}</router-link>
          </li>
-->
					<li class="mr-8 mb-6 lg:mb-0">
             <MegaMenuHome/> 
          </li>
					
          <li class="mr-8 mb-6 lg:mb-0">
            <router-link :to="`/${$i18n.locale}/services`" class="text-copy-primary hover:text-gray-600">{{ $t('nav.services') }}</router-link>
            <!-- <ServicesMenu/> -->
          </li>
<!--
          <li class="mr-8 mb-6 lg:mb-0">
            <router-link :to="`/${$i18n.locale}/career`" class="text-copy-primary hover:text-gray-600">{{ $t('nav.career') }}</router-link>
          </li>
-->
					<li class="mr-8 mb-6 lg:mb-0">
             <MegaMenuCareer/> 
          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <router-link :to="`/${$i18n.locale}/contact`" class="text-copy-primary hover:text-gray-600">{{ $t('nav.contact') }}</router-link>
          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <router-link :to="`/${$i18n.locale}/blog`" class="text-copy-primary hover:text-gray-600">{{ $t('nav.blog') }}</router-link>
          </li>
          
          <!-- <li class="mr-8 mb-6 lg:mb-0">
            <modal-login />
          </li> -->
          <!-- <li class="mr-8 mb-6 lg:mb-0">
            <modal-register />
          </li> -->
          <li class="mb-4 lg:mb-0 lg:mr-8">
            <language-switcher />
          </li>
<!--
           <li>
            <dropdown-menu />
           </li> 
-->
        </ul>
      </nav>
    </header>
    <div class="bg-gray-100 min-h-screen pt-20 text-lg">
      <router-view/>
    </div>
    
  </div>
</template>

<script>
// import SearchComponent from '@/components/SearchComponent.vue'
// import DropdownMenu from '@/components/DropdownMenu.vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
//import MegaMenu from '@/components/MegaMenu.vue'
import MegaMenuCareer from '@/components/MegaMenuCareer.vue'
import MegaMenuHome from '@/components/MegaMenuHome.vue'
// import ServicesMenu from '@/components/ServicesMenu.vue'
// import ModalLogin from '@/components/ModalLogin.vue'
// import ModalRegister from '@/components/ModalRegister.vue'


export default {
  name: 'app',
  components: {
    // SearchComponent,
//     DropdownMenu,
//     MegaMenu,
    // ModalLogin,
    // ModalRegister,
    LanguageSwitcher,
    // ServicesMenu
		MegaMenuCareer,
		MegaMenuHome
  },
  data() {
    return {
      menuOpen: false,
      // activePlan: '',
      // current: document.querySelector('.current'),
      // sliderInterval: 0,
      // autoScrollings: true,
      // counter: 0,
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    // nextSld(){
    // //  const current = this.slidrQuerySel.selcOneCurr
    //   const current = document.querySelector('.current')
    //   // const current = this.current
    //   const selcOneItm = this.slidrQuerySlide.selcOneItm
    //   // const selcOneItm = this.slides
      
    //   current.classList.remove('current')

    //   if(current.nextElementSibling){
    //     current.nextElementSibling.classList.add('current')
        
    //   }else{
    //     selcOneItm[0].classList.add('current')
    //   }
    //   // setTimeout(() => current.classList.remove('current'));
    // },

    // prevSld(){
    //   const current = document.querySelector('.current')
    //   // const current = this.slidrQuerySel.selcOneCurr
    //   // const current = this.current
    //   const selcOneItm = this.slidrQuerySlide.selcOneItm
    //   // const selcOneItm = this.slides
    //   current.classList.remove('current')

    //   if(current.previousElementSibling){
    //     current.previousElementSibling.classList.add('current')
    //   }else{
    //     selcOneItm[selcOneItm.length-1].classList.add('current')
    //   }
    //   // setTimeout(() => current.classList.remove('current'));
    // },

    // btnClickSlidNx(){
    //   this.nextSld()
      
    //   clearInterval(this.slrdInterval.sliderInterval)
    //   this.slrdInterval.sliderInterval = setInterval(this.nextSld, this.intrTime.intervalTime)
    
  
    // },

    // btnClickSlidPrev(){
    //   this.prevSld()
    //   clearInterval(this.slrdInterval.sliderInterval)
    //   this.slrdInterval.sliderInterval = setInterval(this.nextSld, this.intrTime.intervalTime)
    // },
    
  },
  // mounted() {
  //    let vs = this
  //     if(vs.autoScrollings){
  //       vs.slrdInterval.sliderInterval = setInterval(() =>{
  //         vs.btnClickSlidNx()
  //       }, vs.intrTime.intervalTime)
  //     }
  //   },
}
</script>

<style src="@/assets/css/tailwind.css" />
<link href="https://fonts.googleapis.com/css?family=Exo+2&amp;display=swap" rel="stylesheet">
 