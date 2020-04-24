<template>
    <div id="comp-position">
       <div class="container mx-auto px-8 lg:px-48 container-serv about-posi-vomp">
        <div>
            <h1 class="text-4xl font-bold career-heading">Process Development Engineer</h1> 
        </div>
        <div class="jb-rsp">
            <div class="job-details-top-cont">
                <div>
                    <label>Position Title: </label>
                    <span>Process Development Engineer</span>
                </div>                
            </div>    
                 
        </div>
        <div>
            <div class="job-details-top-cont">
                <ApplyJob/>
            </div>    
        </div>

        <div class="jb-descr">
             <h2 class="text-3xl font-bold career-heading">Job Description</h2> 
             <span>
                Our Engineering & Manufacturing team will be responsible for the Product development and manufacturing work. 
             </span>
             <br>
             <br>
             <span>
                 You should be able to work with the other team members to deliver the high quality products whilst resolving any barriers to production fulfillment, and at the same time, to improve the overal product quality using technical expertise to both mature and new products throughout the factory.
             </span>
        </div>

        <div class="jb-descr">
             <h2 class="text-3xl font-bold career-heading">Relevant Degrees of Study</h2> 
             <article>
                 <ul>
                    <li>Electrical Engineering</li>
                    <li>Mechanical Engineering</li>
                    <li>Electronics Engineering</li>
                    <li>Industrial Engineering</li>
                    <li>Manufacturing Engineering</li>
                    <li>Material Science</li>
                    <li>Chemistry</li>
                    <li>Mechatronics</li>
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
import ApplyJob from '@/components/ApplyJob.vue'

export default {
  components: {
    Footer,
    ApplyJob
  }
}
</script>