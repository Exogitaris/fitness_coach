<template>
    <div>
        <section class="page-section" id="kontakt">
            <div class="container" v-if="!spinner">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase" data-aos="fade-right" data-aos-duration="1300" data-aos-delay="200" data-aos-once="true">Jsi připraven/a na změnu?</h2>
                    <h3 class="section-subheading text-muted" data-aos="fade-left" data-aos-duration="1300" data-aos-delay="400" data-aos-once="true">Tak vyplň tenhle formulář, nebo rovnou zavolej na +420 725 883 314.</h3>
                </div>
                <transition name="fade" mode="out-in">
                    <div v-if="formMistake" class="alert alert-danger text-center" role="alert">
                        <div>{{ errorMessage }}</div>
                    </div>
                </transition>
                <form id="contactForm">
                    <div class="row align-items-stretch mb-5">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Jméno*</label>
                                <input v-model="userData.name" class="form-control" id="name" type="text" placeholder="Arnold Schwarzenegger" required="required" />
                            </div>
                            <div class="form-group">
                                <label>Emailová adresa*</label>
                                <input v-model="userData.email" class="form-control" id="email" type="email" placeholder="arnold.schwarz@gmail.com" required="required" />
                            </div>
                            <div class="form-group">
                                <label>Telefon*</label>
                                <input @keypress="onlyNumber" maxlength="14" v-model="userData.phone" class="form-control" id="phone" type="tel" placeholder="777 999 888" required="required" />
                            </div>
                            <div class="form-group">
                                <label>Vybraná služba</label>
                                <select class="form-control" v-model="userData.selectedOption">
                                    <option v-for="option in options"> {{ option }} </option>
                                </select>
                            </div>
                            <br>
                            <div class="form-check">
                                <input type="checkbox" v-model="dataConfirm" class="form-check-input">
                                <label class="form-check-label">Souhlasím se zpracováním osobních údajů</label>
                            </div>
                            <br><br>
                        </div>
                        <div class="col-md-6">
                            <label>Zpráva pro mně</label>
                            <div class="form-group form-group-textarea mb-md-0">
                                <textarea v-model="userData.message" class="form-control" id="message" placeholder="Už se těším na naší spolupráci!">{{ userData.message }}</textarea>
                            </div>
                        </div>
                    </div>
                </form>
                <div class="text-center" data-aos="fade-up" data-aos-duration="1300" data-aos-delay="200" data-aos-once="true">
                    <div id="success"></div>
                    <a href="#kontakt" class="btn btn-primary-contact btn-xl text-uppercase" @click="sendUserData">Jdu do toho!</a>
                </div>
            </div>
          <transition name="component-fade" mode="out-in">
            <div class="container" v-if="spinner">
              <div class="text-center">
                <h1 class="section-heading text-uppercase">odesílání formuláře</h1>
                <div id="loading"></div>
              </div>
            </div>
          </transition>
        </section>
    </div>
</template>

<script>
    import { eventBus } from '../main';
    import axios from 'axios';

    export default {
        data() {
            return {
                formMistake: false,
                dataConfirm: true,
                errorMessage: '',
                userData: {
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                    selectedOption: 'Osobní trénink'
                },
                reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
                options: ['Osobní trénink', 'Online Coaching', 'Příprava na sportovní výkon', 'Jiné'],
              error: false,
              spinner: false
            }
        },
        created() {
            eventBus.$on('firstOptionSelected', (data) => {
                this.userData.selectedOption = data
                this.userData.message = 'Ahoj Michale! Mám zájem o tvou službu ' + this.userData.selectedOption + '!';
            });
            eventBus.$on('secondOptionSelected', (data) => {
                this.userData.selectedOption = data
                this.userData.message = 'Ahoj Michale! Mám zájem o tvou službu ' + this.userData.selectedOption+ '!';
            });
            eventBus.$on('thirdOptionSelected', (data) => {
                this.userData.selectedOption = data
                this.userData.message = 'Ahoj Michale! Mám zájem o tvou službu ' + this.userData.selectedOption + '!';
            });
        },
        methods: {
            sendUserData() {
                if (this.userData.name === '' || this.userData.email === '' || this.userData.phone === '') {
                    this.formMistake = true
                    this.errorMessage = 'Vyplňte prosím všechny kolonky.'
                } else if (this.dataConfirm === false) {
                    this.formMistake = true
                    this.errorMessage = 'Před odesláním formuláře musíte souhlasit se zpracováním osobních údajů.'
                } else if (this.userData.phone.length < 9) {
                    this.formMistake = true
                    this.errorMessage = 'Telefonní číslo musí obsahovat nejméně 9 číslic.'
                }
                else if (this.reg.test(this.userData.email)) {
                    const formData = {
                        email: this.userData.email,
                        name: this.userData.name,
                        phone: this.userData.phone,
                        message: this.userData.message,
                        selectedOption: this.userData.selectedOption
                    }
                    axios.post('/contactform/sendMail.php', formData)
                        .then(response => {
                          if (response.data.includes('false')) {
                            this.error = true
                            this.$emit('form-posted', this.error)
                          }
                          else {
                            this.error = false
                            this.$emit('form-posted', this.error)
                          }
                        })
                        .catch(error => {
                          if (error.response) {
                            this.error = true
                            this.$emit('form-posted', this.error)
                          }
                        })
                    this.userData.name = ''
                    this.userData.email = ''
                    this.userData.phone = ''
                    this.userData.message = ''
                    this.spinner = true
                } else {
                    this.formMistake = true
                    this.errorMessage = 'Zadejte e-mail ve správném formátu.'
                }
            },
            onlyNumber ($event) {
                let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
                if ((keyCode < 48 || keyCode > 57) && keyCode !== 46 && keyCode !== 43) { // 46 is dot
                    $event.preventDefault();
                }
            }

        }
    }
</script>

<style>
      #loading {
        display: inline-block;
        width: 50px;
        height: 50px;
        border: 3px solid rgba(255,255,255,.3);
        border-radius: 50%;
        border-top-color: #fff;
        animation: spin 1s ease-in-out infinite;
        -webkit-animation: spin 1s ease-in-out infinite;
      }

      @keyframes spin {
        to { -webkit-transform: rotate(360deg); }
      }
      @-webkit-keyframes spin {
        to { -webkit-transform: rotate(360deg); }
      }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s ease;
    }
    .fade-enter, .fade-leave-to
        /* .component-fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>