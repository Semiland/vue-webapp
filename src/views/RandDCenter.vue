<template>
    <div id="comp-position">
       <div class="container mx-auto px-8 lg:px-48 container-serv about-posi-vomp">
        <div>
            <h1 class="text-4xl font-bold career-heading">R&amp;D Center</h1> 
        </div>
        <div class="jb-rsp">
            <div class="job-details-top-cont">
                <div>
                    <label>Available Position: </label>
                    <span>&#9679; Research Scientist</span>
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
                Our R&amp;D Center is located in Jubao Park, Nanjing, Jiangsu, China. This R&amp;D center will support the research and product development activities to sustain and support milestones of key combination product programs at Semiland, especially in the area of power electronics. 
             </span>
             <br>
             <br>
             <span>
                 If you are passionate about developing cutting-edge power electronics technologies from concept, taking the challenges and trouble-shooting problems and in the PE domain, then this role could be for you. 
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
									<li>Physics</li>
									<li>Material Science</li>
									<li>Math</li>
									<li>Chemistry</li>
									<li>Automation</li>
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