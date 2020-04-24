<template>
    <div id="comp-position">
       <div class="container mx-auto px-8 lg:px-48 container-serv about-posi-vomp">
        <div>
            <h1 class="text-4xl font-bold career-heading">Company Services</h1> 
        </div>
        <div class="jb-rsp">
            <div class="job-details-top-cont">
                <div class="grid-aval-positiong">
									<div>
										<h4>Available Position:</h4>
									</div>
<!--
									<div>
										<span>&#9679; Product Design Engineer </span>
										<span> &#9679; Process Development Engineer </span>
										<span>&#9679; Process Sustaining Engineer </span>
										<span> &#9679; Equipment Engineer</span>
									</div>
-->
                    <ul>
											<li>&#9679; Executive Assistant to the CEO/CTO</li>
										</ul>
                    
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
                We are looking for an enthusiastic, agile, diligent and highly organized Executive Assistant to support our senior management in pioneering technological disruption in the power electronics industry. As a member of our dynamic team, you will provide invaluable assistance in various fields, including administrative support for our executive officers, office management and orchestrating social activities.  
             </span>
             <br>
             <br>
             <span>
                 If you are fascinated by technology and innovation, brilliant at multitasking, ready to tackle new challenges on a daily basis and enjoy working in a fast paced environment alongside with bright and energetic individuals - we would love to meet you!
             </span>
        </div>

        <div class="jb-descr">
             <h2 class="text-3xl font-bold career-heading">Relevant Degrees of Study</h2> 
             <article>
                 <ul>
									<li>Languages</li>
									<li>Psychology</li>
									<li>Communication</li>
									<li>Business Administration/Management</li>
									<li>Sociology</li>
									<li>Engineering</li>
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