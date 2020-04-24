<template>
    <div id="carrer-search">
        <div class="container mx-auto px-8 px-48 container-serv">
      <h2 class="text-3xl font-bold career-heading">CAREER</h2>

      <p class="mt-4" v-html="$t('about.content')" />
      
      <div class="career-tbl">
<!--        <pricing-table></pricing-table> -->
				<CareerPage/>
      </div>
    </div>
    
    <Footer/>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
//import PricingTable from '@/components/PricingTable.vue'
import CareerPage from '@/components/CareerPage.vue'

	export default {
  components: {
    Footer,
//    PricingTable
		CareerPage
  }
}
</script>