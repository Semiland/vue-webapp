<template>
<div> 
    <div class="border-box-semi">
      <div class="slider-wrapper">
        <div class="slider">
      <div class="slide current">
        <div class="content">
          <h1>Semiland</h1>
          <p>
            Power the World with our technology!
          </p>
        </div>
      </div>
      <div class="slide">
        <div class="content">
          <h1></h1>
          <p>
            Semiland is headquarted in Yangzhong, China.
          </p>
        </div>
      </div>
      <div class="slide">
        <div class="content">
          <h1></h1>
          <p>
            Semiland R&D center is located in Jubao park.
          </p>
        </div>
      </div>
      <div class="slide">
        <div class="content">
          <h1></h1>
          <p>
            Semiland, expert in making advanced WBG power modules!
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

  props: {
    interval: {
      type: Number,
      default: 0
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
  }      
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
      // setTimeout(() => current.classList.remove('current'));
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
      // setTimeout(() => current.classList.remove('current'));
    },

    btnClickSlidNx(){
      this.nextSld()
      
      // clearInterval(this.sliderInterval)
      // this.sliderInterval = setInterval(this.nextSld, this.intervalTime)
    
  
    },

    btnClickSlidPrev(){
      this.prevSld()
      // clearInterval(this.sliderInterval)
      // this.sliderInterval = setInterval(this.nextSld, this.intervalTime)
    },
  },
  //  mounted() {
  //    let vs = this
  //     if(vs.auto){
  //       vs.sliderInterval = setInterval(function (){
  //         vs.btnClickSlidNx()
  //       }, vs.intervalTime)
  //     }
  //   },
}
</script>


