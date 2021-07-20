<template>
    <div>
      <section class="page-section bg-light" id="cenik">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase" style="color: #1b1b1b">Ceník služeb</h2>
          </div>
          <div id="bs-pricing-six" class="bs-pricing-four roomy-50 fix">
            <div class="container">
              <VueSlickCarousel v-bind="settings" style="color: black">
                <div class="odsazeni" data-aos="fade-up" data-aos-duration="1300" data-aos-delay="400" data-aos-once="true">
                  <div class="bs bs-pricing" @mouseenter="firstEnable" @mouseleave="firstDisable" :class="{'bg-danger': this.firstToggled}">
                    <div class="cotent">
                      <h3 class="category">Osobní trénink</h3>
                      <h1 class="bs-caption">500<small style="font-size: 20px">Kč</small></h1>
                      <ul>
                        <li><b>10</b> tréninků 4.500Kč</li>
                        <li><b>20</b> tréninků 8.500Kč</li>
                        <li>Konzultace za cenu tréninku</li>
                      </ul>
                      <a href="#kontakt" class="btn" :class="[this.firstToggled ? 'btn-white' : 'btn-danger']" @click="firstOption">Objednat</a>
                    </div>
                  </div>
                </div>
                <div class="odsazeni" data-aos="fade-left" data-aos-duration="1300" data-aos-delay="600" data-aos-once="true">
                  <div class="bs bs-pricing" @mouseenter="thirdEnable" @mouseleave="thirdDisable" :class="{'bg-danger': this.thirdToggled}">
                    <div class="cotent">
                      <h3 class="category">Příprava na sportovní výkon</h3>
                      <h4 class="bs-caption">Individuální<small style="font-size: 20px"> Cena</small></h4>
                      <ul>
                        <li>Kulturistika / Fitness</li>
                        <li>Silový trojboj / Strongman</li>
                        <li>Atletika</li>
                        <li>Vytrvalostní sporty</li>
                      </ul>
                      <a href="#kontakt" class="btn" :class="[this.thirdToggled ? 'btn-white' : 'btn-danger']" @click="thirdOption">Objednat</a>
                    </div>
                  </div>
                </div>
                <div class="odsazeni" data-aos="fade-left" data-aos-duration="1300" data-aos-delay="600" data-aos-once="true">
                  <div class="bs bs-pricing" @mouseenter="secondEnable" @mouseleave="secondDisable" :class="{'bg-danger': this.secondToggled}">
                    <div class="cotent">
                      <h3 class="category">Online coaching</h3>
                      <h1 class="bs-caption">2600<small style="font-size: 20px">Kč/měs</small></h1>
                      <ul>
                        <li><b>3 měsíce</b> 7.500Kč</li>
                        <li><b>6 měsíců</b> 15.000Kč</li>
                        <li><b>12 měsíců</b> 28.000Kč</li>
                        <li><b>+ Osobní trénink</b> <s>500Kč</s> / <b>300Kč</b></li>
                      </ul>
                      <a href="#kontakt" class="btn" :class="[this.secondToggled ? 'btn-white' : 'btn-danger']" @click="secondOption">Objednat</a>
                    </div>
                  </div>
                </div>
                <div class="odsazeni"  data-aos="fade-left" data-aos-duration="1300" data-aos-delay="600" data-aos-once="true">
                  <div class="bs bs-pricing" @mouseenter="fourthEnable" @mouseleave="fourthDisable" :class="{'bg-danger': this.fourthToggled}">
                    <div class="cotent">
                      <h3 class="category">Kondiční skupinové tréninky</h3>
                      <h1 class="bs-caption">3000<small style="font-size: 20px">Kč/měs</small></h1>
                      <ul>
                        <li><b>Neomezeně</b> od PO do PA</li>
                      </ul>
                      <a href="#kontakt" class="btn" :class="[this.fourthToggled ? 'btn-white' : 'btn-danger']" @click="fourthOption">Objednat</a>
                    </div>
                  </div>
                </div>
                <div class="odsazeni" data-aos="fade-right" data-aos-duration="1300" data-aos-delay="200" data-aos-once="true">
                  <div class="bs bs-pricing" @mouseenter="fifthEnable" @mouseleave="fifthDisable" :class="{'bg-danger': this.fifthToggled}">
                    <div class="cotent">
                      <h3 class="category">Osobní trénink pro dva</h3>
                      <h1 class="bs-caption">300<small style="font-size: 20px">Kč/os</small></h1>
                      <ul>
                        <li><b>1</b> trénink 300Kč na osobu</li>
                        <li><b>10</b> tréninků 3000Kč na osobu</li>
                      </ul>
                      <a href="#kontakt" class="btn" :class="[this.fifthToggled ? 'btn-white' : 'btn-danger']" @click="fifthOption">Objednat</a>
                    </div>
                  </div>
                </div>
              </VueSlickCarousel>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    import { eventBus } from '../main';

    export default {
        data() {
            return {
                settings: {
                  centerMode: true,
                  centerPadding: "20px",
                  focusOnSelect: true,
                  infinite: true,
                  slidesToShow: 3,
                  speed: 500,
                  arrows: true,
                  dots: true,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                      }
                    },
                    {
                      breakpoint: 991,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                      }
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                      }
                    },
                    {
                      breakpoint: 350,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                      }
                    }
                  ]
                },
                firstToggled: false,
                secondToggled: false,
                thirdToggled: false,
                fourthToggled: false,
                fifthToggled: false,
                options: {
                    first: 'Osobní trénink',
                    second: 'Online Coaching',
                    third: 'Příprava na sportovní výkon',
                    fourth: 'Kondiční skupinové tréninky',
                    fifth: 'Osobní trénink pro dva'
                }
            }
        },
        methods: {
            firstEnable() {
                this.firstToggled = true;
            },
            firstDisable() {
                this.firstToggled = false;
            },
            secondEnable() {
                this.secondToggled = true;
            },
            secondDisable() {
                this.secondToggled = false;
            },
            thirdEnable() {
                this.thirdToggled = true;
            },
            thirdDisable() {
                this.thirdToggled = false;
            },
            fourthEnable() {
                this.fourthToggled = true;
            },
            fourthDisable() {
                this.fourthToggled = false;
            },
            fifthEnable() {
                this.fifthToggled = true;
            },
            fifthDisable() {
                this.fifthToggled = false;
            },
            firstOption() {
                eventBus.$emit('firstOptionSelected', this.options.first)
            },
            secondOption() {
                eventBus.$emit('secondOptionSelected', this.options.second)
            },
            thirdOption() {
                eventBus.$emit('thirdOptionSelected', this.options.third)
            },
            fourthOption() {
              eventBus.$emit('fourthOptionSelected', this.options.fourth)
            },
            fifthOption() {
              eventBus.$emit('fifthOptionSelected', this.options.fifth)
            },
        },
      components: {
          VueSlickCarousel
      }
    }
</script>

<style>

    .odsazeni {
      padding-right: 0.75rem;
      padding-left: 0.75rem;
    }
    .jumbotron h1 {
        margin-bottom: 40px;
    }

    .roomy-50{
        padding:50px 0;
    }

    .bs-pricing-four {
        cursor: pointer;
        font-size: 16px;
        font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    }
    .bs-pricing-four .btn,
    .bs-pricing-four .navbar > li > a.btn {
        border: none;
        border-radius: 3px;
        position: relative;
        padding: 12px 30px;
        margin: 10px 1px;
        font-size: 12px;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 0;
        will-change: box-shadow, transform;
        transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .bs-pricing-four .btn {
        border-radius: 30px;
    }

    /* btn-danger */
    .bs-pricing-four .btn.btn-danger {
        color: #FFFFFF;
        background-color: #ff5f5f;
        border-color: #ff5f5f;
        box-shadow: 0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12);
    }

    .bs-pricing-four .btn.btn-danger:focus,
    .bs-pricing-four .btn.btn-danger:active,
    .bs-pricing-four .btn.btn-danger:hover {
        box-shadow: 0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2);
    }

    /* btn-success */

    /* btn-white */
    .bs-pricing-four .btn.btn-white {
        color: #3C4857;
        background-color: #fff;
        border-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12);
    }

    .bs-pricing-four .btn.btn-white:focus,
    .bs-pricing-four .btn.btn-white:active,
    .bs-pricing-four .btn.btn-white:hover {
        box-shadow:  0 14px 26px -12px rgba(255, 255, 255, 0.42), 0 4px 23px 0 rgba(255, 255, 255, 0.12), 0 8px 10px -5px rgba(255, 255, 255, 0.2)
    }

    .bs-pricing-four .bs {
        display: inline-block;
        position: relative;
        width: 100%;
        margin-bottom: 30px;
        border-radius: 6px;
        color: #444;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    }

    .bg-danger{background-color: #f44336}

    .bs-pricing-four .bg-danger,
    .bs-pricing-four .bg-danger h1 small
    {
        color:#fff;
    }

    .bs-pricing-four .bs-pricing {
        text-align: center;
        position: relative;
    }

    .bs-pricing-four .bs-pricing .bs-caption {
        margin-top: 30px;
    }

    .bs-pricing-four .bs-pricing .cotent {
        padding: 15px;
        margin-bottom: 0;
        z-index: 2;
        position: relative;
    }

    .bs-pricing-four .bs-pricing ul {
        list-style: none;
        padding: 0;
        margin: 10px auto;
    }

    .bs-pricing-four .bs-pricing ul li {
        text-align: center;
        padding: 12px 0;
    }
    .bs-pricing-four .bs-pricing ul:not(.nav-pills) li{
        border-bottom: 0.5px solid rgba(27, 27, 27, 0.7);
    }

    @media (max-width: 350px) {
      .bs-caption {
       font-size: 30px;
      }
    }

    button.slick-prev:before, button.slick-next:before {
      color: #1f1f1f !important;
      font-size: 30px !important;
    }

    :root {
        --animate-delay: 0.2s;
    }
</style>