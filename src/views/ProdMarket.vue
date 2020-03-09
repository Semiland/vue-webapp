<template>
    <div id="comp-position">
       <div class="container mx-auto px-8 lg:px-48 container-serv about-posi-vomp">
        <div>
            <h1 class="text-4xl font-bold career-heading">Product Marketing</h1> 
        </div>
        <div class="jb-rsp">
            <div class="job-details-top-cont">
                <div>
                    <label>Position Title: </label>
                    <span>Product Marketing</span>
                </div>                
            </div>    
                 
        </div>
        <div>
            <div class="job-details-top-cont">
                <a href="#" target="_blank" class="appl">Apply</a>
            </div>    
        </div>

        <div class="jb-descr">
             <h2 class="text-3xl font-bold career-heading">Job Description</h2> 
             <span>
                We are looking for someone who is passionate about what they do and has natural creative flair and demonstrates vision, commitment and integrity. 
             </span>
             <br>
             <br>
             <span>
                 The right candidate needs to be customer focused and understand the commercial and technical requirements of customers to ensure their needs are being met. You will need to have an upbeat and positive attitude, be highly organized and are able to use your initiative to trouble-shooting the problems. You also need to be able to think outside the box to find a solution.
             </span>
        </div>

        <div class="jb-descr">
             <h2 class="text-3xl font-bold career-heading">Relevant Degrees of Study</h2> 
             <article>
                 <ul>
                    <li>Marketing/Sales</li>
                    <li>Business Administration</li>
                    <li>Psychology</li>
                    <li>Communication</li>
                    <li>Engineering related</li>
                </ul>
             </article>             
             <br>
             <br>
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