<template>
  <div id="contact" class="contact-area over-hidden mb-70 mt-70">
    <div id="hero-btn" class="contact-wrapper position-relative">
      <div class="container">
        <div class="row align-items-start">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="title text-center">
              <span class="theme-color text-uppercase d-block mb-6"
                >Contact Me</span
              >
              <h2>Let’s Start A New Project</h2>
            </div>
            <!-- /title -->
          </div>
          <!-- /col -->
        </div>
        <!-- /row -->
        <div class="row">
          <div class="col-md-12 col-sm-12 col-12">
            <div class="contact-wrapper mt-70">
              <ul class="contact-info-content">
                <li
                  class="contact-location s-contact mb-20 transition-3 d-lg-flex align-items-center"
                >
                  <div
                    class="contact-icon d-inline-block text-center theme-bg mr-30"
                  >
                    <span class="text-white d-inline-block">
                      <i class="fas fa-map-marker-alt"></i>
                    </span>
                  </div>
                  <!-- /contact-icon -->
                  <div class="contact-text d-inline-block">
                    <h4 class="mb-2">Location</h4>
                    <p class="text-color mb-0">Quindío, Colombia</p>
                  </div>
                </li>
                <!-- /contact-location -->
                <li
                  class="contact-email s-contact mb-20 transition-3 d-lg-flex align-items-center"
                >
                  <div
                    class="contact-icon d-inline-block text-center theme-bg mr-30"
                  >
                    <span class="text-white d-inline-block">
                      <i class="fas fa-phone-alt"></i>
                    </span>
                  </div>
                  <!-- /contact-icon -->
                  <div class="contact-text">
                    <h4 class="mb-2">Phone</h4>
                    <p class="mb-0">
                      <a class="text-color primary-hover d-block" href="#"
                        >+57 321 833 5089</a
                      >
                    </p>
                  </div>
                </li>
                <!-- /contact-email -->
                <li
                  class="contact-phone s-contact mb-20 transition-3 d-lg-flex align-items-center"
                >
                  <div
                    class="contact-icon d-inline-block text-center theme-bg mr-30"
                  >
                    <span class="text-white d-inline-block">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </div>
                  <!-- /contact-icon -->
                  <div class="contact-text d-inline-block">
                    <h4 class="mb-2">Email</h4>
                    <p class="mb-0">
                      <a class="text-color primary-hover d-block" href="mailto:nikollaihernandez@gmail.com"
                        @click="trackContactClick('email')"
                        >nikollaihernandez@gmail.com</a
                      >
                    </p>
                  </div>
                </li>
                <!-- /contact-phone -->
              </ul>
              <!-- /contact-info-content -->
            </div>
            <!-- /contact-wrapper -->
          </div>
          <!-- /col -->
        </div>
        <!-- /row -->
      </div>
      <!-- /container -->
    </div>
    <!-- /contact-wrapper -->
  </div>
</template>

<script>
import { trackEvent } from "../utils/analytics.js";

export default {
  data() {
    return {
      formMessage: '',
    };
  },
  methods: {
    trackContactClick(method) {
      trackEvent("contact_click", { method });
    },
    async sendContactForm(e) {
      const form = e.target;
      const data = {
        inputName: form.inputName.value,
        inputEmail: form.inputEmail.value,
        inputPhone: form.inputPhone.value,
        inputSubject: form.inputSubject.value,
        inputMessage: form.inputMessage.value,
      };
      try {
        const res = await fetch('https://function-bun-production-3770.up.railway.app/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (res.ok) {
          this.formMessage = 'Mensaje enviado correctamente.';
          form.reset();
        } else {
          this.formMessage = 'Hubo un error al enviar el mensaje.';
        }
      } catch (err) {
        this.formMessage = 'Error de conexión.';
      }
    },
  },
};
</script>
