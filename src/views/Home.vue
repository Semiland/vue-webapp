<template>
  <div>
    <div class="container mx-auto px-8 lg:px-48">
      <div class="pb-16">
        <p>{{ $t('message') }}</p>
        <div class="mb-4 text-2xl font-bold">This is a title</div>
        <p>Lorem ipsum dolor sit amet <a href="#" class="text-blue-600 hover:text-blue-800">consectetur</a> adipisicing elit. Aut dicta incidunt ea ut commodi quidem temporibus illo quia. Et itaque deleniti veniam tempore facere ipsum animi totam culpa minima vel voluptatem adipisci natus blanditiis similique sunt expedita, ex dicta doloremque repellat vitae temporibus. Quisquam quia, accusantium blanditiis architecto facilis saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad unde laborum ut suscipit iure aliquam sapiente doloribus exercitationem nam sint.</p>
      </div>
      <div class="pb-16">
        <div class="mb-4 text-2xl font-bold">This is a title</div>
        <p>Lorem ipsum dolor sit amet <a href="#" class="text-blue-600 hover:text-blue-800">consectetur</a> adipisicing elit. Aut dicta incidunt ea ut commodi quidem temporibus illo quia. Et itaque deleniti veniam tempore facere ipsum animi totam culpa minima vel voluptatem adipisci natus blanditiis similique sunt expedita, ex dicta doloremque repellat vitae temporibus. Quisquam quia, accusantium blanditiis architecto facilis saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad unde laborum ut suscipit iure aliquam sapiente doloribus exercitationem nam sint.</p>
      </div>
      <div class="pb-16">
        <div class="mb-4 text-2xl font-bold">This is a title</div>
        <p>Lorem ipsum dolor sit amet <a href="#" class="text-blue-600 hover:text-blue-800">consectetur</a> adipisicing elit. Aut dicta incidunt ea ut commodi quidem temporibus illo quia. Et itaque deleniti veniam tempore facere ipsum animi totam culpa minima vel voluptatem adipisci natus blanditiis similique sunt expedita, ex dicta doloremque repellat vitae temporibus. Quisquam quia, accusantium blanditiis architecto facilis saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad unde laborum ut suscipit iure aliquam sapiente doloribus exercitationem nam sint.</p>
      </div>

      <div class="mx-auto pt-8 pb-6 md:flex md:justify-between items-end border-b-2 border-gray-300">
        <div class="text-2xl mb-4 md:mb-0">Change Plan</div>
        <div>
          <a href="#" class="no-underline hover:underline">Cancel your plan</a>
        </div>
      </div>
      <div class="mx-auto py-8 md:flex md:justify-between md:flex-wrap">
        <selectable-plan
          plan-name="Hobby"
          plan-gigs="1"
          plan-dollars="5"
          v-model="activePlan"
        ></selectable-plan>
        <selectable-plan
          plan-name="Growth"
          plan-gigs="5"
          plan-dollars="10"
          v-model="activePlan"
        ></selectable-plan>
        
        
      </div>

      <div>
        <md-card>
    <md-card-actions>
      <div class="md-subhead">
        <span>Nested Swipers</span>
        <span>（</span>
        <span>Swipers 嵌套</span>
        <span>）</span>
      </div>
      <md-button class="md-icon-button"
                 target="_blank"
                 href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/18-nested.vue">
        <md-icon>code</md-icon>
      </md-button>
    </md-card-actions>
    <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOptionh">
        <swiper-slide>Horizontal Slide 1</swiper-slide>
        <swiper-slide>
          <swiper :options="swiperOptionv">
            <swiper-slide>Vertical Slide 1</swiper-slide>
            <swiper-slide>Vertical Slide 2</swiper-slide>
            <swiper-slide>Vertical Slide 3</swiper-slide>
            <swiper-slide>Vertical Slide 4</swiper-slide>
            <swiper-slide>Vertical Slide 5</swiper-slide>
            <div class="swiper-pagination swiper-pagination-v" slot="pagination"></div>
          </swiper>
        </swiper-slide>
        <swiper-slide>Horizontal Slide 1</swiper-slide>
        <swiper-slide>Horizontal Slide 2</swiper-slide>
        <swiper-slide>Horizontal Slide 3</swiper-slide>
        <swiper-slide>Horizontal Slide 4</swiper-slide>
        <div class="swiper-pagination swiper-pagination-h" slot="pagination"></div>
      </swiper>
    </md-card-media>
  </md-card>
      </div>
    </div>

  <div>
    
  </div>

    <div class="container mx-auto mt-10 pb-12">
      <pricing-table></pricing-table>
      <div class="mt-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsa, veniam similique in obcaecati quam sunt laboriosam? Provident sunt a suscipit iure, corporis nemo doloremque nihil earum iste dolor. Sapiente voluptates, eveniet corrupti iste et obcaecati! Aspernatur quia adipisci, facere enim nam architecto perferendis iusto similique natus, fuga dolorem. Ut earum corporis, illo officiis fuga iusto neque debitis rerum obcaecati velit sed qui quam? Aut maiores fugit, voluptatibus et numquam perferendis tempore totam, voluptatem magni similique aspernatur? Ut, molestias. Sunt sint nihil cum reprehenderit harum? Exercitationem distinctio minus eum quidem reprehenderit recusandae architecto, inventore eligendi perspiciatis asperiores tempora velit nam animi error illo porro nemo dolorum dolore ab, veritatis saepe hic eius, ea modi! Distinctio soluta, excepturi accusantium dicta magnam quo saepe tenetur neque deleniti officiis vero ad iure non necessitatibus recusandae consequatur reiciendis quas numquam. Tempora reiciendis minima quia ducimus dolores repudiandae nesciunt exercitationem tempore beatae eos amet obcaecati ut sequi facere quibusdam ipsum porro, excepturi assumenda deserunt delectus magni quasi, officiis corrupti vel. Labore saepe voluptates tempora quaerat aperiam, in consectetur dolorum? Quaerat aliquam mollitia odio quasi ducimus, libero explicabo perferendis illum ipsam. Reiciendis, eaque voluptatem alias nemo rerum aut ipsum dolorem aliquid pariatur atque minus, dolorum quis inventore quos deserunt dolor corporis sunt iste quo. Neque nulla dolorum quaerat provident praesentium doloremque natus facere optio, maxime architecto minima quia excepturi molestiae non odio tempore temporibus magni? Quam mollitia rem omnis temporibus soluta. Mollitia perferendis, dolorum reiciendis soluta quae id, fugiat impedit culpa error voluptatibus tenetur tempora. Iure totam accusamus obcaecati excepturi nemo id dolor ratione. Porro commodi quo unde amet ab error facilis, suscipit reiciendis consectetur, sequi impedit! Obcaecati, provident ad eum asperiores beatae cum dolores adipisci sint eveniet inventore quam dolorum totam fuga dicta dolore consequuntur enim eos quisquam ab laborum corporis doloribus dolorem? Porro ducimus totam molestias quibusdam dolorum, optio consequatur quaerat magni culpa dolore nihil vitae dolor neque nobis molestiae. Ducimus, fugit. Repellat sed nulla voluptatem necessitatibus consequatur beatae placeat similique, recusandae rem, sequi tempore temporibus ab enim eos obcaecati inventore culpa accusamus omnis, excepturi consectetur ea! Vero ex alias quaerat inventore obcaecati doloribus magni qui temporibus porro nesciunt, iure animi provident odio! Repellendus libero saepe natus, odio quidem cupiditate est magni odit! Tenetur possimus animi iste odio quibusdam ab enim quae fuga iure. Eius voluptatibus repudiandae tenetur, dolorum deserunt blanditiis veritatis reiciendis, temporibus harum obcaecati optio vero distinctio sapiente omnis maiores accusamus beatae.</div>
    </div>
  </div>

</template>



<script>
import SelectablePlan from '@/components/SelectablePlan.vue'
import PricingTable from '@/components/PricingTable.vue'

export default {
  components: {
    SelectablePlan,
    PricingTable,
  },
  data() {
    return {
      activePlan: '',
    }
  }
}

</script>
