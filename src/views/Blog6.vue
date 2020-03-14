<template>
    <div id="comp-position">
       <div class="container mx-auto px-8 lg:px-48 container-serv about-posi-vomp">
        <div class="page-header">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="page-title">
                            <h2>功率半导体器件概述</h2>
                            <p>OVERVIEW OF POWER SEMICONDUCTOR DEVICES</p>
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
                                        <p>2019-12-10</p>
                                    </a>
                                </span>
                            </div>
                            <a href="#" class="post-img-a pst-img-blog">
                                <img src="./psd.jpg" alt="">
                                <!-- <p>Figure 1: Comparison of SiC and Si properties demonstrating a clear advantage for SiC.</p> -->
                            </a>
                            <div class="this-main-blog-cont">
                                <p>功率半导体器件（Power Semiconductor Device）又称电力电子器件（Power Electronic Device）。 1940年贝尔实验室在研究雷达探测整流器时，发现硅存在PN结效应，1958年美国通用电气（GE）公司研发出世界上第一个工业用普通晶闸管，标志着电力电子技术的诞生。从此功率半导体器件的研制及应用得到了飞速发展，并快速成长为电子制造业的核心器件之一，还独立成为电子电力学科。作为制造业大国，功率半导体器件在中国大陆的工业、消费、军事等领域都有着广泛应用，具有很高的战略地位。</p>
                                <br>
                                <p>Power Semiconductor Device is also called Power Electronic Device. In 1940, when Bell Labs researched the radar detection rectifier, it was found that silicon has a PN junction effect. In 1958, GE developed the world’s first general thyristor for industrial use, making the birth of power electronics technology. Since then, the development and application of power semiconductor devices has developed rapidly, and has quickly grown into one of the core devices of the electronics manufacturing industry. It has also became an electronic power independent discipline. As a major manufacturing country, power semiconductor devices are widely used in the industrial, consumer, and military fields in mainland China, and have a high strategic position.</p>
                                <br>
                                <p>功率半导体器件分类 Classification of power semiconductor devices 从发展历程看，功率半导体器件先后经历了：全盛于六七十年代的传统晶闸管、近二十年发展起来的功率MOSFET及其相关器件，以及由前两类器件发展起来的特大功率半导体器件，它们分别代表了不同时期功率半导体器件的技术发展进程。</p>
                                <br>
                                <p>From the development process, power semiconductor devices have experienced three stages, traditional thyristors flourishing in the sixties and seventies, Power MOSFET and related devices developed in the past two decades, and ultra-high-power semiconductor devices developed from the first two types of devices, and they represent the technological development of power semiconductor devices in different periods.</p>
                                <br>
                                <p>概括来说，功率半导体器件主要有功率模组、功率集成电路（即Power IC，简写为PIC，又称为功率IC）和分立器件三大类；其中，功率模组是将多个分立功率半导体器件进行模块化封装；功率IC对应将分立功率半导体器件与驱动/控制/保护/接口/监测等外围电路集成；而分立功率半导体器件则是功率模块与功率IC的关键。</p>
                                <br>
                                <p>In summary, power semiconductor devices are mainly divided into three categories: power modules, power integrated circuits (ie Power IC, PIC for short, also called power ICs) and discrete devices; among them, power modules are multiple discrete power semiconductors. The device is modularly packaged; power ICs correspond to the integration of discrete power semiconductor devices with peripheral circuits such as drive / control / protection / interface / monitoring; and discrete power semiconductor devices are the key to power modules and power ICs.</p>
                                <br>
                                <p>功率半导体器件又可根据对电路信号的可控程度分为全控型、半控型及不可控型；或按驱动电路信号性质分为电压驱动型、电流驱动型等划分类别。</p>
                                <br>
                                <p>Power semiconductor devices can be further divided into full-control, semi-control and uncontrollable types according to the controllability of circuit signals; or divided into voltage-driven and current-driven types according to the nature of the driving circuit signals.</p>
                                <br>
                                <p>常用到的功率半导体器件有Power Diode（功率二极管）、SCR（晶闸管）、GTO（门极可关断晶闸管）、GTR（大功率电力晶体管）、BJT（双极晶体管）、MOSFET（电力场效应晶体管）、IGBT（绝缘栅双极晶体管）、SIT（静电感应晶体管）、BSIT（双极型静电感应晶体管）、SITH（静电感应晶闸管）、MCT（MOS控制晶闸管）、IGCT（集成门极换流晶闸管）、IEGT（电子注入增强栅晶体管）、IPEM（集成电力电子模块）、PEBB（电力电子积木）等。</p>
                                <br>
                                <p>Commonly used power semiconductor devices are Power Diode, SCR (Thyristor), GTO (Gate Turn-off Thyristor), BJT (Bipolar Junction Transistor), MOSFET (Metal-oxidized semiconductor Field Effect Transistor) ), IGBT (Insulated Gate Bipolar Transistor), SIT (Static Induction Transistor), MCT (MOS Controlled Thyristor), IGCT (Integrated Gate-commutated Thyristor), IEGT (Injection Enhanced Gate Transistor), IPEM (Integrated Power Electronics Module), PEBB (Power Electronics Building Blocks), etc.</p>
                                <br>
                                <p>不同功率半导体器件，其承受电压、电流容量、阻抗能力、体积大小等特性也会不同，实际使用中，需要根据不同领域、不同需求来选用合适的器件。</p>
                                <br>
                                <p>Different power semiconductor devices have different characteristics such as blocking voltage, current carrying capability, impedance, and size. In the real application, it is necessary to select the appropriate devices according to different fields and different needs.</p>
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