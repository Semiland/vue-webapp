<template>
  <div id="contact-form">
    <div class="line"></div>
      <div class="text-2xl mb-4 md:mb-12 font-bold flex justify-center items-center our-loc">OUR LOCATION</div>
     
    <BaiduMap/> 

      <div class="container mx-auto px-9 lg:px-69 cont-contf">

      <!-- <div class="mx-auto pt-2 pb-10 md:flex md:justify-center items-end border-b-4 border-gray-600">
      </div>
       --> 
       <div class="line"></div>
      <!-- <div class="text-2xl mb-4 md:mb-12 font-bold flex justify-center items-center">CONTACT US</div> -->
        <div class="container ctr-blox">
          <div class="row-grd">
            
            <div class="col-md-4">
              <div class="row">
                <div class="col-md-12">
                  <!-- <div class="contact-box left mb-65">
                    <div class="contact-icon-left">
                      <img src="/map-marked-alt-solid.svg" alt="english flag" class="h-8 w-8">
                    </div>
                    <div class="contact-box-content">
                      <h5>R&D Center:</h5>
                      <p>Xuanyuanyi building, Jubao Park, Xuanwu Road, Nanjing, China 210046</p>
                      <a class="i-right" href="">
                        <img src="/envelope-regular.svg" alt="english flag" class="h-8 w-8 ion-ios-email"/>info@semiland.com
                      </a>
                      
                    </div>
                  </div> -->

                  <!-- <div class="contact-box left mb-65">
                    <div class="contact-icon-left">
                      <img src="/map-marked-alt-solid.svg" alt="english flag" class="h-8 w-8">
                    </div>
                    <div class="contact-box-content">
                      <h5>Factory:</h5>
                      <p>No.888, Chunliu North Road, Yangzhong City, Jiangsu China 212200</p>
                      <a class="i-right" href="">
                        <img src="/envelope-regular.svg" alt="english flag" class="h-8 w-8 ion-ios-email"/>info@semiland.com
                      </a>
                      
                    </div>
                  </div> -->
                </div>
              </div>
            </div>

            <!-- <div class="col-md-8">
              <div class="contact_frm">
                <div id="message"></div>
                <form action="contact.php" name="contactform" id="contactform" method="post">
                  <div class="col-sm-12">
                    <div class="form-groups">
                      <input class="form-name-ctr" type="text" name="name" id="name" placeholder="Enter Your name">
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="form-groups">
                      <input class="form-name-ctr" type="text" name="email" id="email" placeholder="Enter Your email">
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="form-groups">
                      <input class="form-name-ctr" type="text" name="subject" id="subject" placeholder="Enter Your subject">
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="form-groups">
                      <textarea class="form-name-ctr" cols="40" rows="7" name="comments" id="comments" placeholder="Enter Your Message"></textarea>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="form-groups text-center">
                      <button class="btn-send" type="submit" id="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div> -->
          </div>
        </div>
      </div>

      
      
    <Footer/>

    
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import BaiduMap from '@/components/BaiduMap.vue'

export default {
  components: {
    Footer,
    BaiduMap
  },
}
</script>
