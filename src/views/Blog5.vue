<template>
    <div id="comp-position">
       <div class="container mx-auto px-8 lg:px-48 container-serv about-posi-vomp">
        <div class="page-header">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="page-title">
                            <h2>ST MICROELECTRONICS BETS ON SIC</h2>
                            <p>A LOOK AT POWER DEVICE PACKAGING</p>
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
                                <h3 class="blog-entry-title"> Phil Garrou Blogs, from Packaging IFTLE Silico</h3>
                            </header>
                            <div class="entry-meta">
                                <span class="entry-date">
                                    <a href="">
                                        <p>April 15, 2019</p>
                                    </a>
                                </span>
                            </div>
                            <a href="#" class="post-img-a pst-img-blog">
                                <img src="./graph.jpg" alt="">
                                <p>Figure 1: Comparison of SiC and Si properties demonstrating a clear advantage for SiC.</p>
                            </a>
                            <div class="this-main-blog-cont">
                                <p>Silicon Carbide (SiC) is a wide bandgap (WBG) material that has advantages when compared to silicon (Figure 1).  For the same die size and thickness, WBG devices provide higher breakdown voltage, current, operating temperature, and switching speed; and lower switching loss over Si devices.</p>
                                <br>
                                <p>ST Microelectronics (ST Micro) started working with SiC in 1996, producing its first SiC diodes in 2004. In 2009 ST started to produce its first SiC MOSFETs and power Schottky diodes. ST Micro’s 150mm SiC wafer production started in 2017.</p>
                                <br>
                                <p>One of the main advantages of SiC devices is its capability to operate at high temperatures. When a power chip can operate at high temperature, the cooling cost can be reduced and the overall system size can be reduced as a result of a downsized cooling system.</p>
                                <br>
                                <h2>Infrastructure</h2>
                                <br>
                                <p>ST Micro just announced an agreement to acquire 55% of Swedish silicon carbide wafer manufacturer Norstel AB with an option to acquire the remaining 45% for a total purchase price of $137MM. Norstel, headquartered in Norrkoping, Sweden, was founded in 2005 as a spinoff of Linköping University. It develops and manufactures advanced 150mm silicon carbide bare and epitaxial wafers. After this acquisition, ST Micro will control the entire SiC device supply chain to address growing automotive and industrial applications. ST Micro claims to be the only semiconductor company with automotive-grade silicon carbide in mass production today.In Jan of 2019 Cree and ST Micro announced a multi-year SiC wafer supply agreement.</p>
                                <br>
                                <h2>Applications</h2>
                                <br>
                                <p>Cree has been steadily reducing its activity in the lighting market while focusing more on power and RF products under its Wolfspeed division. Within the power electronics market segment, Cree’s SiC products have seen significant use in electric vehicles. Although SiC-based components are more expensive, they are useful for electric vehicles (EV) because they allow EV manufacturers to maximize the range of their batteries, reduce cooling requirements, and minimize the footprint of the inverter and battery in the vehicle.</p>
                                <br>
                                <p>Power electronics is key in the conversion of all sorts of electrical power (ac-dc converters, ac-ac converters, dc-dc converters, dc-ac converters, etc). These are enabling technologies for new and growing applications such as power grids, trains, solar energy, wind energy, and EVs. SiC applications currently include solar inverters, industrial motor drives, home appliances, and power adapters.</p>
                                <br>
                                <a href="#" class="post-img-a pst-img-blog">
                                    <img src="./motor.jpg" alt="">
                                    <p>Figure 2: Model 3 main inverter – featuring 24 SiC MOSFET modules from St Microelectronics (Source: Munro Associates)</p>
                                </a>
                                <br>
                                <p>Tesla has been integrating SiC MOSFET based power modules from ST Micro in its Model 3 inverter. The modules are molded modules using copper ribbon-bonding for MOSFET connection. Packaging design was done by Boschman in the Netherlands</p>
                                <br>
                                <p>The Boschman group focuses on applications that benefit from their FAM technology (for double-sided cooling) and their Ag-sinter technology for increased performance and reliability. SiC Power modules are also commercially available from Wolfspeed, RHOM, GeneSiC, Infineon, and SEMIKRON. Commercially available packages from STMicroelectronics and CREE support device junction temperature up to 200°C. </p>
                                <br>
                                <h2>The packaging of SiC Devices</h2>
                                <br>
                                <p>Power device packaging has become a bottleneck for WBG device applications.State-of-the-art silicon packaging material systems can operate up to 175ºC which is incompatible with the limits of Si devices. WBG devices, which can operate at much higher temperatures (200-350ºC) and electric fields (10x than Si devices), requires updated packaging material systems to provide compatible high breakdown voltage strength, compatible thermal-mechanical characteristics for better coefficient of thermal expansion (CTE) matching with SiC material, and the capability of withstanding higher operating temperatures. These challenges mainly characterized to four parts – (1) substrate, (2) die attachment, (3) bonding and (4) encapsulation.</p>
                                <br>
                                <h2>Substrate</h2>
                                <br>
                                <p>A power packaging substrate consists of two metal layers and an insulation layer, usually a ceramic layer, in the middle. Substrates fall into four major categories: direct bonded copper (DBC), direct bonded aluminum (DBA), insulated metal baseplate (IMB) and thick film copper.</p>
                                <br>
                                <h2>Die-Attaching Materials</h2>
                                <br>
                                <p>Typical die-attach materials include (1) epoxy adhesives, (2) alternative resins, (3) eutectic die-attach solders, (4) soft soldering and (5) silver-glass materials. The two most commonly used die-attach materials today are solder alloys and conductive epoxy. Most silver filled epoxies fail at temperatures and thus are not useful for power electronics devices.</p>
                                <br>
                                <p>Beyond 200 ºC, (1) In the low-temperature range (200~300 ºC), the tin-lead (Pb-Sn) and lead-free tin-silver-copper (SAC) alloy ;(2) in the middle range 300~400 ºC, the tin-lead (Sn-Pb) solder systems have high liquidus points and they have been popular for high-temperature die-attach materials, however since the ban on Pb solders in 2006, their use in consumer electronics in the whole electronics industry are frowned upon.</p>
                                <br>
                                <p>Low-temp silver sintering is another option. This process is based on the spontaneous sinterability of silver particles in the nano and micro scale with applied pressure at temperatures of above 220 °C. Silver sintered interconnections show numerous advantages such as high melting point of 961°C, a far better thermal conductivity (250 W/mK) and an enhanced electrical conductivity. In addition, they show considerably enhanced reliability in thermal and power cycling tests.</p>
                                <br>
                                <p>Diffusion soldering, also called transient liquid phase bonding (TLPB) describes an interconnection technology based on diffusion. These bonding layers can be composed of Ag/In, Ag/Sn, Au/In, Au/Sn [95, Cu/Sn, and Ni/Sn Considering cost, the Cu-Sn appears to be a good candidate for high-temperature applications.</p>
                                <br>
                                <h2>Bonding Methods</h2>
                                <br>
                                <p>Copper wire bonding and ribbon bonding are standard technologies for connecting high current interconnections in power electronics assemblies.</p>
                                <br>
                                <h2>Encapsulation</h2>
                                <br>
                                <p>Encapsulation materials protect the power module components from external environmental damage, such as moisture, solvents, gases, etc.  In addition, encapsulation materials improve the voltage ratings of the packages, in high voltages modules (>1000 V) and prevent arcing between different electrodes. However, the soft conventional polymeric encapsulation materials mainly designed for Si conventional module are limited to low-temperature use (~ 200 °C). This is an area still looking for a low-cost general solution.</p>
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