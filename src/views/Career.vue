<template>
    <div id="carrer-search">
        <div class="container mx-auto px-8 lg:px-48 container-serv">
      <h2 class="text-3xl font-bold career-heading">CAREER SEARCH</h2>

      <p class="mt-4" v-html="$t('about.content')" />
      
      <div class="career-tbl">
        <pricing-table></pricing-table>
      </div>
    </div>
    
    <Footer/>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import PricingTable from '@/components/PricingTable.vue'
export default {
  components: {
    Footer,
    PricingTable
  }
}
</script>