<template>
    <div>
        <section class="page-section bg-dark" id="klienti">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase" style="color: #fff">klienti</h2>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-sm-6 mb-4" data-aos="fade-right" data-aos-duration="1300" data-aos-delay="200" data-aos-once="true">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1"
                            ><div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                                <img class="img-fluid" src="../../assets/img/portfolio/persona1.jpg" alt=""
                                /></a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading" style="color: #fff">Petra</div>
                                <div class="portfolio-caption-subheading text-muted">Fitness</div>
                                <a data-toggle="modal" href="#portfolioModal1"><button class="btn btn-danger">Detail</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4" data-aos="fade-up" data-aos-duration="1300" data-aos-delay="500" data-aos-once="true">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2"
                            ><div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                                <img class="img-fluid" src="../../assets/img/portfolio/persona2.jpg" alt=""
                                /></a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading" style="color: #fff">Jakub</div>
                                <div class="portfolio-caption-subheading text-muted">Kulturistika</div>
                                <a data-toggle="modal" href="#portfolioModal2"><button class="btn btn-danger">Detail</button></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4" data-aos="fade-left" data-aos-duration="1300" data-aos-delay="800" data-aos-once="true">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal3"
                            ><div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                                <img class="img-fluid" src="../../assets/img/portfolio/persona3.jpg" alt=""
                                /></a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading" style="color: #fff">David</div>
                                <div class="portfolio-caption-subheading text-muted">Atletika</div>
                                <a data-toggle="modal" href="#portfolioModal3"><button class="btn btn-danger">Detail</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center" data-aos="fade-up" data-aos-duration="1300" data-aos-delay="300" data-aos-once="true">
                    <br><br>
                    <button class="btn btn-primary-contact text-uppercase" style="font-size: 20px" @click="toggleReviews">recenze služeb <font-awesome-icon icon="comments" size="lg" /></button>
                </div>
                <br><br>
                <transition name="fade" mode="out-in">
                    <app-reviews v-if="showReviews"></app-reviews>
                </transition>
            </div>
        </section>
    </div>
</template>

<script>
    import Reviews from "./Reviews.vue";

    export default {
        data() {
            return {
                showReviews: false
            }
        },
        methods: {
          toggleReviews() {
              if (this.showReviews === false) {
                  return this.showReviews = true
              } else {
                  return this.showReviews = false
              }
          }
        },
        components: {
            appReviews: Reviews
        }
    }
</script>

<style scoped>
    .btn {
        border: none;
        border-radius: 30px;
        position: relative;
        padding: 12px 30px;
        margin: 10px 1px;
        font-size: 12px;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 0;
        background-color: #ff5f5f;
        will-change: box-shadow, transform;
        transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s ease;
    }
    .fade-enter, .fade-leave-to
        /* .component-fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>