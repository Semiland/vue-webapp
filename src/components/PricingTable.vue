<template>
  <div>
    <table class="hidden lg:block w-full text-base ">
      <thead>
        <tr id="r-d-center-slider">
          <!-- <th class="w-1/5 bg-gray-100 text-left font-normal align-top px-4 py-6 sticky top-0">
            <div class="font-semibold">
              <span class="text-gray-500 mr-3" :class="{ 'text-gray-700': !isMonthly }">Annually</span>
              <toggle-button
                v-model="isMonthly"
                switch-color="#4199E1" 
                :color="{checked: '#CBD5E0', unchecked: '#CBD5E0'}"
              />
              <span class="text-gray-500 ml-3" :class="{ 'text-gray-700': isMonthly }">Monthly</span>
            </div>
            <div class="text-blue-600 text-sm mt-4">Save up to 30% by paying annually.</div>
          </th> -->
          <th class="w-1/5 bg-gray-200 text-center border border-gray-400 font-normal px-4 py-6 sticky top-0">
            <div class="uppercase tracking-wide font-bold text-gray-700">Job Title</div>
            <div class="mt-3">
              <!-- <span class="text-lg">$</span>
              <span class="font-bold text-4xl ml-1">
                {{ !isMonthly ? plans.hobby.price.perYear : plans.hobby.price.perMonth }}
              </span>
              <span class="ml-2 text-sm">/ month</span> -->
            </div>
            
          </th>
          <th class="w-1/5 bg-gray-200 text-center border border-gray-400 font-normal px-4 py-6 sticky top-0">
            <div class="uppercase tracking-wide font-bold text-gray-700">Business</div>
            <div class="mt-3">
              <!-- <span class="text-lg">$</span>
              <span class="font-bold text-4xl ml-1">
                {{ !isMonthly ? plans.hobby.price.perYear : plans.hobby.price.perMonth }}
              </span> -->
              <span class="ml-2 text-sm">Responsibility</span>
            </div>
          </th>
          <th class="w-1/5 bg-gray-200 text-center border border-gray-400 font-normal px-4 py-6 sticky top-0">
            <div class="uppercase tracking-wide font-bold text-gray-700">Location</div>
            <div class="mt-3">              
              <span class="ml-2 text-sm">Country</span>
            </div>
          </th>
          <th class="w-1/5 bg-gray-200 text-center border border-gray-400 font-normal px-4 py-6 sticky top-0">
            <div class="uppercase tracking-wide font-bold text-gray-700">Site</div>
            <div class="mt-3">
              <span class="ml-2 text-sm">City</span>
            </div>            
          </th>
          <th class="w-1/5 bg-gray-200 text-center border border-gray-400 font-normal px-4 py-6 sticky top-0">
            <div class="uppercase tracking-wide font-bold text-gray-700">Type</div>
            <div class="mt-3">              
              <span class="ml-2 text-sm">Regular/ Full Time</span>
            </div>
            <!-- <div class="mt-3">
              <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white inline-block rounded w-4/5 px-4 py-3">Sign Up</a>
            </div> -->
          </th>

        </tr>
      </thead>
      <tbody>
        <tr class="bg-gray-200 border border-gray-400">
          <td colspan="5" class="uppercase tracking-wide font-semibold px-4 py-6">R&D Center</td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-100">
          <!-- <td class="border border-gray-400 text-left px-4 py-6"><a href="">Research Scientist</a></td> -->
          <td id="engineering-and-mannufacturing-slider" class="border border-gray-400 text-left px-4 py-6"><router-link :to="`/${$i18n.locale}/220658PDE`" class="text-copy-primary hover:text-gray-600">{{ $t('nav.careerresearch')}}</router-link></td>
          <td class="border border-gray-400 text-center px-4 py-6">TECHNICAL R & D GDD</td>
          <td class="border border-gray-400 text-center px-4 py-6">China</td>
          <td class="border border-gray-400 text-center px-4 py-6">Nanjing</td>
          <td class="border border-gray-400 text-center px-4 py-6">Full Time</td>
        </tr>
        <tr class="bg-gray-200 border border-gray-400">
          <td colspan="5" class="uppercase tracking-wide font-semibold px-4 py-6">Engineering & Manufacturing</td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="border border-gray-400 text-left px-4 py-6"><router-link :to="`/${$i18n.locale}/220758PDE`" class="text-copy-primary hover:text-gray-600">Product Design Engineer</router-link></td>
          <td class="border border-gray-400 text-center px-4 py-6">Design Power Modules</td>
          <td class="border border-gray-400 text-center px-4 py-6">China</td>
          <td class="border border-gray-400 text-center px-4 py-6">Nanjing</td>
          <td class="border border-gray-400 text-center px-4 py-6">Full Time</td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="border border-gray-400 text-left px-4 py-6"><router-link :to="`/${$i18n.locale}/220858PDE`" class="text-copy-primary hover:text-gray-600">Process Development Engineer</router-link></td>
          <td class="border border-gray-400 text-center px-4 py-6">Organizing process</td>
          <td class="border border-gray-400 text-center px-4 py-6">China</td>
          <td class="border border-gray-400 text-center px-4 py-6">Nanjing</td>
          <td class="border border-gray-400 text-center px-4 py-6">Regular</td>
        </tr>
        <tr  id="sales-and-marketing-slider" class="odd:bg-white even:bg-gray-100">
          <td class="border border-gray-400 text-left px-4 py-6"><router-link :to="`/${$i18n.locale}/220958PDE`" class="text-copy-primary hover:text-gray-600">Process Sustaining Engineer</router-link></td>
          <td class="border border-gray-400 text-center px-4 py-6">Engineering</td>
          <td class="border border-gray-400 text-center px-4 py-6">China</td>
          <td class="border border-gray-400 text-center px-4 py-6">YanZhong</td>
          <td class="border border-gray-400 text-center px-4 py-6">Full Time</td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="border border-gray-400 text-left px-4 py-6"><router-link :to="`/${$i18n.locale}/221058PDE`" class="text-copy-primary hover:text-gray-600">Equipment Engineer</router-link></td>
          <td class="border border-gray-400 text-center px-4 py-6">Equipment and Tech</td>
          <td class="border border-gray-400 text-center px-4 py-6">China</td>
          <td class="border border-gray-400 text-center px-4 py-6">Nanjing</td>
          <td class="border border-gray-400 text-center px-4 py-6">Full Time</td>
        </tr>
        <tr class="bg-gray-200 border border-gray-400">
          <td colspan="5" class="uppercase tracking-wide font-semibold px-4 py-6">Sales & Marketing</td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="border border-gray-400 text-left px-4 py-6"><router-link :to="`/${$i18n.locale}/222058PDE`" class="text-copy-primary hover:text-gray-600">Product Marketing</router-link></td>
          <td class="border border-gray-400 text-center px-4 py-6">Product Saling</td>
          <td class="border border-gray-400 text-center px-4 py-6">Overseas</td>
          <td class="border border-gray-400 text-center px-4 py-6">-</td>
          <td class="border border-gray-400 text-center px-4 py-6">Full Time/Regular</td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="border border-gray-400 text-left px-4 py-6"><router-link :to="`/${$i18n.locale}/223058PDE`" class="text-copy-primary hover:text-gray-600">Sales analyst and support</router-link></td>
          <td class="border border-gray-400 text-center px-4 py-6">Supporting production</td>
          <td class="border border-gray-400 text-center px-4 py-6">China</td>
          <td class="border border-gray-400 text-center px-4 py-6">YanZhong</td>
          <td class="border border-gray-400 text-center px-4 py-6">Full Time</td>
        </tr>
        <tr id="company-services-slider" class="odd:bg-white even:bg-gray-100">
          <td class="border border-gray-400 text-left px-4 py-6"><router-link :to="`/${$i18n.locale}/224058PDE`" class="text-copy-primary hover:text-gray-600">Product Sales</router-link></td>
          <td class="border border-gray-400 text-center px-4 py-6">Salesman</td>
          <td class="border border-gray-400 text-center px-4 py-6">Overseas</td>
          <td class="border border-gray-400 text-center px-4 py-6">-</td>
          <td class="border border-gray-400 text-center px-4 py-6">Full Time</td>
        </tr>
        <tr class="bg-gray-200 border border-gray-400">
          <td colspan="5" class="uppercase tracking-wide font-semibold px-4 py-6">Company Services</td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="border border-gray-400 text-left px-4 py-6"><router-link :to="`/${$i18n.locale}/225058PDE`" class="text-copy-primary hover:text-gray-600">Executive Assistant to the CEO/CTO</router-link></td>
          <td class="border border-gray-400 text-center px-4 py-6">Executive Assistant</td>
          <td class="border border-gray-400 text-center px-4 py-6">China</td>
          <td class="border border-gray-400 text-center px-4 py-6">Nanjing</td>
          <td class="border border-gray-400 text-center px-4 py-6">Full Time</td>
        </tr>
        <!-- With Dots -->
        <!-- <tr class="odd:bg-white even:bg-gray-100">
          <td class="border border-gray-400 text-left px-4 py-6">Same Day Delivery</td>
          <td class="border border-gray-400 text-center px-4 py-6"></td>
          <td class="border border-gray-400 text-center px-4 py-6"></td>
          <td class="border border-gray-400 text-center px-4 py-6">
            <svg class="w-6 h-6 inline-block text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" /></svg>
          </td>
          <td class="border border-gray-400 text-center px-4 py-6">
            <svg class="w-6 h-6 inline-block text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" /></svg>
          </td>
        </tr>
        <tr class="odd:bg-white even:bg-gray-100">
          <td class="border border-gray-400 text-left px-4 py-6">Contributors</td>
          <td class="border border-gray-400 text-center px-4 py-6"></td>
          <td class="border border-gray-400 text-center px-4 py-6"></td>
          <td class="border border-gray-400 text-center px-4 py-6"></td>
          <td class="border border-gray-400 text-center px-4 py-6">
            <svg class="w-6 h-6 inline-block text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" /></svg>
          </td>
        </tr> -->
      </tbody>
    </table>

    <div class="mobile-table mx-4 md:mx-32 mt-16 lg:hidden">
      <div class="text-center border border-gray-400 text-base">
        <div class="bg-gray-300 px-4 py-4">
          <div class="uppercase tracking-wide font-bold text-gray-700">Hobby</div>
            <div class="mt-3">
              <span class="text-lg">$</span>
              <span class="font-bold text-4xl ml-1">
                {{ !isMonthly ? plans.hobby.price.perYear : plans.hobby.price.perMonth }}
              </span>
              <span class="ml-2 text-sm">/ month</span>
            </div>
        </div>
        <div class="odd:bg-gray-200 even:bg-white flex px-3 py-4">
          <div class="text-left w-3/5">Shipping Discount</div>
          <div class="w-2/5">3</div>
        </div>
        <div class="odd:bg-gray-200 even:bg-white flex px-3 py-4">
          <div class="text-left w-3/5">Shipping Discount</div>
          <div class="w-2/5">3</div>
        </div>
        <div class="odd:bg-gray-200 even:bg-white flex px-3 py-4">
          <div class="text-left w-3/5">Shipping Discount</div>
          <div class="w-2/5">3</div>
        </div>
        <div class="odd:bg-gray-200 even:bg-white flex px-3 py-4">
          <div class="text-left w-3/5">Shipping Discount</div>
          <div class="w-2/5">3</div>
        </div>
        <div class="odd:bg-gray-200 even:bg-white px-3 py-4">
          <ul class="leading-loose">
            <li class="flex items-center">
              <svg fill="currentColor" width="18" height="18" viewBox="0 0 18 18"><path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4l-7.89 7.89z" /></svg>
              <span class="ml-2">Free Custom Domain</span>
            </li>
            <li class="flex items-center">
              <svg fill="currentColor" width="18" height="18" viewBox="0 0 18 18"><path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4l-7.89 7.89z" /></svg>
              <span class="ml-2">SSL Security</span>
            </li>
            <li class="flex items-center">
              <svg fill="currentColor" width="18" height="18" viewBox="0 0 18 18"><path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4l-7.89 7.89z" /></svg>
              <span class="ml-2">Unlimited Bandwidth</span>
            </li>
            <li class="flex items-center">
              <svg fill="currentColor" width="18" height="18" viewBox="0 0 18 18"><path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4l-7.89 7.89z" /></svg>
              <span class="ml-2">SEO Features</span>
            </li>
          </ul>
        </div>
        <div class="odd:bg-gray-200 even:bg-white px-3 py-4">
          <div class="">
            <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white inline-block rounded w-64 px-4 py-3">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMonthly: false,
      plans: {
        hobby: {
          price: {
            perYear: 15,
            perMonth: 20,
          }
        },
        growth: {
          price: {
            perYear: 25,
            perMonth: 30,
          }
        },
        business: {
          price: {
            perYear: 50,
            perMonth: 60,
          }
        },
        enterprise: {
          price: {
            perYear: 90,
            perMonth: 120,
          }
        },
      }
    }
  }
}
</script>
