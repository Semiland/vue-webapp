<template>
    <div id="comp-position">
       <div class="container mx-auto px-8 lg:px-48 container-serv about-posi-vomp">
        <div>
            <h1 class="text-4xl font-bold career-heading">Sales &amp; Marketing</h1> 
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
											<li>&#9679; Product Marketing</li>
											<li>&#9679; Sales analyst and support</li>
											<li>&#9679; Product Sales</li>
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
                We are looking for someone who is passionate about what they do and has natural creative flair and demonstrates vision, commitment and integrity. The right candidate needs to be customer focused and understand the commercial and technical requirements of customers to ensure their needs are being met.  
             </span>
             <br>
             <br>
             <span>
                 You will need to have an upbeat and positive attitude, be highly organized and are able to use your initiative to trouble-shooting the problems. You also need to be able to think outside the box to find a solution. 
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
import ApplyJob from '@/components/ApplyJob.vue'

export default {
  components: {
    Footer,
    ApplyJob
  }
}
</script>