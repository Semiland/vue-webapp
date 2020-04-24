<template>
  <div class="normal-case tracking-normal">
    <a href="/#login" @click.prevent="show" class="text-copy-primary hover:text-gray-600">Apply</a>
    <modal name="modal-login" @opened="opened" :adaptive="true" :height="500" :width="600">
      <div id="applying-position-stepper" class="px-10 py-8">
        <h2 class="mb-4 uppercase tracking-wide text-xl">Applying Job Position Form</h2>
        
        <div class="stepper">
          <span class="step primary">1</span>
          <div class="v-stepper-label">Step 1</div>
        </div>
        <div class="v-stepper-content">
          <div class="v-stepper-wriper">
            <h1>Check company position current job requirements.</h1>
            <h2>Make Sure it is relevant to your degree diploma</h2>
          </div>
        </div>
        <div class="stepper">
          <span class="step primary">2</span>
          <div class="v-stepper-label">Step 2</div>
        </div>
        <div class="v-stepper-content">
          <div class="v-stepper-wriper">
            <h1>Please send us a mail to: <sometag>career@semiland.com</sometag> with your latest resume attached to it.</h1>
          </div>
        </div>
        <div class="stepper">
          <span class="step success">&#8730;</span>
          <div class="v-stepper-label">Wait for our responce.</div>
        </div>
        
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  methods: {
    show() {
      this.$modal.show('modal-login')
    },
    showRegister() {
      this.$modal.show('modal-register')
      this.$modal.hide('modal-login')
    },
    opened() {
      this.$refs.email.focus()
    },
    hide() {
      this.$modal.hide('modal-login')
    }
  }
}
</script>

