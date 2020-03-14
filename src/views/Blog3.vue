<template>
    <div id="comp-position">
       <div class="container mx-auto px-8 lg:px-48 container-serv about-posi-vomp">
        <div class="page-header">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="page-title">
                            <h2>YANGZHONG</h2>
                            <p>A BEAUTIFUL CITY IN CHINA!</p>
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
                                <h3 class="blog-entry-title">Zhenjiang</h3>
                            </header>
                            <div class="entry-meta">
                                <span class="entry-date">
                                    <a href="">
                                        <p>2019-12-10</p>
                                    </a>
                                </span>
                            </div>
                            <a href="#" class="post-img-a pst-img-blog">
                                <img src="./img2.jpg" alt="">
                            </a>
                            <div class="this-main-blog-cont">
                                <p>Yangzhong is located in the heart of the east Zhenjiang City, middle and lower reaches of the Yangze River. The northeast part faces Taizhou and Yangzhou across the river, and the southwest part is close to Zhenjiang and Changzhou. The south bridge connects Shanghai-Nanjing Highway and Beijing-Shanghai Railway, the North part is connected to Beijing-Shanghai Highway. It only takes about 2.5 hours to get to Shanghai Pudong International Airport, and 1.5 hours to Nanjing Lukou International Airport. It is about 6km and 2km to Zhengjiang Port and Taizhou Port of international Freight Port, respectively. It is navigable to 136 ports of more than 40 countries. The city is composed of four islands: Taiping Island, Xisha Island, Leigong Island, zhongxin Island.</p>
                                <br>
                                <p>Yangzhong industry has distinkctive characteristics, It is well-known as "electric island", "photovoltaic island" and "Yangtze River manufacturing corridor", and it is the largest electrical engineering raw material market. It was awarded as “ China Engineering and Electrical Famous City”. Yangzhong has been awarded “ National Sanitary City”, “ National Ecological City”, and “ National Model City for Environmental Protection”. Yangzhong rural villa has distinctive features, and more than 60 diplomatic envoys form 28 countries including the Spanish Counsellor Mrs. Christian and the Moroccan Minister to China have visited the city.</p>
                                <br>
                                <p><strong>扬中位于镇江市东部江心，长江中下游，东北与泰州、扬州隔江相望，西南与镇江、常州一衣带水，南桥相接沪宁高速公路和京沪铁路，北渡可联京沪高速公路。距上海浦东国际机场只有2.5小时的公路车程，到南京禄口国际机场只需1.5小时，距国际货运港口镇江港、泰州港分别为6公里和2公里，可与40多个国家的136个港口通航。全市由太平洲、中心沙、西沙岛、雷公咀四个江岛组成.</strong></p>
                                <br>
                                <p><strong>扬中产业特色鲜明，是远近闻名的“电气岛”、“光伏岛”，“长江制造业走廊”,其中电气领域更是中国最大的工程电气原料市场，并被授予“中国工程电气名城”，扬中先后荣获“国家卫生城市"、“国家生态市”和“国家园林城市”，“国家环保模范城市”通过国家级考核验收。扬中农村别墅特色鲜明，西班牙驻华参赞夫人克里斯蒂娜夫人以及摩洛哥驻华公使等28个国家的60余位驻华使节曾到此参观留念。</strong></p>
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