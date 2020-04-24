<template>
    <div id="services-main-header-renev">
<!--			<Slider/>-->
      <div class="container mx-auto px-8 lg:px-47 container-serv">
         <h2 class="text-3xl font-bold">Renevables</h2>  
				<div>
					<img src="./renev-1.png"/>
					<br>
					<img src="./renev-2.png"/>
					<br>
					<img src="./renev-3.png"/>
				</div>
     </div>
    <Footer/>
    </div>

</template>

<script>

import Footer from '@/components/Footer.vue'
//import Slider from '@/components/SliderRenevables.vue'

export default {
  components: {
    Footer,
//		Slider
  }
}
</script>
