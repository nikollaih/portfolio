<template>
  <div class="modal-backdrop fade show" @click="closeModal()"></div>
  <div
    class="modal fade show"
    id="exampleModal-p2"
    tabindex="-2"
    role="dialog"
    aria-labelledby="exampleModal-p1"
    style="padding-right: 15px; display: block; overflow-y: scroll"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="close-icon float-right pt-10 pr-10">
          <button
            type="button"
            class="close d-inline-block"
            data-dismiss="modal"
            aria-label="Close"
            @click="closeModal()"
          >
            <span aria-hidden="true"><i class="fa fa-times"></i></span>
          </button>
        </div>
        <div class="modal-content border-0">
          <div class="modal-body pl-50 pr-50 pt-5 pb-20">
            <div class="row">
              <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                <div class="content-wrapper">
                  <h2 class="modal-title">{{ item.title }}</h2>
                  <p>{{item.description}}</p>
                </div>
              </div>
              <!-- /col -->
              <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                <div
                  class="meta-wrapper form-bg mt-60 pt-40 pb-45 pr-20 pl-45 mt-40 mb-10"
                >
                  <ul class="item-meta">
                    <li>
                      Project Type :
                      <span class="pl-2 openS-font-family">{{item.type}}</span>
                    </li>
                    <li>
                      Category :
                      <span class="pl-2 openS-font-family">{{item.category}}</span>
                    </li>
                    <li>
                      Client :
                      <span class="pl-2 openS-font-family">{{item.client}}</span>
                    </li>
                    <li>
                      Task :
                      <span class="pl-2 openS-font-family"
                        >{{item.tasks}}</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <!-- /col -->
            </div>
            <!-- /row -->
          </div>
          <!-- /modal-body -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    toggle: {
      type: Boolean,
      default: false,
    },
    item: {
      type: Object,
      default: {},
    },
    imgGrayScale: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
