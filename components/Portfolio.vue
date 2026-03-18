<template>
  <div id="work" class="portfolio-area over-hidden pb-70 pt-70">
    <div class="portfolio-wrapper position-relative mt--5">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="title text-center">
              <span class="theme-color text-uppercase d-block mb-6"
                >Portfolio</span
              >
              <h2>My Recent Works</h2>
            </div>
            <!-- /title -->
          </div>
          <!-- /col -->
        </div>
        <!-- /row -->

        <div class="row portfolio mt-80">
          <div class="col-12" v-for="item in items">
            <div
              class="row single-portfolio position-relative theme-border-top align-items-center"
            >
              <div class="col-xl-2 col-lg-2 col-md-7 col-sm- col-">
                <div class="port-category">
                  <span class="meta-text-color text-uppercase">{{
                    item.category
                  }}</span>
                </div>
              </div>
              <!-- /col -->
              <div class="col-xl-5 col-lg-5 col-md-6 col-sm- col- pl-lg-0">
                <h3>{{ item.title }}</h3>
              </div>
              <!-- /col -->
              <div
                class="col-xl-5 col-lg-5 col-md-6 col-sm- col- d-flex justify-content-end align-items-center open-portfolio-modal"
              >
                <div
                  class="port-content text-center transition5 z-index11"
                  data-toggle="modal"
                  data-target="#exampleModal-p1"
                  @click="activeItem(item)"
                >
                  <span class="d-inline-block"
                    ><i class="far fa-plus"></i>
                  </span>
                </div>
                <!-- /port-content -->
              </div>
              <!-- /col -->
            </div>
            <!-- /single-prot -->
          </div>
          <!-- /col -->
        </div>
        <!-- /row -->
      </div>
      <!-- /container -->
    </div>
    <!-- /portfolio-wrapper -->
  </div>
  <PortfolioModal
    v-if="toggle"
    :item="item"
    :toggle="toggle"
    @close="close()"
  />
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Mobile Banking App",
          category: "Mobile development",
          client: "Diners",
          type: "Fintech",
          tasks: "Mobile & Web Development",
          description: "Developed and maintained a mobile banking application focused on account management, secure transactions, and real-time financial operations. Built scalable and user-friendly interfaces using React Native, integrating secure APIs for handling sensitive financial data, and managing complex state across critical user flows such as transfers, payments, and authentication. Implemented wallet integrations with Apple Pay and Google Pay to enable seamless and secure payment experiences. Collaborated in optimizing performance, improving user experience in high-impact features, and ensuring reliability in transactional processes through robust validation and error handling."
        },
        {
          id: 2,
          title: "Health Management Platform",
          category: "Mobile Development",
          client: "CareTree",
          type: "Healthcare",
          tasks: "Mobile Development",
          description: "Contributed to the development of a healthcare management platform focused on care coordination, patient data centralization, and real-time communication between caregivers, families, and medical professionals. Built scalable front-end solutions to handle complex healthcare workflows such as patient profiles, medication tracking, scheduling, and activity feeds. Integrated secure APIs and leveraged Apple Health to retrieve and process vital health data, enabling real-time insights and improved monitoring. Implemented role-based access, optimized performance, and ensured reliable handling of sensitive health information across the platform."
        },
        {
          id: 3,
          title: "Operational Control Platform",
          category: "Web Development",
          client: "Nabbi",
          type: "Logistics",
          tasks: "Full Stack Development",
          description: "Contributed to the development of an internal operational platform designed to manage product requirements, quotations, and approval workflows across multiple business units. Built scalable front-end solutions to handle complex business logic, including request lifecycle management, role-based approvals, and process tracking. Implemented features for managing quotations, operational requests, and multi-step approval flows, ensuring data consistency and traceability. Collaborated in optimizing performance for data-intensive views and improving overall efficiency by centralizing key operational processes into a single platform."
        },
        {
          id: 4,
          title: "Smart Maintenance AI",
          category: "Web development",
          client: "",
          type: "Property Management",
          tasks: "Full Stack Development",
          description: "Contributed to the development of a property management platform leveraging AI-driven email automation to handle tenant maintenance requests. Built front-end solutions to manage the full lifecycle of requests, from intake to resolution, including status tracking and user communication. Implemented intelligent workflows where incoming emails were automatically processed, enriched through iterative responses, and categorized using AI to identify the issue type and assign the most suitable contractor. Integrated human-in-the-loop validation to ensure accuracy before final approval, improving efficiency, scalability, and response times in maintenance operations."
        },
      ],
      toggle: false,
      item: null,
    };
  },
  methods: {
    activeItem(item) {
      this.toggle = true;
      this.item = item;
      document.querySelector("body").classList.add("modal-open");
    },
    close() {
      this.toggle = false;
      document.querySelector("body").classList.remove("modal-open");
    },
  },
};
</script>
