<template>
<div>
    <div class="border-box-semi">
      <div class="slider-wrapper">
        <div class="slider">
      <div class="slide current">
        <div class="content">
          <h1>Slide One</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic
            maxime, voluptatibus labore doloremque vero!
          </p>
        </div>
      </div>
      <div class="slide">
        <div class="content">
          <h1>Slide Two</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic
            maxime, voluptatibus labore doloremque vero!
          </p>
        </div>
      </div>
      <div class="slide">
        <div class="content">
          <h1>Slide Three</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic
            maxime, voluptatibus labore doloremque vero!
          </p>
        </div>
      </div>
    </div>
        
        <div class="buttons"> 
            <button v-on:click="btnClickSlidPrev" id="prev"><font-awesome-icon icon="arrow-circle-left"/></button>
            <button v-on:click="btnClickSlidNx" id="next"><font-awesome-icon icon="arrow-circle-right"/></button>
          </div>
      </div>
      
    </div>
    </div>

    

    
</template>

<script>
// import SelectablePlan from '@/components/SelectablePlan.vue'
import { clearInterval, setInterval } from 'timers';

export default {

  components: {
    // SelectablePlan
  },
  data() {
    return {
      activePlan: '',
      slides: document.querySelectorAll('.slide'),
      current: document.querySelector('.current'),
      intervalTime: 5000,
      sliderInterval: 0,
      auto: true,
      counter: 0,
    
    }
  },

  computed:{
    slidrQuerySel(){
      const slidrQuerySel ={
        selcOneCurr: document.querySelector('.current') 
      }
      return slidrQuerySel

    },
    slidrQuerySlide(){
      const slidrQuerySlide ={
        selcOneItm: document.querySelectorAll('.slide')
    }
      return slidrQuerySlide
  },
  }, 


  methods:{
   
   nextSld(){
      const current = document.querySelector('.current')
      const selcOneItm = this.slidrQuerySlide.selcOneItm
 
      current.classList.remove('current')

      if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current')
        
      }else{
        selcOneItm[0].classList.add('current')
      }
    },

    prevSld(){
      const current = document.querySelector('.current')
      const selcOneItm = this.slidrQuerySlide.selcOneItm
      current.classList.remove('current')

      if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current')
      }else{
        selcOneItm[selcOneItm.length-1].classList.add('current')
      }
    },

    btnClickSlidNx(){
      this.nextSld()
      clearInterval(this.slideInterval);
      this.slideInterval = setInterval(this.nextSlide, this.intervalTime);
  
    },

    btnClickSlidPrev(){
      this.prevSld()
      clearInterval(this.slideInterval);
      this.slideInterval = setInterval(this.nextSlide, this.intervalTime);
    },


  }
}
</script>


