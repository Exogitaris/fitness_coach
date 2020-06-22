<template>
    <div>
        <section class="page-section" id="contact">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Contact Us</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <transition name="fade" mode="out-in">
                    <div v-if="formMistake" class="alert alert-warning text-center" role="alert">
                        <div v-if="mailError">Zadejte e-mail ve správném formátu.</div>
                        <div v-else>Vyplňte prosím všechny kolonky.</div>
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
                        </div>
                        <div class="col-md-6">
                            <label>Zpráva pro mně</label>
                            <div class="form-group form-group-textarea mb-md-0">
                                <textarea v-model="userData.message" class="form-control" id="message" placeholder="Už se těším na naší spolupráci!">{{ userData.message }}</textarea>
                            </div>
                        </div>
                    </div>
                </form>
                <div class="text-center">
                    <div id="success"></div>
                    <a href="#contact" class="btn btn-primary btn-xl text-uppercase" @click="sendUserData">Jdu do toho!</a>
                </div>
            </div>
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
                mailError: false,
                userData: {
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                    selectedOption: 'Coaching'
                },
                reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
                options: ['Coaching', 'Online Coaching', 'Příprava na závody', 'Jiné']
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
                    this.mailError = false
                } else if (this.reg.test(this.userData.email)) {
                    const formData = {
                        email: this.userData.email,
                        name: this.userData.name,
                        phone: this.userData.phone,
                        message: this.userData.message,
                        selectedOption: this.userData.selectedOption
                    }
                    console.log(formData)
                    axios.post('/testovani/contactform/sendMail.php', formData)
                        .then(res => console.log(res))
                        .catch(error => console.log(error))
                    this.userData.name = ''
                    this.userData.email = ''
                    this.userData.phone = ''
                    this.userData.message = ''
                    this.$emit('form-posted');
                } else {
                    this.formMistake = true
                    this.mailError = true
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
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s ease;
    }
    .fade-enter, .fade-leave-to
        /* .component-fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>