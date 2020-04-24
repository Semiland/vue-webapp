<template>
  <div id="home-main-lst">
    <Slider/>
      
      <!-- About US Section -->
       <div class="bg-grey-blue">
       <div class="py-20 container mx-auto px-9 lg:px-69 ppdd-btn-5">
      <div class="text-2xl mb-4 md:mb-1 font-bold flex justify-center items-center mb-3">ABOUT US</div>
      <div class="max-w-sm w-full lg:max-w-full lg:flex latest-news">
      <div class="h-48 lg:h-auto flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
        <img class="imf-slide" src='./ingineer-working.jpg'/>
      </div>
      <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-6 flex flex-col justify-between leading-normal">
        <div class="mb-8">
          <div class="text-gray-900 font-bold text-xl mb-3">Established in 2018</div>
          <p class="text-gray-700 text-base">Semiland Co., Ltd, headquartered in Yangzhong, China, is devoted to designing and developing high density power electronics modules using the advanced wide bandgap semiconductor devices to unleash their performance to the maximum extreme. The company has a multinational team motivated to deliver superior power electronics module products to meet our customer requirements and accelerate SiC adoption.</p>
        </div>
        <div class="flex items-center">
        
          <div class="text-small">
            <!-- <h2 class="text-gray-800">Semiland</h2> -->
          </div>
        </div>
      </div>
</div>

      <div class="pb-16 pdd-tp-3rem">
        <div class="mb-4 text-2xl font-bold">Semiland's Main Business</div>
        <p>A high-value application area is needed to settle a new device technology in the beginning stage of the high cost SiC transistors. Beside military and harsh-environmental applications, renewable energy systems are the most promising industrial application with high growth rates. The application of SiC power semiconductor devices in a PV energy system can help eliminate several issues which are at present due to the material limitations of silicon, and the need for a highly efficient and reliable power conversion system in wind turbines were also matched with the material properties of SiC.The unipolar nature of SiC MOSFET favors the development of high switching frequency power converters thereby reducing the size, weight and cost of system while maintaining superio performance as compared to its silicon IGBT counterpart.</p>
      </div> 
      </div>
    </div>


    <div class="container mx-auto px-9 lg:px-69 pdn-top-5rem">

      <!-- <div class="mx-auto pt-2 pb-10 md:flex md:justify-center items-end border-b-4 border-gray-600">
      </div>
       -->
       <div class="line"></div>
      <div id="semiland-main-services-slider" class="text-2xl mb-4 md:mb-1 font-bold flex justify-center items-center mb-3">APPLICATION AREA</div>
      <div class="mx-auto py-12 md:flex md:justify-between md:flex-wrap">
      
        <div class="rounded-lg">
            <div class="container-grid-left">
								<div class="img-grid-dv">
										<img src="./pv.jpg"/>
								</div>
								<div>
									<h1 class="uppercase text-base tracking-wide text-gray-700 font-bold my-2">Renewables</h1>
									<p>A high-value application area is needed to settle a new device technology in the beginning stage of the high cost SiC transistors. Beside military and harsh-environmental applications, renewable energy systems are the most promising industrial application with high growth rates. The application of SiC power semiconductor devices in a PV energy system can help eliminate several issues which are at present due to the material limitations of silicon, and the need for a highly efficient and reliable power conversion system in wind turbines were also matched with the material properties of SiC.The unipolar nature of SiC MOSFET favors the development of high switching frequency power converters thereby reducing the size, weight and cost of system while maintaining superio performance as compared to its silicon IGBT counterpart.</p>
									<div>
										<br>
										<router-link :to="`/${$i18n.locale}/renev`" class="text-copy-primary hover:text-gray-600"><h1 class="uppercase text-base tracking-wide text-blue-700 font-bold my-2">READ MORE</h1></router-link>
									</div>
								</div>
							
						</div>
        </div>
				
				<div class="rounded-lg">
            <div class="container-grid-right">
								<div>
									<h1 class="uppercase text-base tracking-wide text-gray-700 font-bold my-2">EV/HEV</h1>
									<p>The components involved in power semiconductor applications in EV system architecture include: motor driver, on board charger (OBC), on-board DC/ DC and off-board charging pile. The development of electric vehicles requires higher power, lower loss and smaller size of motor controllers. At the same time, the trend of integration of motor and controller requires higher speed of motors, higher working frequency and smaller size of controllers. Therefore, SiC devices are the inevitable choice for future electric vehicles.</p>
										<div>
										<br>
										<router-link :to="`/${$i18n.locale}/ev-hve`" class="text-copy-primary hover:text-gray-600"><h1 class="uppercase text-base tracking-wide text-blue-700 font-bold my-2">READ MORE</h1></router-link>
									</div>
								</div>
								<div class="img-grid-dv">
										<img src="./car.jpg"/>
								</div>
						</div>
        </div>
				
				<div class="rounded-lg">
            <div class="container-grid-left">
								<div class="img-grid-dv">
										<img src="./rail.jpg"/>
								</div>
								<div>
									<h1 class="uppercase text-base tracking-wide text-gray-700 font-bold my-2">Industrial</h1>
									<p>Power electronics encompasses a very wide range of industrial applications including electrical and electronic equipment, household appliances, industrial production equipment, uninterrupted power supplies, tractions for trains, and high voltage DC transmission equipment etc. Use of SiC power electronic systems with high efficiency and simple cooling for these applications will strongly reduce electric energy consumption.</p>
									
										<div>
										<br>
											<router-link :to="`/${$i18n.locale}/industr`" class="text-copy-primary hover:text-gray-600"><h1 class="uppercase text-base tracking-wide text-blue-700 font-bold my-2">READ MORE</h1></router-link>
									</div>

								</div>
						</div>
        </div>
					
					

					

<!--
			<router-link :to="`/${$i18n.locale}/services`" class="text-copy-primary hover:text-gray-600">
        <div class="bg-grey-card rounded-lg shadow-md px-6 py-4 cursor-pointer mb-8 hover:bg-green-200 focus:outline-green focus:shadow-outline-green">
            <div class="container-grid">
            <img class="img-grid" src='./solar.png'/>
								<div>
									<h1 class="uppercase text-base tracking-wide text-gray-700 font-bold my-2">Solar</h1>
									<p>Power modules can be used for power conditioners that convert solar panel generated DC power into AC power used in grid or residential consumption.</p>

								</div>
						</div>
        </div>
      </router-link>
-->
					
<!--
			<router-link :to="`/${$i18n.locale}/services`" class="text-copy-primary hover:text-gray-600">
        <div class="bg-grey-card rounded-lg shadow-md px-6 py-4 cursor-pointer mb-8 hover:bg-green-200 focus:outline-green focus:shadow-outline-green">
            <div class="container-grid">
             <img class="img-grid" src='./mvint.jpg'/>
								<div>
									<h1 class="uppercase text-base tracking-wide text-gray-700 font-bold my-2">Medium Voltage Inverter</h1>
									<p>Power modules suitable for medium voltage inverters that drive 3 phase AC 3k/6k/6.6kV high voltage motors used in iron and steel plants, textile plants and paper mills.</p>

								</div>
						</div>
        </div>
      </router-link>
-->
      
<!--
			<router-link :to="`/${$i18n.locale}/services`" class="text-copy-primary hover:text-gray-600">
        <div class="bg-grey-card rounded-lg shadow-md px-6 py-4 cursor-pointer mb-8 hover:bg-green-200 focus:outline-green focus:shadow-outline-green">
            <div class="container-grid">
             <img class="img-grid" src='./evhev.jpg'/>
								<div>
									<h1 class="uppercase text-base tracking-wide text-gray-700 font-bold my-2">EV/HEV</h1>
									<p>Power modules can be used for EV/HEV, including PFC boost converter, major inventer, on board charger and all sorts of DC-DC converter.</p>

								</div>
						</div>
        </div>
      </router-link>
-->
					
<!--
			<router-link :to="`/${$i18n.locale}/services`" class="text-copy-primary hover:text-gray-600">
        <div class="bg-grey-card rounded-lg shadow-md px-6 py-4 cursor-pointer mb-8 hover:bg-green-200 focus:outline-green focus:shadow-outline-green">
            <div class="container-grid">
              <img class="img-grid" src='./ups.png'/>
								<div>
									<h1 class="uppercase text-base tracking-wide text-gray-700 font-bold my-2">Uninterruptable Power Supply</h1>
									<p>Power modules products ideal for the power conversion circuits of UPS .</p>

								</div>
						</div>
        </div>
      </router-link>
-->

      
     

<!--
      <router-link :to="`/${$i18n.locale}/services#simulation-and-modeling-slider`" class="text-copy-primary hover:text-gray-600">
        <div class="w-48-mine bg-grey-card rounded-lg shadow-md px-6 py-4 cursor-pointer mb-8 hover:bg-green-200 focus:outline-none focus:shadow-outline-green">
          <div class="flex justify-center items-center mb-3">
            <h1 class="uppercase text-base tracking-wide text-gray-700 font-bold my-2">Simulation-Modeling</h1>
          </div>
            <img src='./mvint.jpg'/>
        </div>
      </router-link>
-->


<!--
      <div class="w-48 bg-grey-card rounded-lg shadow-md px-6 py-4 cursor-pointer mb-8 hover:bg-green-200 focus:outline-none focus:shadow-outline-green">
      
        <div class="flex justify-center items-center mb-3">
          <h1 class="uppercase text-base tracking-wide text-gray-700 font-bold my-2">LV-INV</h1>
        </div>
          <img src='./lvint.jpg'/>
      </div>
-->

<!--
     <div class="w-48 bg-grey-card rounded-lg shadow-md px-6 py-4 cursor-pointer mb-8 focus:outline-none focus:shadow-outline-green">
      
        <div class="flex justify-center items-center mb-3">
          <h1 class="uppercase text-base tracking-wide text-gray-700 font-bold my-2">SERVO</h1>
        </div>
          <img src='./servo.jpg'/>
      </div> 
-->
    </div>

       <div class="mx-auto pt-12 pb-10 md:flex md:justify-center items-end border-b-4 border-gray-600">
      </div>
       
    </div>

    <!-- NEWS Section -->
    <div id="semiland-entertainment-slider" class="py-20 container mx-auto px-9 lg:px-69">
      <div class="text-2xl mb-4 md:mb-8 font-bold flex justify-center items-center mb-3">NEWS</div>
      <div class="grid-parm">
        <!-- <div class="item-img">
          <img class="img-re" src='./ingineer-working.jpg'/>
        </div> -->
        <div class="item item2">
          <h1>FIRST PLACE</h1>
          
          <p class="p-heing">Semiland won the first place!</p>
          
          <p>创新松湖创业大赛新材料行业赛结果出炉 Semiland</p>
          <div class="smr-btsr">
            <span>2019</span>
            <router-link :to="`/${$i18n.locale}/324656-bl-1`" class="text-copy-primary hover:text-gray-600">Read More  
            <a href=""><font-awesome-icon icon="arrow-circle-right"/></a>
            </router-link>
          </div>
        </div>

        <div class="item item2">
          <h1>YANGZHONG</h1>
          
          <p class="p-heing">A BEAUTIFUL CITY IN CHINA!</p>
          
          <p>Yangzhong is located in the heart of Zhenjiang City</p>
          <div class="smr-btsr">
            <span>2019</span>
            <router-link :to="`/${$i18n.locale}/324656-bl-3`" class="text-copy-primary hover:text-gray-600">Read More
            <a href=""><font-awesome-icon icon="arrow-circle-right"/></a>
            </router-link>
          </div>
        </div>

        <div class="item item2">
          <h1>NEW TECHNOLOGY</h1>
          
          <p class="p-heing">NEW 3RD GENERATION WBG POWER SEMICONDUCTOR</p>
          
          <p>Semiland “ The New 3rd Generation WBG SiC</p>
          <div class="smr-btsr">
            <span>2019</span>
             <router-link :to="`/${$i18n.locale}/324656-bl-7`" class="text-copy-primary hover:text-gray-600">Read More
            <a href=""><font-awesome-icon icon="arrow-circle-right"/></a>
             </router-link>
          </div>
        </div>

        <div class="item item2">
          <h1>OVERVIEW</h1>
          
          <p class="p-heing">功率半导体器件概述</p>
          
          <p>OVERVIEW OF POWER SEMICONDUCTOR DEVICES</p>
          <div class="smr-btsr">
            <span>2019</span>
             <router-link :to="`/${$i18n.locale}/324656-bl-6`" class="text-copy-primary hover:text-gray-600">Read More
            <a href=""><font-awesome-icon icon="arrow-circle-right"/></a>
             </router-link>
          </div>
        </div>
        
      </div>
    </div>
  
  <Footer/> 
  
</div>

</template>



<script>

import Slider from '@/components/Slider.vue'
import Footer from '@/components/Footer.vue'


export default {
  components: {
    Slider,
    Footer
  }, 
  data() {
    return {
      // Slider
      // slides: document.querySelectorAll('.slide'),
      // intervalTime: 5000,
      // activePlan: '',
      // current: document.querySelector('.current'),
      // sliderInterval: 0,
      // autoScrollings: true,
      // counter: 0,
      
    }
  },

  // props: {
  //   interval: {
  //     type: Number,
  //     default: 0
  //   }
  // },

  // computed:{
  //   slidrQuerySel(){
  //     const slidrQuerySel ={
  //       selcOneCurr: document.querySelector('.current') 
  //     }
  //     return slidrQuerySel

  //   },
  //   slidrQuerySlide(){
  //     const slidrQuerySlide ={
  //       selcOneItm: document.querySelectorAll('.slide')
  //   }
  //     return slidrQuerySlide
  //   },
    
  //   intrTime(){
  //     const intrTime = {
  //       intervalTime: 5000
  //     }

  //     return intrTime
  //   },
  //   slrdInterval(){
  //     const slrdInterval = {
  //       sliderInterval: 0
  //     }
  //     return slrdInterval
  //   }
    
  // },

  methods:{
   
  //  nextSld(){
  //   //  const current = this.slidrQuerySel.selcOneCurr
  //     const current = document.querySelector('.current')
  //     // const current = this.current
  //     const selcOneItm = this.slidrQuerySlide.selcOneItm
  //     // const selcOneItm = this.slides
      
  //     current.classList.remove('current')

  //     if(current.nextElementSibling){
  //       current.nextElementSibling.classList.add('current')
        
  //     }else{
  //       selcOneItm[0].classList.add('current')
  //     }
  //     // setTimeout(() => current.classList.remove('current'));
  //   },

  //   prevSld(){
  //     const current = document.querySelector('.current')
  //     // const current = this.slidrQuerySel.selcOneCurr
  //     // const current = this.current
  //     const selcOneItm = this.slidrQuerySlide.selcOneItm
  //     // const selcOneItm = this.slides
  //     current.classList.remove('current')

  //     if(current.previousElementSibling){
  //       current.previousElementSibling.classList.add('current')
  //     }else{
  //       selcOneItm[selcOneItm.length-1].classList.add('current')
  //     }
  //     // setTimeout(() => current.classList.remove('current'));
  //   },

  //   btnClickSlidNx(){
  //     this.nextSld()
      
  //     clearInterval(this.slrdInterval.sliderInterval)
  //     this.slrdInterval.sliderInterval = setInterval(this.nextSld, this.intrTime.intervalTime)
    
  
  //   },

  //   btnClickSlidPrev(){
  //     this.prevSld()
  //     clearInterval(this.slrdInterval.sliderInterval)
  //     this.slrdInterval.sliderInterval = setInterval(this.nextSld, this.intrTime.intervalTime)
  //   },
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

