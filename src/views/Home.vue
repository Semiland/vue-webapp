<template>
  <div>
    <Slider/>

    

    <div class="container mx-auto px-9 lg:px-69 ">

      <!-- <div class="mx-auto pt-2 pb-10 md:flex md:justify-center items-end border-b-4 border-gray-600">
      </div>
       -->
       <div class="line"></div>
      <div class="text-2xl mb-4 md:mb-1 font-bold flex justify-center items-center mb-3">APPLICATION AREA</div>
      <div class="mx-auto py-12 md:flex md:justify-between md:flex-wrap">
      <div class="w-48 bg-grey-card rounded-lg shadow-md px-6 py-4 cursor-pointer mb-8 hover:bg-green-200 focus:outline-green focus:shadow-outline-green">
      
        <div class="flex justify-center items-center mb-3 ">
          <h1 class="uppercase text-base tracking-wide text-gray-700 font-bold my-2">EV/HV</h1>
        </div>
          <img src='./evhev.jpg'/>
      </div>

      <div class="w-48 bg-grey-card rounded-lg shadow-md px-6 py-4 cursor-pointer mb-8 hover:bg-green-200 focus:outline-none focus:shadow-outline-green">
      
        <div class="flex justify-center items-center mb-3">
          <h1 class="uppercase text-base tracking-wide text-gray-700 font-bold my-2">CHARGING</h1>
        </div>
          <img src='./charging.jpg'/>
      </div>

      <div class="w-48 bg-grey-card rounded-lg shadow-md px-6 py-4 cursor-pointer mb-8 hover:bg-green-200 focus:outline-none focus:shadow-outline-green">
      
        <div class="flex justify-center items-center mb-3">
          <h1 class="uppercase text-base tracking-wide text-gray-700 font-bold my-2">WELDING</h1>
        </div>
          <img src='./welding.jpg'/>
      </div>

      <div class="w-48 bg-grey-card rounded-lg shadow-md px-6 py-4 cursor-pointer mb-8 hover:bg-green-200 focus:outline-none focus:shadow-outline-green">
      
        <div class="flex justify-center items-center mb-3">
          <h1 class="uppercase text-base tracking-wide text-gray-700 font-bold my-2">MV-INT</h1>
        </div>
          <img src='./mvint.jpg'/>
      </div>

      <div class="w-48 bg-grey-card rounded-lg shadow-md px-6 py-4 cursor-pointer mb-8 hover:bg-green-200 focus:outline-none focus:shadow-outline-green">
      
        <div class="flex justify-center items-center mb-3">
          <h1 class="uppercase text-base tracking-wide text-gray-700 font-bold my-2">LV-INV</h1>
        </div>
          <img src='./lvint.jpg'/>
      </div>

      <div class="w-48 bg-grey-card rounded-lg shadow-md px-6 py-4 cursor-pointer mb-8 focus:outline-none focus:shadow-outline-green">
      
        <div class="flex justify-center items-center mb-3">
          <h1 class="uppercase text-base tracking-wide text-gray-700 font-bold my-2">SERVO</h1>
        </div>
          <img src='./servo.jpg'/>
      </div>
    </div>

      <!-- <div class="mx-auto pt-12 pb-10 md:flex md:justify-center items-end border-b-4 border-gray-600">
      </div>
       -->
    </div>

       <div class="bg-grey-blue">
       <div class="py-20 container mx-auto px-9 lg:px-69">
      <div class="text-2xl mb-4 md:mb-1 font-bold flex justify-center items-center mb-3">ABOUT US</div>
      <div class="max-w-sm w-full lg:max-w-full lg:flex latest-news">
      <div class="h-48 lg:h-auto flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
        <img class="imf-slide" src='./ingineer-working.jpg'/>
      </div>
      <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-6 flex flex-col justify-between leading-normal">
        <div class="mb-8">
          <div class="text-gray-900 font-bold text-xl mb-3">Established in 2018</div>
          <p class="text-gray-700 text-base">Semiland Semiland Co., Ltd, headquartered in Yangzhong, China, is devoted to designing and developing high density power electronics modules using the advanced wide bandgap semiconductor devices to unleash their performance to the maximum extreme.</p>
        </div>
        <div class="flex items-center">
        
          <div class="text-small">
            <h2 class="text-gray-800">Semiland</h2>
          </div>
        </div>
      </div>
</div>


      <!-- <div class="pb-16 py-12">
        <div class="mb-4 text-2xl font-bold">This is a title</div>
        <p>Lorem ipsum dolor sit amet <a href="#" class="text-blue-600 hover:text-blue-800">consectetur</a> adipisicing elit. Aut dicta incidunt ea ut commodi quidem temporibus illo quia. Et itaque deleniti veniam tempore facere ipsum animi totam culpa minima vel voluptatem adipisci natus blanditiis similique sunt expedita, ex dicta doloremque repellat vitae temporibus. Quisquam quia, accusantium blanditiis architecto facilis saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad unde laborum ut suscipit iure aliquam sapiente doloribus exercitationem nam sint.</p>
      </div> -->
      <div class="pb-16">
        <div class="mb-4 text-2xl font-bold">Semiland's Main Business</div>
        <p>A high-value application area is needed to settle a new device technology in the beginning stage of the high cost SiC transistors. Beside military and harsh-environmental applications, renewable energy systems are the most promising industrial application with high growth rates. The application of SiC power semiconductor devices in a PV energy system can help eliminate several issues which are at present due to the material limitations of silicon, and the need for a highly efficient and reliable power conversion system in wind turbines were also matched with the material properties of SiC.The unipolar nature of SiC MOSFET favors the development of high switching frequency power converters thereby reducing the size, weight and cost of system while maintaining superio performance as compared to its silicon IGBT counterpart.</p>
      </div> 

      </div>
    </div>

    <div>
  </div>
</div>

</template>



<script>

import Slider from '@/components/Slider.vue'


export default {
  components: {
    Slider
  },
  data() {
    return {
      activePlan: '',
      auto: true,
      intervalTime: 5000,
      slideInterval: 0,
      slides: document.querySelectorAll('.slide'),
      next: document.querySelector('#next'),
      prev: document.querySelector('#prev'),
      current: document.querySelector('.current'),
    }
  }
} 
</script>

