<template>
    <div id="services-main-header-renev">
			<Slider/>
      <div class="container mx-auto px-8 lg:px-47 container-serv">
         <h2 class="text-3xl font-bold">EV/HEV</h2>  
				<div>
					<img src="./ev-image.png"/>
				</div>
     </div>
    <Footer/>
    </div>
</template>

<script>

import Footer from '@/components/Footer.vue'

export default {
  components: {
    Footer
  }
}
</script>
