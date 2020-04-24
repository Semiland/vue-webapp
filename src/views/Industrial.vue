<template>
    <div id="services-main-header-industrial">
      <div class="container mx-auto px-8 lg:px-47 container-serv">
        <div class="grid-industrial-items">
					<router-link :to="`/${$i18n.locale}/services`" class="text-copy-primary hover:text-gray-600">
        <div class="bg-grey-card shadow-md px-6 py-4 cursor-pointer mb-8 hover:bg-green-200 focus:outline-green focus:shadow-outline-green">
            <div class="container-grid">
             <div>
							<img class="img-grid" src='./lv-inv.png'/>
							</div>
							<div>
								<h1 class="uppercase text-base tracking-wide text-gray-700 font-bold">Low Voltage Inverter</h1>
									<p>Power modules best suited for general purpose inverters including power conversion equipment for carrying out variable speed operation of motors in product such as belt conveyors, funs and pumps.</p>
							</div>
						</div>
        </div>
      </router-link>
					<router-link :to="`/${$i18n.locale}/services`" class="text-copy-primary hover:text-gray-600">
        <div class="bg-grey-card shadow-md px-6 py-4 cursor-pointer mb-8 hover:bg-green-200 focus:outline-green focus:shadow-outline-green">
            <div class="container-grid">
             <div>
							<img class="img-grid" src='./welding.png'/>
							</div>
							<div>
								<h1 class="uppercase text-base tracking-wide text-gray-700 font-bold">Welding</h1>
									<p>Power modules can be used for switching circuits that generate resistance heat in welding machines to melt and integrate by adding heat or pressure to two or more metallic members.
</p>
							</div>
						</div>
        </div>
      </router-link>
					
					<router-link :to="`/${$i18n.locale}/services`" class="text-copy-primary hover:text-gray-600">
        <div class="bg-grey-card shadow-md px-6 py-4 cursor-pointer mb-8 hover:bg-green-200 focus:outline-green focus:shadow-outline-green">
            <div class="container-grid">
             <div>
							<img class="img-grid" src='./mv-inv.png'/>
							</div>
							<div>
								<h1 class="uppercase text-base tracking-wide text-gray-700 font-bold">Medium Voltage Inverter 
</h1>
									<p>Power modules suitable for medium voltage inverters that drive 3 phase AC 3k/6k/6.6kV high voltage motors used in iron and steel plants, textile plants and paper mills.

</p>
							</div>
						</div>
        </div>
      </router-link>
					
					<router-link :to="`/${$i18n.locale}/services`" class="text-copy-primary hover:text-gray-600">
        <div class="bg-grey-card shadow-md px-6 py-4 cursor-pointer mb-8 hover:bg-green-200 focus:outline-green focus:shadow-outline-green">
            <div class="container-grid">
             <div>
							<img class="img-grid" src='./train.png'/>
							</div>
							<div>
								<h1 class="uppercase text-base tracking-wide text-gray-700 font-bold">Railroads 
</h1>
									<p>Power modules can be used for switching circuits that generate resistance heat in welding machines to melt and integrate by adding heat or pressure to two or more metallic members.


</p>
							</div>
						</div>
        </div>
      </router-link>
					
					<router-link :to="`/${$i18n.locale}/services`" class="text-copy-primary hover:text-gray-600">
        <div class="bg-grey-card shadow-md px-6 py-4 cursor-pointer mb-8 hover:bg-green-200 focus:outline-green focus:shadow-outline-green">
            <div class="container-grid">
             <div>
							<img class="img-grid" src='./ups.png'/>
							</div>
							<div>
								<h1 class="uppercase text-base tracking-wide text-gray-700 font-bold">Uninterruptable Power Supply
 
</h1>
									<p>Power modules products ideal for the power conversion circuits of UPS that prevent system shutdown during power outages and instantaneous power failures.



</p>
							</div>
						</div>
        </div>
      </router-link>
					
					<router-link :to="`/${$i18n.locale}/services`" class="text-copy-primary hover:text-gray-600">
        <div class="bg-grey-card shadow-md px-6 py-4 cursor-pointer mb-8 hover:bg-green-200 focus:outline-green focus:shadow-outline-green">
            <div class="container-grid">
             <div>
							<img class="img-grid" src='./servo.png'/>
							</div>
							<div>
								<h1 class="uppercase text-base tracking-wide text-gray-700 font-bold">SERVO
 
</h1>
									<p>Power Modules best suited to NC and servos that carry out speed control and positioning of machine tools, as well as robots that have multi-spindle control features used in assembly, welding and conveyance.




</p>
							</div>
						</div>
        </div>
      </router-link>
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
