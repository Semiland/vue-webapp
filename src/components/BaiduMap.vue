<template>
  <!-- <baidu-map class="map" center="北京"></baidu-map> -->
  <div class="map-style-baiudu">
    <!-- <baidu-map class="map" :center="center" :zoom="zoom" @ready="handler">
        <bm-marker :position="{lng: 118.876531, lat: 32.110900}" @click="infoWindowOpen" animation="BMAP_ANIMATION_BOUNCE">
        <bm-label content="RD&Center" :labelStyle="{color: 'blue', fontSize : '26px'}" :offset="{width: -1, height: -55}"/>
        <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
        </bm-marker>
        <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_RIGHT"></bm-navigation> 
        <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">Tiananmen</bm-info-window>
    </baidu-map> -->
    <baidu-map class="map" :center="{lng: 118.876531, lat: 32.110900}" :zoom="18" :scroll-wheel-zoom="true">
    <bm-marker :position="{lng: 118.876531, lat: 32.110900}" @click="infoWindowOpen" animation="BMAP_ANIMATION_BOUNCE">
      <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen" class="inf-window-company">
          <div class="inf">
              <div class="inf-left">
                  <img src="./semilandQR.jpg" alt="">
              </div>

              <div class="inf-right">
                  <h1>Semiland Co., Ltd.</h1>
                  <div class="if-cont">
                    Address: Xuanyuanyi building, Jubao Park,
                    <br>
                     Xuanwu Road, Nanjing, China 210046
                    <br>
                    Mob: +86-189-1341-5568
                    <br>
                    Tel: +86-025-5806 2800, +86-0511-88580166
                    <br>
                    Fax: +86-025-5806 2800, +86-0511-88362448
                    <br>
                    Email:  info@semiland.com
                  </div>
              </div>
          </div>
      </bm-info-window>
      <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
      <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_RIGHT"></bm-navigation>
    </bm-marker>
  </baidu-map>
  </div>
</template>


<script>

export default {
  components: {
    // BaiduMap,
    // Marker
  },

  data() {
      return {
          center: {lng: 0, lat: 0},
          zoom: 9,
          show: true
      }
  },

  methods: {
      handler (){
          this.center.lng = 118.876491
          this.center.lat = 32.111000
          this.zoom = 17
      },
      infoWindowClose (){
          this.show = false
      },
      infoWindowOpen (){
          this.show = true
      }
  }
}
</script>