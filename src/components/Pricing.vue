<template>
    <div>
        <section class="page-section bg-light" id="team">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase" style="color: #1b1b1b">Ceník služeb</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div id="bs-pricing-six" class="bs-pricing-four roomy-50 fix">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="bs bs-pricing" @mouseenter="firstEnable" @mouseleave="firstDisable" :class="{'bg-danger': this.firstToggled}">
                                    <div class="cotent">
                                        <h3 class="category">Coaching</h3>
                                        <h1 class="bs-caption">500<small style="font-size: 20px">Kč</small></h1>
                                        <ul>
                                            <li><b>Nejlepší</b> Služba</li>
                                            <li><b>Nejlepší</b> Služba</li>
                                            <li><b>Nejlepší</b> Služba</li>
                                            <li><b>Nejlepší</b> Služba</li>
                                            <li>Nejlepší služby</li>
                                            <li>Lorem ipsum je best</li>
                                        </ul>
                                        <a href="#contact" class="btn" :class="[this.firstToggled ? 'btn-white' : 'btn-danger']" @click="firstOption">Objednat</a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="bs bs-pricing" @mouseenter="secondEnable" @mouseleave="secondDisable" :class="{'bg-danger': this.secondToggled}">
                                    <div class="cotent">
                                        <h3 class="category">Online coaching</h3>
                                        <h1 class="bs-caption">3500<small style="font-size: 20px">Kč</small></h1>
                                        <ul>
                                            <li><b>Nejlepší</b> Služba</li>
                                            <li><b>Nejlepší</b> Služba</li>
                                            <li><b>Nejlepší</b> Služba</li>
                                            <li><b>Nejlepší</b> Služba</li>
                                            <li>Nejlepší služby</li>
                                            <li>Lorem ipsum je best</li>
                                        </ul>
                                        <a href="#contact" class="btn" :class="[this.secondToggled ? 'btn-white' : 'btn-danger']" @click="secondOption">Objednat</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="bs bs-pricing" @mouseenter="thirdEnable" @mouseleave="thirdDisable" :class="{'bg-danger': this.thirdToggled}">
                                    <div class="cotent">
                                        <h3 class="category">Příprava na závody</h3>
                                        <h1 class="bs-caption">8000<small style="font-size: 20px">Kč</small></h1>
                                        <ul>
                                            <li><b>Nejlepší</b> Služba</li>
                                            <li><b>Nejlepší</b> Služba</li>
                                            <li><b>Nejlepší</b> Služba</li>
                                            <li><b>Nejlepší</b> Služba</li>
                                            <li>Nejlepší služby</li>
                                            <li>Lorem ipsum je best</li>
                                        </ul>
                                        <a href="#contact" class="btn" :class="[this.thirdToggled ? 'btn-white' : 'btn-danger']" @click="thirdOption">Objednat</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import { eventBus } from '../main';

    export default {
        data() {
            return {
                firstToggled: false,
                secondToggled: false,
                thirdToggled: false,
                options: {
                    first: 'Coaching',
                    second: 'Online Coaching',
                    third: 'Příprava na závody'
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
            firstOption() {
                eventBus.$emit('firstOptionSelected', this.options.first)
            },
            secondOption() {
                eventBus.$emit('secondOptionSelected', this.options.second)
            },
            thirdOption() {
                eventBus.$emit('thirdOptionSelected', this.options.third)
            },
        }
    }
</script>

<style scoped>
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
</style>