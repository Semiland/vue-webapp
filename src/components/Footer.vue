<template>
    <div id="main-foot-er">
        <!-- FOOTER -->
    <div class="bg-foot">
      <div class="p-20-mine container mx-auto px-9 lg:px-69">
         <div class="foot-content">
           <ul class="foter-lef">
             <li class="li-home">
               <p class="p-hom">
                 <router-link :to="`/${$i18n.locale}/home`" class="text-copy-primary hover:text-gray-600">HOME</router-link>
               </p>
               <router-link :to="`/${$i18n.locale}/home#semiland-main-services-slider`" class="text-copy-primary hover:text-gray-600">Main Business</router-link>
               <router-link :to="`/${$i18n.locale}/home#semiland-entertainment-slider`" class="text-copy-primary hover:text-gray-600">Entertainment</router-link>
               
             </li>

             <li class="li-home">
               <p class="p-hom">
                 <router-link :to="`/${$i18n.locale}/blog`" class="text-copy-primary hover:text-gray-600">NEWS</router-link>
               </p>
               <router-link :to="`/${$i18n.locale}/324656-bl-1`" class="text-copy-primary hover:text-gray-600">Latest</router-link>
               <router-link :to="`/${$i18n.locale}/324656-bl-5`" class="text-copy-primary hover:text-gray-600">Technology</router-link>
               <router-link :to="`/${$i18n.locale}/324656-bl-6`" class="text-copy-primary hover:text-gray-600">PM</router-link>
             </li>

             <li class="li-home">
               <p class="p-hom">
                 <router-link :to="`/${$i18n.locale}/services`" class="text-copy-primary hover:text-gray-600">SERVICES</router-link>
               </p>
               <router-link :to="`/${$i18n.locale}/services`" class="text-copy-primary hover:text-gray-600">Power Modules</router-link>
               <router-link :to="`/${$i18n.locale}/services#customized-products-slider`" class="text-copy-primary hover:text-gray-600">Customized</router-link>
               <router-link :to="`/${$i18n.locale}/services#testing-and-calibration-slider`" class="text-copy-primary hover:text-gray-600">Testing</router-link>
                <router-link :to="`/${$i18n.locale}/services#simulation-and-modeling-slider`" class="text-copy-primary hover:text-gray-600">Simulation</router-link>
             </li>

             <li class="li-home">
               <p class="p-hom">
                  <router-link :to="`/${$i18n.locale}/career`" class="text-copy-primary hover:text-gray-600">CAREER</router-link>
               </p>
               <router-link :to="`/${$i18n.locale}/career#r-d-center-slider`" class="text-copy-primary hover:text-gray-600">R&D Center</router-link>
               <router-link :to="`/${$i18n.locale}/career#engineering-and-mannufacturing-slider`" class="text-copy-primary hover:text-gray-600">Engineering</router-link>
               <router-link :to="`/${$i18n.locale}/career#sales-and-marketing-slider`" class="text-copy-primary hover:text-gray-600">Marketing</router-link>
               <router-link :to="`/${$i18n.locale}/career#company-services-slider`" class="text-copy-primary hover:text-gray-600">Company Serv</router-link>
             </li>

             <li class="li-home">
               <p class="p-hom">
                 <router-link :to="`/${$i18n.locale}/contact`" class="text-copy-primary hover:text-gray-600">CONTACT</router-link>
               </p>
                <router-link :to="`/${$i18n.locale}/contact`" class="text-copy-primary hover:text-gray-600">Location</router-link>
             </li>
           </ul>
           <div class="foter-righ">
            <p class="rghp-hom">Semiland Power Module LTD.</p>
            <div>
              <div class="qr-cddv">
                <img src="./semilandQR.jpg" alt=""/>
              </div>
            <dl>
              <dd>
                <span>Add: </span>"Xuanyuanyi building, Jubao Park, Xuanwu Road, Nanjing, China 210046"
              </dd>
              <dd>
                <span>Tel: </span> +86-025-5806 2800
              </dd>
              <dd>
                <span>Fax: </span> +86-025-5806 2800
              </dd>
              <dd>
                <span>Email: </span> info@semiland.com
              </dd>
            </dl>
            </div>
           </div>
         </div>
       </div>
    </div>

    <!-- Second Footer -->
    <div class="bg-foot ftr-2">
      <div class="p-20-mine-ft2 container mx-auto px-9 lg:px-69">
        
        <div class="ftr2-lft">
           ©2017-2020 Semiland Co., Ltd. All Rights Reserved
        </div>
        <div class="ftr2-right">
          <a href="" target="_blank">
            <img src="./chpolice.png" alt="">苏公网安备 32118202000391号
          </a>
          |
          <a href="http://www.beian.miit.gov.cn/" target="_blank">苏ICP备20003235号</a>
                  
           
           
        </div>
        <div class="clean-both"></div>
      </div>
    </div>
    </div>
</template>
