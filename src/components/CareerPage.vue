<template>
	<div id="career-showcase">
		<div class="career-buttons">
			<div class="p-a-e">
				<router-link :to="`/${$i18n.locale}/r-d-center`" class="btn">R&amp;D Center</router-link>
			</div>
			<div class="m-o">
				<router-link :to="`/${$i18n.locale}/eng-manu`" class="btn">Engineering &amp; Manufacturing</router-link>
			</div>
			<div class="s-a-m">
				<router-link :to="`/${$i18n.locale}/sales-market`" class="btn">Sales &amp; Marketing</router-link>
			</div>
			<div class="c-s">
				<router-link :to="`/${$i18n.locale}/company-services`" class="btn">Company Services</router-link>
			</div>
		</div>
	</div>
  
</template>

<script>
export default {
  data() {
    return {
      isMonthly: false,
      plans: {
        hobby: {
          price: {
            perYear: 15,
            perMonth: 20,
          }
        },
        growth: {
          price: {
            perYear: 25,
            perMonth: 30,
          }
        },
        business: {
          price: {
            perYear: 50,
            perMonth: 60,
          }
        },
        enterprise: {
          price: {
            perYear: 90,
            perMonth: 120,
          }
        },
      }
    }
  }
}
</script>
