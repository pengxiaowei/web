<template>
  <div class="home">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../assets/images/ee17509e4f6459e9f311599420d2bdb0.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/ee17509e4f6459e9f311599420d2bdb0.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/ee17509e4f6459e9f311599420d2bdb0.jpeg" alt />
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-2" slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of nav icons -->
    <div class="card bg-white mt-3 p-3">
      <div class="card-header d-flex ai-center">
        <i class="iconfont icon-menu"></i>
        <div class="fs-xl flex-1 px-2">新闻资讯</div>
        <i class="iconfont icon-menu1"></i>
      </div>
      <div class="card-body pt-3">
        <div class="nav jc-between">
          <div class="nav-item active">
            <div class="nav-link">热门</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">新闻</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">新闻</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">新闻</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">新闻</div>
          </div>
        </div>
        <div class="pt-3">
          <swiper>
            <swiper-slide v-for="m in 5" :key="m">
              <div class="py-2" v-for="n in 5" :key="n">
                <span>[新闻]</span>
                <span>|</span>
                <span>王者 X Meco丨你收到一封来自峡谷的甜Me情书</span>

                <span>06/02</span>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>

    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
    <p>aaaa</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      },
      swiperSlides: [1, 2, 3, 4, 5]
    };
  }
};
</script>

<style lang="scss">
@import "../assets/scss/variables";

.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($colors, "white");
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}

.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>

