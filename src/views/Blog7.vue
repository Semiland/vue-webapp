<template>
    <div id="comp-position">
       <div class="container mx-auto px-8 lg:px-48 container-serv about-posi-vomp">
        <div class="page-header">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="page-title">
                            <h2>SEMILAND</h2>
                            <p>NEW 3RD GENERATION WBG POWER SEMICONDUCTOR</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <ul class="page-bread-crumb">
                            <li>
                                <router-link :to="`/${$i18n.locale}/blog`" class="text-copy-primary hover:text-gray-600">Blog </router-link>

                                /
                                <router-link :to="`/${$i18n.locale}/home`" class="text-copy-primary hover:text-gray-600">Home </router-link>
                                <!-- "&nbsp; / &nbsp;" -->
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>    

        <div class="container">
            <div class="row">
                <div class="col-md-8 col-xs-12">
                    <div class="blog-content-dv">
                        <article class="post">
                            <span class="site-author">
                                <figure class="avatar">
                                    <a href="#">
                                        <img src="/avatar.png" alt="">
                                    </a>
                                </figure>
                            </span>
                            <header class="blog-entry-header">
                                <h3 class="blog-entry-title">Zhenjiang </h3>
                            </header>
                            <div class="entry-meta">
                                <span class="entry-date">
                                    <a href="">
                                        <p>2017-10-26</p>
                                    </a>
                                </span>
                            </div>
                            <a href="#" class="post-img-a pst-img-blog">
                                <img src="./img5.jpg" alt="">
                                <!-- <p>Figure 1: Comparison of SiC and Si properties demonstrating a clear advantage for SiC.</p> -->
                            </a>
                            <div class="this-main-blog-cont">
                                <p>Semiland “ The New 3rd Generation WBG Power Semiconductor SiC Power Module Packaging and System Integration Technologies” was selected as the “Jinshan Talent” program in Zhenjiang 2017-10-26 Through the recommendation and application, site inspection, comprehensive review and venture capital review etc., determined by the Municipal Talent Work Leading Group Meeting, the Municipal Government Standing Committee, and the Municipal Committe Executive Committee, “ The New 3rd Generation WBG Power Semiconductor SiC Power Module Packaging and System Integration Technologies” project by Semiland Co., Ltd have been awarded Zhenjiang City’s “ Jinshan Talent” Top Talent Special Award and the project received a fund of 10 milliom RMB from the local government.</p>
                                <br>
                                <p><strong>经推荐申报、现场考察、综合评审、面试答辩、风投评审等程序，并由市人才工作领导小组会、市政府常务会、市委常委会研究确定，我市“碳化硅芯片封装、模块和系统集成技术的研发及产业化”和“新型光伏电站用同步电机对并网系统的研发及产业化”2个项目获镇江市“金山英才”顶尖人才专项计划资助，每个项目获资助资金1000万元。</strong></p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
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