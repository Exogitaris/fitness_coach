<template>
    <div>
        <section class="page-section" id="contact">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Contact Us</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <form id="contactForm">
                    <div class="row align-items-stretch mb-5">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Jméno</label>
                                <input v-model="user.name" class="form-control" id="name" type="text" placeholder="Your Name *" required="required" />
                            </div>
                            <div class="form-group">
                                <label>Emailová adresa</label>
                                <input v-model="user.email" class="form-control" id="email" type="email" placeholder="Your Email *" required="required" />
                            </div>
                            <div class="form-group">
                                <label>Telefon</label>
                                <input v-model="user.phone" class="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" />
                            </div>
                            <div class="form-group">
                                <label>Vybraná služba</label>
                                <select class="form-control" v-model="selectedOption">
                                    <option v-for="option in options"> {{ option }} </option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label>Zpráva pro mně</label>
                            <div class="form-group form-group-textarea mb-md-0">
                                <textarea v-model="user.message" class="form-control" id="message" placeholder="Your Message *">{{ user.message }}</textarea>
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <div id="success"></div>
                        <button class="btn btn-primary btn-xl text-uppercase">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
    </div>
</template>

<script>
    import { eventBus } from '../main';

    export default {
        data() {
            return {
                selectedOption: 'Coaching',
                user: {
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                },
                options: ['Coaching', 'Online Coaching', 'Příprava na závody']
            }
        },
        created() {
            eventBus.$on('firstOptionSelected', (data) => {
                this.selectedOption = data
                this.user.message = 'Ahoj Michale! Mám zájem o tvou službu ' + this.selectedOption + '!';
            });
            eventBus.$on('secondOptionSelected', (data) => {
                this.selectedOption = data
                this.user.message = 'Ahoj Michale! Mám zájem o tvou službu ' + this.selectedOption + '!';
            });
            eventBus.$on('thirdOptionSelected', (data) => {
                this.selectedOption = data
                this.user.message = 'Ahoj Michale! Mám zájem o tvou službu ' + this.selectedOption + '!';
            });
        }
    }
</script>